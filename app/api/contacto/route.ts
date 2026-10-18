
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

const EMAIL_GENERAL = "info@fecca.com.ar";
const EMAIL_PRENSA = "prensa@fecca.com.ar";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { tipo, nombre, email, asunto, mensaje } = body;

    // Validar los campos obligatorios
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

    // Validar longitudes y formato del correo
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

    // Solo permitimos los dos tipos de contacto
    if (tipo !== "general" && tipo !== "prensa") {
      return NextResponse.json(
        { error: "Tipo de consulta inválido." },
        { status: 400 }
      );
    }

    // Credenciales guardadas en variables de entorno
    const usuarioSMTP = process.env.SMTP_USER;
    const passwordSMTP = process.env.SMTP_PASSWORD;

    if (!usuarioSMTP || !passwordSMTP) {
      console.error("Faltan las credenciales SMTP.");

      return NextResponse.json(
        {
          error: "El servicio de contacto no está disponible.",
        },
        { status: 503 }
      );
    }

    // Elegir destinatario según el formulario
    const destinatario =
      tipo === "prensa" ? EMAIL_PRENSA : EMAIL_GENERAL;

    // Configuración SMTP de Hostinger
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

    // Enviar correo
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
