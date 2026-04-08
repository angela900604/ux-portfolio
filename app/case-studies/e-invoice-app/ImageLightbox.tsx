"use client";

import { useState, useCallback, useEffect } from "react";

export function ImageLightbox({
  src,
  alt,
  children,
  className = "",
  ariaLabel,
}: {
  src: string;
  alt: string;
  children: React.ReactNode;
  className?: string;
  /** Optional label for the clickable trigger (defaults to “View larger”). */
  ariaLabel?: string;
}) {
  const [open, setOpen] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close]);

  const handleBackdropClick = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === e.currentTarget) close();
    },
    [close]
  );

  return (
    <>
      <div
        role="button"
        tabIndex={0}
        aria-label={ariaLabel ?? `View larger — ${alt}`}
        onClick={() => setOpen(true)}
        onKeyDown={(e) =>
          (e.key === "Enter" || e.key === " ") && (e.preventDefault(), setOpen(true))
        }
        className={`cursor-pointer overflow-hidden transition-transform duration-300 ease-out hover:scale-[1.035] focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 focus:ring-offset-zinc-950 ${className}`}
      >
        {children}
      </div>
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={handleBackdropClick}
          role="dialog"
          aria-modal="true"
          aria-label="Enlarged image"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={alt}
            className="max-h-[90vh] max-w-[90vw] object-contain rounded-[20px] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            draggable={false}
          />
        </div>
      )}
    </>
  );
}
