"use client";

import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";

/**
 * Floating control for before/after sliders: opens both stills at readable size
 * without replacing the drag interaction on the main figure.
 */
export function BeforeAfterComparisonLightbox({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  label = "Enlarge comparison",
}: {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
  /** Visible button text (keep short). */
  label?: string;
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

  const handleBackdrop = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === e.currentTarget) close();
    },
    [close],
  );

  return (
    <>
      <button
        type="button"
        className="pointer-events-auto absolute bottom-3 right-3 z-[4] rounded-md bg-zinc-950/85 px-2.5 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-zinc-200 ring-1 ring-zinc-600/90 backdrop-blur-sm transition hover:bg-zinc-900 hover:text-white"
        onClick={(e) => {
          e.stopPropagation();
          setOpen(true);
        }}
      >
        {label}
      </button>
      {open &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            className="fixed inset-0 z-[11000] flex items-center justify-center bg-black/92 p-4 backdrop-blur-sm"
            onClick={handleBackdrop}
            role="dialog"
            aria-modal="true"
            aria-label="Before and after comparison, enlarged"
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
            <div
              className="mt-8 flex max-h-[min(92vh,100%)] w-full max-w-6xl flex-col gap-4 overflow-y-auto md:flex-row md:items-start md:justify-center md:gap-6"
              onClick={(e) => e.stopPropagation()}
            >
              <figure className="min-w-0 flex-1 text-center">
                <span className="mb-2 inline-block rounded-md bg-zinc-800 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-zinc-300">
                  Before
                </span>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={beforeSrc}
                  alt={beforeAlt}
                  className="mx-auto max-h-[42vh] w-auto max-w-full rounded-lg object-contain shadow-xl md:max-h-[min(78vh,880px)]"
                  draggable={false}
                />
              </figure>
              <figure className="min-w-0 flex-1 text-center">
                <span className="mb-2 inline-block rounded-md bg-zinc-800 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-zinc-300">
                  After
                </span>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={afterSrc}
                  alt={afterAlt}
                  className="mx-auto max-h-[42vh] w-auto max-w-full rounded-lg object-contain shadow-xl md:max-h-[min(78vh,880px)]"
                  draggable={false}
                />
              </figure>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
