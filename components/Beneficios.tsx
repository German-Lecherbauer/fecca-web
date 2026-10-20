
"use client";

const herramientas = [
  {
    numero: 1,
    titulo: "Representación",
    texto:
      "Tu club no está solo. Una voz colectiva frente a los desafíos del sector.",
  },
  {
    numero: 2,
    titulo: "Información",
    texto:
      "Información institucional, normativa y herramientas para el funcionamiento de los clubes.",
  },
  {
    numero: 3,
    titulo: "Derechos",
    texto:
      "Conocer tus derechos. Acompañamiento legal y defensa de los derechos de usuarios, cultivadores y clubes.",
  },
  {
    numero: 4,
    titulo: "Red federal",
    texto:
      "Conectate con otros clubes. Compartí experiencias, conocimientos y oportunidades en todo el territorio.",
  },
  {
    numero: 5,
    titulo: "Formación y cultura",
    texto:
      "Charlas, capacitaciones, encuentros y contenidos sobre cannabis, salud, cultivo y organización.",
  },
  {
    numero: 6,
    titulo: "Beneficios",
    texto:
      "Acceso a alianzas, servicios, descuentos y herramientas para el crecimiento de los clubes.",
  },
];

const WHATSAPP_REPROCANN =
  "https://wa.me/5491127831516?text=Hola.%20Les%20escribo%20para%20consultar%20respecto%20a%20los%20tr%C3%A1mites%20en%20REPROCANN.%20Mi%20nombre%20es%20";

export default function Beneficios() {
  return (
    <section
      id="herramientas"
      aria-labelledby="titulo-herramientas"
      className="scroll-mt-24 bg-[#283524] pb-5 pt-10 text-white sm:pb-6 sm:pt-12 lg:pb-7 lg:pt-14"
    >
      {/* CONTENEDOR ALINEADO CON EL HERO */}
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-6 lg:px-8">
        {/* ENCABEZADO */}
        <div>
          <h2
            id="titulo-herramientas"
            className="text-[30px] font-semibold leading-[1.1] tracking-tight sm:text-[34px] lg:text-[38px]"
          >
            Herramientas para
            <br />
            <span className="text-[#D0BC84]">tu club.</span>
          </h2>
        </div>

        {/* SEPARADOR */}
        <div className="my-7 h-px w-full bg-white/15 sm:my-8" />

        {/* SEIS TARJETAS */}
        <div
          aria-label="Herramientas para tu club"
          className="
            flex w-full min-w-0 snap-x snap-mandatory gap-3
            overflow-x-auto overscroll-x-contain
            pb-3
            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden
            sm:grid sm:grid-cols-2 sm:gap-4
            sm:overflow-visible sm:pb-0
            lg:grid-cols-3
          "
        >
          {herramientas.map((herramienta) => (
            <div
              key={herramienta.numero}
              className="
                flex min-h-[185px] w-[82%] shrink-0
                snap-start flex-col rounded-xl
                border border-white/15 bg-white/[0.04]
                p-5 transition-colors duration-300
                hover:bg-white/[0.07]
                sm:min-h-[175px] sm:w-auto sm:p-6
              "
            >
              {/* NUMERACIÓN */}
              <span className="text-[12px] font-semibold text-[#D0BC84]">
                {herramienta.numero}
              </span>

              <div className="mt-auto pt-6">
                <h3 className="text-[17px] font-semibold tracking-tight text-white sm:text-lg">
                  {herramienta.titulo}
                </h3>

                <p className="mt-2 text-[13px] leading-[1.65] text-white/80 sm:text-sm">
                  {herramienta.texto}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* INDICADOR SOLO EN MOBILE */}
        <div className="mt-2 flex items-center justify-center gap-2 text-[11px] font-medium tracking-wide text-white/55 sm:hidden">
          <span aria-hidden="true">←</span>
          <span>Deslizá para ver más</span>
          <span aria-hidden="true">→</span>
        </div>

        {/* ACOMPAÑAMIENTO REPROCANN */}
        <div className="mt-6 grid overflow-hidden rounded-xl border border-white/15 bg-white/[0.04] md:grid-cols-[1fr_auto]">
          <div className="p-5 sm:p-6">
            <div className="mb-4 flex items-center gap-2.5">
              <span
                aria-hidden="true"
                className="h-2 w-2 shrink-0 rounded-full bg-[#D0BC84]"
              />

              <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#D0BC84] sm:text-xs">
                Acompañamiento FECCA
              </span>
            </div>

            <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
              ¿Problemas con tu REPROCANN?
            </h3>

            <p className="mt-2 max-w-[650px] text-[13px] leading-6 text-white/80 sm:text-sm">
              Contactate por WhatsApp con FECCA para recibir
              orientación sobre tus trámites de REPROCANN.
            </p>
          </div>

          <div className="flex items-center justify-start border-t border-white/15 p-5 md:justify-center md:border-l md:border-t-0 md:px-7">
            <a
              href={WHATSAPP_REPROCANN}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center justify-center rounded-lg bg-[#D0BC84] px-6 py-2.5 text-[13px] font-semibold text-[#283524] transition-colors duration-300 hover:bg-[#C7B57A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Pedir ayuda
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
