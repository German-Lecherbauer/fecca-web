"use client";

import { useState } from "react";
import ReprocannModal from "./ReprocannModal";

export default function Beneficios() {
  const [modalAbierto, setModalAbierto] = useState(false);

  const beneficios = [
    {
      numero: "01",
      titulo: "Salud",
      texto:
        "Acompañamiento y herramientas orientadas al acceso seguro y responsable al cannabis medicinal.",
    },
    {
      numero: "02",
      titulo: "Educación",
      texto:
        "Información, capacitación y espacios educativos para fortalecer a clubes, usuarios y comunidades.",
    },
    {
      numero: "03",
      titulo: "Acompañamiento",
      texto:
        "Una red federal para compartir recursos, experiencias y afrontar problemáticas comunes.",
    },
  ];

  return (
    <>
      <section
        id="beneficios"
        className="relative z-20 -mt-5 overflow-hidden rounded-t-[18px] bg-[#172519] py-20 text-white sm:py-24 lg:py-28"
      >
        {/* Glow verde */}
        <div className="absolute -right-64 top-0 h-[420px] w-[420px] rounded-full bg-[#6ce17c]/10 blur-[110px] sm:-right-40 sm:h-[520px] sm:w-[520px] sm:blur-[140px]" />

        {/* Glow dorado */}
        <div className="absolute -bottom-52 -left-52 h-[360px] w-[360px] rounded-full bg-[#d8c47f]/10 blur-[100px] sm:-left-32 sm:h-[420px] sm:w-[420px] sm:blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          {/* =========================
              ENCABEZADO
          ========================== */}
          <div className="grid gap-6 sm:gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end lg:gap-10">
            <div>
              <div className="mb-4 flex items-center gap-3 sm:mb-6">
                <span className="h-2 w-2 shrink-0 rounded-full bg-[#6ce17c]" />

                <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-white/45 sm:text-xs sm:tracking-[0.2em]">
                  Comisión de Salud y Educación
                </span>
              </div>

              <h2 className="max-w-3xl text-[2.35rem] font-semibold leading-[1.04] tracking-[-0.045em] sm:text-4xl md:text-5xl lg:text-6xl">
                Herramientas para que
                <span className="block text-[#d8c47f]">
                  tu club no esté solo.
                </span>
              </h2>
            </div>

            <div className="lg:pb-1">
              <p className="max-w-xl text-[15px] leading-7 text-white/55 sm:text-base md:text-lg md:leading-8">
                Salud, educación y acompañamiento para fortalecer a los clubes
                que forman parte de la red federal de FECCA.
              </p>
            </div>
          </div>

          <div className="my-9 h-px w-full bg-white/10 sm:my-12 lg:my-14" />

          {/* =========================
              BENEFICIOS
          ========================== */}
          <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:rounded-3xl lg:grid-cols-3">
            {beneficios.map((beneficio) => (
              <article
                key={beneficio.numero}
                className="group relative flex min-h-[245px] flex-col justify-between bg-[#172519] p-6 transition duration-500 hover:bg-[#1c2d1f] sm:min-h-[270px] sm:p-8 md:p-10 lg:min-h-[320px]"
              >
                <div className="flex items-start justify-between">
                  <span className="font-mono text-xs tracking-[0.2em] text-[#6ce17c]">
                    {beneficio.numero}
                  </span>

                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 text-white/30 transition duration-300 group-hover:border-[#6ce17c]/40 group-hover:text-[#6ce17c]">
                    ↗
                  </span>
                </div>

                <div className="mt-12">
                  <h3 className="text-2xl font-semibold tracking-[-0.03em] text-white md:text-3xl">
                    {beneficio.titulo}
                  </h3>

                  <p className="mt-3 max-w-sm text-sm leading-6 text-white/50 sm:mt-4 md:text-base md:leading-7">
                    {beneficio.texto}
                  </p>
                </div>

                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#6ce17c] transition-all duration-500 group-hover:w-full" />
              </article>
            ))}
          </div>

          {/* =========================
              REPROCANN
          ========================== */}
          <div className="mt-10 grid overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] sm:mt-14 sm:rounded-3xl lg:mt-16 lg:grid-cols-[1fr_auto]">
            <div className="p-6 sm:p-8 md:p-10 lg:p-12">
              <div className="mb-4 flex items-center gap-3 sm:mb-5">
                <span className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-[#6ce17c]" />

                <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-white/40 sm:text-xs sm:tracking-[0.18em]">
                  Acompañamiento FECCA
                </span>
              </div>

              <h3 className="text-[1.7rem] font-semibold leading-tight tracking-[-0.03em] sm:text-3xl md:text-4xl">
                ¿Problemas con tu REPROCANN?
              </h3>

              <p className="mt-4 max-w-2xl text-sm leading-6 text-white/50 sm:text-base sm:leading-7">
                Completá el formulario y ponete en contacto con la Comisión de
                Salud y Educación.
              </p>
            </div>

            <div className="flex items-center border-t border-white/10 p-6 sm:p-8 lg:border-l lg:border-t-0 lg:p-12">
              <button
                type="button"
                onClick={() => setModalAbierto(true)}
                className="group inline-flex w-full items-center justify-between gap-5 rounded-full bg-[#6ce17c] px-6 py-4 text-sm font-bold text-[#172519] transition duration-300 hover:-translate-y-1 hover:bg-[#7bea89] hover:shadow-[0_15px_45px_rgba(108,225,124,0.15)] sm:w-auto sm:justify-center sm:px-7"
              >
                Pedir ayuda

                <span className="transition duration-300 group-hover:translate-x-1">
                  →
                </span>
              </button>
            </div>
          </div>

          {/* =========================
              CONTACTO
          ========================== */}
          <div className="mt-7 flex flex-col gap-2 text-sm text-white/35 sm:mt-8 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
            <p>Comisión de Salud y Educación</p>

            <a
              href="mailto:salud@fecca.com.ar"
              className="w-fit break-all transition hover:text-[#6ce17c] sm:break-normal"
            >
              salud@fecca.com.ar ↗
            </a>
          </div>
        </div>
      </section>

      <ReprocannModal
        abierto={modalAbierto}
        onClose={() => setModalAbierto(false)}
      />
    </>
  );
}