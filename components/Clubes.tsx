
"use client";

import { useEffect, useRef, useState } from "react";
import BuscarClubModal from "./BuscarClubModal";

const NUMERO_WHATSAPP_ESTUDIO = "5491151656918";

const MENSAJE_WHATSAPP =
  "Hola, estoy interesado en abrir mi club. ¿Qué requisitos se necesitan?";

const WHATSAPP_ESTUDIO_URL =
  `https://wa.me/${NUMERO_WHATSAPP_ESTUDIO}?text=${encodeURIComponent(MENSAJE_WHATSAPP)}`;

const FORMULARIO_CLUBES_URL =
  "https://forms.gle/Vfg7CtPqUTkAZxxV6";

// Duración de los contadores: 3,5 segundos.
const DURACION_CONTADORES = 3500;

function useContador(
  valorFinal: number,
  activo: boolean,
  duracion = DURACION_CONTADORES
) {
  const [valor, setValor] = useState(0);

  useEffect(() => {
    if (!activo) return;

    const inicio = performance.now();
    let frameId = 0;

    const animar = (ahora: number) => {
      const progreso = Math.min((ahora - inicio) / duracion, 1);

      // Progreso lineal: velocidad constante durante toda la animación.
      setValor(Math.round(valorFinal * progreso));

      if (progreso < 1) {
        frameId = requestAnimationFrame(animar);
      }
    };

    frameId = requestAnimationFrame(animar);

    return () => cancelAnimationFrame(frameId);
  }, [activo, valorFinal, duracion]);

  return valor;
}

function EstadisticasRed() {
  const contenedorRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  const clubes = useContador(200, visible);
  const provincias = useContador(22, visible);
  const marcas = useContador(30, visible);

  useEffect(() => {
    const elemento = contenedorRef.current;
    if (!elemento) return;

    const observer = new IntersectionObserver(
      ([entrada]) => {
        if (entrada.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.25,
      }
    );

    observer.observe(elemento);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={contenedorRef}
      className="grid w-full grid-cols-3 gap-2 sm:gap-3 md:max-w-[540px] md:justify-self-end"
      aria-label="Estadísticas de la red federal"
    >
      {/* CLUBES FEDERADOS */}
      <div className="flex min-h-[112px] flex-col items-center justify-center rounded-xl border border-[#D0BC84]/30 bg-[#34432D] px-2 py-4 text-center sm:min-h-[124px] sm:px-3">
        <span className="text-[27px] font-bold leading-none tracking-tight text-[#D0BC84] sm:text-[34px] lg:text-[38px]">
          +{clubes}
        </span>

        <span className="mt-3 text-[10px] font-medium leading-[1.4] text-white/80 sm:text-xs">
          Clubes
          <br />
          federados
        </span>
      </div>

      {/* PROVINCIAS CON PRESENCIA */}
      <div className="flex min-h-[112px] flex-col items-center justify-center rounded-xl border border-[#D0BC84]/30 bg-[#34432D] px-2 py-4 text-center sm:min-h-[124px] sm:px-3">
        <span className="text-[27px] font-bold leading-none tracking-tight text-[#D0BC84] sm:text-[34px] lg:text-[38px]">
          {provincias}
        </span>

        <span className="mt-3 text-[10px] font-medium leading-[1.4] text-white/80 sm:text-xs">
          Provincias
          <br />
          con presencia
        </span>
      </div>

      {/* MARCAS ALIADAS */}
      <div className="flex min-h-[112px] flex-col items-center justify-center rounded-xl border border-[#D0BC84]/30 bg-[#34432D] px-2 py-4 text-center sm:min-h-[124px] sm:px-3">
        <span className="text-[27px] font-bold leading-none tracking-tight text-[#D0BC84] sm:text-[34px] lg:text-[38px]">
          +{marcas}
        </span>

        <span className="mt-3 text-[10px] font-medium leading-[1.4] text-white/80 sm:text-xs">
          Marcas
          <br />
          aliadas
        </span>
      </div>
    </div>
  );
}

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

          {/* ENCABEZADO CON CONTADORES */}
          <div className="grid items-center gap-7 md:grid-cols-2 md:gap-8">
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

            <EstadisticasRed />
          </div>

          {/* SEPARADOR DEL ENCABEZADO */}
          <div className="my-7 h-px w-full bg-white/15 sm:my-8" />

          {/* TARJETA: FORMAR UN CLUB */}
          <div className="mb-4 flex flex-col gap-6 rounded-xl border border-[#D0BC84]/30 bg-[#34432D] p-5 sm:p-6 md:flex-row md:items-center md:justify-between md:gap-8">
            <div className="min-w-0">
              <div className="mb-4 flex items-center gap-2.5">
                <span
                  aria-hidden="true"
                  className="h-2 w-2 shrink-0 rounded-full bg-[#D0BC84]"
                />

                <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#D0BC84] sm:text-xs">
                  Para nuevos proyectos
                </span>
              </div>

              <h3 className="text-xl font-semibold tracking-tight sm:text-[22px]">
                ¿Querés formar un club?
              </h3>

              <p className="mt-3 max-w-[620px] text-[13px] leading-6 text-white/75 sm:text-sm">
                Comunicate con nosotros y recibí orientación sobre
                los requisitos para comenzar tu proyecto.
              </p>
            </div>

            <a
              href={WHATSAPP_ESTUDIO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 w-full shrink-0 items-center justify-center rounded-lg bg-[#D0BC84] px-6 py-2.5 text-[13px] font-semibold text-[#283524] transition-colors duration-300 hover:bg-[#C7B57A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white md:w-auto"
            >
              Consultar por WhatsApp
            </a>
          </div>

          {/* TARJETAS EXISTENTES */}
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
                  href={FORMULARIO_CLUBES_URL}
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
