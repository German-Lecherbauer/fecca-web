"use client";

import { useEffect } from "react";

type ReprocannModalProps = {
  abierto: boolean;
  onClose: () => void;
};

export default function ReprocannModal({
  abierto,
  onClose,
}: ReprocannModalProps) {
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

    // Temporal:
    // acá conectaremos el envío real cuando FECCA
    // confirme dónde deben recibirse los datos.
    console.log("Formulario REPROCANN enviado");
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-[#07100a]/80 p-3 backdrop-blur-sm sm:p-4"
      onMouseDown={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="reprocann-title"
        onMouseDown={(event) => event.stopPropagation()}
        className="relative max-h-[calc(100dvh-24px)] w-full max-w-4xl overflow-x-hidden overflow-y-auto overscroll-contain rounded-2xl border border-white/10 bg-[#172519] shadow-[0_30px_100px_rgba(0,0,0,0.5)] sm:max-h-[92dvh] sm:rounded-3xl"
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
          <div className="max-w-2xl">
            <div className="mb-4 flex items-center gap-2.5 sm:mb-5 sm:gap-3">
              <span className="h-2 w-2 shrink-0 rounded-full bg-[#6ce17c]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/40 sm:text-xs sm:tracking-[0.18em]">
                Comisión de Salud y Educación
              </span>
            </div>

            <h2
              id="reprocann-title"
              className="pr-2 text-[1.8rem] font-semibold leading-[1.08] tracking-[-0.04em] text-white sm:text-3xl md:text-4xl"
            >
              ¿Problemas con tu{" "}
              <span className="text-[#d8c47f]">REPROCANN?</span>
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-6 text-white/50 md:text-base">
              Completá tus datos y contanos en qué situación se encuentra tu
              trámite.
            </p>
          </div>

          <div className="my-6 h-px bg-white/10 sm:my-8" />

          {/* =========================
              FORMULARIO
          ========================== */}
          <form onSubmit={handleSubmit}>
            <div className="grid gap-5 md:grid-cols-2 md:gap-6">
              {/* Nombre */}
              <div className="min-w-0 md:col-span-2">
                <label
                  htmlFor="nombre"
                  className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.12em] text-white/45 sm:text-xs"
                >
                  Nombre y apellido
                </label>

                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Tu nombre completo"
                  className="w-full min-w-0 rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3.5 text-base text-white outline-none transition placeholder:text-white/20 focus:border-[#6ce17c]/60 focus:bg-white/[0.07] sm:text-sm"
                />
              </div>

              {/* Email */}
              <div className="min-w-0">
                <label
                  htmlFor="email"
                  className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.12em] text-white/45 sm:text-xs"
                >
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  inputMode="email"
                  placeholder="nombre@email.com"
                  className="w-full min-w-0 rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3.5 text-base text-white outline-none transition placeholder:text-white/20 focus:border-[#6ce17c]/60 focus:bg-white/[0.07] sm:text-sm"
                />
              </div>

              {/* Teléfono */}
              <div className="min-w-0">
                <label
                  htmlFor="telefono"
                  className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.12em] text-white/45 sm:text-xs"
                >
                  Teléfono
                </label>

                <input
                  id="telefono"
                  name="telefono"
                  type="tel"
                  required
                  autoComplete="tel"
                  inputMode="tel"
                  placeholder="11 1234 5678"
                  className="w-full min-w-0 rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3.5 text-base text-white outline-none transition placeholder:text-white/20 focus:border-[#6ce17c]/60 focus:bg-white/[0.07] sm:text-sm"
                />
              </div>

              {/* Provincia */}
              <div className="min-w-0">
                <label
                  htmlFor="provincia"
                  className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.12em] text-white/45 sm:text-xs"
                >
                  Provincia
                </label>

                <input
                  id="provincia"
                  name="provincia"
                  type="text"
                  required
                  placeholder="Provincia"
                  className="w-full min-w-0 rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3.5 text-base text-white outline-none transition placeholder:text-white/20 focus:border-[#6ce17c]/60 focus:bg-white/[0.07] sm:text-sm"
                />
              </div>

              {/* Localidad */}
              <div className="min-w-0">
                <label
                  htmlFor="localidad"
                  className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.12em] text-white/45 sm:text-xs"
                >
                  Localidad
                </label>

                <input
                  id="localidad"
                  name="localidad"
                  type="text"
                  required
                  placeholder="Localidad"
                  className="w-full min-w-0 rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3.5 text-base text-white outline-none transition placeholder:text-white/20 focus:border-[#6ce17c]/60 focus:bg-white/[0.07] sm:text-sm"
                />
              </div>

              {/* Situación */}
              <div className="min-w-0 md:col-span-2">
                <label
                  htmlFor="situacion"
                  className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.12em] text-white/45 sm:text-xs"
                >
                  ¿En qué situación está tu trámite?
                </label>

                <select
                  id="situacion"
                  name="situacion"
                  required
                  defaultValue=""
                  className="w-full min-w-0 rounded-xl border border-white/10 bg-[#1d2d20] px-4 py-3.5 text-base text-white outline-none transition focus:border-[#6ce17c]/60 sm:text-sm"
                >
                  <option value="" disabled>
                    Seleccioná una opción
                  </option>

                  <option value="pronto-evaluacion">
                    Pronto evaluación
                  </option>

                  <option value="pendiente">
                    Pendiente
                  </option>

                  <option value="observado">
                    Observado
                  </option>

                  <option value="rechazado">
                    Rechazado
                  </option>

                  <option value="otro">
                    Otra situación
                  </option>
                </select>
              </div>

              {/* Patología */}
              <div className="min-w-0 md:col-span-2">
                <label
                  htmlFor="patologia"
                  className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.12em] text-white/45 sm:text-xs"
                >
                  ¿Qué patología tenías prescripta?
                </label>

                <textarea
                  id="patologia"
                  name="patologia"
                  rows={4}
                  required
                  placeholder="Contanos brevemente..."
                  className="w-full min-w-0 resize-none rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3.5 text-base leading-6 text-white outline-none transition placeholder:text-white/20 focus:border-[#6ce17c]/60 focus:bg-white/[0.07] sm:text-sm"
                />
              </div>
            </div>

            {/* =========================
                FOOTER
            ========================== */}
            <div className="mt-7 flex flex-col gap-5 border-t border-white/10 pt-6 sm:mt-8 sm:pt-7 md:flex-row md:items-center md:justify-between">
              <p className="text-xs leading-5 text-white/30">
                Comisión de Salud y Educación
                <br />
                salud@fecca.com.ar
              </p>

              <button
                type="submit"
                className="group inline-flex w-full items-center justify-between gap-4 rounded-full bg-[#6ce17c] px-6 py-4 text-sm font-bold text-[#172519] transition duration-300 hover:-translate-y-0.5 hover:bg-[#7bea89] hover:shadow-[0_12px_35px_rgba(108,225,124,0.15)] sm:px-8 md:w-auto md:justify-center"
              >
                Enviar consulta

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