"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import BuscarClubModal from "./BuscarClubModal";

const TOTAL_CLUBES = 114;
const CLUBES_MOBILE = 6;
const CLUBES_DESKTOP = 12;
const LOGOS_DISPONIBLES = 13;

const clubes = Array.from({ length: TOTAL_CLUBES }, (_, index) => {
  const numero = index + 1;

  return {
    id: numero,
    nombre: `Club ${numero}`,
    logo:
      numero <= LOGOS_DISPONIBLES
        ? `/images/clubes/FECCA${numero}.jpg`
        : null,
  };
});

export default function Clubes() {
  const [paginaActual, setPaginaActual] = useState(1);
  const [modalBuscarClub, setModalBuscarClub] = useState(false);
  const [clubesPorPagina, setClubesPorPagina] =
    useState(CLUBES_DESKTOP);

  useEffect(() => {
    const actualizarCantidad = () => {
      const cantidad =
        window.innerWidth < 640
          ? CLUBES_MOBILE
          : CLUBES_DESKTOP;

      setClubesPorPagina(cantidad);
    };

    actualizarCantidad();

    window.addEventListener("resize", actualizarCantidad);

    return () => {
      window.removeEventListener("resize", actualizarCantidad);
    };
  }, []);

  const totalPaginas = Math.ceil(
    clubes.length / clubesPorPagina
  );

  useEffect(() => {
    setPaginaActual((pagina) =>
      Math.min(pagina, totalPaginas)
    );
  }, [totalPaginas]);

  const inicio =
    (paginaActual - 1) * clubesPorPagina;

  const fin = inicio + clubesPorPagina;

  const clubesVisibles = clubes.slice(inicio, fin);

  const paginaAnterior = () => {
    setPaginaActual((pagina) =>
      Math.max(pagina - 1, 1)
    );
  };

  const paginaSiguiente = () => {
    setPaginaActual((pagina) =>
      Math.min(pagina + 1, totalPaginas)
    );
  };

  return (
    <>
      <section
        id="clubes"
        className="relative z-20 -mt-5 overflow-hidden rounded-t-[18px] bg-[#f3f0e7] py-20 text-[#172519] sm:py-24 lg:py-28"
      >
        {/* Glow decorativo */}
        <div className="absolute -right-64 top-20 h-[380px] w-[380px] rounded-full bg-[#6ce17c]/10 blur-[100px] sm:-right-40 sm:h-[450px] sm:w-[450px] sm:blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          {/* =========================
              ENCABEZADO
          ========================== */}
          <div className="mb-10 grid gap-6 sm:mb-12 sm:gap-8 lg:mb-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <div className="mb-4 flex items-center gap-3 sm:mb-5">
                <span className="h-2 w-2 shrink-0 rounded-full bg-[#45c95a]" />

                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#172519]/50 sm:text-xs sm:tracking-[0.2em]">
                  Nuestra red
                </span>
              </div>

              <h2 className="max-w-xl text-[2.35rem] font-semibold leading-[1.04] tracking-[-0.045em] sm:text-4xl md:text-5xl lg:text-6xl">
                Red federal de
                <span className="block text-[#537247]">
                  clubes cannábicos.
                </span>
              </h2>
            </div>

            <div className="lg:pb-1">
              <p className="max-w-xl text-[15px] leading-7 text-[#172519]/65 sm:text-base md:text-lg">
                Presencia en todo el país: Más de 200 clubes federados sostienen
                la Federación de Clubes Cannábicos de Argentina.
              </p>
            </div>
          </div>

          <div className="mb-7 h-px w-full bg-[#172519]/10 sm:mb-10" />

          {/* =========================
              GRID DE CLUBES
          ========================== */}
          <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-3 md:grid-cols-4 lg:grid-cols-6">
            {clubesVisibles.map((club) => (
              <div
                key={club.id}
                className="group flex aspect-square min-w-0 items-center justify-center rounded-xl border border-[#172519]/10 bg-white/60 p-3 transition duration-300 hover:-translate-y-1 hover:border-[#537247]/30 hover:bg-white hover:shadow-[0_18px_45px_rgba(23,37,25,0.08)] sm:rounded-2xl sm:p-4 lg:p-5"
              >
                {club.logo ? (
                  <div className="relative h-full w-full">
                    <Image
                      src={club.logo}
                      alt={club.nombre}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 16vw"
                      className="object-contain transition duration-300 group-hover:scale-105"
                    />
                  </div>
                ) : (
                  <div className="flex h-full w-full items-center justify-center rounded-lg border border-dashed border-[#172519]/15 sm:rounded-xl">
                    <span className="px-1 text-center text-[10px] font-semibold uppercase tracking-wider text-[#172519]/30 sm:text-xs">
                      {club.nombre}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* =========================
              PAGINACIÓN
          ========================== */}
          <div className="mt-8 flex items-center justify-center gap-4 sm:mt-10 sm:gap-5">
            <button
              type="button"
              onClick={paginaAnterior}
              disabled={paginaActual === 1}
              aria-label="Página anterior de clubes"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#172519]/15 text-base text-[#172519] transition duration-300 hover:border-[#172519] hover:bg-[#172519] hover:text-white disabled:cursor-not-allowed disabled:opacity-25 disabled:hover:border-[#172519]/15 disabled:hover:bg-transparent disabled:hover:text-[#172519] sm:h-11 sm:w-11 sm:text-lg"
            >
              ←
            </button>

            <div className="flex min-w-[72px] items-center justify-center gap-2 sm:min-w-[90px]">
              <span className="text-sm font-bold text-[#172519]">
                {paginaActual}
              </span>

              <span className="text-sm text-[#172519]/30">
                /
              </span>

              <span className="text-sm text-[#172519]/50">
                {totalPaginas}
              </span>
            </div>

            <button
              type="button"
              onClick={paginaSiguiente}
              disabled={paginaActual === totalPaginas}
              aria-label="Página siguiente de clubes"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#172519] text-base text-white transition duration-300 hover:translate-x-1 disabled:cursor-not-allowed disabled:opacity-25 disabled:hover:translate-x-0 sm:h-11 sm:w-11 sm:text-lg"
            >
              →
            </button>
          </div>

          {/* =========================
              BUSCAR UN CLUB
          ========================== */}
          <div className="mt-10 overflow-hidden rounded-2xl bg-[#172519] text-white sm:mt-14 sm:rounded-3xl">
            <div className="grid lg:grid-cols-[1fr_auto] lg:items-center">
              <div className="p-6 sm:p-8 md:p-10 lg:p-12">
                <div className="mb-4 flex items-center gap-3">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-[#6ce17c]" />

                  <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/40 sm:text-xs">
                    Red federal
                  </span>
                </div>

                <h3 className="max-w-2xl text-[1.65rem] font-semibold leading-tight tracking-[-0.03em] sm:text-2xl md:text-3xl">
                  ¿Estás buscando un club al cual pertenecer?
                </h3>

                <p className="mt-3 max-w-2xl text-sm leading-6 text-white/50 md:text-base">
                  Dejanos tu localidad y tus datos de contacto para ayudarte a
                  encontrar un club de la red.
                </p>
              </div>

              <div className="border-t border-white/10 p-6 sm:p-8 lg:border-l lg:border-t-0 lg:p-12">
                <button
                  type="button"
                  onClick={() => setModalBuscarClub(true)}
                  className="group inline-flex w-full items-center justify-between gap-5 rounded-full bg-[#6ce17c] px-6 py-4 text-sm font-bold text-[#172519] transition duration-300 hover:-translate-y-1 hover:bg-[#7bea89] sm:w-auto sm:justify-center sm:px-7"
                >
                  Buscar un club

                  <span className="transition duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* =========================
              PIE
          ========================== */}
          <div className="mt-10 flex flex-col gap-6 border-t border-[#172519]/10 pt-7 sm:mt-12 sm:flex-row sm:items-center sm:justify-between sm:gap-5 sm:pt-8">
            <p className="max-w-xl text-sm leading-6 text-[#172519]/55">
              Una red construida por organizaciones de distintos puntos del
              país.
            </p>

            <a
              href="#contacto"
              className="group inline-flex w-fit items-center gap-3 text-sm font-bold text-[#172519]"
            >
              Sumá tu club a la red

              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#172519] text-white transition duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>
      </section>

      <BuscarClubModal
        abierto={modalBuscarClub}
        onClose={() => setModalBuscarClub(false)}
      />
    </>
  );
}