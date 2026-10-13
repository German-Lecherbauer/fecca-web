
export default function NuestraMision() {
  return (
    <section
      id="institucional"
      aria-labelledby="titulo-mision"
      className="scroll-mt-24 bg-[#F1EFE8] px-5 py-20 text-[#283524] sm:px-6 sm:py-24 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-[850px]">
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

          <div className="space-y-7 text-[18px] leading-[1.6]">
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
      </div>
    </section>
  );
}
