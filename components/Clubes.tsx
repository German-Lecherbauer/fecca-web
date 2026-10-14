
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import BuscarClubModal from "./BuscarClubModal";

// CONFIGURACIÓN
const MOSTRAR_GRILLA_CLUBES = false;

const TOTAL_CLUBES = 114;
const CLUBES_MOBILE = 6;
const CLUBES_DESKTOP = 12;

// FECCA8 no está disponible actualmente.
const LOGOS_DISPONIBLES = [
  1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13,
];

const clubes = Array.from({ length: TOTAL_CLUBES }, (_, index) => {
  const numero = index + 1;

  return {
    id: numero,
    nombre: `Club ${numero}`,
    logo: LOGOS_DISPONIBLES.includes(numero)
      ? `/images/clubes/FECCA${numero}.jpg`
      : null,
  };
});

export default function Clubes() {
  const [paginaActual, setPaginaActual] = useState(1);
  const [modalBuscarClub, setModalBuscarClub] = useState(false);
  const [clubesPorPagina, setClubesPorPagina] =
    useState(CLUBES_DESKTOP);

  // Adaptar paginación a mobile y desktop
  useEffect(() => {
    if (!MOSTRAR_GRILLA_CLUBES) return;

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

  const inicio = (paginaActual - 1) * clubesPorPagina;
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
        aria-labelledby="titulo-clubes"
        className="relative z-20 overflow-hidden bg-[#283524] py-20 text-white sm:py-24 lg:py-28"
      >
        {/* Decoración */}
        <div className="pointer-events-none absolute -right-64 top-20 h-[380px] w-[380px] rounded-full bg-[#6ce17c]/10 blur-[100px] sm:-right-40 sm:h-[450px] sm:w-[450px] sm:blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          {/* ENCABEZADO */}
          <div className="mb-10 grid gap-6 sm:mb-12 sm:gap-8 lg:mb-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <div className="mb-4 flex items-center gap-3 sm:mb-5">
                <span
                  aria-hidden="true"
                  className="h-2 w-2 shrink-0 rounded-full bg-[#6ce17c]"
                />

                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/50 sm:text-xs sm:tracking-[0.2em]">
                  Nuestra red
                </span>
              </div>

              <h2
                id="titulo-clubes"
                className="max-w-xl text-[2.35rem] font-semibold leading-[1.04] tracking-[-0.045em] sm:text-4xl md:text-5xl lg:text-6xl"
              >
                Red federal de
                <span className="block text-[#d8c47f]">
                  clubes cannábicos.
                </span>
              </h2>
            </div>

            <div className="lg:pb-1">
              <p className="max-w-xl text-[15px] leading-7 text-white/65 sm:text-base md:text-lg">
                Presencia en todo el país: más de 200 clubes
                federados sostienen la Federación de Clubes
                Cannábicos de Argentina.
              </p>
            </div>
          </div>

          <div className="mb-7 h-px w-full bg-white/10 sm:mb-10" />

          {/* GRILLA Y PAGINACIÓN: OCULTAS TEMPORALMENTE */}
          {MOSTRAR_GRILLA_CLUBES && (
            <>
              {/* GRID DE CLUBES */}
              <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-3 md:grid-cols-4 lg:grid-cols-6">
                {clubesVisibles.map((club) => (
                  <div
                    key={club.id}
                    className="group flex aspect-square min-w-0 items-center justify-center rounded-xl border border-white/10 bg-[#f3f0e7] p-3 transition duration-300 hover:-translate-y-1 hover:border-[#d8c47f]/40 hover:bg-white hover:shadow-[0_18px_45px_rgba(0,0,0,0.18)] sm:p-4 lg:p-5"
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
                      <div className="flex h-full w-full items-center justify-center rounded-lg border border-dashed border-[#172519]/15">
                        <span className="px-1 text-center text-[10px] font-semibold uppercase tracking-wider text-[#172519]/35 sm:text-xs">
                          {club.nombre}
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* PAGINACIÓN */}
              <div className="mt-8 flex items-center justify-center gap-4 sm:mt-10 sm:gap-5">
                <button
                  type="button"
                  onClick={paginaAnterior}
                  disabled={paginaActual === 1}
                  aria-label="Página anterior de clubes"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-base text-white transition duration-300 hover:border-[#d8c47f] hover:bg-[#d8c47f] hover:text-[#172519] disabled:cursor-not-allowed disabled:opacity-25 disabled:hover:border-white/20 disabled:hover:bg-transparent disabled:hover:text-white sm:h-11 sm:w-11 sm:text-lg"
                >
                  ←
                </button>

                <div className="flex min-w-[72px] items-center justify-center gap-2 sm:min-w-[90px]">
                  <span className="text-sm font-bold text-white">
                    {paginaActual}
                  </span>
                  <span className="text-sm text-white/30">
                    /
                  </span>
                  <span className="text-sm text-white/50">
                    {totalPaginas}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={paginaSiguiente}
                  disabled={paginaActual === totalPaginas}
                  aria-label="Página siguiente de clubes"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[#6ce17c] text-base text-[#172519] transition duration-300 hover:bg-[#7bea89] disabled:cursor-not-allowed disabled:opacity-25 sm:h-11 sm:w-11 sm:text-lg"
                >
                  →
                </button>
              </div>
            </>
          )}

          {/* ACCIONES PRINCIPALES DE LA RED */}
          <div
            className={`grid gap-4 md:grid-cols-2 lg:gap-6 ${
              MOSTRAR_GRILLA_CLUBES
                ? "mt-10 sm:mt-14"
                : "mt-8"
            }`}
          >
            {/* BUSCAR UN CLUB */}
            <article className="flex h-full flex-col rounded-xl border border-white/10 bg-[#223628] p-6 transition-colors duration-300 hover:border-white/20 sm:p-8 lg:p-10">
              <div className="mb-5 flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="h-2 w-2 shrink-0 rounded-full bg-[#6ce17c]"
                />
                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/50 sm:text-xs">
                  Para personas
                </span>
              </div>

              <h3 className="text-[1.65rem] font-semibold leading-tight tracking-[-0.03em] sm:text-2xl lg:text-3xl">
                ¿Estás buscando un club?
              </h3>

              <p className="mt-4 max-w-lg text-sm leading-7 text-white/65 md:text-base">
                Dejanos tu localidad y tus datos de contacto
                para ayudarte a encontrar un club de la red.
              </p>

              <div className="mt-auto pt-8">
                <button
                  type="button"
                  onClick={() => setModalBuscarClub(true)}
                  className="inline-flex min-h-12 w-full items-center justify-center rounded-lg bg-[#4D6645] px-7 py-3 text-base font-semibold text-white transition-colors duration-300 hover:bg-[#5D7954] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:w-auto sm:min-w-[210px]"
                >
                  Buscar un club
                  <span aria-hidden="true" className="ml-3">
                    ↗
                  </span>
                </button>
              </div>
            </article>

            {/* SUMAR UN CLUB */}
            <article className="flex h-full flex-col rounded-xl border border-[#D0BC84]/30 bg-[#30402B] p-6 transition-colors duration-300 hover:border-[#D0BC84]/60 sm:p-8 lg:p-10">
              <div className="mb-5 flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="h-2 w-2 shrink-0 rounded-full bg-[#D0BC84]"
                />
                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#D0BC84] sm:text-xs">
                  Para organizaciones
                </span>
              </div>

              <h3 className="text-[1.65rem] font-semibold leading-tight tracking-[-0.03em] sm:text-2xl lg:text-3xl">
                ¿Querés sumar tu club a la red?
              </h3>

              <p className="mt-4 max-w-lg text-sm leading-7 text-white/65 md:text-base">
                Formá parte de la Federación de Clubes
                Cannábicos de Argentina y fortalecé
                nuestra red federal.
              </p>

              <div className="mt-auto pt-8">
                <a
                  href="#contacto"
                  className="inline-flex min-h-12 w-full items-center justify-center rounded-lg bg-[#D0BC84] px-7 py-3 text-base font-semibold text-[#283524] transition-colors duration-300 hover:bg-[#C7B57A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:w-auto sm:min-w-[210px]"
                >
                  Sumá tu club
                  <span aria-hidden="true" className="ml-3">
                    ↗
                  </span>
                </a>
              </div>
            </article>
          </div>

          {/* PIE */}
          <div className="mt-10 border-t border-white/10 pt-7 sm:mt-12 sm:pt-8">
            <p className="text-sm leading-6 text-white/55">
              Una red construida por organizaciones de
              distintos puntos del país.
            </p>
          </div>
        </div>
      </section>

      {/* MODAL BUSCAR CLUB */}
      <BuscarClubModal
        abierto={modalBuscarClub}
        onClose={() => setModalBuscarClub(false)}
      />
    </>
  );
}
