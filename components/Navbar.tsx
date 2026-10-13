
"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const enlaces = [
  { href: "#institucional", texto: "Institucional" },
  { href: "#clubes", texto: "Clubes" },
  { href: "#herramientas", texto: "Herramientas" },
  { href: "#beneficios", texto: "Beneficios" },
  { href: "#contacto", texto: "Contacto" },
];

export default function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const botonMenuRef = useRef<HTMLButtonElement>(null);
  const botonCerrarRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuAbierto(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (!menuAbierto) return;

    const overflowAnterior = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    botonCerrarRef.current?.focus();

    const cerrarConEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuAbierto(false);
        botonMenuRef.current?.focus();
      }
    };

    window.addEventListener("keydown", cerrarConEscape);

    return () => {
      document.body.style.overflow = overflowAnterior;
      window.removeEventListener("keydown", cerrarConEscape);
    };
  }, [menuAbierto]);

  const cerrarMenu = () => {
    setMenuAbierto(false);
  };

  const cerrarYDevolverFoco = () => {
    setMenuAbierto(false);
    botonMenuRef.current?.focus();
  };

  const enlaceDesktop =
    "text-sm font-medium text-white/85 transition-colors hover:text-white focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D0BC84]";

  const enlaceMobile =
    "block border-b border-white/10 py-5 text-base font-medium text-white/85 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#D0BC84]";

  return (
    <>
      {/* NAVBAR */}
      <header className="absolute left-0 top-0 z-50 w-full">
        <nav
          aria-label="Navegación principal"
          className="mx-auto max-w-7xl px-5 py-5 sm:px-6 md:py-6 lg:px-8"
        >
          <div className="flex items-center justify-between">
            {/* LOGO */}
            <a
              href="#inicio"
              onClick={cerrarMenu}
              aria-label="FECCA - Ir al inicio"
              className="flex min-h-11 items-center rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D0BC84]"
            >
              <Image
                src="/images/logo/logo-fecca.svg"
                alt="FECCA"
                width={110}
                height={80}
                priority
                className="h-auto w-[78px] sm:w-[90px] md:w-[105px]"
              />
            </a>

            {/* MENÚ DESKTOP */}
            <div className="hidden items-center gap-5 lg:gap-7 md:flex">
              {enlaces.map((enlace) => (
                <a
                  key={enlace.href}
                  href={enlace.href}
                  className={enlaceDesktop}
                >
                  {enlace.texto}
                </a>
              ))}

              <a
                href="#contacto"
                className="inline-flex min-h-12 items-center justify-center whitespace-nowrap rounded-lg border border-[#D0BC84] px-5 text-base font-semibold text-[#D0BC84] transition-colors hover:bg-[#D0BC84] hover:text-[#283524] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                Sumá tu club
              </a>
            </div>

            {/* BOTÓN MENÚ MÓVIL */}
            <button
              ref={botonMenuRef}
              type="button"
              onClick={() => setMenuAbierto(true)}
              aria-label="Abrir menú"
              aria-controls="menu-mobile"
              aria-expanded={menuAbierto}
              className="inline-flex min-h-11 min-w-11 items-center justify-center gap-2 rounded-lg border border-white/20 px-3 text-sm font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D0BC84] md:hidden"
            >
              <span>Menú</span>

              <span aria-hidden="true" className="flex flex-col gap-1">
                <span className="h-px w-4 bg-current" />
                <span className="h-px w-4 bg-current" />
                <span className="h-px w-4 bg-current" />
              </span>
            </button>
          </div>
        </nav>
      </header>

      {/* FONDO OSCURO DEL MENÚ MÓVIL */}
      <div
        aria-hidden="true"
        onClick={cerrarYDevolverFoco}
        className={`fixed inset-0 z-[80] bg-black/60 backdrop-blur-[2px] transition-opacity duration-300 md:hidden ${
          menuAbierto
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />

      {/* DRAWER MÓVIL */}
      <aside
        id="menu-mobile"
        role="dialog"
        aria-modal={menuAbierto ? true : undefined}
        aria-label="Menú de navegación"
        aria-hidden={!menuAbierto}
        inert={!menuAbierto}
        className={`fixed bottom-0 right-0 top-0 z-[90] flex w-[84%] max-w-[340px] flex-col overflow-y-auto border-l border-white/10 bg-[#283524] shadow-[-25px_0_70px_rgba(0,0,0,0.4)] transition-transform duration-300 ease-out md:hidden ${
          menuAbierto ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="relative flex min-h-full flex-col px-6 pb-7 pt-5">
          {/* CABECERA DRAWER */}
          <div className="flex items-center justify-between border-b border-white/15 pb-5">
            <Image
              src="/images/logo/logo-fecca.svg"
              alt="FECCA"
              width={100}
              height={72}
              className="h-auto w-[82px]"
            />

            <button
              ref={botonCerrarRef}
              type="button"
              onClick={cerrarYDevolverFoco}
              aria-label="Cerrar menú"
              className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/20 text-2xl text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#D0BC84]"
            >
              ×
            </button>
          </div>

          {/* ENLACES MÓVILES */}
          <nav aria-label="Navegación móvil" className="mt-8">
            {enlaces.map((enlace) => (
              <a
                key={enlace.href}
                href={enlace.href}
                onClick={cerrarMenu}
                className={enlaceMobile}
              >
                {enlace.texto}
              </a>
            ))}
          </nav>

          {/* CTA MÓVIL */}
          <div className="mt-auto pt-10">
            <div className="mb-6">
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#D0BC84]">
                Federación nacional
              </p>

              <p className="mt-2 text-sm leading-6 text-white/80">
                Más de 200 clubes forman parte de la red federal de FECCA.
              </p>
            </div>

            <a
              href="#contacto"
              onClick={cerrarMenu}
              className="flex min-h-12 w-full items-center justify-center rounded-lg bg-[#D0BC84] px-5 text-base font-semibold text-[#283524] transition-colors hover:bg-[#C7B57A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Sumá tu club
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}
