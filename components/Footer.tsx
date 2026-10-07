
import Image from "next/image";

const comisiones = [
  {
    nombre: "Tesorería",
    email: "tesoreria@fecca.com.ar",
  },
  {
    nombre: "Salud y Educación",
    email: "salud@fecca.com.ar",
  },
  {
    nombre: "Relaciones Institucionales",
    email: "relaciones@fecca.com.ar",
  },
  {
    nombre: "Comunicación y Prensa",
    email: "prensa@fecca.com.ar",
  },
  {
    nombre: "Relación Política",
    email: "politica@fecca.com.ar",
  },
  {
    nombre: "Género y Diversidad",
    email: "diversidad@fecca.com.ar",
  },
];

export default function Footer() {
  return (
    <footer className="relative z-20 -mt-5 overflow-hidden rounded-t-[18px] bg-[#f3f0e7] text-[#172519]">
      {/* Glow decorativo */}
      <div className="pointer-events-none absolute -bottom-52 -left-52 h-[380px] w-[380px] rounded-full bg-[#537247]/10 blur-[110px] sm:-left-32 sm:h-[450px] sm:w-[450px] sm:blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 pb-7 pt-16 sm:px-6 sm:pb-8 sm:pt-20 lg:px-8">
        {/* =========================
            CONTENIDO PRINCIPAL
        ========================== */}
        <div className="grid gap-12 sm:gap-14 lg:grid-cols-[1.1fr_0.7fr_1.2fr] lg:gap-16">
          {/* FECCA */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">

<a
  href="#inicio"
  className="inline-block"
  aria-label="Volver al inicio"
>
  <Image
    src="/images/logo/logo-fecca.svg"
    alt="FECCA"
    width={180}
    height={130}
    className="h-auto w-[145px] brightness-0 sm:w-[160px]"
  />
</a>


            <p className="mt-5 max-w-sm text-sm leading-6 text-[#172519]/65 sm:mt-7 sm:leading-7">
              Federación de Clubes Cannábicos de Argentina. Una red federal de
              clubes, organizaciones y comunidades.
            </p>
          </div>

          {/* Navegación */}
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#537247] sm:text-xs sm:tracking-[0.2em]">
              Navegación
            </p>

            <nav className="mt-5 flex flex-col items-start gap-3.5 sm:mt-7 sm:gap-4">
              <a
                href="#inicio"
                className="text-sm text-[#172519]/70 transition hover:text-[#537247]"
              >
                Inicio
              </a>

              <a
                href="#clubes"
                className="text-sm text-[#172519]/70 transition hover:text-[#537247]"
              >
                Clubes federados
              </a>

              <a
                href="#beneficios"
                className="text-sm text-[#172519]/70 transition hover:text-[#537247]"
              >
                Salud y Educación
              </a>

              <a
                href="#contacto"
                className="text-sm text-[#172519]/70 transition hover:text-[#537247]"
              >
                Sumá tu club
              </a>
            </nav>
          </div>

          {/* Comisiones */}
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#537247] sm:text-xs sm:tracking-[0.2em]">
              Comisiones
            </p>

            <div className="mt-5 grid grid-cols-2 gap-x-4 gap-y-5 sm:mt-7 sm:gap-x-8 sm:gap-y-6">
              {comisiones.map((comision) => (
                <div key={comision.email} className="min-w-0">
                  <p className="text-[12px] font-semibold leading-5 text-[#172519] sm:text-sm">
                    {comision.nombre}
                  </p>

                  <a
                    href={`mailto:${comision.email}`}
                    className="mt-1 block max-w-full break-all text-[10px] leading-4 text-[#172519]/60 transition hover:text-[#537247] sm:text-xs"
                  >
                    {comision.email}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* =========================
            PARTICIPAR
        ========================== */}
        <div className="mt-12 grid gap-6 border-y border-[#172519]/15 py-7 sm:mt-16 sm:gap-8 sm:py-9 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#537247] sm:text-xs">
              Participar
            </p>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-[#172519]/70">
              Presentando los requisitos solicitados podés solicitar ser
              miembro. Tu club debe contar con estatuto y designación de
              autoridades.
            </p>
          </div>

          <a
            href="#contacto"
            className="group inline-flex w-fit items-center gap-4 text-sm font-bold text-[#172519]"
          >
            Sumá tu club

            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#172519] text-white transition duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>

        {/* =========================
            COPYRIGHT + CONTACTO
        ========================== */}
        <div className="flex flex-col gap-5 pt-7 text-xs leading-5 text-[#172519]/60 sm:pt-8 md:flex-row md:items-center md:justify-between">
          <p className="max-w-xl">
            © 2026 FECCA — Federación de Clubes Cannábicos de Argentina.
            República Argentina.
          </p>

          <div className="flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-5">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/fecca.ar/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram de FECCA"
              className="group inline-flex items-center gap-2 transition duration-300 hover:text-[#537247]"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4 shrink-0"
                aria-hidden="true"
              >
                <rect
                  x="3"
                  y="3"
                  width="18"
                  height="18"
                  rx="5"
                  ry="5"
                />
                <circle cx="12" cy="12" r="4" />
                <circle
                  cx="17.5"
                  cy="6.5"
                  r="1"
                  fill="currentColor"
                  stroke="none"
                />
              </svg>

              <span>@fecca.ar</span>
            </a>

            {/* Separador */}
            <span className="hidden h-4 w-px bg-[#172519]/20 sm:block" />

            {/* Email */}
            <a
              href="mailto:info@fecca.com.ar"
              className="inline-flex items-center gap-2 transition duration-300 hover:text-[#537247]"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4 shrink-0"
                aria-hidden="true"
              >
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="M3 7l9 6 9-6" />
              </svg>

              <span>info@fecca.com.ar</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
