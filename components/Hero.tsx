
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-[#283524]"
    >
      {/* Luces decorativas del fondo */}
      <div className="pointer-events-none absolute -right-64 -top-40 h-[500px] w-[500px] rounded-full bg-[#4D6645]/20 blur-[120px] sm:-right-40 sm:h-[600px] sm:w-[600px] sm:blur-[140px]" />

      <div className="pointer-events-none absolute -bottom-52 -left-64 h-[420px] w-[420px] rounded-full bg-[#D0BC84]/10 blur-[120px] sm:-left-40 sm:h-[500px] sm:w-[500px] sm:blur-[140px]" />

      <div className="absolute left-0 top-0 h-full w-px bg-white/5" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-10 px-5 pb-20 pt-32 sm:px-6 sm:pb-20 sm:pt-36 lg:grid-cols-[1.35fr_0.65fr] lg:gap-16 lg:px-8 lg:pb-20 lg:pt-28">
        {/* CONTENIDO PRINCIPAL */}
        <div className="relative z-20 min-w-0">
          <h1 className="text-[2.5rem] font-semibold leading-[1.02] tracking-[-0.045em] text-white sm:text-5xl md:text-6xl lg:text-[4rem]">
            <span className="block lg:whitespace-nowrap">
              La Federación de Clubes{" "}
            </span>

            <span className="block lg:whitespace-nowrap">
              Cannábicos de Argentina{" "}
            </span>

            <span className="block text-[#D0BC84] lg:whitespace-nowrap">
              está activa.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-[16px] leading-[1.6] text-white/85 sm:mt-8 sm:text-lg">
            Unidos por una cultura cannábica responsable y sustentable.
          </p>

          {/* Botones */}
          <div className="mt-8 flex w-full flex-col gap-3 sm:mt-9 sm:w-auto sm:flex-row sm:gap-4">
            <a
              href="#beneficios"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-lg bg-[#D0BC84] px-6 text-center text-base font-semibold text-[#283524] transition-colors duration-300 hover:bg-[#C7B57A] focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-white sm:w-auto"
            >
              Beneficios para tu club
            </a>

            <a
              href="#contacto"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-lg border border-white/30 px-6 text-center text-base font-semibold text-white transition-colors duration-300 hover:border-white/60 hover:bg-white/10 focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[#D0BC84] sm:w-auto"
            >
              Sumá tu club a la Federación
            </a>
          </div>

          {/* Métricas: se mantienen hasta confirmación */}
          <div className="mt-10 grid grid-cols-[1fr_auto_1fr] items-center gap-4 border-t border-white/15 pt-6 sm:mt-14 sm:flex sm:gap-12 sm:pt-7">
            <div>
              <p className="text-xl font-semibold text-white sm:text-2xl">
                +200
              </p>

              <p className="mt-1 text-xs uppercase leading-5 tracking-wider text-white/75">
                Clubes federados
              </p>
            </div>

            <div className="h-10 w-px bg-white/15" />

            <div>
              <p className="text-xl font-semibold text-white sm:text-2xl">
                Federal
              </p>

              <p className="mt-1 text-xs uppercase leading-5 tracking-wider text-white/75">
                Presencia nacional
              </p>
            </div>
          </div>
        </div>

        {/* LOGO PROTAGONISTA - ESCRITORIO */}
        <div className="relative hidden min-h-[520px] items-center justify-center lg:flex">
          <div className="pointer-events-none absolute right-[-90px] top-[-20px] h-[520px] w-[520px] rounded-full bg-[#4D6645]/20 blur-[110px]" />

          <div className="pointer-events-none absolute right-[-40px] top-[30px] h-[340px] w-[340px] rounded-full bg-[#D0BC84]/10 blur-[90px]" />

          <div className="pointer-events-none absolute -right-16 -top-8 h-[180px] w-[180px] rounded-full bg-[#4D6645]/20 blur-[70px]" />

          {/* Logo 48 px más abajo que antes */}
          <div className="relative z-10 -translate-y-8 translate-x-28 xl:-translate-y-12 xl:translate-x-36">
            <div className="fecca-logo-pulse">
              <Image
                src="/images/logo/logo-fecca.svg"
                alt="Federación de Clubes Cannábicos de Argentina"
                width={460}
                height={329}
                priority
                className="h-auto w-[403px] max-w-none drop-shadow-[0_30px_50px_rgba(0,0,0,0.35)] xl:w-[448px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
