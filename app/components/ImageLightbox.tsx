"use client";

import type { StaticImageData } from "next/image";
import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";

function resolveSrc(src: string | StaticImageData): string {
  return typeof src === "string" ? src : src.src;
}

export function ImageLightbox({
  src,
  alt,
  children,
  className = "",
  ariaLabel,
  disableHoverScale = false,
  stopTriggerPropagation = false,
}: {
  src: string | StaticImageData;
  alt: string;
  children: React.ReactNode;
  className?: string;
  /** Optional label for the clickable trigger (defaults to “View larger”). */
  ariaLabel?: string;
  /** When true, skips the slight hover scale (e.g. inside marquees or tight grids). */
  disableHoverScale?: boolean;
  /** When the trigger sits inside another clickable surface (e.g. a card). */
  stopTriggerPropagation?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const srcUrl = resolveSrc(src);

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
    [close],
  );

  const motion = disableHoverScale
    ? "cursor-zoom-in overflow-hidden transition-opacity duration-200 hover:opacity-[0.97]"
    : "cursor-zoom-in overflow-hidden transition-transform duration-300 ease-out hover:scale-[1.02]";

  return (
    <>
      <div
        role="button"
        tabIndex={0}
        aria-label={ariaLabel ?? `View larger — ${alt}`}
        onClick={(e) => {
          if (stopTriggerPropagation) e.stopPropagation();
          setOpen(true);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            if (stopTriggerPropagation) e.stopPropagation();
            setOpen(true);
          }
        }}
        className={`${motion} focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 ${className}`}
      >
        {children}
      </div>
      {open &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            className="fixed inset-0 z-[11000] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
            onClick={handleBackdropClick}
            role="dialog"
            aria-modal="true"
            aria-label="Enlarged image"
          >
            <button
              type="button"
              className="absolute right-4 top-4 z-[1] rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-sm font-medium text-white transition hover:bg-white/20"
              onClick={(e) => {
                e.stopPropagation();
                close();
              }}
            >
              Close
            </button>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={srcUrl}
              alt={alt}
              className="max-h-[min(92vh,100%)] max-w-[min(92vw,100%)] object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              draggable={false}
            />
          </div>,
          document.body,
        )}
    </>
  );
}
