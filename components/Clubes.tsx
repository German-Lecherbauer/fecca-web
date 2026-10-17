
export default function Clubes() {
  return (
    <section
      id="clubes"
      aria-labelledby="titulo-clubes"
      className="scroll-mt-24 bg-[#283524] pb-10 pt-4 text-white sm:pb-12 sm:pt-5 lg:pb-12 lg:pt-6"
    >
      {/* CONTENEDOR AMPLIADO A 1600 PX */}
      <div className="mx-auto w-full max-w-[1600px] px-5 sm:px-6 lg:px-8">
        {/* ENCABEZADO */}
        <div className="grid items-end gap-6 md:grid-cols-2 md:gap-12">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span
                aria-hidden="true"
                className="h-2 w-2 rounded-full bg-[#4ADE80]"
              />

              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-white/65">
                Nuestra red
              </span>
            </div>

            <h2
              id="titulo-clubes"
              className="text-[2.5rem] font-semibold leading-[1.05] tracking-tight sm:text-5xl"
            >
              Red federal de
              <br />
              <span className="text-[#D0BC84]">
                clubes cannábicos.
              </span>
            </h2>
          </div>

          <p className="max-w-lg text-base leading-7 text-white/75 md:justify-self-end">
            Presencia en todo el país: más de 200 clubes
            federados sostienen la Federación de Clubes
            Cannábicos de Argentina.
          </p>
        </div>

        <div className="my-8 h-px w-full bg-white/15" />

        {/* TARJETAS */}
        <div className="grid gap-5 md:grid-cols-2">
          {/* PARA PERSONAS */}
          <div className="flex h-full flex-col rounded-xl border border-white/15 bg-[#20382D] p-7 sm:p-8">
            <div className="mb-5 flex items-center gap-3">
              <span
                aria-hidden="true"
                className="h-2 w-2 rounded-full bg-[#4ADE80]"
              />

              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-white/65">
                Para personas
              </span>
            </div>

            <h3 className="text-2xl font-semibold tracking-tight">
              ¿Estás buscando un club?
            </h3>

            <p className="mt-4 text-sm leading-6 text-white/75">
              Dejanos tu localidad y tus datos de contacto
              para ayudarte a encontrar un club de la red.
            </p>

            <div className="mt-auto pt-8">
              <a
                href="#contacto"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-lg bg-[#4D6645] px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#5B7552] sm:w-auto"
              >
                Buscar un club
              </a>
            </div>
          </div>

          {/* PARA ORGANIZACIONES */}
          <div className="flex h-full flex-col rounded-xl border border-[#D0BC84]/30 bg-[#34432D] p-7 sm:p-8">
            <div className="mb-5 flex items-center gap-3">
              <span
                aria-hidden="true"
                className="h-2 w-2 rounded-full bg-[#D0BC84]"
              />

              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#D0BC84]">
                Para organizaciones
              </span>
            </div>

            <h3 className="text-2xl font-semibold tracking-tight">
              ¿Querés sumar tu club a la red?
            </h3>

            <p className="mt-4 text-sm leading-6 text-white/75">
              Formá parte de la Federación de Clubes Cannábicos
              de Argentina y fortalecé nuestra red federal.
            </p>

            <div className="mt-auto pt-8">
              <a
                href="https://forms.gle/Vfg7CtPqUTkAZxxV6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-lg bg-[#D0BC84] px-8 py-3 text-sm font-semibold text-[#283524] transition-colors hover:bg-[#C7B57A] sm:w-auto"
              >
                Sumá tu club
              </a>
            </div>
          </div>
        </div>

        {/* CIERRE */}
        <div className="mt-8 border-t border-white/15 pt-6">
          <p className="text-sm leading-6 text-white/65">
            Una red construida por organizaciones de distintos
            puntos del país.
          </p>
        </div>
      </div>
    </section>
  );
}
