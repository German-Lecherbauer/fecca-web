
"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

const fotos = [
  {
    src: "/images/expo/expo-conferencia.jpg",
    alt: "Conferencia con público en Expo Cannabis",
    titulo: "Conferencias y encuentros",
    clase: "md:col-span-2 md:row-span-2",
  },
  {
    src: "/images/expo/expo-cultivo.jpg",
    alt: "Exhibición de plantas en Expo Cannabis",
    titulo: "Cultivo e innovación",
    clase: "",
  },
  {
    src: "/images/expo/expo-salud.jpg",
    alt: "Profesional de salud conversando con una visitante",
    titulo: "Salud y asesoramiento",
    clase: "",
  },
  {
    src: "/images/expo/expo-visitantes.jpg",
    alt: "Visitantes observando plantas",
    titulo: "Experiencias compartidas",
    clase: "",
  },
  {
    src: "/images/expo/expo-negocios.jpg",
    alt: "Participantes conversando durante el evento",
    titulo: "Espacios de encuentro",
    clase: "",
  },
  {
    src: "/images/expo/expo-hongos.jpg",
    alt: "Exhibición de hongos",
    titulo: "Conocimiento y ciencia",
    clase: "",
  },
  {
    src: "/images/expo/expo-huerta.jpg",
    alt: "Niño participando de una actividad de huerta",
    titulo: "Naturaleza y comunidad",
    clase: "",
  },
  {
    src: "/images/expo/expo-networking.jpg",
    alt: "Encuentro entre profesionales",
    titulo: "Vínculos profesionales",
    clase: "",
  },
  {
    src: "/images/expo/expo-asesoramiento.jpg",
    alt: "Profesional brindando información sobre cannabis medicinal",
    titulo: "Información para todos",
    clase: "",
  },
];

