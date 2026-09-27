"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false);

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

    const cerrarConEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuAbierto(false);
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

  return (
    <>
      {/* =========================
          NAVBAR
      ========================== */}
      <header className="absolute left-0 top-0 z-50 w-full">
        <nav className="mx-auto max-w-7xl px-5 py-5 sm:px-6 md:py-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#inicio"
              onClick={cerrarMenu}
              className="flex items-center"
              aria-label="Ir al inicio"
            >
              <Image
                src="/images/logo/logo-fecca.png"
                alt="FECCA"
                width={110}
                height={80}
                priority
                className="h-auto w-[78px] sm:w-[90px] md:w-[105px]"
              />
            </a>

            {/* =========================
                MENÚ DESKTOP
            ========================== */}
            <div className="hidden items-center gap-8 md:flex">
              <a
                href="#institucional"
                className="text-sm font-medium text-white/80 transition hover:text-white"
              >
                Institucional
              </a>

              <a
                href="#clubes"
                className="text-sm font-medium text-white/80 transition hover:text-white"
              >
                Clubes
              </a>

              <a
                href="#beneficios"
                className="text-sm font-medium text-white/80 transition hover:text-white"
              >
                Beneficios
              </a>

              <a
                href="#contacto"
                className="text-sm font-medium text-white/80 transition hover:text-white"
              >
                Contacto
              </a>

              <a
                href="#contacto"
                className="rounded-full border border-[#d8c47f] px-5 py-2.5 text-sm font-semibold text-[#e6d79c] transition hover:bg-[#d8c47f] hover:text-[#172519]"
              >
                Sumá tu club
              </a>
            </div>

            {/* =========================
                HAMBURGUESA MOBILE
            ========================== */}
            <button
              type="button"
              onClick={() => setMenuAbierto(true)}
              aria-label="Abrir menú"
              aria-expanded={menuAbierto}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-white transition hover:bg-white/[0.08] md:hidden"
            >
              <div className="flex flex-col gap-[5px]">
                <span className="h-px w-5 bg-current" />
                <span className="h-px w-5 bg-current" />
                <span className="h-px w-5 bg-current" />
              </div>
            </button>
          </div>
        </nav>
      </header>

      {/* =========================
          BACKDROP MOBILE
      ========================== */}
      <div
        aria-hidden="true"
        onClick={cerrarMenu}
        className={`fixed inset-0 z-[80] bg-black/55 backdrop-blur-[2px] transition-opacity duration-300 md:hidden ${
          menuAbierto
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />

      {/* =========================
          DRAWER MOBILE
      ========================== */}
      <aside
        aria-hidden={!menuAbierto}
        className={`fixed bottom-0 right-0 top-0 z-[90] flex w-[84%] max-w-[340px] flex-col overflow-y-auto border-l border-white/10 bg-[#101d13] shadow-[-25px_0_70px_rgba(0,0,0,0.4)] transition-transform duration-300 ease-out md:hidden ${
          menuAbierto ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Glow */}
        <div className="pointer-events-none absolute -right-32 -top-20 h-[300px] w-[300px] rounded-full bg-[#6ce17c]/10 blur-[100px]" />

        <div className="relative z-10 flex min-h-full flex-col px-6 pb-7 pt-5">
          {/* =========================
              CABECERA DRAWER
          ========================== */}
          <div className="flex items-center justify-between border-b border-white/10 pb-5">
            <Image
              src="/images/logo/logo-fecca.png"
              alt="FECCA"
              width={100}
              height={72}
              className="h-auto w-[82px]"
            />

            <button
              type="button"
              onClick={cerrarMenu}
              aria-label="Cerrar menú"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-xl text-white/60 transition hover:border-white/25 hover:bg-white/5 hover:text-white"
            >
              ×
            </button>
          </div>

          {/* =========================
              LINKS
          ========================== */}
          <nav className="mt-8">
            <a
              href="#institucional"
              onClick={cerrarMenu}
              className="block border-b border-white/10 py-5 text-base font-medium text-white/75 transition hover:text-white"
            >
              Institucional
            </a>

            <a
              href="#clubes"
              onClick={cerrarMenu}
              className="block border-b border-white/10 py-5 text-base font-medium text-white/75 transition hover:text-white"
            >
              Clubes
            </a>

            <a
              href="#beneficios"
              onClick={cerrarMenu}
              className="block border-b border-white/10 py-5 text-base font-medium text-white/75 transition hover:text-white"
            >
              Beneficios
            </a>

            <a
              href="#contacto"
              onClick={cerrarMenu}
              className="block border-b border-white/10 py-5 text-base font-medium text-white/75 transition hover:text-white"
            >
              Contacto
            </a>
          </nav>

          {/* =========================
              CTA
          ========================== */}
          <div className="mt-auto pt-10">
            <div className="mb-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#d8c47f]">
                Federación nacional
              </p>

              <p className="mt-2 text-xs leading-5 text-white/35">
                Más de 200 clubes forman parte de la red federal de FECCA.
              </p>
            </div>

            <a
              href="#contacto"
              onClick={cerrarMenu}
              className="flex w-full items-center justify-between rounded-full bg-[#6ce17c] px-6 py-4 text-sm font-bold text-[#172519] transition hover:bg-[#7bea89]"
            >
              Sumá tu club

              <span>→</span>
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}