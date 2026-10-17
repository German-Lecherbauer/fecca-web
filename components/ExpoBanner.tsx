
import Image from "next/image";

const ENTRADAS_URL = "https://expocannabis.com.ar/entradas/";

export default function ExpoBanner() {
  return (
    <section
      id="expo-cannabis"
      aria-labelledby="titulo-expo"
      className="relative overflow-hidden bg-[#E8E7DC] pb-0 pt-6 sm:pb-0 sm:pt-8 lg:pb-0 lg:pt-8"
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

      {/* CONTENEDOR AMPLIADO A 1600 PX */}
      <div className="mx-auto w-full max-w-[1600px] px-5 sm:px-6 lg:px-8">
        {/* ENCABEZADO */}
        <div className="mb-5 flex items-center gap-3 sm:mb-6">
          <span
            aria-hidden="true"
            className="h-2 w-2 rounded-full bg-[#4D6645]"
          />

          <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#4D6645] sm:text-xs">
            Próximo evento
          </span>
        </div>

        <div className="mb-6 sm:mb-8">
          <h2
            id="titulo-expo"
            className="text-[1.75rem] font-semibold tracking-tight text-[#283524] sm:text-4xl lg:text-5xl"
          >
            Expo Cannabis 2026
          </h2>

          <p className="mt-2 text-sm leading-6 text-[#283524]/75 sm:mt-3 sm:text-base">
            23, 24 y 25 de octubre · La Rural, Buenos Aires
          </p>
        </div>

        {/* BANNER CLICKEABLE */}
        <div className="expo-entrada -mt-10 sm:-mt-12 lg:-mt-16">
          <a
            href={ENTRADAS_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Conseguir entradas para Expo Cannabis 2026"
            className="expo-banner group mx-auto block w-full max-w-[1400px] rounded-lg focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[#283524]"
          >
            <div className="expo-flotar">
              {/* IMAGEN DE ESCRITORIO */}
              <div className="hidden transition-transform duration-500 group-hover:scale-[1.015] md:block">
                <Image
                  src="/images/expo/expo-desktop.png"
                  alt="Expo Cannabis 2026. Conseguí tu entrada para el 23, 24 y 25 de octubre en La Rural."
                  width={2048}
                  height={255}
                  unoptimized
                  sizes="(max-width: 1400px) 100vw, 1400px"
                  className="block h-auto w-full"
                />
              </div>

              {/* IMAGEN DE CELULAR */}
              <div className="mx-auto w-full max-w-[340px] transition-transform duration-500 group-hover:scale-[1.015] md:hidden">
                <Image
                  src="/images/expo/expo-mobile.png"
                  alt="Expo Cannabis 2026. 23, 24 y 25 de octubre en La Rural."
                  width={1080}
                  height={1350}
                  sizes="(max-width: 640px) 100vw, 340px"
                  className="block h-auto w-full rounded-2xl"
                />
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