export default function ExpoGaleria() {
  const [fotoActiva, setFotoActiva] = useState<number | null>(null);
  const [fotoMobile, setFotoMobile] = useState(0);

  const carruselRef = useRef<HTMLDivElement>(null);
  const cerrarRef = useRef<HTMLButtonElement>(null);
  const disparadorRef = useRef<HTMLButtonElement | null>(null);

  const cerrar = useCallback(() => {
    setFotoActiva(null);
  }, []);

  const siguiente = useCallback(() => {
    setFotoActiva((actual) =>
      actual === null ? null : (actual + 1) % fotos.length
    );
  }, []);

  const anterior = useCallback(() => {
    setFotoActiva((actual) =>
      actual === null
        ? null
        : (actual - 1 + fotos.length) % fotos.length
    );
  }, []);

  const abrir = (index: number) => {
    disparadorRef.current =
      document.activeElement as HTMLButtonElement;
    setFotoActiva(index);
  };

  useEffect(() => {
    if (fotoActiva === null) return;

    const overflowAnterior = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    cerrarRef.current?.focus();

    function manejarTeclado(event: KeyboardEvent) {
      if (event.key === "Escape") cerrar();
      if (event.key === "ArrowRight") siguiente();
      if (event.key === "ArrowLeft") anterior();
    }

    window.addEventListener("keydown", manejarTeclado);

    return () => {
      document.body.style.overflow = overflowAnterior;
      window.removeEventListener("keydown", manejarTeclado);
    };
  }, [fotoActiva, cerrar, siguiente, anterior]);

  useEffect(() => {
    if (fotoActiva === null) {
      disparadorRef.current?.focus();
    }
  }, [fotoActiva]);

  const actualizarFotoMobile = () => {
    const carrusel = carruselRef.current;

    if (!carrusel || carrusel.clientWidth === 0) return;

    const indice = Math.round(
      carrusel.scrollLeft / carrusel.clientWidth
    );

    setFotoMobile(
      Math.max(0, Math.min(indice, fotos.length - 1))
    );
  };

  const irAFoto = (index: number) => {
    const carrusel = carruselRef.current;

    if (!carrusel) return;

    carrusel.scrollTo({
      left: index * carrusel.clientWidth,
      behavior: "smooth",
    });

    setFotoMobile(index);
  };

  return (
    <>
      <section
        id="expo-galeria"
        className="relative overflow-hidden bg-[#f3f0e7] pb-20 pt-0 sm:pb-24"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          {/* ENCABEZADO - SIN SEGUNDA RAYA */}
          <div className="mb-8 flex flex-col gap-4 pt-8 sm:mb-10 sm:pt-10 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[#537247]" />

                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#537247] sm:text-xs">
                  Ediciones anteriores
                </span>
              </div>

              <h2 className="text-4xl font-semibold leading-[1.08] tracking-[-0.045em] text-[#172519] sm:text-5xl lg:text-6xl">
                Así se vivió
                <span className="block text-[#537247]">
                  Expo Cannabis.
                </span>
              </h2>
            </div>

          </div>

          {/* MOSAICO DESKTOP */}
          <div className="hidden auto-rows-[220px] grid-cols-4 gap-4 md:grid lg:auto-rows-[245px]">
            {fotos.map((foto, index) => (
              <button
                key={foto.src}
                type="button"
                onClick={() => abrir(index)}
                aria-label={`Ampliar fotografía: ${foto.titulo}`}
                className={`group relative cursor-zoom-in overflow-hidden rounded-[20px] bg-[#172519] text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#537247] ${foto.clase}`}
              >
                <Image
                  src={foto.src}
                  alt={foto.alt}
                  fill
                  sizes={
                    index === 0
                      ? "(max-width: 1024px) 50vw, 50vw"
                      : "25vw"
                  }
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <span className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.18em] text-white/65">
                    Expo Cannabis
                  </span>

                  <p className="text-base font-semibold text-white">
                    {foto.titulo}
                  </p>
                </div>

                <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-black/25 text-xl text-white opacity-0 backdrop-blur-sm transition group-hover:opacity-100">
                  +
                </span>
              </button>
            ))}
          </div>

          {/* CARRUSEL MOBILE: UNA FOTO POR VEZ */}
          <div className="md:hidden">
            <div
              ref={carruselRef}
              onScroll={actualizarFotoMobile}
              className="flex snap-x snap-mandatory gap-0 overflow-x-auto overscroll-x-contain rounded-[20px] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {fotos.map((foto, index) => (
                <button
                  key={foto.src}
                  type="button"
                  onClick={() => abrir(index)}
                  aria-label={`Ampliar fotografía: ${foto.titulo}`}
                  className="group relative aspect-[4/5] w-full min-w-full shrink-0 snap-start overflow-hidden bg-[#172519] text-left"
                >
                  <Image
                    src={foto.src}
                    alt={foto.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <span className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.16em] text-white/65">
                      Expo Cannabis
                    </span>

                    <p className="text-lg font-semibold text-white">
                      {foto.titulo}
                    </p>
                  </div>
                </button>
              ))}
            </div>

            {/* INDICADOR Y NAVEGACIÓN */}
            <div className="mt-5 flex items-center justify-between gap-4">
              <p className="text-xs text-[#172519]/50">
                Deslizá para explorar
              </p>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() =>
                    irAFoto(Math.max(0, fotoMobile - 1))
                  }
                  disabled={fotoMobile === 0}
                  aria-label="Foto anterior"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[#172519]/15 text-lg text-[#172519] transition hover:bg-[#172519]/5 disabled:cursor-not-allowed disabled:opacity-30"
                >
                  ←
                </button>

                <span className="min-w-10 text-center text-xs font-semibold tabular-nums text-[#172519]/65">
                  {fotoMobile + 1} / {fotos.length}
                </span>

                <button
                  type="button"
                  onClick={() =>
                    irAFoto(
                      Math.min(fotos.length - 1, fotoMobile + 1)
                    )
                  }
                  disabled={fotoMobile === fotos.length - 1}
                  aria-label="Foto siguiente"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[#172519]/15 text-lg text-[#172519] transition hover:bg-[#172519]/5 disabled:cursor-not-allowed disabled:opacity-30"
                >
                  →
                </button>
              </div>
            </div>
          </div>

          {/* CIERRE - SIN TEXTO DE NUEVE MOMENTOS */}
          <div className="mt-8 flex justify-end border-t border-[#172519]/10 pt-6">
            <a
              href="https://expocannabis.com.ar/entradas/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.12em] text-[#537247] transition hover:text-[#172519]"
            >
              Expo Cannabis 2026

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                ↗
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      {fotoActiva !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Galería de fotografías de Expo Cannabis"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 px-4 py-20 backdrop-blur-md"
          onClick={cerrar}
        >
          {/* CERRAR */}
          <button
            ref={cerrarRef}
            type="button"
            onClick={cerrar}
            aria-label="Cerrar fotografía"
            className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-2xl text-white transition hover:bg-white/20 sm:right-8 sm:top-8"
          >
            ×
          </button>

          {/* ANTERIOR */}
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              anterior();
            }}
            aria-label="Fotografía anterior"
            className="absolute left-2 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-2xl text-white transition hover:bg-white/20 sm:left-8"
          >
            ‹
          </button>

          {/* FOTO AMPLIADA */}
          <div
            className="relative h-full max-h-[75vh] w-full max-w-6xl"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={fotos[fotoActiva].src}
              alt={fotos[fotoActiva].alt}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </div>

          {/* SIGUIENTE */}
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              siguiente();
            }}
            aria-label="Fotografía siguiente"
            className="absolute right-2 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-2xl text-white transition hover:bg-white/20 sm:right-8"
          >
            ›
          </button>

          {/* PIE DEL LIGHTBOX */}
          <div className="absolute bottom-6 left-1/2 w-full -translate-x-1/2 px-6 text-center">
            <p className="text-sm font-semibold text-white">
              {fotos[fotoActiva].titulo}
            </p>

            <p className="mt-1 text-xs text-white/50">
              {fotoActiva + 1} de {fotos.length}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
