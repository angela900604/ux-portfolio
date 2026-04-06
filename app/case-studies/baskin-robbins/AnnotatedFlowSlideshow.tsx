"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { ImageLightbox } from "../e-invoice-app/ImageLightbox";

export type SlideshowSlide = {
  src: string;
  alt: string;
};

const AUTO_MS = 3000;

/**
 * Full-width gallery with prev/next, dots, lightbox, auto-advance, pause on hover.
 */
export function AnnotatedFlowSlideshow({ items }: { items: SlideshowSlide[] }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const n = items.length;
  const safeIndex = ((index % n) + n) % n;
  const current = items[safeIndex];

  const go = useCallback(
    (delta: number) => {
      setIndex((i) => (i + delta + n) % n);
    },
    [n]
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  useEffect(() => {
    if (paused || n <= 1) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % n);
    }, AUTO_MS);
    return () => window.clearInterval(id);
  }, [paused, n, safeIndex]);

  return (
    <div className="max-w-4xl space-y-4">
      <div
        className="relative"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <ImageLightbox
          src={current.src}
          alt={current.alt}
          ariaLabel={`${current.alt} — slide ${safeIndex + 1} of ${n}, tap to enlarge`}
          className="block w-full overflow-hidden rounded-[20px] bg-zinc-900/20"
        >
          <Image
            src={current.src}
            alt={current.alt}
            width={2400}
            height={1600}
            className="h-auto w-full object-contain"
            sizes="(max-width: 1280px) 100vw, 900px"
            priority={safeIndex === 0}
          />
        </ImageLightbox>
        <div className="pointer-events-none absolute inset-y-0 left-0 right-0 flex items-center justify-between px-2">
          <button
            type="button"
            onClick={() => go(-1)}
            className="pointer-events-auto rounded-full border border-zinc-600/80 bg-zinc-950/85 px-3 py-2 text-sm text-zinc-100 shadow-lg backdrop-blur-sm transition hover:bg-zinc-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-violet-500"
            aria-label="Previous slide"
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            className="pointer-events-auto rounded-full border border-zinc-600/80 bg-zinc-950/85 px-3 py-2 text-sm text-zinc-100 shadow-lg backdrop-blur-sm transition hover:bg-zinc-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-violet-500"
            aria-label="Next slide"
          >
            →
          </button>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-2">
        {items.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setIndex(i)}
            className={`h-2 w-2 rounded-full transition ${
              i === safeIndex ? "bg-violet-400" : "bg-zinc-600 hover:bg-zinc-500"
            }`}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === safeIndex}
          />
        ))}
      </div>
      <p className="text-center text-xs text-zinc-500">
        {safeIndex + 1} / {n}
      </p>
    </div>
  );
}
