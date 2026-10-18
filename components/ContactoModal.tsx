
"use client";

import { useEffect, useState } from "react";
import type { FormEvent } from "react";

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
    }
  };

  if (!abierto) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-[#07100a]/80 p-3 backdrop-blur-sm sm:p-4"
      onMouseDown={() => {
        if (!enviando) onClose();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="contacto-modal-title"
        onMouseDown={(event) => event.stopPropagation()}
        className="relative max-h-[calc(100dvh-24px)] w-full max-w-2xl overflow-x-hidden overflow-y-auto overscroll-contain rounded-2xl border border-white/10 bg-[#172519] shadow-[0_30px_100px_rgba(0,0,0,0.5)] sm:max-h-[92dvh] sm:rounded-3xl"
      >
        {/* Glow */}
        <div className="pointer-events-none absolute -right-40 -top-40 h-[300px] w-[300px] rounded-full bg-[#6ce17c]/10 blur-[90px] sm:-right-32 sm:-top-32 sm:h-[350px] sm:w-[350px] sm:blur-[100px]" />

        {/* Cerrar */}
        <button
          type="button"
          onClick={onClose}
          disabled={enviando}
          aria-label="Cerrar formulario"
          className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[#172519]/70 text-lg text-white/60 backdrop-blur-md transition hover:border-white/30 hover:bg-white/5 hover:text-white disabled:cursor-not-allowed disabled:opacity-40 sm:right-6 sm:top-6 sm:h-11 sm:w-11 sm:text-xl"
        >
          ×
        </button>

        <div className="relative z-10 p-5 pt-16 sm:p-7 sm:pt-20 md:p-10 md:pt-10 lg:p-12">
          {/* ENCABEZADO */}
          <div>
            <div className="mb-4 flex items-center gap-2.5 sm:mb-5 sm:gap-3">
              <span className="h-2 w-2 shrink-0 rounded-full bg-[#6ce17c]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/40 sm:text-xs sm:tracking-[0.18em]">
                {etiqueta}
              </span>
            </div>

            <h2
              id="contacto-modal-title"
              className="text-[1.8rem] font-semibold leading-tight tracking-[-0.04em] text-white sm:text-3xl md:text-4xl"
            >
              {titulo}
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-6 text-white/50 md:text-base">
              {descripcion}
            </p>
          </div>

          <div className="my-6 h-px bg-white/10 sm:my-8" />

          {/* FORMULARIO */}
          <form onSubmit={handleSubmit}>
            <div className="grid gap-5 sm:gap-6">
              {/* Nombre */}
              <div className="min-w-0">
                <label
                  htmlFor="contacto-nombre"
                  className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.12em] text-white/45 sm:text-xs"
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
                  className="w-full min-w-0 rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3.5 text-base text-white outline-none transition placeholder:text-white/20 focus:border-[#6ce17c]/60 focus:bg-white/[0.07] disabled:opacity-50 sm:text-sm"
                />
              </div>

              {/* Email */}
              <div className="min-w-0">
                <label
                  htmlFor="contacto-email"
                  className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.12em] text-white/45 sm:text-xs"
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
                  className="w-full min-w-0 rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3.5 text-base text-white outline-none transition placeholder:text-white/20 focus:border-[#6ce17c]/60 focus:bg-white/[0.07] disabled:opacity-50 sm:text-sm"
                />
              </div>

              {/* Asunto */}
              <div className="min-w-0">
                <label
                  htmlFor="contacto-asunto"
                  className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.12em] text-white/45 sm:text-xs"
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
                  className="w-full min-w-0 rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3.5 text-base text-white outline-none transition placeholder:text-white/20 focus:border-[#6ce17c]/60 focus:bg-white/[0.07] disabled:opacity-50 sm:text-sm"
                />
              </div>

              {/* Mensaje */}
              <div className="min-w-0">
                <label
                  htmlFor="contacto-mensaje"
                  className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.12em] text-white/45 sm:text-xs"
                >
                  Mensaje
                </label>

                <textarea
                  id="contacto-mensaje"
                  name="mensaje"
                  required
                  maxLength={5000}
                  rows={5}
                  placeholder="Escribí tu consulta..."
                  disabled={enviando}
                  className="w-full min-w-0 resize-none rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3.5 text-base leading-6 text-white outline-none transition placeholder:text-white/20 focus:border-[#6ce17c]/60 focus:bg-white/[0.07] disabled:opacity-50 sm:text-sm"
                />
              </div>
            </div>

            {/* MENSAJE DE RESULTADO */}
            {estado && (
              <div
                role="status"
                aria-live="polite"
                className={`mt-6 rounded-xl border px-4 py-3 text-sm leading-6 ${
                  estado === "exito"
                    ? "border-[#6ce17c]/30 bg-[#6ce17c]/10 text-[#a7f3b1]"
                    : "border-red-400/30 bg-red-400/10 text-red-200"
                }`}
              >
                {mensajeEstado}
              </div>
            )}

            {/* FOOTER */}
            <div className="mt-7 flex flex-col gap-5 border-t border-white/10 pt-6 sm:mt-8 sm:flex-row sm:items-center sm:justify-between sm:pt-7">
              <div>
                <p className="text-xs font-semibold text-white/45">
                  FECCA
                </p>

                <p className="mt-1 text-xs text-white/30">
                  {destinatario}
                </p>
              </div>

              <button
                type="submit"
                disabled={enviando}
                className="inline-flex w-full items-center justify-center rounded-full bg-[#6ce17c] px-8 py-4 text-sm font-bold text-[#172519] transition duration-300 hover:-translate-y-0.5 hover:bg-[#7bea89] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
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
