
import Image from "next/image";

export default function ExpoBanner() {
  return (
    <section
      id="expo-cannabis"
      className="relative z-20 -mt-5 overflow-hidden rounded-t-[18px] bg-[#f3f0e7] pt-12 pb-8 sm:pt-20 sm:pb-10 lg:pt-24 lg:pb-12"
    >
      <style>{`
        @keyframes expoEntrada {
          from {
            opacity: 0;
            transform: translateY(24px);
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
            transform: translateY(-6px);
          }
        }

        .expo-entrada {
          animation: expoEntrada 0.9s ease-out both;
        }

        .expo-flotar {
          animation: expoFlotar 5s ease-in-out infinite;
        }

        .expo-banner:hover .expo-flotar {
          animation-play-state: paused;
        }

        @media (prefers-reduced-motion: reduce) {
          .expo-entrada,
          .expo-flotar {
            animation: none;
          }
        }
      `}</style>

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* ENCABEZADO */}
        <div className="mb-5 flex items-center gap-3 sm:mb-8">
          <span className="h-2 w-2 rounded-full bg-[#537247]" />
          <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#537247] sm:text-xs">
            Próximo evento
          </span>
        </div>

        <div className="mb-7 sm:mb-10">
          <h2 className="text-[1.75rem] font-semibold tracking-tight text-[#172519] sm:text-4xl lg:text-5xl">
            Expo Cannabis 2026
          </h2>

          <p className="mt-2 text-xs leading-6 text-[#172519]/65 sm:mt-3 sm:text-base">
            23, 24 y 25 de octubre · La Rural, Buenos Aires
          </p>
        </div>

        {/* BANNER ORIGINAL */}
        <div className="expo-entrada">
          <a
            href="https://expocannabis.com.ar/entradas/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Conseguir entradas para Expo Cannabis 2026"
            className="expo-banner group relative mx-auto block w-full max-w-[970px]"
          >
            <div className="expo-flotar">
              {/* DESKTOP */}
              <div className="hidden overflow-hidden rounded-2xl shadow-[0_15px_40px_rgba(23,37,25,0.12)] transition-shadow duration-500 group-hover:shadow-[0_25px_60px_rgba(23,37,25,0.2)] md:block">
                <Image
                  src="/images/expo/expo-desktop.png"
                  alt="Expo Cannabis 2026. Conseguí tu entrada para el 23, 24 y 25 de octubre en La Rural."
                  width={970}
                  height={90}
                  quality={100}
                  sizes="(max-width: 970px) 100vw, 970px"
                  className="block h-auto w-full"
                />
              </div>

              {/* MOBILE */}
              <div className="mx-auto w-full max-w-[280px] overflow-hidden rounded-2xl shadow-[0_15px_40px_rgba(23,37,25,0.12)] transition-shadow duration-500 group-hover:shadow-[0_25px_60px_rgba(23,37,25,0.2)] sm:max-w-[340px] md:hidden">
                <Image
                  src="/images/expo/expo-mobile.png"
                  alt="Expo Cannabis 2026. 23, 24 y 25 de octubre en La Rural."
                  width={1080}
                  height={1350}
                  quality={95}
                  sizes="(max-width: 640px) 280px, 340px"
                  className="block h-auto w-full"
                />
              </div>
            </div>
          </a>
        </div>

        {/* INFORMACIÓN INFERIOR */}
        <div className="mt-8 flex flex-col gap-3 border-t border-[#172519]/10 pt-5 sm:mt-10 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:pt-6">
          <p className="text-xs text-[#172519]/65 sm:text-sm">
            Salud, industria, cultivo y cultura.
          </p>

          <a
            href="https://expocannabis.com.ar/entradas/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex w-fit items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-[#537247] transition hover:text-[#172519] sm:text-xs"
          >
            Conseguí tu entrada
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            >
              ↗
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
