
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
      <section
        id="expo-galeria"
        aria-labelledby="titulo-expo-galeria"
        className="relative overflow-hidden bg-[#E8E7DC] pb-20 pt-0 sm:pb-24"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          {/* ENCABEZADO DESPLEGABLE */}
          <div className="flex flex-col gap-6 border-t border-[#283524]/15 pt-8 sm:flex-row sm:items-center sm:justify-between sm:pt-10">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="h-2 w-2 rounded-full bg-[#4D6645]"
                />

                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#4D6645]">
                  Ediciones anteriores
                </span>
              </div>

              <h2
                id="titulo-expo-galeria"
                className="text-3xl font-semibold tracking-tight text-[#283524] sm:text-4xl"
              >
                Así se vivió Expo Cannabis
              </h2>
            </div>

            {/* BOTÓN PARA MOSTRAR U OCULTAR LA GALERÍA */}
            <button
              type="button"
              aria-expanded={galeriaAbierta}
              aria-controls="contenido-galeria-expo"
              onClick={() => setGaleriaAbierta((actual) => !actual)}
              className="inline-flex min-h-12 w-fit shrink-0 items-center justify-center rounded-lg bg-[#4D6645] px-6 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#3D5337] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#283524]"
            >
              {galeriaAbierta ? "Ocultar galería" : "Ver galería"}
            </button>
          </div>

          {/* CONTENIDO OCULTO INICIALMENTE */}
          <div
            id="contenido-galeria-expo"
            hidden={!galeriaAbierta}
            className={galeriaAbierta ? "pt-10" : "hidden"}
          >
            {/* MOSAICO DESKTOP */}
            <div className="hidden auto-rows-[220px] grid-cols-4 gap-4 md:grid lg:auto-rows-[245px]">
              {fotos.map((foto, index) => (
                <button
                  key={foto.src}
                  type="button"
                  onClick={() => abrir(index)}
                  aria-label={`Ampliar fotografía: ${foto.titulo}`}
                  className={`group relative cursor-zoom-in overflow-hidden rounded-[20px] bg-[#283524] text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#4D6645] ${foto.clase}`}
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

                  <span
                    aria-hidden="true"
                    className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-black/25 text-xl text-white opacity-0 backdrop-blur-sm transition group-hover:opacity-100 group-focus-visible:opacity-100"
                  >
                    +
                  </span>
                </button>
              ))}
            </div>

            {/* CARRUSEL MOBILE */}
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
              <div className="mt-5 flex items-center justify-between gap-4">
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
                        Math.min(fotos.length - 1, fotoMobile + 1)
                      )
                    }
                    disabled={fotoMobile === fotos.length - 1}
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
          <button
            ref={cerrarRef}
            type="button"
            onClick={cerrar}
            aria-label="Cerrar fotografía"
            className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-2xl text-white transition hover:bg-white/20 sm:right-8 sm:top-8"
          >
            ×
          </button>

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
