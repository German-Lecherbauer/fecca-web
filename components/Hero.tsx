import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-[#172519]"
    >
      {/* Glow general del fondo */}
      <div className="absolute -right-64 -top-40 h-[500px] w-[500px] rounded-full bg-[#6ce17c]/10 blur-[120px] sm:-right-40 sm:h-[600px] sm:w-[600px] sm:blur-[140px]" />

      <div className="absolute -bottom-52 -left-64 h-[420px] w-[420px] rounded-full bg-[#d8c47f]/10 blur-[120px] sm:-left-40 sm:h-[500px] sm:w-[500px] sm:blur-[140px]" />

      {/* Línea decorativa lateral */}
      <div className="absolute left-0 top-0 h-full w-px bg-white/5" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-10 px-5 pb-20 pt-32 sm:px-6 sm:pb-20 sm:pt-36 lg:grid-cols-[1.35fr_0.65fr] lg:px-8 lg:pb-20 lg:pt-28">
        {/* =========================
            CONTENIDO
        ========================== */}
        <div className="min-w-0">
          {/* Badge */}
          <div className="mb-6 inline-flex max-w-full items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-2 sm:mb-7 sm:gap-3 sm:px-4">
            <span className="h-2 w-2 shrink-0 rounded-full bg-[#6ce17c]" />

            <span className="text-[10px] font-semibold uppercase leading-4 tracking-[0.13em] text-white/70 sm:text-xs sm:tracking-[0.18em]">
              Federación de Clubes Cannábicos de Argentina
            </span>
          </div>

          {/* Título */}
          <h1 className="text-[2.5rem] font-semibold leading-[1.02] tracking-[-0.045em] text-white sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="block lg:whitespace-nowrap">
              La Federación de Clubes
            </span>

            <span className="block lg:whitespace-nowrap">
              Cannábicos de Argentina
            </span>

            <span className="block text-[#d8c47f] lg:whitespace-nowrap">
              está activa.
            </span>
          </h1>

          {/* Bajada */}
          <p className="mt-6 max-w-2xl text-[15px] leading-7 text-white/65 sm:mt-7 sm:text-base md:text-lg md:leading-8">
            Respaldo legal, red de salud, guías para estar en regla y más de 200
            clubes con los que resolver. Tu club no tiene que hacerlo solo.
          </p>

          {/* Botones */}
          <div className="mt-8 flex w-full flex-col gap-3 sm:mt-9 sm:w-auto sm:flex-row sm:gap-4">
            <a
              href="#beneficios"
              className="inline-flex w-full items-center justify-center rounded-full bg-[#6ce17c] px-6 py-4 text-center text-sm font-bold text-[#142317] transition duration-300 hover:-translate-y-0.5 hover:bg-[#7bea89] hover:shadow-[0_10px_35px_rgba(108,225,124,0.18)] sm:w-auto sm:px-7 sm:py-3.5"
            >
              Beneficios para tu club

              <span className="ml-2">→</span>
            </a>

            <a
              href="#contacto"
              className="inline-flex w-full items-center justify-center rounded-full border border-white/20 px-6 py-4 text-center text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/5 sm:w-auto sm:px-7 sm:py-3.5"
            >
              Sumá tu club a la Federación
            </a>
          </div>

          {/* Métricas */}
          <div className="mt-10 grid grid-cols-[1fr_auto_1fr] items-center gap-4 border-t border-white/10 pt-6 sm:mt-14 sm:flex sm:gap-12 sm:pt-7">
            <div>
              <p className="text-xl font-semibold text-white sm:text-2xl">
                +200
              </p>

              <p className="mt-1 text-[10px] uppercase leading-4 tracking-wider text-white/40 sm:text-xs">
                Clubes federados
              </p>
            </div>

            <div className="h-10 w-px bg-white/10" />

            <div>
              <p className="text-xl font-semibold text-white sm:text-2xl">
                Federal
              </p>

              <p className="mt-1 text-[10px] uppercase leading-4 tracking-wider text-white/40 sm:text-xs">
                Presencia nacional
              </p>
            </div>
          </div>
        </div>

        {/* =========================
            LOGO PROTAGONISTA
            Desktop
        ========================== */}
        <div className="relative hidden min-h-[520px] items-center justify-center lg:flex">
          {/* Glow verde */}
          <div className="absolute h-[520px] w-[520px] -translate-y-32 translate-x-16 rounded-full bg-[#6ce17c]/10 blur-[110px]" />

          {/* Glow dorado */}
          <div className="absolute h-[340px] w-[340px] -translate-y-32 translate-x-16 rounded-full bg-[#d8c47f]/10 blur-[90px]" />

          {/* Mancha de luz secundaria */}
          <div className="absolute -right-16 -top-8 h-[180px] w-[180px] rounded-full bg-[#6ce17c]/10 blur-[70px]" />

          {/* Posición del logo */}
          <div className="relative z-10 -translate-y-32 translate-x-16">
            <div className="fecca-logo-float">
              <Image
                src="/images/logo/logo-fecca.png"
                alt="Federación de Clubes Cannábicos de Argentina"
                width={407}
                height={291}
                priority
                className="h-auto w-[540px] max-w-none drop-shadow-[0_30px_50px_rgba(0,0,0,0.35)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}