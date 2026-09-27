"use client";

import { useEffect } from "react";

type ContactoModalProps = {
  abierto: boolean;
  onClose: () => void;
};

export default function ContactoModal({
  abierto,
  onClose,
}: ContactoModalProps) {
  useEffect(() => {
    if (!abierto) return;

    const overflowAnterior = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const cerrarConEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", cerrarConEscape);

    return () => {
      document.body.style.overflow = overflowAnterior;
      window.removeEventListener("keydown", cerrarConEscape);
    };
  }, [abierto, onClose]);

  if (!abierto) return null;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Temporal hasta conectar el formulario
    // con el backend / servicio de correo.
    console.log("Formulario de contacto enviado");
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-[#07100a]/80 p-3 backdrop-blur-sm sm:p-4"
      onMouseDown={onClose}
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
          aria-label="Cerrar formulario"
          className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[#172519]/70 text-lg text-white/60 backdrop-blur-md transition hover:border-white/30 hover:bg-white/5 hover:text-white sm:right-6 sm:top-6 sm:h-11 sm:w-11 sm:text-xl"
        >
          ×
        </button>

        <div className="relative z-10 p-5 pt-16 sm:p-7 sm:pt-20 md:p-10 md:pt-10 lg:p-12">
          {/* =========================
              ENCABEZADO
          ========================== */}
          <div>
            <div className="mb-4 flex items-center gap-2.5 sm:mb-5 sm:gap-3">
              <span className="h-2 w-2 shrink-0 rounded-full bg-[#6ce17c]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/40 sm:text-xs sm:tracking-[0.18em]">
                Contacto general
              </span>
            </div>

            <h2
              id="contacto-modal-title"
              className="text-[1.8rem] font-semibold leading-tight tracking-[-0.04em] text-white sm:text-3xl md:text-4xl"
            >
              Escribinos.
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-6 text-white/50 md:text-base">
              Completá el formulario y contanos en qué podemos ayudarte.
            </p>
          </div>

          <div className="my-6 h-px bg-white/10 sm:my-8" />

          {/* =========================
              FORMULARIO
          ========================== */}
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
                  autoComplete="name"
                  placeholder="Tu nombre"
                  className="w-full min-w-0 rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3.5 text-base text-white outline-none transition placeholder:text-white/20 focus:border-[#6ce17c]/60 focus:bg-white/[0.07] sm:text-sm"
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
                  autoComplete="email"
                  inputMode="email"
                  placeholder="nombre@email.com"
                  className="w-full min-w-0 rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3.5 text-base text-white outline-none transition placeholder:text-white/20 focus:border-[#6ce17c]/60 focus:bg-white/[0.07] sm:text-sm"
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
                  rows={5}
                  placeholder="Escribí tu consulta..."
                  className="w-full min-w-0 resize-none rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3.5 text-base leading-6 text-white outline-none transition placeholder:text-white/20 focus:border-[#6ce17c]/60 focus:bg-white/[0.07] sm:text-sm"
                />
              </div>
            </div>

            {/* =========================
                FOOTER
            ========================== */}
            <div className="mt-7 flex flex-col gap-5 border-t border-white/10 pt-6 sm:mt-8 sm:flex-row sm:items-center sm:justify-between sm:pt-7">
              <div>
                <p className="text-xs font-semibold text-white/45">
                  FECCA
                </p>

                <p className="mt-1 text-xs text-white/30">
                  info@fecca.com.ar
                </p>
              </div>

              <button
                type="submit"
                className="group inline-flex w-full items-center justify-between gap-4 rounded-full bg-[#6ce17c] px-6 py-4 text-sm font-bold text-[#172519] transition duration-300 hover:-translate-y-0.5 hover:bg-[#7bea89] sm:w-auto sm:justify-center sm:px-8"
              >
                Enviar mensaje

                <span className="transition duration-300 group-hover:translate-x-1">
                  →
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}