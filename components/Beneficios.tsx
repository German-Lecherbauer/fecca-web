
"use client";

import Image from "next/image";

const herramientas = [
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
    web:
      "https://wa.me/5491158869144?text=Hola.%20Soy%20asociado%20a%20FECCA%20y%20quer%C3%ADa%20consultar%20por%20el%20descuento%20para%20socios%20en%20las%20sesiones%20de%20acupuntura.",
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
];

const WHATSAPP_REPROCANN =
  "https://wa.me/5491127831516?text=Hola.%20Les%20escribo%20para%20consultar%20respecto%20a%20los%20tr%C3%A1mites%20en%20REPROCANN.%20Mi%20nombre%20es%20";

export default function Beneficios() {
  return (
    <>
      {/* HERRAMIENTAS PARA TU CLUB */}
      <section
        id="herramientas"
        aria-labelledby="titulo-herramientas"
        className="relative overflow-hidden bg-[#283524] py-20 text-white sm:py-24 lg:py-28"
      >
        <div className="pointer-events-none absolute -right-64 top-0 h-[420px] w-[420px] rounded-full bg-[#4D6645]/20 blur-[110px] sm:-right-40 sm:h-[520px] sm:w-[520px] sm:blur-[140px]" />

        <div className="pointer-events-none absolute -bottom-52 -left-52 h-[360px] w-[360px] rounded-full bg-[#D0BC84]/10 blur-[100px] sm:-left-32 sm:h-[420px] sm:w-[420px] sm:blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          {/* ENCABEZADO */}
          <div className="grid gap-6 sm:gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end lg:gap-10">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="h-2 w-2 shrink-0 rounded-full bg-[#D0BC84]"
                />

                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-white/75">
                  Comisión de Salud y Educación
                </span>
              </div>

              <h2
                id="titulo-herramientas"
                className="max-w-3xl text-[2.35rem] font-semibold leading-[1.08] tracking-[-0.045em] sm:text-4xl md:text-5xl lg:text-6xl"
              >
                Herramientas para
                <span className="block text-[#D0BC84]">
                  tu club.
                </span>
              </h2>
            </div>

            <p className="max-w-xl text-base leading-7 text-white/75 md:text-lg md:leading-8">
              Salud, educación y acompañamiento para fortalecer a
              los clubes que forman parte de la red federal de FECCA.
            </p>
          </div>

          <div className="my-10 h-px w-full bg-white/15 sm:my-12 lg:my-14" />

          {/* TARJETAS DE HERRAMIENTAS */}
          <div className="grid gap-4 lg:grid-cols-3">
            {herramientas.map((herramienta) => (
              <article
                key={herramienta.numero}
                className="flex min-h-[250px] flex-col justify-between rounded-xl border border-white/15 bg-[#30402B] p-7 transition-colors duration-300 hover:bg-[#394C33] sm:min-h-[270px] sm:p-8 lg:min-h-[310px] lg:p-10"
              >
                <span className="text-sm font-semibold tracking-[0.15em] text-[#D0BC84]">
                  {herramienta.numero}
                </span>

                <div className="mt-12">
                  <h3 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
                    {herramienta.titulo}
                  </h3>

                  <p className="mt-4 max-w-sm text-base leading-7 text-white/75">
                    {herramienta.texto}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {/* ACOMPAÑAMIENTO REPROCANN */}
          <div className="mt-12 grid overflow-hidden rounded-xl border border-white/15 bg-[#30402B] lg:mt-16 lg:grid-cols-[1fr_auto]">
            <div className="p-7 sm:p-9 lg:p-12">
              <div className="mb-5 flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="h-2 w-2 shrink-0 rounded-full bg-[#D0BC84]"
                />

                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-white/70">
                  Acompañamiento FECCA
                </span>
              </div>

              <h3 className="text-[1.7rem] font-semibold leading-tight tracking-tight sm:text-3xl md:text-4xl">
                ¿Problemas con tu REPROCANN?
              </h3>

              <p className="mt-4 max-w-2xl text-base leading-7 text-white/75">
                Contactate por WhatsApp con FECCA para recibir
                orientación sobre tus trámites de REPROCANN.
              </p>
            </div>

            <div className="flex items-center border-t border-white/15 p-7 sm:p-9 lg:border-l lg:border-t-0 lg:p-12">
              <a
                href={WHATSAPP_REPROCANN}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-lg bg-[#D0BC84] px-7 py-3 text-base font-semibold text-[#283524] transition-colors duration-300 hover:bg-[#C3AE70] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:w-auto"
              >
                Pedir ayuda
              </a>
            </div>
          </div>

          {/* CONTACTO DE LA COMISIÓN */}
          <div className="mt-8 flex flex-col gap-3 text-sm text-white/70 sm:flex-row sm:items-center sm:justify-between">
            <p>Comisión de Salud y Educación</p>

            <a
              href="mailto:salud@fecca.com.ar"
              className="w-fit break-all text-[#D0BC84] transition-colors hover:text-white sm:break-normal"
            >
              salud@fecca.com.ar
            </a>
          </div>
        </div>
      </section>

      {/* BENEFICIOS PARA TU CLUB */}
      <section
        id="beneficios"
        aria-labelledby="titulo-beneficios"
        className="relative overflow-hidden bg-[#283524] pb-20 text-white sm:pb-24 lg:pb-28"
      >
        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="mb-10 h-px w-full bg-white/15 sm:mb-14" />

          {/* ENCABEZADO DE MARCAS */}
          <div className="mb-8 flex flex-col gap-4 sm:mb-10 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="h-2 w-2 shrink-0 rounded-full bg-[#D0BC84]"
                />

                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-white/65">
                  Alianzas
                </span>
              </div>

              <h2
                id="titulo-beneficios"
                className="text-3xl font-semibold tracking-tight text-white sm:text-4xl"
              >
                Beneficios para tu club
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-white/65 sm:text-base">
              Descuentos y ventajas para socios de FECCA con
              marcas aliadas.
            </p>
          </div>

          {/* GRILLA DE LOGOS */}
          <div className="mx-auto grid max-w-[900px] grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3 lg:gap-5">
            {marcasAliadas.map((marca) => {
              const contenido = (
                <div className="relative h-full w-full">
                  <Image
                    src={marca.logo}
                    alt={`Logo de ${marca.nombre}`}
                    fill
                    sizes="(max-width: 1024px) 50vw, 33vw"
                    className="object-contain"
                  />
                </div>
              );

              const clases =
                "flex aspect-square min-w-0 items-center justify-center rounded-lg border border-[rgba(40,53,36,0.14)] bg-white p-6";

              if (marca.web) {
                return (
                  <a
                    key={marca.id}
                    href={marca.web}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visitar ${marca.nombre}`}
                    className={`${clases} transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.18)] focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[#D0BC84]`}
                  >
                    {contenido}
                  </a>
                );
              }

              return (
                <div
                  key={marca.id}
                  className={clases}
                  title={`${marca.nombre} - Enlace próximamente`}
                >
                  {contenido}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
