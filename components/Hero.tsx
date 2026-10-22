
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex items-center overflow-hidden bg-[#283524]"
    >
      {/* LUCES DECORATIVAS DEL FONDO */}
      <div className="pointer-events-none absolute -right-64 -top-40 h-[500px] w-[500px] rounded-full bg-[#4D6645]/20 blur-[120px] sm:-right-40 sm:h-[600px] sm:w-[600px] sm:blur-[140px]" />

      <div className="pointer-events-none absolute -bottom-52 -left-64 h-[420px] w-[420px] rounded-full bg-[#D0BC84]/10 blur-[120px] sm:-left-40 sm:h-[500px] sm:w-[500px] sm:blur-[140px]" />

      <div className="absolute left-0 top-0 h-full w-px bg-white/5" />

      {/* CONTENEDOR PRINCIPAL */}
      <div className="relative z-10 mx-auto grid w-full max-w-[1200px] items-center gap-10 px-5 pb-14 pt-36 sm:px-6 sm:pb-16 sm:pt-40 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,0.65fr)] lg:gap-14 lg:px-8 lg:pb-24 lg:pt-48">
        {/* CONTENIDO PRINCIPAL */}
        <div className="relative z-20 min-w-0">
          {/* TÍTULO PRINCIPAL */}
          <h1 className="text-[2.5rem] font-semibold leading-[1.04] tracking-[-0.045em] text-white sm:text-5xl md:text-[3.5rem] lg:text-[clamp(3rem,4vw,3.75rem)]">
            Federación de Clubes
            <br className="hidden sm:block" />
            <span className="text-[#D0BC84]">
              {" "}Cannábicos de Argentina
            </span>
          </h1>

          {/* SUBTÍTULO */}
          <p className="mt-7 max-w-2xl text-[16px] leading-[1.65] text-white/85 sm:mt-8 sm:text-[17px] lg:text-[18px]">
            Unidos por una cultura cannábica responsable y sustentable.
          </p>

          {/* BOTONES */}
          <div className="mt-8 flex w-full flex-col gap-3 sm:mt-10 sm:w-auto sm:flex-row sm:gap-3">
            <a
              href="#herramientas"
              className="inline-flex min-h-[52px] w-full items-center justify-center rounded-lg bg-[#D0BC84] px-6 text-center text-sm font-semibold text-[#283524] transition-colors duration-300 hover:bg-[#C7B57A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:w-auto"
            >
              Beneficios para tu club
            </a>

            <a
              href="#contacto"
              className="inline-flex min-h-[52px] w-full items-center justify-center rounded-lg border border-white/30 px-6 text-center text-sm font-semibold text-white transition-colors duration-300 hover:border-white/60 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:w-auto"
            >
              Sumá tu club a la Federación
            </a>
          </div>

          {/* MÉTRICAS */}
          <div className="mt-11 grid grid-cols-[1fr_auto_1fr] items-center gap-4 border-t border-white/15 pt-7 sm:mt-14 sm:flex sm:gap-12">
            <div>
              <p className="text-[23px] font-semibold tracking-tight text-white sm:text-[27px]">
                +200
              </p>

              <p className="mt-1 text-[11px] uppercase leading-5 tracking-wider text-white/75">
                Clubes federados
              </p>
            </div>

            <div className="h-11 w-px bg-white/15" />

            <div>
              <p className="text-[23px] font-semibold tracking-tight text-white sm:text-[27px]">
                Federal
              </p>

              <p className="mt-1 text-[11px] uppercase leading-5 tracking-wider text-white/75">
                Presencia nacional
              </p>
            </div>
          </div>
        </div>

        {/* LOGO PROTAGONISTA - ESCRITORIO */}
        <div className="relative hidden min-h-[440px] min-w-0 items-center justify-center lg:flex">
          {/* LUCES DETRÁS DEL LOGO */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[460px] w-[460px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#4D6645]/20 blur-[110px]" />

          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D0BC84]/10 blur-[90px]" />

          <div className="pointer-events-none absolute -right-16 -top-8 h-[180px] w-[180px] rounded-full bg-[#4D6645]/20 blur-[70px]" />

          {/* LOGO MÁS SEPARADO Y ELEVADO */}
          <div className="relative z-10 flex w-full items-center justify-center">
            <div className="fecca-logo-pulse w-[115%] max-w-none shrink-0 lg:translate-x-[35px] lg:-translate-y-[65px] xl:w-[120%] xl:translate-x-[45px]">
              <Image
                src="/images/logo/logo-fecca.svg"
                alt="Federación de Clubes Cannábicos de Argentina"
                width={600}
                height={430}
                priority
                sizes="(max-width: 1200px) 40vw, 480px"
                className="h-auto w-full object-contain drop-shadow-[0_30px_50px_rgba(0,0,0,0.35)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
