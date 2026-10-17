
"use client";

const herramientas = [
  {
    numero: 1,
    titulo: "Representación",
    texto:
      "TU CLUB NO ESTÁ SOLO. Una voz colectiva frente a los desafíos del sector.",
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
      className="scroll-mt-24 bg-[#283524] pb-6 pt-10 text-white sm:pb-7 sm:pt-12 lg:pb-8 lg:pt-14"
    >
      {/* CONTENEDOR AMPLIADO A 1600 PX */}
      <div className="mx-auto w-full max-w-[1600px] px-5 sm:px-6 lg:px-8">
        {/* ENCABEZADO */}
        <div className="grid items-end gap-6 lg:grid-cols-2 lg:gap-12">
          <h2
            id="titulo-herramientas"
            className="text-[2.5rem] font-semibold leading-[1.08] tracking-tight sm:text-5xl"
          >
            Herramientas para
            <br />
            <span className="text-[#D0BC84]">tu club.</span>
          </h2>

          <p className="max-w-lg text-base leading-7 text-white/80 lg:justify-self-end">
            Salud, educación y acompañamiento para fortalecer a los
            clubes que forman parte de la red federal de FECCA.
          </p>
        </div>

        <div className="my-8 h-px w-full bg-white/15" />

        {/* SEIS TARJETAS */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {herramientas.map((herramienta) => (
            <div
              key={herramienta.numero}
              className="flex min-h-[190px] flex-col rounded-xl border border-white/15 bg-white/[0.04] p-7 sm:p-8"
            >
              <span className="text-sm font-semibold text-[#D0BC84]">
                {herramienta.numero}
              </span>

              <div className="mt-auto pt-8">
                <h3 className="text-xl font-semibold tracking-tight text-white">
                  {herramienta.titulo}
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/85">
                  {herramienta.texto}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ACOMPAÑAMIENTO REPROCANN */}
        <div className="mt-7 grid overflow-hidden rounded-xl border border-white/15 bg-white/[0.04] md:grid-cols-[1fr_auto]">
          <div className="p-7 sm:p-8">
            <div className="mb-5 flex items-center gap-3">
              <span
                aria-hidden="true"
                className="h-2 w-2 rounded-full bg-[#D0BC84]"
              />

              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#D0BC84]">
                Acompañamiento FECCA
              </span>
            </div>

            <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              ¿Problemas con tu REPROCANN?
            </h3>

            <p className="mt-3 text-sm leading-6 text-white/85">
              Contactate por WhatsApp con FECCA para recibir
              orientación sobre tus trámites de REPROCANN.
            </p>
          </div>

          <div className="flex items-center justify-start border-t border-white/15 p-7 md:justify-center md:border-l md:border-t-0 md:px-8">
            <a
              href={WHATSAPP_REPROCANN}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[#D0BC84] px-7 py-3 text-sm font-semibold text-[#283524] transition-colors duration-300 hover:bg-[#C7B57A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Pedir ayuda
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
