
"use client";

import Image from "next/image";

type MarcaAliada = {
  id: number;
  nombre: string;
  logo: string;
  web: string | null;
};

const marcasAliadas: MarcaAliada[] = [
  {
    id: 1,
    nombre: "Verde Agua",
    logo: "/images/aliados/verde-agua-hidroponia.png",
    web: "https://www.verdeagua.com.ar/",
  },
  {
    id: 2,
    nombre: "OMAIGAT",
    logo: "/images/aliados/omaigat.png",
    web: "https://www.omaigat.com.ar/",
  },
  {
    id: 3,
    nombre: "Le Caburé",
    logo: "/images/aliados/le-cabure.png",
    web: "https://lecabure.com.ar/",
  },
  {
    id: 4,
    nombre: "Revegetar",
    logo: "/images/aliados/revegetar.png",
    web: "https://revegetar.com.ar/",
  },
  {
    id: 5,
    nombre: "Parameter",
    logo: "/images/aliados/parameter.png",
    web: "https://www.instagram.com/parameter.app/",
  },
  {
    id: 6,
    nombre: "JB Acupuntura",
    logo: "/images/aliados/jb-acupuntura.png",
    web: "https://wa.me/5491158869144?text=Hola.%20Soy%20asociado%20a%20FECCA%20y%20quer%C3%ADa%20consultar%20por%20el%20descuento%20para%20socios%20en%20las%20sesiones%20de%20acupuntura.",
  },
  {
    id: 7,
    nombre: "Morevap",
    logo: "/images/aliados/morevap.png",
    web: "https://morevap.empretienda.com.ar/",
  },
  {
    id: 8,
    nombre: "Tu Merchandising",
    logo: "/images/aliados/tumerch.png",
    web: "https://tumerchandising.ar/catalogo/",
  },
  {
    id: 9,
    nombre: "Novatra",
    logo: "/images/aliados/novatra.png",
    web: null,
  },
  {
    id: 10,
    nombre: "Kief",
    logo: "/images/aliados/kief.png",
    web: null,
  },
  {
    id: 11,
    nombre: "La Maga Red",
    logo: "/images/aliados/la-maga-redondo.png",
    web: null,
  },
];

function TarjetaMarca({ marca }: { marca: MarcaAliada }) {
  const clases =
    "flex h-[94px] w-[168px] shrink-0 items-center justify-center rounded-xl border border-[#D0BC84]/20 bg-[#F1EFE8] px-4 py-3 transition-all duration-300 sm:h-[105px] sm:w-[190px] sm:px-5 sm:py-4";

  // Tamaño visual personalizado para cada grupo de logos.
  const logosMasGrandes = [2, 4, 7, 8];

  let escalaLogo = "scale-[1.65]";

  if (logosMasGrandes.includes(marca.id)) {
    escalaLogo = "scale-[2.1]";
  }

  // Verde Agua: más grande.
  if (marca.id === 1) {
    escalaLogo = "scale-[2.5]";
  }

  // Kief: un poco más chico.
  if (marca.id === 10) {
    escalaLogo = "scale-[1.1]";
  }

  // La Maga Red: sin cambios.
  if (marca.id === 11) {
    escalaLogo = "scale-[1.25]";
  }

  const contenido = (
    <div className="relative h-full w-full">
      <Image
        src={marca.logo}
        alt={`Logo de ${marca.nombre}`}
        fill
        sizes="(max-width: 640px) 168px, 190px"
        className={`${escalaLogo} object-contain`}
      />
    </div>
  );

  if (!marca.web) {
    return (
      <div
        className={clases}
        title={`${marca.nombre} - Enlace próximamente`}
      >
        {contenido}
      </div>
    );
  }

  return (
    <a
      href={marca.web}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visitar ${marca.nombre}`}
      className={`${clases} hover:-translate-y-1 hover:border-[#D0BC84] hover:bg-white hover:shadow-[0_12px_30px_rgba(0,0,0,0.2)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D0BC84]`}
    >
      {contenido}
    </a>
  );
}

export default function Alianzas() {
  return (
    <section
      id="beneficios"
      aria-labelledby="titulo-beneficios"
      className="scroll-mt-24 bg-[#283524] pb-6 pt-0 text-white sm:pb-7 sm:pt-0 lg:pb-8 lg:pt-0"
    >
      {/* CONTENEDOR AMPLIADO A 1600 PX */}
      <div className="mx-auto w-full max-w-[1600px] px-5 sm:px-6 lg:px-8">
        <div className="rounded-xl border border-white/15 bg-white/[0.04] p-5 sm:p-7">
          {/* ENCABEZADO */}
          <div className="mb-7">
            <div className="mb-4 flex items-center gap-3">
              <span
                aria-hidden="true"
                className="h-2 w-2 rounded-full bg-[#D0BC84]"
              />

              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#D0BC84]">
                Alianzas
              </span>
            </div>

            <h2
              id="titulo-beneficios"
              className="text-2xl font-semibold tracking-tight sm:text-3xl"
            >
              Beneficios para tu club
            </h2>
          </div>

          {/* CARRUSEL INFINITO */}
          <div className="rounded-xl border border-white/10 bg-[#203126] px-4 py-7 sm:px-6 sm:py-9">
            <div
              className="marcas-carrusel relative mx-auto w-full max-w-[1450px] overflow-hidden py-2 [mask-image:linear-gradient(to_right,transparent,black_0.5%,black_99.5%,transparent)]"
              aria-label="Marcas aliadas de FECCA"
            >
              <div className="marcas-pista flex w-max">
                {/* PRIMERA VUELTA */}
                <div className="flex shrink-0 gap-4 pr-4 sm:gap-5 sm:pr-5">
                  {marcasAliadas.map((marca) => (
                    <TarjetaMarca
                      key={marca.id}
                      marca={marca}
                    />
                  ))}
                </div>

                {/* COPIA PARA MOVIMIENTO CONTINUO */}
                <div
                  className="flex shrink-0 gap-4 pr-4 sm:gap-5 sm:pr-5"
                  aria-hidden="true"
                  inert
                >
                  {marcasAliadas.map((marca) => (
                    <TarjetaMarca
                      key={`copia-${marca.id}`}
                      marca={marca}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* INVITACIÓN PARA NUEVAS MARCAS */}
          <div className="mt-7 border-t border-white/15 pt-7 sm:mt-8 sm:pt-8">
            <div className="flex flex-col items-start justify-between gap-5 md:flex-row md:items-center md:gap-8">
              <div className="max-w-2xl">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#D0BC84]">
                  Sumate a nuestra red
                </p>

                <h3 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                  ¿Tenés una marca?
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/75">
                  Sumate a la red de beneficios de FECCA y conectá
                  con nuestra comunidad de clubes federados.
                </p>
              </div>

              <button
                type="button"
                className="inline-flex min-h-12 w-full shrink-0 items-center justify-center rounded-lg bg-[#D0BC84] px-7 py-3 text-sm font-semibold text-[#283524] transition-colors duration-300 hover:bg-[#C7B57A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:w-auto"
              >
                Quiero sumar mi marca
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .marcas-pista {
          animation: desplazar-marcas 38s linear infinite;
          will-change: transform;
        }

        .marcas-carrusel:hover .marcas-pista,
        .marcas-carrusel:focus-within .marcas-pista {
          animation-play-state: paused;
        }

        @keyframes desplazar-marcas {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .marcas-pista {
            animation: none;
          }

          .marcas-carrusel {
            overflow-x: auto;
          }
        }
      `}</style>
    </section>
  );
}
