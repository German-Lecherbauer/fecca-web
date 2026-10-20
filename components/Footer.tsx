
"use client";

import Image from "next/image";
import { useCallback, useState } from "react";
import ContactoModal from "./ContactoModal";

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
    tipo: "general",
  },
  {
    nombre: "Comunicación y Prensa",
    email: "prensa@fecca.com.ar",
    tipo: "prensa",
  },
] as const;

const LINKTREE_URL = "https://linktr.ee/fecca.oficial";
const INSTAGRAM_URL = "https://www.instagram.com/fecca.oficial/";

type TipoContacto = "general" | "prensa";

export default function Footer() {
  const [modalContacto, setModalContacto] = useState(false);

  const [tipoContacto, setTipoContacto] =
    useState<TipoContacto>("general");

  const cerrarContacto = useCallback(() => {
    setModalContacto(false);
  }, []);

  const abrirModal = (tipo: TipoContacto) => {
    setTipoContacto(tipo);
    setModalContacto(true);
  };

  const estiloEnlace =
    "w-fit cursor-pointer text-[13px] text-[#172519]/70 transition-colors duration-200 hover:text-[#172519] hover:underline hover:underline-offset-4 focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#537247] sm:text-sm";

  const estiloCorreo =
    "mt-1.5 inline-block w-fit cursor-pointer break-all text-left text-[13px] text-[#172519]/65 transition-colors duration-200 hover:text-[#172519] hover:underline hover:underline-offset-4 focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#537247] sm:text-sm";

  return (
    <>
      <footer className="relative z-20 overflow-hidden bg-[#E5E5DA] text-[#172519]">
        {/* DECORACIÓN */}
        <div className="pointer-events-none absolute -bottom-52 -left-52 h-[380px] w-[380px] rounded-full bg-[#537247]/10 blur-[110px] sm:-left-32 sm:h-[450px] sm:w-[450px] sm:blur-[130px]" />

        {/* CONTENEDOR ALINEADO CON EL HERO */}
        <div className="relative z-10 mx-auto w-full max-w-[1200px] px-5 pb-6 pt-8 sm:px-6 sm:pb-7 sm:pt-9 lg:px-8 lg:pt-10">
          {/* CONTENIDO PRINCIPAL */}
          <div className="grid gap-9 sm:gap-10 lg:grid-cols-[1.1fr_0.8fr_1.1fr] lg:gap-12">
            {/* FECCA */}
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <a
                href="#inicio"
                className="inline-block rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#537247]"
                aria-label="Volver al inicio"
              >
                <Image
                  src="/images/logo/logo-fecca-negro.svg"
                  alt="FECCA"
                  width={180}
                  height={130}
                  className="h-auto w-[130px] sm:w-[145px]"
                />
              </a>

              <p className="mt-4 max-w-sm text-[13px] leading-6 text-[#172519]/65 sm:text-sm">
                Federación de Clubes Cannábicos de Argentina.
                Una red federal de clubes, organizaciones y comunidades.
              </p>
            </div>

            {/* NAVEGACIÓN */}
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#537247] sm:text-xs">
                Navegación
              </p>

              <nav
                aria-label="Navegación del pie de página"
                className="mt-4 flex flex-col items-start gap-3"
              >
                {enlaces.map((enlace) => (
                  <a
                    key={enlace.href}
                    href={enlace.href}
                    className={estiloEnlace}
                  >
                    {enlace.texto}
                  </a>
                ))}
              </nav>
            </div>

            {/* CONTACTO */}
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#537247] sm:text-xs">
                Contacto
              </p>

              <div className="mt-4 flex flex-col gap-5">
                {correos.map((contacto) => (
                  <div key={contacto.email}>
                    <p className="text-[13px] font-semibold text-[#172519] sm:text-sm">
                      {contacto.nombre}
                    </p>

                    <button
                      type="button"
                      onClick={() => abrirModal(contacto.tipo)}
                      className={estiloCorreo}
                      aria-label={`Abrir formulario para ${contacto.nombre.toLowerCase()}`}
                      aria-haspopup="dialog"
                    >
                      {contacto.email}
                    </button>
                  </div>
                ))}
              </div>

              {/* REDES SOCIALES */}
              <div className="mt-6 border-t border-[#172519]/15 pt-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#537247] sm:text-xs">
                  Redes sociales
                </p>

                <div className="mt-3 flex flex-wrap items-center gap-x-6 gap-y-3">
                  {/* INSTAGRAM */}
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram oficial de FECCA"
                    className={`${estiloEnlace} inline-flex items-center gap-2`}
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
                    className={`${estiloEnlace} inline-flex items-center gap-2`}
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
          <div className="mt-9 grid gap-5 border-y border-[#172519]/15 py-6 sm:mt-10 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#537247] sm:text-xs">
                Participar
              </p>

              <p className="mt-2 max-w-2xl text-[13px] leading-6 text-[#172519]/70 sm:text-sm">
                Si tu club cuenta con estatuto y autoridades designadas, 
                podés solicitar su incorporación a FECCA presentando la documentación requerida.
              </p>
            </div>

            <a
              href="#contacto"
              className="inline-flex w-fit cursor-pointer items-center border-b border-[#537247]/50 pb-1 text-[13px] font-semibold text-[#537247] transition-colors duration-300 hover:border-[#172519] hover:text-[#172519] sm:text-sm"
            >
              Sumá tu club
            </a>
          </div>

          {/* COPYRIGHT */}
          <div className="flex flex-col gap-3 pt-6 text-[11px] leading-5 text-[#172519]/60 sm:text-xs md:flex-row md:items-center md:justify-between">
            <p>
              © 2026 FECCA — Federación de Clubes Cannábicos
              de Argentina. República Argentina.
            </p>

            <button
              type="button"
              onClick={() => abrirModal("general")}
              className="inline-flex w-fit cursor-pointer items-center gap-2 text-left transition-colors duration-200 hover:text-[#172519] hover:underline hover:underline-offset-4 focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#537247]"
              aria-label="Abrir formulario de contacto general"
              aria-haspopup="dialog"
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
            </button>
          </div>
        </div>
      </footer>

      {/* MODAL REUTILIZABLE: GENERAL / PRENSA */}
      <ContactoModal
        abierto={modalContacto}
        onClose={cerrarContacto}
        tipo={tipoContacto}
      />
    </>
  );
}
