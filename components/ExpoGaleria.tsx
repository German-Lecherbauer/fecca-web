
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
  const [galeriaAbierta, setGaleriaAbierta] = useState(false);
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
      {/* SECCIÓN GALERÍA */}
      <section
        id="expo-galeria"
        aria-labelledby="titulo-expo-galeria"
        className="relative z-10 bg-[#E8E7DC] pb-5 pt-3 sm:pb-6 sm:pt-4 lg:pb-7 lg:pt-4"
      >
        {/* CONTENEDOR ALINEADO CON EL HERO */}
        <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-6 lg:px-8">
          {/* ENCABEZADO COMPACTO */}
          <div className="flex flex-col gap-3 border-t border-[#283524]/15 pt-4 sm:min-h-[105px] sm:flex-row sm:items-center sm:justify-between sm:pt-4">
            <div>
              <div className="mb-3 flex items-center gap-2.5">
                <span
                  aria-hidden="true"
                  className="h-2 w-2 shrink-0 rounded-full bg-[#4D6645]"
                />

                <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#4D6645] sm:text-xs">
                  Ediciones anteriores
                </span>
              </div>

              <h2
                id="titulo-expo-galeria"
                className="text-[27px] font-semibold leading-tight tracking-tight text-[#283524] sm:text-3xl lg:text-[34px]"
              >
                Así se vivió Expo Cannabis
              </h2>
            </div>

            {/* BOTÓN MOSTRAR / OCULTAR */}
            <button
              type="button"
              aria-expanded={galeriaAbierta}
              aria-controls="contenido-galeria-expo"
              onClick={() =>
                setGaleriaAbierta((actual) => !actual)
              }
              className="inline-flex min-h-10 w-fit shrink-0 items-center justify-center rounded-lg bg-[#4D6645] px-5 py-2.5 text-[13px] font-semibold text-white transition-colors duration-300 hover:bg-[#3D5337] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#283524]"
            >
              {galeriaAbierta ? "Ocultar galería" : "Ver galería"}
            </button>
          </div>

          {/* CONTENIDO DE LA GALERÍA */}
          <div
            id="contenido-galeria-expo"
            hidden={!galeriaAbierta}
            className={galeriaAbierta ? "pt-6 sm:pt-7" : "hidden"}
          >
            {/* MOSAICO DESKTOP */}
            <div className="hidden auto-rows-[170px] grid-cols-4 gap-3 md:grid lg:auto-rows-[200px] lg:gap-4">
              {fotos.map((foto, index) => (
                <button
                  key={foto.src}
                  type="button"
                  onClick={() => abrir(index)}
                  aria-label={`Ampliar fotografía: ${foto.titulo}`}
                  className={`group relative cursor-zoom-in overflow-hidden rounded-2xl bg-[#283524] text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#4D6645] ${foto.clase}`}
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

                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className="mb-1.5 block text-[10px] font-semibold uppercase tracking-[0.16em] text-white/65">
                      Expo Cannabis
                    </span>

                    <p className="text-sm font-semibold text-white sm:text-base">
                      {foto.titulo}
                    </p>
                  </div>

                  <span
                    aria-hidden="true"
                    className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full border border-white/30 bg-black/25 text-lg text-white opacity-0 backdrop-blur-sm transition group-hover:opacity-100 group-focus-visible:opacity-100"
                  >
                    +
                  </span>
                </button>
              ))}
            </div>

            {/* CARRUSEL MÓVIL */}
            <div className="md:hidden">
              <div
                ref={carruselRef}
                onScroll={actualizarFotoMobile}
                className="flex snap-x snap-mandatory gap-0 overflow-x-auto overscroll-x-contain rounded-2xl [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              >
                {fotos.map((foto, index) => (
                  <button
                    key={foto.src}
                    type="button"
                    onClick={() => abrir(index)}
                    aria-label={`Ampliar fotografía: ${foto.titulo}`}
                    className="group relative aspect-[4/5] w-full min-w-full shrink-0 snap-start overflow-hidden bg-[#283524] text-left"
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

              {/* CONTROLES DEL CARRUSEL */}
              <div className="mt-4 flex items-center justify-between gap-4">
                <p className="text-xs text-[#283524]/65">
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
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#283524]/20 text-lg text-[#283524] transition hover:bg-[#283524]/5 disabled:cursor-not-allowed disabled:opacity-30"
                  >
                    ←
                  </button>

                  <span className="min-w-10 text-center text-xs font-semibold tabular-nums text-[#283524]/75">
                    {fotoMobile + 1} / {fotos.length}
                  </span>

                  <button
                    type="button"
                    onClick={() =>
                      irAFoto(
                        Math.min(
                          fotos.length - 1,
                          fotoMobile + 1
                        )
                      )
                    }
                    disabled={
                      fotoMobile === fotos.length - 1
                    }
                    aria-label="Foto siguiente"
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#283524]/20 text-lg text-[#283524] transition hover:bg-[#283524]/5 disabled:cursor-not-allowed disabled:opacity-30"
                  >
                    →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VISOR AMPLIADO */}
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

          {/* FOTO */}
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

          {/* INFORMACIÓN */}
          <div className="pointer-events-none absolute bottom-6 left-1/2 w-full -translate-x-1/2 px-6 text-center">
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
