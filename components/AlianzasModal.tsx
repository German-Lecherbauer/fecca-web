
"use client";

import { FormEvent, useEffect, useRef, useState } from "react";

type AlianzasModalProps = {
  abierto: boolean;
  onClose: () => void;
};

export default function AlianzasModal({
  abierto,
  onClose,
}: AlianzasModalProps) {
  const [nombre, setNombre] = useState("");
  const [marca, setMarca] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [mensaje, setMensaje] = useState("");

  const modalRef = useRef<HTMLDivElement>(null);
  const nombreRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!abierto) return;

    const overflowAnterior = document.body.style.overflow;
    const elementoAnterior = document.activeElement as HTMLElement | null;

    document.body.style.overflow = "hidden";
    nombreRef.current?.focus();

    const manejarTeclado = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key !== "Tab" || !modalRef.current) return;

      const elementos = Array.from(
        modalRef.current.querySelectorAll<HTMLElement>(
          'button:not([disabled]), input:not([disabled]), textarea:not([disabled])'
        )
      );

      const primero = elementos[0];
      const ultimo = elementos[elementos.length - 1];

      if (!primero || !ultimo) return;

      if (event.shiftKey && document.activeElement === primero) {
        event.preventDefault();
        ultimo.focus();
      } else if (!event.shiftKey && document.activeElement === ultimo) {
        event.preventDefault();
        primero.focus();
      }
    };

    document.addEventListener("keydown", manejarTeclado);

    return () => {
      document.body.style.overflow = overflowAnterior;
      document.removeEventListener("keydown", manejarTeclado);
      elementoAnterior?.focus();
    };
  }, [abierto, onClose]);

  if (!abierto) return null;

  const enviarConsulta = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const asunto = `Consulta de alianza FECCA - ${marca.trim()}`;

    const cuerpo = [
      "Hola, equipo de FECCA:",
      "",
      "Me gustaría recibir información para sumar mi marca a la red de beneficios.",
      "",
      `Nombre y apellido: ${nombre.trim()}`,
      `Marca: ${marca.trim()}`,
      `Correo electrónico: ${email.trim()}`,
      `Teléfono: ${telefono.trim() || "No informado"}`,
      "",
      "Mensaje:",
      mensaje.trim(),
      "",
      "Muchas gracias.",
    ].join("\n");

    const mailto = `mailto:prensa@fecca.com.ar?subject=${encodeURIComponent(
      asunto
    )}&body=${encodeURIComponent(cuerpo)}`;

    window.location.href = mailto;
  };

  const estiloInput =
    "w-full rounded-lg border border-white/15 bg-white/[0.06] px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/35 focus:border-[#67DF7B] focus:ring-2 focus:ring-[#67DF7B]/15";

  const estiloLabel =
    "mb-2 block text-xs font-semibold uppercase tracking-[0.08em] text-white/60";

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="titulo-modal-alianzas"
        className="relative flex max-h-[92dvh] w-full max-w-[560px] flex-col overflow-hidden rounded-[20px] border border-white/10 bg-[#17291C] text-white shadow-[0_25px_80px_rgba(0,0,0,0.4)]"
      >
        {/* ENCABEZADO */}
        <div className="shrink-0 px-6 pb-0 pt-6 sm:px-10 sm:pt-9">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="h-2 w-2 rounded-full bg-[#67DF7B]"
                />

                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-white/55">
                  Alianzas
                </span>
              </div>

              <h2
                id="titulo-modal-alianzas"
                className="text-[28px] font-semibold leading-tight tracking-tight sm:text-[32px]"
              >
                Sumá tu marca.
              </h2>
            </div>

            <button
              type="button"
              onClick={onClose}
              aria-label="Cerrar formulario"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 text-xl text-white/75 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#67DF7B]"
            >
              ×
            </button>
          </div>

          <p className="mt-3 text-sm leading-6 text-white/60">
            Completá el formulario y contanos sobre tu marca
            para sumarte a nuestra red de beneficios.
          </p>

          <div className="mt-6 h-px w-full bg-white/15" />
        </div>

        {/* FORMULARIO */}
        <form
          onSubmit={enviarConsulta}
          className="overflow-y-auto px-6 pb-7 pt-6 sm:px-10 sm:pb-9"
        >
          <div className="space-y-5">
            {/* NOMBRE */}
            <div>
              <label htmlFor="alianzas-nombre" className={estiloLabel}>
                Nombre y apellido *
              </label>

              <input
                ref={nombreRef}
                id="alianzas-nombre"
                type="text"
                autoComplete="name"
                required
                maxLength={120}
                value={nombre}
                onChange={(event) => setNombre(event.target.value)}
                placeholder="Tu nombre completo"
                className={estiloInput}
              />
            </div>

            {/* MARCA */}
            <div>
              <label htmlFor="alianzas-marca" className={estiloLabel}>
                Nombre de la marca *
              </label>

              <input
                id="alianzas-marca"
                type="text"
                required
                maxLength={120}
                value={marca}
                onChange={(event) => setMarca(event.target.value)}
                placeholder="Nombre de tu emprendimiento"
                className={estiloInput}
              />
            </div>

            {/* EMAIL */}
            <div>
              <label htmlFor="alianzas-email" className={estiloLabel}>
                Email *
              </label>

              <input
                id="alianzas-email"
                type="email"
                autoComplete="email"
                required
                maxLength={254}
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="nombre@email.com"
                className={estiloInput}
              />
            </div>

            {/* TELÉFONO */}
            <div>
              <label htmlFor="alianzas-telefono" className={estiloLabel}>
                Teléfono de contacto
              </label>

              <input
                id="alianzas-telefono"
                type="tel"
                autoComplete="tel"
                maxLength={40}
                value={telefono}
                onChange={(event) => setTelefono(event.target.value)}
                placeholder="Número de WhatsApp"
                className={estiloInput}
              />
            </div>

            {/* MENSAJE */}
            <div>
              <label htmlFor="alianzas-mensaje" className={estiloLabel}>
                Mensaje *
              </label>

              <textarea
                id="alianzas-mensaje"
                required
                rows={4}
                maxLength={3000}
                value={mensaje}
                onChange={(event) => setMensaje(event.target.value)}
                placeholder="Contanos sobre tu marca y qué propuesta tenés para FECCA..."
                className={`${estiloInput} min-h-[120px] resize-y`}
              />
            </div>
          </div>

          {/* PIE DEL FORMULARIO */}
          <div className="mt-7 flex flex-col gap-5 border-t border-white/15 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="text-xs leading-5 text-white/50">
              <p className="font-semibold text-white/65">FECCA</p>
              <p>prensa@fecca.com.ar</p>
            </div>

            <button
              type="submit"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[#67DF7B] px-8 py-3 text-sm font-semibold text-[#17291C] transition-colors duration-300 hover:bg-[#83EC94] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:w-auto"
            >
              Enviar mensaje
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
