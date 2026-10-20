
"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";

type BuscarClubModalProps = {
  abierto: boolean;
  onClose: () => void;
};

export default function BuscarClubModal({
  abierto,
  onClose,
}: BuscarClubModalProps) {
  const [enviando, setEnviando] = useState(false);
  const [error, setError] = useState("");
  const [exito, setExito] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState("");

  const turnstileRef = useRef<TurnstileInstance>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  useEffect(() => {
    if (!abierto) return;

    const overflowAnterior = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const cerrarConEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", cerrarConEscape);

    return () => {
      document.body.style.overflow = overflowAnterior;
      window.removeEventListener("keydown", cerrarConEscape);
    };
  }, [abierto, onClose]);

  if (!abierto) return null;

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (enviando) return;

    setError("");
    setExito(false);

    if (!turnstileToken) {
      setError("Completá la verificación de seguridad.");
      return;
    }

    const formData = new FormData(event.currentTarget);

    const datos = {
      tipo: "buscar-club",
      nombre: String(formData.get("nombre") ?? "").trim(),
      telefono: String(formData.get("telefono") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      localidad: String(formData.get("localidad") ?? "").trim(),
      provincia: String(formData.get("provincia") ?? "").trim(),
      turnstileToken,
    };

    setEnviando(true);

    try {
      const respuesta = await fetch("/api/contacto", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(datos),
      });

      const resultado = await respuesta.json();

      if (!respuesta.ok) {
        throw new Error(
          resultado.error || "No pudimos enviar la solicitud."
        );
      }

      setExito(true);
      formRef.current?.reset();
      setTurnstileToken("");
      turnstileRef.current?.reset();
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Ocurrió un error. Intentá nuevamente."
      );

      setTurnstileToken("");
      turnstileRef.current?.reset();
    } finally {
      setEnviando(false);
    }
  };

  const inputClassName =
    "w-full min-w-0 rounded-lg border border-white/15 bg-white/[0.05] px-4 py-3 text-base text-white outline-none transition-colors duration-200 placeholder:text-white/30 focus:border-[#D0BC84]/70 focus:bg-white/[0.07] sm:text-sm";

  const labelClassName =
    "mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.12em] text-white/60";

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#07100a]/80 p-3 backdrop-blur-sm sm:p-5"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget && !enviando) {
          onClose();
        }
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="buscar-club-title"
        onMouseDown={(event) => event.stopPropagation()}
        className="relative max-h-[calc(100dvh-24px)] w-full max-w-[760px] overflow-x-hidden overflow-y-auto overscroll-contain rounded-xl border border-white/10 bg-[#172519] shadow-[0_30px_100px_rgba(0,0,0,0.5)] sm:max-h-[92dvh] sm:rounded-2xl"
      >
        {/* DECORACIÓN */}
        <div className="pointer-events-none absolute -right-32 -top-32 h-[280px] w-[280px] rounded-full bg-[#4D6645]/15 blur-[90px]" />

        {/* CERRAR */}
        <button
          type="button"
          onClick={onClose}
          disabled={enviando}
          aria-label="Cerrar formulario"
          className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-xl text-white/70 transition-colors hover:border-white/30 hover:bg-white/10 hover:text-white disabled:opacity-40 sm:right-5 sm:top-5"
        >
          ×
        </button>

        <div className="relative z-10 p-5 pt-14 sm:p-7 sm:pt-7 lg:p-8">
          {/* ENCABEZADO */}
          <div className="pr-0 sm:pr-12">
            <div className="mb-3 flex items-center gap-2.5">
              <span
                aria-hidden="true"
                className="h-2 w-2 shrink-0 rounded-full bg-[#D0BC84]"
              />

              <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#D0BC84]">
                Red federal FECCA
              </span>
            </div>

            <h2
              id="buscar-club-title"
              className="text-[27px] font-semibold leading-[1.15] tracking-tight text-white sm:text-[28px] lg:whitespace-nowrap lg:text-[26px]"
            >
              ¿Estás buscando un club{" "}
              <span className="text-[#D0BC84]">
                al cual pertenecer?
              </span>
            </h2>

            <p className="mt-3 max-w-[540px] text-[13px] leading-6 text-white/70 sm:text-sm">
              Envianos tu localidad y tus datos de contacto para
              ayudarte a encontrar un club de la red.
            </p>
          </div>

          <div className="my-5 h-px bg-white/15 sm:my-6" />

          {exito ? (
            <div
              role="status"
              className="rounded-xl border border-[#D0BC84]/30 bg-[#D0BC84]/10 p-5"
            >
              <h3 className="text-lg font-semibold text-[#D0BC84]">
                ¡Solicitud enviada!
              </h3>

              <p className="mt-2 text-sm leading-6 text-white/75">
                Recibimos tus datos. El equipo de FECCA podrá
                contactarte para orientarte en la búsqueda de un club.
              </p>

              <button
                type="button"
                onClick={onClose}
                className="mt-5 rounded-lg bg-[#D0BC84] px-6 py-3 text-sm font-semibold text-[#283524] hover:bg-[#C7B57A]"
              >
                Cerrar
              </button>
            </div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit}>
              <div className="grid gap-4 sm:grid-cols-2">
                {/* NOMBRE */}
                <div className="sm:col-span-2">
                  <label
                    htmlFor="buscar-nombre"
                    className={labelClassName}
                  >
                    Nombre
                  </label>

                  <input
                    id="buscar-nombre"
                    name="nombre"
                    type="text"
                    required
                    maxLength={120}
                    autoComplete="name"
                    placeholder="Tu nombre"
                    className={inputClassName}
                  />
                </div>

                {/* TELÉFONO */}
                <div className="min-w-0">
                  <label
                    htmlFor="buscar-telefono"
                    className={labelClassName}
                  >
                    Teléfono de contacto
                  </label>

                  <input
                    id="buscar-telefono"
                    name="telefono"
                    type="tel"
                    required
                    maxLength={40}
                    autoComplete="tel"
                    inputMode="tel"
                    placeholder="11 1234 5678"
                    className={inputClassName}
                  />
                </div>

                {/* EMAIL */}
                <div className="min-w-0">
                  <label
                    htmlFor="buscar-email"
                    className={labelClassName}
                  >
                    Email
                  </label>

                  <input
                    id="buscar-email"
                    name="email"
                    type="email"
                    required
                    maxLength={254}
                    autoComplete="email"
                    inputMode="email"
                    placeholder="nombre@email.com"
                    className={inputClassName}
                  />
                </div>

                {/* LOCALIDAD */}
                <div className="min-w-0">
                  <label
                    htmlFor="buscar-localidad"
                    className={labelClassName}
                  >
                    Localidad
                  </label>

                  <input
                    id="buscar-localidad"
                    name="localidad"
                    type="text"
                    required
                    maxLength={120}
                    placeholder="Tu localidad"
                    className={inputClassName}
                  />
                </div>

                {/* PROVINCIA */}
                <div className="min-w-0">
                  <label
                    htmlFor="buscar-provincia"
                    className={labelClassName}
                  >
                    Provincia
                  </label>

                  <input
                    id="buscar-provincia"
                    name="provincia"
                    type="text"
                    required
                    maxLength={120}
                    placeholder="Tu provincia"
                    className={inputClassName}
                  />
                </div>
              </div>

              {/* CLOUDFLARE TURNSTILE */}
              <div className="mt-5">
                {siteKey ? (
                  <Turnstile
                    ref={turnstileRef}
                    siteKey={siteKey}
                    options={{
                      theme: "dark",
                      size: "normal",
                    }}
                    onSuccess={(token) => {
                      setTurnstileToken(token);
                      setError("");
                    }}
                    onExpire={() => setTurnstileToken("")}
                    onError={() => {
                      setTurnstileToken("");
                      setError(
                        "No pudimos cargar la verificación de seguridad."
                      );
                    }}
                  />
                ) : (
                  <p className="text-xs text-red-300">
                    Falta configurar la clave pública de Turnstile.
                  </p>
                )}
              </div>

              {error && (
                <p
                  role="alert"
                  className="mt-4 rounded-lg border border-red-400/25 bg-red-400/10 px-4 py-3 text-sm text-red-200"
                >
                  {error}
                </p>
              )}

              {/* PIE DEL FORMULARIO */}
              <div className="mt-6 flex flex-col gap-4 border-t border-white/15 pt-5 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-[300px] text-[11px] leading-5 text-white/50 sm:text-xs">
                  FECCA te ayudará a encontrar un club de la red
                  de acuerdo a tu localidad.
                </p>

                <button
                  type="submit"
                  disabled={enviando || !turnstileToken}
                  className="inline-flex min-h-11 w-full items-center justify-center rounded-lg bg-[#D0BC84] px-6 py-2.5 text-[13px] font-semibold text-[#283524] transition-colors duration-300 hover:bg-[#C7B57A] disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
                >
                  {enviando ? "Enviando..." : "Enviar solicitud"}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
