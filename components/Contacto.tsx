"use client";

import { useState } from "react";
import ContactoModal from "./ContactoModal";

export default function Contacto() {
  const [modalContacto, setModalContacto] = useState(false);

  return (
    <>
      <section
        id="contacto"
        className="relative z-20 -mt-5 overflow-hidden rounded-t-[18px] bg-[#f3f0e7] py-20 text-[#172519] sm:py-24 lg:py-28"
      >
        {/* Decoración */}
        <div className="absolute -left-64 bottom-0 h-[400px] w-[400px] rounded-full bg-[#6ce17c]/10 blur-[110px] sm:-left-48 sm:h-[500px] sm:w-[500px] sm:blur-[140px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          {/* =========================
              ENCABEZADO
          ========================== */}
          <div className="grid gap-6 sm:gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-10">
            <div>
              <div className="mb-4 flex items-center gap-3 sm:mb-6">
                <span className="h-2 w-2 shrink-0 rounded-full bg-[#45c95a]" />

                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#172519]/50 sm:text-xs sm:tracking-[0.2em]">
                  Escribinos
                </span>
              </div>

              <h2 className="max-w-3xl text-[2.35rem] font-semibold leading-[1.04] tracking-[-0.045em] sm:text-4xl md:text-5xl lg:text-6xl">
                Tu club también puede
                <span className="block text-[#537247]">
                  ser parte de la red.
                </span>
              </h2>
            </div>

            <p className="max-w-lg text-[15px] leading-7 text-[#172519]/60 sm:text-base md:text-lg">
              Ponete en contacto con FECCA para conocer más sobre la Federación,
              resolver consultas o sumar tu club a la red federal.
            </p>
          </div>

          <div className="my-9 h-px bg-[#172519]/10 sm:my-12 lg:my-14" />

          {/* =========================
              CONTACTO PRINCIPAL
          ========================== */}
          <div className="grid overflow-hidden rounded-2xl border border-[#172519]/10 bg-white/45 sm:rounded-3xl lg:grid-cols-[1fr_0.7fr]">
            {/* Contacto general */}
            <div className="p-6 sm:p-8 md:p-12 lg:p-14">
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#172519]/40 sm:text-xs sm:tracking-[0.2em]">
                Contacto general
              </span>

              <h3 className="mt-5 max-w-2xl text-[1.7rem] font-semibold leading-tight tracking-[-0.03em] sm:mt-6 sm:text-3xl md:text-4xl">
                ¿Querés comunicarte con la Federación?
              </h3>

              <p className="mt-4 max-w-xl text-sm leading-6 text-[#172519]/55 sm:mt-5 sm:text-base sm:leading-7">
                Escribinos y contanos en qué podemos ayudarte.
              </p>

              <button
                type="button"
                onClick={() => setModalContacto(true)}
                className="group mt-7 inline-flex w-full items-center justify-between gap-4 rounded-full bg-[#172519] px-6 py-4 text-sm font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#223727] sm:mt-10 sm:w-auto sm:justify-center sm:px-7"
              >
                Escribinos

                <span className="transition duration-300 group-hover:translate-x-1">
                  →
                </span>
              </button>
            </div>

            {/* =========================
                CLUBES FEDERADOS
            ========================== */}
            <a
              href="#clubes"
              aria-label="Ver clubes federados"
              className="group flex flex-col justify-between border-t border-[#172519]/10 bg-[#e9e5d9]/60 p-6 transition duration-300 hover:bg-[#e4dfd1] sm:p-8 md:p-12 lg:border-l lg:border-t-0 lg:p-14"
            >
              <div>
                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#172519]/40 sm:text-xs sm:tracking-[0.2em]">
                  Sumate
                </span>

                <p className="mt-5 max-w-sm text-xl font-semibold leading-snug tracking-[-0.02em] sm:mt-6 sm:text-2xl">
                  Más de 200 clubes ya forman parte de FECCA.
                </p>
              </div>

              <div className="mt-10 flex items-end justify-between gap-5 sm:mt-14 lg:mt-16">
                <div>
                  <p className="text-4xl font-semibold tracking-[-0.05em] text-[#537247] sm:text-5xl">
                    +200
                  </p>

                  <p className="mt-2 text-[10px] font-semibold uppercase leading-4 tracking-[0.14em] text-[#172519]/40 sm:text-xs sm:tracking-[0.16em]">
                    Clubes federados
                  </p>
                </div>

                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#172519]/15 text-lg transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:bg-[#172519] group-hover:text-white sm:h-14 sm:w-14 sm:text-xl">
                  ↗
                </span>
              </div>
            </a>
          </div>

          {/* =========================
              CONTACTOS SECUNDARIOS
          ========================== */}
          <div className="mt-4 grid gap-4 sm:mt-5 sm:gap-5 md:grid-cols-2">
            {/* Salud y Educación */}
            <a
              href="mailto:salud@fecca.com.ar"
              className="group flex min-w-0 items-center justify-between gap-4 rounded-2xl border border-[#172519]/10 bg-white/30 p-5 transition duration-300 hover:-translate-y-0.5 hover:bg-white/60 sm:p-6"
            >
              <div className="min-w-0">
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#172519]/35 sm:text-xs sm:tracking-[0.18em]">
                  Salud y Educación
                </p>

                <p className="mt-2 break-all text-sm font-semibold sm:break-normal sm:text-base">
                  salud@fecca.com.ar
                </p>
              </div>

              <span className="shrink-0 transition duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>

            {/* Institucional */}
            <a
              href="/documentos/institucional-fecca.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex min-w-0 items-center justify-between gap-4 rounded-2xl border border-[#172519]/10 bg-white/30 p-5 transition duration-300 hover:-translate-y-0.5 hover:bg-white/60 sm:p-6"
            >
              <div className="min-w-0">
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#172519]/35 sm:text-xs sm:tracking-[0.18em]">
                  Institucional
                </p>

                <p className="mt-2 text-sm font-semibold sm:text-base">
                  Conocé más sobre FECCA
                </p>
              </div>

              <div className="flex shrink-0 items-center gap-3">
                <span className="hidden text-xs font-semibold uppercase tracking-[0.12em] text-[#172519]/35 sm:block">
                  Ver PDF
                </span>

                <span className="transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  ↗
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* =========================
          MODAL DE CONTACTO
      ========================== */}
      <ContactoModal
        abierto={modalContacto}
        onClose={() => setModalContacto(false)}
      />
    </>
  );
}