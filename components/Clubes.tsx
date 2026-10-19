
"use client";

import { useState } from "react";
import BuscarClubModal from "./BuscarClubModal";

export default function Clubes() {
  const [buscarClubAbierto, setBuscarClubAbierto] = useState(false);

  return (
    <>
      <section
        id="clubes"
        aria-labelledby="titulo-clubes"
        className="scroll-mt-24 bg-[#283524] pb-10 pt-8 text-white sm:pb-12 sm:pt-10 lg:pb-12 lg:pt-12"
      >
        {/* CONTENEDOR ALINEADO CON EL HERO */}
        <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-6 lg:px-8">
          {/* CORTE ESTÉTICO ENTRE ALIANZAS Y CLUBES */}
          <div
            aria-hidden="true"
            className="mb-9 flex items-center gap-4 sm:mb-11 lg:mb-12"
          >
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#D0BC84]/40 to-[#D0BC84]/60" />

            <div className="h-1.5 w-1.5 shrink-0 rotate-45 bg-[#D0BC84]/80" />

            <div className="h-px flex-1 bg-gradient-to-l from-transparent via-[#D0BC84]/40 to-[#D0BC84]/60" />
          </div>

          {/* ENCABEZADO */}
          <div className="grid items-end gap-4 md:grid-cols-2 md:gap-10">
            <div>
              <div className="mb-4 flex items-center gap-2.5">
                <span
                  aria-hidden="true"
                  className="h-2 w-2 shrink-0 rounded-full bg-[#4ADE80]"
                />

                <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/65 sm:text-xs">
                  Nuestra red
                </span>
              </div>

              <h2
                id="titulo-clubes"
                className="text-[30px] font-semibold leading-[1.1] tracking-tight sm:text-[34px] lg:text-[38px]"
              >
                Red federal de
                <br />
                <span className="text-[#D0BC84]">
                  clubes cannábicos.
                </span>
              </h2>
            </div>

            <p className="max-w-[440px] text-[14px] leading-6 text-white/75 sm:text-[15px] md:justify-self-end">
              Presencia en todo el país: más de 200 clubes
              federados sostienen la Federación de Clubes
              Cannábicos de Argentina.
            </p>
          </div>

          {/* SEPARADOR DEL ENCABEZADO */}
          <div className="my-7 h-px w-full bg-white/15 sm:my-8" />

          {/* TARJETAS */}
          <div className="grid gap-4 md:grid-cols-2">
            {/* PARA PERSONAS */}
            <div className="flex h-full flex-col rounded-xl border border-white/15 bg-[#20382D] p-5 sm:p-6">
              <div className="mb-4 flex items-center gap-2.5">
                <span
                  aria-hidden="true"
                  className="h-2 w-2 shrink-0 rounded-full bg-[#4ADE80]"
                />

                <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/65 sm:text-xs">
                  Para personas
                </span>
              </div>

              <h3 className="text-xl font-semibold tracking-tight sm:text-[22px]">
                ¿Estás buscando un club?
              </h3>

              <p className="mt-3 max-w-[440px] text-[13px] leading-6 text-white/75 sm:text-sm">
                Dejanos tu localidad y tus datos de contacto
                para ayudarte a encontrar un club de la red.
              </p>

              <div className="mt-auto pt-6">
                <button
                  type="button"
                  onClick={() => setBuscarClubAbierto(true)}
                  className="inline-flex min-h-11 w-full items-center justify-center rounded-lg bg-[#4D6645] px-6 py-2.5 text-[13px] font-semibold text-white transition-colors duration-300 hover:bg-[#5B7552] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:w-auto"
                >
                  Buscar un club
                </button>
              </div>
            </div>

            {/* PARA ORGANIZACIONES */}
            <div className="flex h-full flex-col rounded-xl border border-[#D0BC84]/30 bg-[#34432D] p-5 sm:p-6">
              <div className="mb-4 flex items-center gap-2.5">
                <span
                  aria-hidden="true"
                  className="h-2 w-2 shrink-0 rounded-full bg-[#D0BC84]"
                />

                <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#D0BC84] sm:text-xs">
                  Para organizaciones
                </span>
              </div>

              <h3 className="text-xl font-semibold tracking-tight sm:text-[22px]">
                ¿Querés sumar tu club a la red?
              </h3>

              <p className="mt-3 max-w-[440px] text-[13px] leading-6 text-white/75 sm:text-sm">
                Formá parte de la Federación de Clubes Cannábicos
                de Argentina y fortalecé nuestra red federal.
              </p>

              <div className="mt-auto pt-6">
                <a
                  href="https://forms.gle/Vfg7CtPqUTkAZxxV6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 w-full items-center justify-center rounded-lg bg-[#D0BC84] px-6 py-2.5 text-[13px] font-semibold text-[#283524] transition-colors duration-300 hover:bg-[#C7B57A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:w-auto"
                >
                  Sumá tu club
                </a>
              </div>
            </div>
          </div>

          {/* CIERRE */}
          <div className="mt-7 border-t border-white/15 pt-5">
            <p className="text-[13px] leading-6 text-white/65 sm:text-sm">
              Una red construida por organizaciones de distintos
              puntos del país.
            </p>
          </div>
        </div>
      </section>

      {/* MODAL BUSCAR CLUB */}
      <BuscarClubModal
        abierto={buscarClubAbierto}
        onClose={() => setBuscarClubAbierto(false)}
      />
    </>
  );
}
