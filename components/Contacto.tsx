
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
        className="relative overflow-hidden bg-[#F1EFE7] py-20 text-[#283524] sm:py-24 lg:py-28"
      >
        {/* DECORACIÓN */}
        <div className="pointer-events-none absolute -bottom-48 -left-48 h-[420px] w-[420px] rounded-full bg-[#4D6645]/10 blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
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

          <div className="my-10 h-px w-full bg-[#283524]/15 sm:my-12 lg:my-14" />

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

            {/* CLUBES FEDERADOS - TARJETA INFORMATIVA */}
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

          {/* INSTITUCIONAL - ANCHO COMPLETO */}
          <div className="mt-5">
            <a
              href="/documentos/institucional-fecca.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex w-full flex-col justify-between gap-5 rounded-xl border border-[#283524]/15 bg-white/40 p-6 transition-colors duration-300 hover:bg-white/75 sm:flex-row sm:items-center sm:p-8"
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#4D6645]">
                  Institucional
                </p>

                <h3 className="mt-3 text-xl font-semibold tracking-tight text-[#283524] sm:text-2xl">
                  Conocé más sobre FECCA
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#283524]/70">
                  Accedé al documento institucional de la Federación.
                </p>
              </div>

              <span className="inline-flex shrink-0 items-center text-sm font-semibold text-[#4D6645] underline decoration-[#4D6645]/40 underline-offset-4 transition-colors group-hover:text-[#283524]">
                Ver documento institucional (PDF)
              </span>
            </a>
          </div>

          {/* LINKTREE OFICIAL */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-end sm:gap-5">
            <p className="text-sm text-[#283524]/70">
              Encontrá todos nuestros canales oficiales:
            </p>

            <a
              href="https://linktr.ee/fecca.oficial"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visitar Linktree oficial de FECCA"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-lg bg-[#4D6645] px-7 py-3 text-sm font-semibold text-[#F1EFE7] transition-colors duration-300 hover:bg-[#3D5337] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#283524] sm:w-auto"
            >
              Linktree de FECCA
            </a>
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
