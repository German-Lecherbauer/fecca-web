
"use client";

import { useEffect, type FormEvent } from "react";

type BuscarClubModalProps = {
  abierto: boolean;
  onClose: () => void;
};

export default function BuscarClubModal({
  abierto,
  onClose,
}: BuscarClubModalProps) {
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

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Pendiente: conectar el formulario al sistema de envío
    // que defina FECCA.
    console.log("Formulario Buscar Club enviado");
  };

  const inputClassName =
    "w-full min-w-0 rounded-lg border border-white/15 bg-white/[0.05] px-4 py-3.5 text-base text-white outline-none transition-colors duration-200 placeholder:text-white/45 focus:border-[#8DA783] focus:bg-white/[0.08] sm:text-sm";

  const labelClassName =
    "mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-white/60";

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#07100a]/80 p-3 backdrop-blur-sm sm:p-4"
      onMouseDown={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="buscar-club-title"
        onMouseDown={(event) => event.stopPropagation()}
        className="relative max-h-[calc(100dvh-24px)] w-full max-w-3xl overflow-x-hidden overflow-y-auto overscroll-contain rounded-xl border border-white/15 bg-[#172519] shadow-[0_30px_100px_rgba(0,0,0,0.5)] sm:max-h-[92dvh]"
      >
        {/* Decoración sutil */}
        <div className="pointer-events-none absolute -right-32 -top-32 h-[300px] w-[300px] rounded-full bg-[#4D6645]/15 blur-[100px]" />

        {/* Cerrar */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Cerrar formulario"
          className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-xl text-white/70 transition-colors duration-200 hover:border-white/30 hover:bg-white/10 hover:text-white sm:right-6 sm:top-6"
        >
          ×
        </button>

        <div className="relative z-10 p-5 pt-16 sm:p-8 sm:pt-16 md:p-10 lg:p-12">
          {/* ENCABEZADO */}
          <div className="max-w-2xl">
            <div className="mb-5 flex items-center gap-3">
              <span
                aria-hidden="true"
                className="h-2 w-2 shrink-0 rounded-full bg-[#8DA783]"
              />

              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/55">
                Red federal FECCA
              </span>
            </div>

            <h2
              id="buscar-club-title"
              className="max-w-xl text-[1.8rem] font-semibold leading-[1.12] tracking-[-0.04em] text-white sm:text-3xl md:text-4xl"
            >
              ¿Estás buscando un club{" "}
              <span className="text-[#d8c47f]">
                al cual pertenecer?
              </span>
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-white/65 sm:text-base">
              Envianos tu localidad y tus datos de contacto para
              ayudarte a encontrar un club de la red.
            </p>
          </div>

          <div className="my-7 h-px bg-white/15 sm:my-9" />

          {/* FORMULARIO */}
          <form onSubmit={handleSubmit}>
            <div className="grid gap-5 md:grid-cols-2 md:gap-6">
              {/* Nombre */}
              <div className="md:col-span-2">
                <label
                  htmlFor="buscar-nombre"
                  className={labelClassName}
                >
                  Nombre
                </label>

                <input
                  id="buscar-nombre"
                  name="nombre"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Tu nombre"
                  className={inputClassName}
                />
              </div>

              {/* Teléfono */}
              <div className="min-w-0">
                <label
                  htmlFor="buscar-telefono"
                  className={labelClassName}
                >
                  Teléfono de contacto
                </label>

                <input
                  id="buscar-telefono"
                  name="telefono"
                  type="tel"
                  required
                  autoComplete="tel"
                  inputMode="tel"
                  placeholder="11 1234 5678"
                  className={inputClassName}
                />
              </div>

              {/* Email */}
              <div className="min-w-0">
                <label
                  htmlFor="buscar-email"
                  className={labelClassName}
                >
                  Email
                </label>

                <input
                  id="buscar-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  inputMode="email"
                  placeholder="nombre@email.com"
                  className={inputClassName}
                />
              </div>

              {/* Localidad */}
              <div className="min-w-0">
                <label
                  htmlFor="buscar-localidad"
                  className={labelClassName}
                >
                  Localidad
                </label>

                <input
                  id="buscar-localidad"
                  name="localidad"
                  type="text"
                  required
                  placeholder="Tu localidad"
                  className={inputClassName}
                />
              </div>

              {/* Provincia */}
              <div className="min-w-0">
                <label
                  htmlFor="buscar-provincia"
                  className={labelClassName}
                >
                  Provincia
                </label>

                <input
                  id="buscar-provincia"
                  name="provincia"
                  type="text"
                  required
                  placeholder="Tu provincia"
                  className={inputClassName}
                />
              </div>
            </div>

            {/* PIE DEL FORMULARIO */}
            <div className="mt-8 flex flex-col gap-6 border-t border-white/15 pt-7 md:flex-row md:items-center md:justify-between">
              <p className="max-w-sm text-xs leading-6 text-white/50">
                FECCA te ayudará a encontrar un club de la red
                de acuerdo a tu localidad.
              </p>

              <button
                type="submit"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-lg bg-[#4D6645] px-8 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#5D7954] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8DA783] md:w-auto"
              >
                Enviar solicitud
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
