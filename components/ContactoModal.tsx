
"use client";

import { useEffect, useRef, useState } from "react";
import type { FormEvent } from "react";
import {
  Turnstile,
  type TurnstileInstance,
} from "@marsidev/react-turnstile";

type ContactoModalProps = {
  abierto: boolean;
  onClose: () => void;
  tipo?: "general" | "prensa";
};

export default function ContactoModal({
  abierto,
  onClose,
  tipo = "general",
}: ContactoModalProps) {
  const [enviando, setEnviando] = useState(false);
  const [estado, setEstado] = useState<"exito" | "error" | null>(null);
  const [mensajeEstado, setMensajeEstado] = useState("");
  const [tokenTurnstile, setTokenTurnstile] = useState<string | null>(null);

  const turnstileRef = useRef<TurnstileInstance>(null);

  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  const esPrensa = tipo === "prensa";

  const destinatario = esPrensa
    ? "prensa@fecca.com.ar"
    : "info@fecca.com.ar";

  const etiqueta = esPrensa
    ? "Comunicación y Prensa"
    : "Contacto general";

  const titulo = esPrensa
    ? "Contactá a Prensa."
    : "Escribinos.";

  const descripcion = esPrensa
    ? "Completá el formulario para realizar consultas de prensa, entrevistas o solicitudes de información."
    : "Completá el formulario y contanos en qué podemos ayudarte.";

  useEffect(() => {
    if (!abierto) return;

    const overflowAnterior = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const cerrarConEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && !enviando) {
        onClose();
      }
    };

    window.addEventListener("keydown", cerrarConEscape);

    return () => {
      document.body.style.overflow = overflowAnterior;
      window.removeEventListener("keydown", cerrarConEscape);
    };
  }, [abierto, onClose, enviando]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (enviando) return;

    if (!tokenTurnstile) {
      setEstado("error");
      setMensajeEstado(
        "Esperá a que termine la verificación de seguridad e intentá nuevamente."
      );
      return;
    }

    const formulario = event.currentTarget;
    const formData = new FormData(formulario);

    setEnviando(true);
    setEstado(null);
    setMensajeEstado("");

    try {
      const respuesta = await fetch("/api/contacto", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          tipo,
          nombre: formData.get("nombre"),
          email: formData.get("email"),
          asunto: formData.get("asunto"),
          mensaje: formData.get("mensaje"),
          turnstileToken: tokenTurnstile,
        }),
      });

      const resultado = await respuesta.json();

      if (!respuesta.ok) {
        throw new Error(
          resultado.error || "No se pudo enviar el mensaje."
        );
      }

      setEstado("exito");
      setMensajeEstado(
        "¡Tu mensaje fue enviado correctamente! Nos pondremos en contacto a la brevedad."
      );

      formulario.reset();
    } catch (error) {
      setEstado("error");
      setMensajeEstado(
        error instanceof Error
          ? error.message
          : "Ocurrió un error. Intentá nuevamente."
      );
    } finally {
      setEnviando(false);

      // Los tokens de Turnstile son de un solo uso.
      // Generamos uno nuevo para el próximo intento.
      setTokenTurnstile(null);
      turnstileRef.current?.reset();
    }
  };

  if (!abierto) return null;

  const clasesInput =
    "w-full min-w-0 rounded-lg border border-white/15 bg-white/[0.05] px-4 py-3 text-base text-white outline-none transition-colors duration-200 placeholder:text-white/30 focus:border-[#D0BC84]/70 focus:bg-white/[0.07] disabled:opacity-50 sm:text-sm";

  const clasesLabel =
    "mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.12em] text-white/60";

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-[#07100a]/80 p-3 backdrop-blur-sm sm:p-5"
      onMouseDown={() => {
        if (!enviando) onClose();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="contacto-modal-title"
        onMouseDown={(event) => event.stopPropagation()}
        className="relative max-h-[calc(100dvh-24px)] w-full max-w-[600px] overflow-x-hidden overflow-y-auto overscroll-contain rounded-xl border border-white/10 bg-[#172519] shadow-[0_30px_100px_rgba(0,0,0,0.5)] sm:max-h-[92dvh] sm:rounded-2xl"
      >
        {/* DECORACIÓN */}
        <div className="pointer-events-none absolute -right-32 -top-32 h-[280px] w-[280px] rounded-full bg-[#4D6645]/15 blur-[90px]" />

        {/* CERRAR */}
        <button
          type="button"
          onClick={onClose}
          disabled={enviando}
          aria-label="Cerrar formulario"
          className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-[#172519]/80 text-xl text-white/65 transition-colors hover:border-white/30 hover:bg-white/10 hover:text-white disabled:cursor-not-allowed disabled:opacity-40 sm:right-5 sm:top-5"
        >
          ×
        </button>

        <div className="relative z-10 p-5 pt-14 sm:p-7 sm:pt-7 lg:p-8">
          {/* ENCABEZADO */}
          <div className="pr-8">
            <div className="mb-3 flex items-center gap-2.5">
              <span
                aria-hidden="true"
                className="h-2 w-2 shrink-0 rounded-full bg-[#D0BC84]"
              />

              <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#D0BC84]">
                {etiqueta}
              </span>
            </div>

            <h2
              id="contacto-modal-title"
              className="text-[27px] font-semibold leading-tight tracking-tight text-white sm:text-[30px]"
            >
              {titulo}
            </h2>

            <p className="mt-2 max-w-[470px] text-[13px] leading-6 text-white/70 sm:text-sm">
              {descripcion}
            </p>
          </div>

          <div className="my-5 h-px bg-white/15 sm:my-6" />

          {/* FORMULARIO */}
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4">
              {/* NOMBRE */}
              <div className="min-w-0">
                <label
                  htmlFor="contacto-nombre"
                  className={clasesLabel}
                >
                  Nombre
                </label>

                <input
                  id="contacto-nombre"
                  name="nombre"
                  type="text"
                  required
                  maxLength={120}
                  autoComplete="name"
                  placeholder="Tu nombre"
                  disabled={enviando}
                  className={clasesInput}
                />
              </div>

              {/* EMAIL */}
              <div className="min-w-0">
                <label
                  htmlFor="contacto-email"
                  className={clasesLabel}
                >
                  Email
                </label>

                <input
                  id="contacto-email"
                  name="email"
                  type="email"
                  required
                  maxLength={254}
                  autoComplete="email"
                  inputMode="email"
                  placeholder="nombre@email.com"
                  disabled={enviando}
                  className={clasesInput}
                />
              </div>

              {/* ASUNTO */}
              <div className="min-w-0">
                <label
                  htmlFor="contacto-asunto"
                  className={clasesLabel}
                >
                  Asunto *
                </label>

                <input
                  id="contacto-asunto"
                  name="asunto"
                  type="text"
                  required
                  maxLength={150}
                  placeholder={
                    esPrensa
                      ? "Motivo de tu consulta de prensa"
                      : "Motivo de tu consulta"
                  }
                  disabled={enviando}
                  className={clasesInput}
                />
              </div>

              {/* MENSAJE */}
              <div className="min-w-0">
                <label
                  htmlFor="contacto-mensaje"
                  className={clasesLabel}
                >
                  Mensaje
                </label>

                <textarea
                  id="contacto-mensaje"
                  name="mensaje"
                  required
                  maxLength={5000}
                  rows={4}
                  placeholder="Escribí tu consulta..."
                  disabled={enviando}
                  className={`${clasesInput} resize-y leading-6`}
                />
              </div>
            </div>

            {/* VERIFICACIÓN TURNSTILE */}
            <div className="mt-5">
              <p className={`${clasesLabel} mb-3`}>
                Verificación de seguridad
              </p>

              {siteKey ? (
                <div className="max-w-full overflow-hidden">
                  <Turnstile
                    ref={turnstileRef}
                    siteKey={siteKey}
                    options={{
                      theme: "dark",
                      size: "flexible",
                    }}
                    onSuccess={(token) => {
                      setTokenTurnstile(token);
                    }}
                    onExpire={() => {
                      setTokenTurnstile(null);
                    }}
                    onError={() => {
                      setTokenTurnstile(null);
                      setEstado("error");
                      setMensajeEstado(
                        "No se pudo completar la verificación de seguridad. Intentá nuevamente."
                      );
                    }}
                  />
                </div>
              ) : (
                <p className="text-sm text-red-200">
                  La verificación de seguridad no está configurada.
                </p>
              )}
            </div>

            {/* MENSAJE DE RESULTADO */}
            {estado && (
              <div
                role="status"
                aria-live="polite"
                className={`mt-5 rounded-lg border px-4 py-3 text-[13px] leading-6 ${
                  estado === "exito"
                    ? "border-green-400/30 bg-green-400/10 text-green-200"
                    : "border-red-400/30 bg-red-400/10 text-red-200"
                }`}
              >
                {mensajeEstado}
              </div>
            )}

            {/* PIE DEL FORMULARIO */}
            <div className="mt-6 flex flex-col gap-4 border-t border-white/15 pt-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-[11px] font-semibold text-white/65">
                  FECCA
                </p>

                <p className="mt-1 text-[11px] text-white/45">
                  {destinatario}
                </p>
              </div>

              <button
                type="submit"
                disabled={enviando || !tokenTurnstile || !siteKey}
                className="inline-flex min-h-11 w-full items-center justify-center rounded-lg bg-[#D0BC84] px-6 py-2.5 text-[13px] font-semibold text-[#283524] transition-colors duration-300 hover:bg-[#C7B57A] disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
              >
                {enviando ? "Enviando..." : "Enviar mensaje"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
