
export default function NuestraMision() {
  return (
    <section
      id="institucional"
      aria-labelledby="titulo-mision"
      className="scroll-mt-24 bg-[#F1EFE8] pb-8 pt-9 text-[#283524] sm:pb-10 sm:pt-10 lg:pb-12 lg:pt-12"
    >
      {/* CONTENEDOR ALINEADO CON EL HERO */}
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-6 lg:px-8">
        {/* NUESTRA MISIÓN */}
        <div>
          {/* ETIQUETA */}
          <div className="mb-4 flex items-center gap-2.5">
            <span
              aria-hidden="true"
              className="h-2 w-2 shrink-0 rounded-full bg-[#4D6645]"
            />

            <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#4D6645] sm:text-xs">
              Institucional
            </span>
          </div>

          {/* TÍTULO */}
          <h2
            id="titulo-mision"
            className="mb-7 text-[27px] font-semibold leading-tight tracking-tight sm:text-3xl lg:text-[34px]"
          >
            Nuestra misión
          </h2>

          {/* TEXTO INSTITUCIONAL */}
          <div className="max-w-[780px] space-y-5 text-[15px] leading-[1.75] sm:text-base">
            <p>
              Somos la Federación de Clubes Cannábicos de Argentina.
              Nacemos para reunir, acompañar y fortalecer a los clubes
              y comunidades cannábicas de todo el país, construyendo
              una red donde compartir experiencias, conocimiento,
              herramientas y representación. Creemos en un modelo
              de acceso organizado, seguro y responsable, y tenemos
              como norte avanzar hacia una regulación integral que
              también contemple y reconozca el uso adulto del cannabis.
            </p>

            <p>
              Para nosotros, comunicar correctamente también es construir.
              Necesitamos información seria, responsable y colectiva para
              visibilizar el trabajo que realizan los clubes, derribar
              prejuicios y participar activamente de las discusiones
              que definen el presente y el futuro del cannabis en Argentina.
            </p>

            <p>
              Pertenecer a FECCA no es solamente formar parte de una
              federación. Es integrarse a una comunidad nacional de clubes,
              generar vínculos, compartir herramientas, fortalecer la
              representación colectiva y saber que los desafíos de cada
              organización pueden ser acompañados por una red.
            </p>

            <p>
              Un club puede transformar muchísimo desde su territorio.
              Una Federación puede hacer que esa transformación tenga
              alcance nacional.
            </p>

            {/* FRASE DESTACADA */}
            <p className="border-l-[3px] border-[#D0BC84] py-1 pl-4 text-[17px] font-semibold leading-relaxed sm:text-lg">
              Este es nuestro punto de partida. No somos un club.
              Somos la red.
            </p>
          </div>
        </div>

        {/* DOCUMENTO INSTITUCIONAL Y LINKTREE */}
        <div className="mt-8 max-w-[780px]">
          <div className="rounded-xl border border-[#283524]/15 bg-white/40 p-5 transition-colors duration-300 hover:bg-white/60 sm:p-6">
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#4D6645]">
              Institucional
            </p>

            <h3 className="mt-2 text-lg font-semibold tracking-tight text-[#283524] sm:text-xl">
              Conocé más sobre FECCA
            </h3>

            <p className="mt-2 text-[13px] leading-5 text-[#283524]/70 sm:text-sm">
              Accedé al documento institucional de la Federación.
            </p>

            {/* ENLACES INSTITUCIONALES */}
            <div className="mt-5 flex flex-col items-start gap-4 border-t border-[#283524]/10 pt-5 sm:items-end">
              {/* PDF */}
              <a
                href="/documentos/institucional-fecca.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-[13px] font-semibold text-[#4D6645] underline decoration-[#4D6645]/40 underline-offset-4 transition-colors duration-300 hover:text-[#283524] focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#283524]"
              >
                Ver documento institucional (PDF)
              </a>

              {/* LINKTREE */}
              <a
                href="https://linktr.ee/fecca.oficial"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visitar Linktree oficial de FECCA"
                className="inline-flex min-h-10 items-center justify-center rounded-lg bg-[#4D6645] px-6 py-2.5 text-[13px] font-semibold text-[#F1EFE8] transition-colors duration-300 hover:bg-[#3D5337] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#283524]"
              >
                Linktree de FECCA
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
