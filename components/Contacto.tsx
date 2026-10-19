
"use client";

import { useState } from "react";
import ContactoModal from "./ContactoModal";

export default function Contacto() {
  const [modalContacto, setModalContacto] = useState(false);

  return (
    <>
      <section
        id="contacto"
        aria-labelledby="titulo-contacto"
        className="relative scroll-mt-24 overflow-hidden bg-[#F1EFE7] py-10 text-[#283524] sm:py-12 lg:py-14"
      >
        {/* DECORACIÓN */}
        <div className="pointer-events-none absolute -bottom-48 -left-48 h-[420px] w-[420px] rounded-full bg-[#4D6645]/10 blur-[120px]" />

        {/* CONTENEDOR ALINEADO CON EL HERO */}
        <div className="relative z-10 mx-auto w-full max-w-[1200px] px-5 sm:px-6 lg:px-8">
          {/* ENCABEZADO */}
          <div>
            <div className="mb-4 flex items-center gap-2.5">
              <span
                aria-hidden="true"
                className="h-2 w-2 shrink-0 rounded-full bg-[#4D6645]"
              />

              <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#4D6645] sm:text-xs">
                Escribinos
              </span>
            </div>

            <h2
              id="titulo-contacto"
              className="max-w-[900px] text-[28px] font-semibold leading-[1.15] tracking-tight sm:text-[32px] lg:text-[36px]"
            >
              Tu club también puede{" "}
              <span className="text-[#4D6645]">
                ser parte de la red.
              </span>
            </h2>
          </div>

          {/* SEPARADOR */}
          <div className="my-7 h-px w-full bg-[#283524]/15 sm:my-8" />

          {/* TARJETAS PRINCIPALES */}
          <div className="grid gap-4 lg:grid-cols-2">
            {/* CONTACTO GENERAL */}
            <div className="flex h-full flex-col rounded-xl border border-[#283524]/15 bg-white/50 p-5 sm:p-6 lg:p-8">
              <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#4D6645] sm:text-xs">
                Contacto general
              </span>

              <h3 className="mt-5 max-w-xl text-xl font-semibold leading-tight tracking-tight sm:text-[24px]">
                ¿Querés comunicarte con la Federación?
              </h3>

              <p className="mt-3 max-w-xl text-[13px] leading-6 text-[#283524]/75 sm:text-sm">
                Escribinos y contanos en qué podemos ayudarte.
              </p>

              <div className="mt-auto pt-6">
                <button
                  type="button"
                  onClick={() => setModalContacto(true)}
                  className="inline-flex min-h-11 w-full items-center justify-center rounded-lg bg-[#4D6645] px-6 py-2.5 text-[13px] font-semibold text-white transition-colors duration-300 hover:bg-[#3D5337] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#283524] sm:w-auto"
                >
                  Escribinos
                </button>
              </div>
            </div>

            {/* CLUBES FEDERADOS */}
            <div className="flex h-full flex-col rounded-xl border border-[#283524]/15 bg-[#E8E7DC] p-5 sm:p-6 lg:p-8">
              <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#4D6645] sm:text-xs">
                Sumate
              </span>

              <h3 className="mt-5 max-w-xl text-xl font-semibold leading-tight tracking-tight sm:text-[24px]">
                Más de 200 clubes ya forman parte de FECCA.
              </h3>

              <div className="mt-auto pt-6">
                <p className="text-[38px] font-semibold leading-none tracking-[-0.05em] text-[#4D6645] sm:text-[42px]">
                  +200
                </p>

                <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#283524]/65">
                  Clubes federados
                </p>

                <p className="mt-3 max-w-[440px] text-[13px] leading-6 text-[#283524]/70 sm:text-sm">
                  Una red federal de organizaciones que crece
                  y se fortalece en todo el país.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MODAL DE CONTACTO */}
      <ContactoModal
        abierto={modalContacto}
        onClose={() => setModalContacto(false)}
      />
    </>
  );
}
