
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
        className="relative overflow-hidden bg-[#F1EFE7] py-8 text-[#283524] sm:py-10 lg:py-12"
      >
        {/* DECORACIÓN */}
        <div className="pointer-events-none absolute -bottom-48 -left-48 h-[420px] w-[420px] rounded-full bg-[#4D6645]/10 blur-[120px]" />

        {/* CONTENEDOR AMPLIADO A 1600 PX */}
        <div className="relative z-10 mx-auto w-full max-w-[1600px] px-5 sm:px-6 lg:px-8">
          {/* ENCABEZADO */}
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span
                aria-hidden="true"
                className="h-2 w-2 shrink-0 rounded-full bg-[#4D6645]"
              />

              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#4D6645]">
                Escribinos
              </span>
            </div>

            <h2
              id="titulo-contacto"
              className="text-[2.3rem] font-semibold leading-[1.12] tracking-[-0.045em] sm:text-4xl md:text-[2.7rem] lg:text-[3rem] xl:whitespace-nowrap"
            >
              Tu club también puede{" "}
              <span className="text-[#4D6645]">
                ser parte de la red.
              </span>
            </h2>
          </div>

          <div className="my-7 h-px w-full bg-[#283524]/15 sm:my-8 lg:my-9" />

          {/* TARJETAS PRINCIPALES */}
          <div className="grid gap-5 lg:grid-cols-2">
            {/* CONTACTO GENERAL */}
            <div className="flex h-full flex-col rounded-xl border border-[#283524]/15 bg-white/50 p-7 sm:p-9 lg:p-12">
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#4D6645]">
                Contacto general
              </span>

              <h3 className="mt-6 max-w-xl text-[1.7rem] font-semibold leading-tight tracking-tight sm:text-3xl">
                ¿Querés comunicarte con la Federación?
              </h3>

              <p className="mt-5 max-w-xl text-base leading-7 text-[#283524]/75">
                Escribinos y contanos en qué podemos ayudarte.
              </p>

              <div className="mt-auto pt-9">
                <button
                  type="button"
                  onClick={() => setModalContacto(true)}
                  className="inline-flex min-h-12 w-full items-center justify-center rounded-lg bg-[#4D6645] px-8 py-3 text-base font-semibold text-white transition-colors duration-300 hover:bg-[#3D5337] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#283524] sm:w-auto"
                >
                  Escribinos
                </button>
              </div>
            </div>

            {/* CLUBES FEDERADOS */}
            <div className="flex h-full flex-col rounded-xl border border-[#283524]/15 bg-[#E8E7DC] p-7 sm:p-9 lg:p-12">
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#4D6645]">
                Sumate
              </span>

              <h3 className="mt-6 max-w-xl text-[1.7rem] font-semibold leading-tight tracking-tight sm:text-3xl">
                Más de 200 clubes ya forman parte de FECCA.
              </h3>

              <div className="mt-auto pt-9">
                <p className="text-5xl font-semibold tracking-[-0.05em] text-[#4D6645]">
                  +200
                </p>

                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#283524]/65">
                  Clubes federados
                </p>

                <p className="mt-4 text-sm leading-6 text-[#283524]/70">
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
