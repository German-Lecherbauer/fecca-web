
import Image from "next/image";

const enlaces = [
  { href: "#inicio", texto: "Inicio" },
  { href: "#institucional", texto: "Institucional" },
  { href: "#clubes", texto: "Clubes federados" },
  { href: "#herramientas", texto: "Herramientas" },
  { href: "#beneficios", texto: "Beneficios" },
  { href: "#contacto", texto: "Contacto" },
];

const correos = [
  {
    nombre: "Contacto general",
    email: "info@fecca.com.ar",
  },
  {
    nombre: "Comunicación y Prensa",
    email: "prensa@fecca.com.ar",
  },
];

const LINKTREE_URL = "https://linktr.ee/fecca.oficial";
const INSTAGRAM_URL = "https://www.instagram.com/fecca.oficial/";

export default function Footer() {
  return (
    <footer className="relative z-20 -mt-5 overflow-hidden rounded-t-[18px] bg-[#f3f0e7] text-[#172519]">
      {/* DECORACIÓN */}
      <div className="pointer-events-none absolute -bottom-52 -left-52 h-[380px] w-[380px] rounded-full bg-[#537247]/10 blur-[110px] sm:-left-32 sm:h-[450px] sm:w-[450px] sm:blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 pb-7 pt-16 sm:px-6 sm:pb-8 sm:pt-20 lg:px-8">
        {/* CONTENIDO PRINCIPAL */}
        <div className="grid gap-12 sm:gap-14 lg:grid-cols-[1.1fr_0.8fr_1.1fr] lg:gap-16">
          {/* FECCA */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <a
              href="#inicio"
              className="inline-block rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#537247]"
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

            <p className="mt-5 max-w-sm text-sm leading-7 text-[#172519]/65 sm:mt-7">
              Federación de Clubes Cannábicos de Argentina.
              Una red federal de clubes, organizaciones y
              comunidades.
            </p>
          </div>

          {/* NAVEGACIÓN */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#537247]">
              Navegación
            </p>

            <nav
              aria-label="Navegación del pie de página"
              className="mt-6 flex flex-col items-start gap-4"
            >
              {enlaces.map((enlace) => (
                <a
                  key={enlace.href}
                  href={enlace.href}
                  className="text-sm text-[#172519]/70 transition-colors duration-200 hover:text-[#537247] focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#537247]"
                >
                  {enlace.texto}
                </a>
              ))}
            </nav>
          </div>

          {/* CONTACTO */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#537247]">
              Contacto
            </p>

            <div className="mt-6 flex flex-col gap-6">
              {correos.map((contacto) => (
                <div key={contacto.email}>
                  <p className="text-sm font-semibold text-[#172519]">
                    {contacto.nombre}
                  </p>

                  <a
                    href={`mailto:${contacto.email}`}
                    className="mt-2 inline-block break-all text-sm text-[#172519]/65 transition-colors duration-200 hover:text-[#537247]"
                  >
                    {contacto.email}
                  </a>
                </div>
              ))}
            </div>

            {/* REDES SOCIALES */}
            <div className="mt-8 border-t border-[#172519]/15 pt-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#537247]">
                Redes sociales
              </p>

              <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-3">
                {/* INSTAGRAM */}
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram oficial de FECCA"
                  className="inline-flex items-center gap-2 text-sm text-[#172519]/70 transition-colors duration-200 hover:text-[#537247]"
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

                  <span>@fecca.oficial</span>
                </a>

                {/* LINKTREE */}
                <a
                  href={LINKTREE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Linktree oficial de FECCA"
                  className="inline-flex items-center gap-2 text-sm text-[#172519]/70 transition-colors duration-200 hover:text-[#537247]"
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
                    <path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7.1-7.1l-1.7 1.7" />
                    <path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7.1 7.1l1.7-1.7" />
                  </svg>

                  <span>Linktree</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* PARTICIPAR */}
        <div className="mt-12 grid gap-6 border-y border-[#172519]/15 py-8 sm:mt-16 sm:gap-8 sm:py-9 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#537247]">
              Participar
            </p>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-[#172519]/70">
              Presentando los requisitos solicitados podés
              solicitar ser miembro. Tu club debe contar con
              estatuto y designación de autoridades.
            </p>
          </div>

          <a
            href="#contacto"
            className="inline-flex w-fit items-center border-b border-[#537247]/50 pb-1 text-sm font-semibold text-[#537247] transition-colors duration-300 hover:border-[#172519] hover:text-[#172519]"
          >
            Sumá tu club
          </a>
        </div>

        {/* COPYRIGHT */}
        <div className="flex flex-col gap-4 pt-7 text-xs leading-5 text-[#172519]/60 sm:pt-8 md:flex-row md:items-center md:justify-between">
          <p>
            © 2026 FECCA — Federación de Clubes Cannábicos
            de Argentina. República Argentina.
          </p>

          <a
            href="mailto:info@fecca.com.ar"
            className="inline-flex w-fit items-center gap-2 transition-colors duration-200 hover:text-[#537247]"
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
    </footer>
  );
}
