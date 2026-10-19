
import Image from "next/image";

const ENTRADAS_URL = "https://expocannabis.com.ar/entradas/";

export default function ExpoBanner() {
  return (
    <section
      id="expo-cannabis"
      aria-labelledby="titulo-expo"
      className="relative w-full overflow-hidden bg-[#E8E7DC] pb-5 pt-9 sm:pb-6 sm:pt-10 lg:pb-8 lg:pt-12"
    >
      <style>{`
        @keyframes expoEntrada {
          from {
            opacity: 0;
            transform: translateY(20px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes expoFlotar {
          0%, 100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-5px);
          }
        }

        .expo-entrada {
          animation: expoEntrada 0.9s ease-out both;
        }

        @media (min-width: 1024px) {
          .expo-flotar {
            animation: expoFlotar 5s ease-in-out infinite;
          }

          .expo-banner:hover .expo-flotar {
            animation-play-state: paused;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .expo-entrada,
          .expo-flotar {
            animation: none;
          }
        }
      `}</style>

      {/* CONTENEDOR ALINEADO CON EL HERO */}
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-6 lg:px-8">
        {/* ETIQUETA */}
        <div className="mb-4 flex items-center gap-2.5">
          <span
            aria-hidden="true"
            className="h-2 w-2 shrink-0 rounded-full bg-[#4D6645]"
          />

          <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#4D6645] sm:text-xs">
            Próximo evento
          </span>
        </div>

        {/* ENCABEZADO */}
        <div className="relative z-10">
          <h2
            id="titulo-expo"
            className="text-[27px] font-semibold leading-tight tracking-tight text-[#283524] sm:text-3xl lg:text-[34px]"
          >
            Expo Cannabis 2026
          </h2>

          <p className="mt-2 text-[13px] leading-6 text-[#283524]/75 sm:text-sm">
            23, 24 y 25 de octubre · La Rural, Buenos Aires
          </p>
        </div>

        {/* BANNER */}
        <div className="expo-entrada relative z-0 mt-6 w-full sm:mt-7 lg:mt-8">
          <a
            href={ENTRADAS_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Conseguir entradas para Expo Cannabis 2026"
            className="expo-banner group mx-auto block w-full max-w-[1100px] focus-visible:rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#283524]"
          >
            <div className="expo-flotar w-full">
              {/* BANNER DESKTOP */}
              <div className="hidden w-full md:block">
                <Image
                  src="/images/expo/expo-desktop.png"
                  alt="Expo Cannabis 2026. Conseguí tu entrada para el 23, 24 y 25 de octubre en La Rural."
                  width={2048}
                  height={255}
                  unoptimized
                  sizes="(max-width: 1200px) 100vw, 1100px"
                  className="block h-auto w-full object-contain transition-transform duration-500 lg:group-hover:scale-[1.015]"
                />
              </div>

              {/* BANNER MOBILE */}
              <div className="mx-auto w-full max-w-[380px] md:hidden">
                <Image
                  src="/images/expo/expo-mobile.png"
                  alt="Expo Cannabis 2026. 23, 24 y 25 de octubre en La Rural."
                  width={1080}
                  height={1350}
                  unoptimized
                  sizes="(max-width: 767px) calc(100vw - 40px), 380px"
                  className="block h-auto w-full max-w-full rounded-2xl object-contain"
                />
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
