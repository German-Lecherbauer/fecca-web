
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

const EMAIL_GENERAL = "info@fecca.com.ar";
const EMAIL_PRENSA = "prensa@fecca.com.ar";

type TipoConsulta =
  | "general"
  | "prensa"
  | "alianzas"
  | "buscar-club";

type TurnstileResponse = {
  success: boolean;
  "error-codes"?: string[];
};

const configuracionTipos: Record<
  TipoConsulta,
  { destinatario: string; etiqueta: string }
> = {
  general: {
    destinatario: EMAIL_GENERAL,
    etiqueta: "Contacto",
  },
  prensa: {
    destinatario: EMAIL_PRENSA,
    etiqueta: "Prensa",
  },
  alianzas: {
    destinatario: EMAIL_PRENSA,
    etiqueta: "Alianzas",
  },
  "buscar-club": {
    destinatario: EMAIL_GENERAL,
    etiqueta: "Buscar club",
  },
};

function esTipoConsulta(valor: unknown): valor is TipoConsulta {
  return (
    typeof valor === "string" &&
    Object.prototype.hasOwnProperty.call(
      configuracionTipos,
      valor
    )
  );
}

function campo(
  body: Record<string, unknown>,
  nombre: string,
  maximo: number,
  obligatorio = true
): string | null {
  const valor = body[nombre];

  if (valor === undefined || valor === null) {
    return obligatorio ? null : "";
  }

  if (typeof valor !== "string") return null;

  const limpio = valor.trim();

  if (limpio.length > maximo) return null;
  if (obligatorio && !limpio) return null;

  return limpio;
}

