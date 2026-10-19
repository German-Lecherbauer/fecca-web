
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

const EMAIL_GENERAL = "info@fecca.com.ar";
const EMAIL_PRENSA = "prensa@fecca.com.ar";

type TurnstileResponse = {
  success: boolean;
  "error-codes"?: string[];
};

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { tipo, nombre, email, asunto, mensaje } = body;

    // Aceptamos ambos nombres por compatibilidad con el formulario.
    const turnstileToken =
      body.turnstileToken ?? body.turnstile_token;

    // 1. Validar los campos obligatorios
    if (
      typeof nombre !== "string" ||
      typeof email !== "string" ||
      typeof asunto !== "string" ||
      typeof mensaje !== "string" ||
      !nombre.trim() ||
      !email.trim() ||
      !asunto.trim() ||
      !mensaje.trim()
    ) {
      return NextResponse.json(
        { error: "Completá todos los campos." },
        { status: 400 }
      );
    }

    // 2. Validar longitudes y formato del correo
    if (
      nombre.length > 120 ||
      email.length > 254 ||
      asunto.length > 150 ||
      mensaje.length > 5000 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {
      return NextResponse.json(
        { error: "Revisá los datos ingresados." },
        { status: 400 }
      );
    }

    // 3. Validar el tipo de consulta
    if (tipo !== "general" && tipo !== "prensa") {
      return NextResponse.json(
        { error: "Tipo de consulta inválido." },
        { status: 400 }
      );
    }

    // 4. Obtener credenciales del servidor
    const usuarioSMTP = process.env.SMTP_USER;
    const passwordSMTP = process.env.SMTP_PASSWORD;
    const turnstileSecret = process.env.TURNSTILE_SECRET_KEY;

    if (!usuarioSMTP || !passwordSMTP || !turnstileSecret) {
      console.error("Falta configuración SMTP o Turnstile.");

      return NextResponse.json(
        { error: "El servicio de contacto no está disponible." },
        { status: 503 }
      );
    }

    // 5. Exigir el token de Cloudflare Turnstile
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

    // 6. Validar el token directamente con Cloudflare
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
        throw new Error("Cloudflare no respondió correctamente.");
      }

      resultadoTurnstile =
        (await respuestaCloudflare.json()) as TurnstileResponse;
    } catch (error) {
      console.error("Error al verificar Turnstile:", error);

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

    // 7. Elegir destinatario según el formulario
    const destinatario =
      tipo === "prensa" ? EMAIL_PRENSA : EMAIL_GENERAL;

    // 8. Configurar SMTP de Hostinger
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

    // 9. Enviar correo únicamente después de validar Turnstile
    await transporter.sendMail({
      from: {
        name: "Formulario web FECCA",
        address: usuarioSMTP,
      },
      to: destinatario,
      replyTo: {
        name: nombre.trim(),
        address: email.trim(),
      },
      subject: `[FECCA - ${
        tipo === "prensa" ? "Prensa" : "Contacto"
      }] ${asunto.trim().replace(/[\r\n]/g, " ")}`,
      text: [
        `Tipo de consulta: ${tipo}`,
        `Nombre: ${nombre.trim()}`,
        `Email: ${email.trim()}`,
        `Asunto: ${asunto.trim()}`,
        "",
        "Mensaje:",
        mensaje.trim(),
      ].join("\n"),
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
