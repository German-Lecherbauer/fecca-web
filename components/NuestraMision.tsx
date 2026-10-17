
export default function NuestraMision() {
  return (
    <section
      id="institucional"
      aria-labelledby="titulo-mision"
      className="scroll-mt-24 bg-[#F1EFE8] pb-8 pt-10 text-[#283524] sm:pb-10 sm:pt-12 lg:pb-10 lg:pt-10"
    >
      {/* CONTENEDOR GENERAL DE 1600 PX */}
      <div className="mx-auto w-full max-w-[1600px] px-5 sm:px-6 lg:px-8">
        {/* NUESTRA MISIÓN */}
        <div>
          <div className="mb-5 flex items-center gap-3">
            <span
              aria-hidden="true"
              className="h-2 w-2 rounded-full bg-[#4D6645]"
            />

            <span className="text-sm font-semibold uppercase tracking-[0.14em] text-[#4D6645]">
              Institucional
            </span>
          </div>

          <h2
            id="titulo-mision"
            className="mb-10 text-[28px] font-semibold leading-tight tracking-tight sm:text-4xl lg:text-[40px]"
          >
            Nuestra misión
          </h2>

          {/* TEXTO CON ANCHO DE LECTURA CONTROLADO */}
          <div className="max-w-[850px] space-y-7 text-[18px] leading-[1.6]">
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

            <p className="border-l-4 border-[#D0BC84] pl-5 text-xl font-semibold leading-relaxed sm:text-2xl">
              Este es nuestro punto de partida. No somos un club.
              Somos la red.
            </p>
          </div>
        </div>

        {/* DOCUMENTO INSTITUCIONAL */}
        <div className="mt-10 max-w-[850px]">
          <a
            href="/documentos/institucional-fecca.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex w-full flex-col justify-between gap-5 rounded-xl border border-[#283524]/15 bg-white/40 p-6 transition-colors duration-300 hover:bg-white/75 sm:flex-row sm:items-center sm:p-8"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#4D6645]">
                Institucional
              </p>

              <h3 className="mt-3 text-xl font-semibold tracking-tight text-[#283524] sm:text-2xl">
                Conocé más sobre FECCA
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#283524]/70">
                Accedé al documento institucional de la Federación.
              </p>
            </div>

            <span className="inline-flex shrink-0 items-center text-sm font-semibold text-[#4D6645] underline decoration-[#4D6645]/40 underline-offset-4 transition-colors group-hover:text-[#283524]">
              Ver documento institucional (PDF)
            </span>
          </a>

          {/* LINKTREE - FUERA DEL RECUADRO */}
          <div className="mt-5 flex justify-end">
            <a
              href="https://linktr.ee/fecca.oficial"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visitar Linktree oficial de FECCA"
              className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[#4D6645] px-7 py-3 text-sm font-semibold text-[#F1EFE8] transition-colors duration-300 hover:bg-[#3D5337] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#283524]"
            >
              Linktree de FECCA
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