export async function POST(request: Request) {
  try {
    let body: Record<string, unknown>;

    try {
      const recibido: unknown = await request.json();

      if (
        !recibido ||
        typeof recibido !== "object" ||
        Array.isArray(recibido)
      ) {
        return NextResponse.json(
          { error: "Datos de formulario inválidos." },
          { status: 400 }
        );
      }

      body = recibido as Record<string, unknown>;
    } catch {
      return NextResponse.json(
        { error: "No se pudo interpretar el formulario." },
        { status: 400 }
      );
    }

    // 1. Validar tipo de consulta
    const tipo = body.tipo;

    if (!esTipoConsulta(tipo)) {
      return NextResponse.json(
        { error: "Tipo de consulta inválido." },
        { status: 400 }
      );
    }

    // 2. Validar datos generales
    const nombre = campo(body, "nombre", 120);
    const email = campo(body, "email", 254);

    const asunto =
      tipo === "general" || tipo === "prensa"
        ? campo(body, "asunto", 150)
        : tipo === "alianzas"
          ? "Consulta de alianza comercial"
          : "Solicitud para encontrar un club";

    const mensaje =
      tipo === "general" || tipo === "prensa"
        ? campo(body, "mensaje", 5000)
        : tipo === "alianzas"
          ? campo(body, "mensaje", 3000)
          : "";

    if (
      !nombre ||
      !email ||
      !asunto ||
      mensaje === null ||
      ((tipo === "general" ||
        tipo === "prensa" ||
        tipo === "alianzas") &&
        !mensaje)
    ) {
      return NextResponse.json(
        { error: "Completá todos los campos obligatorios." },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Ingresá un correo electrónico válido." },
        { status: 400 }
      );
    }

    // 3. Datos adicionales
    const detalles: string[] = [];

    // ALIANZAS
    if (tipo === "alianzas") {
      const marca = campo(body, "marca", 120);
      const telefono = campo(body, "telefono", 40, false);

      if (!marca || telefono === null) {
        return NextResponse.json(
          { error: "Revisá los datos de tu marca." },
          { status: 400 }
        );
      }

      detalles.push(
        `Marca: ${marca}`,
        `Teléfono: ${telefono || "No informado"}`
      );
    }

    // BUSCAR CLUB
    if (tipo === "buscar-club") {
      const telefono = campo(body, "telefono", 40);
      const provincia = campo(body, "provincia", 120);
      const localidad = campo(body, "localidad", 120);

      if (!telefono || !provincia || !localidad) {
        return NextResponse.json(
          {
            error: "Completá los datos de contacto y ubicación.",
          },
          { status: 400 }
        );
      }

      detalles.push(
        `Teléfono: ${telefono}`,
        `Provincia: ${provincia}`,
        `Localidad: ${localidad}`
      );
    }

    // 4. Configuración del servidor
    const usuarioSMTP = process.env.SMTP_USER;
    const passwordSMTP = process.env.SMTP_PASSWORD;
    const turnstileSecret = process.env.TURNSTILE_SECRET_KEY;

    if (!usuarioSMTP || !passwordSMTP || !turnstileSecret) {
      console.error("Falta configuración SMTP o Turnstile.");

      return NextResponse.json(
        {
          error: "El servicio de contacto no está disponible.",
        },
        { status: 503 }
      );
    }

    // 5. Verificación de seguridad
    const turnstileToken =
      body.turnstileToken ?? body.turnstile_token;

    if (
      typeof turnstileToken !== "string" ||
      !turnstileToken.trim()
    ) {
      return NextResponse.json(
        {
          error: "Completá la verificación de seguridad.",
        },
        { status: 400 }
      );
    }

    const datosVerificacion = new URLSearchParams({
      secret: turnstileSecret,
      response: turnstileToken,
    });

    const ipCliente = request.headers
      .get("x-forwarded-for")
      ?.split(",")[0]
      ?.trim();

    if (ipCliente) {
      datosVerificacion.set("remoteip", ipCliente);
    }

    let resultadoTurnstile: TurnstileResponse;

    try {
      const respuestaCloudflare = await fetch(
        "https://challenges.cloudflare.com/turnstile/v0/siteverify",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: datosVerificacion.toString(),
          cache: "no-store",
          signal: AbortSignal.timeout(10000),
        }
      );

      if (!respuestaCloudflare.ok) {
        throw new Error(
          "Cloudflare no respondió correctamente."
        );
      }

      resultadoTurnstile =
        (await respuestaCloudflare.json()) as TurnstileResponse;
    } catch (error) {
      console.error(
        "Error al verificar Turnstile:",
        error
      );

      return NextResponse.json(
        {
          error:
            "No pudimos verificar la seguridad. Intentá nuevamente.",
        },
        { status: 503 }
      );
    }

    if (!resultadoTurnstile.success) {
      console.warn(
        "Verificación Turnstile rechazada:",
        resultadoTurnstile["error-codes"] ?? []
      );

      return NextResponse.json(
        {
          error:
            "La verificación de seguridad expiró o no es válida. Intentá nuevamente.",
        },
        { status: 403 }
      );
    }

    // 6. Configuración del destinatario
    const configuracion = configuracionTipos[tipo];

    // 7. SMTP Hostinger
    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com",
      port: 465,
      secure: true,
      auth: {
        user: usuarioSMTP,
        pass: passwordSMTP,
      },
      connectionTimeout: 10000,
      greetingTimeout: 10000,
      socketTimeout: 15000,
    });

    // 8. Contenido del correo
    const contenido = [
      `Tipo de consulta: ${configuracion.etiqueta}`,
      `Nombre: ${nombre}`,
      `Email: ${email}`,
      `Asunto: ${asunto}`,
      ...detalles,
      "",
      ...(mensaje ? ["Mensaje:", mensaje] : []),
    ].join("\n");

    // 9. Enviar correo
    await transporter.sendMail({
      from: {
        name: "Formulario web FECCA",
        address: usuarioSMTP,
      },
      to: configuracion.destinatario,
      replyTo: {
        name: nombre,
        address: email,
      },
      subject: `[FECCA - ${configuracion.etiqueta}] ${asunto.replace(
        /[\r\n]/g,
        " "
      )}`,
      text: contenido,
    });

    return NextResponse.json({
      ok: true,
      mensaje: "Mensaje enviado correctamente.",
    });
  } catch (error) {
    console.error("Error al enviar correo FECCA:", error);

    return NextResponse.json(
      {
        error: "No pudimos enviar el mensaje. Intentá nuevamente.",
      },
      { status: 500 }
    );
  }
}
