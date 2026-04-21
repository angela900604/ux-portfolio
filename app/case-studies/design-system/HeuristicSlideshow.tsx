"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";

/** Native export size — max-width matches this so images are never upscaled. */
const SLIDE_WIDTH = 1024;
const SLIDE_HEIGHT = 371;
const AUTO_MS = 4500;

export type HeuristicSlide = {
  src: string;
  alt: string;
  label: string;
};

export function HeuristicSlideshow({
  slides,
  ariaLabel,
}: {
  slides: HeuristicSlide[];
  ariaLabel: string;
}) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const total = slides.length;

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const onChange = () => setReduceMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const safeIndex = useMemo(() => {
    if (total === 0) return 0;
    return ((index % total) + total) % total;
  }, [index, total]);

  const go = useCallback(
    (delta: number) => {
      if (total <= 1) return;
      setIndex((i) => (i + delta + total) % total);
    },
    [total]
  );

  useEffect(() => {
    if (paused || total <= 1 || reduceMotion) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % total);
    }, AUTO_MS);
    return () => window.clearInterval(id);
  }, [paused, total, reduceMotion]);

  if (total === 0) return null;

  const current = slides[safeIndex];

  return (
    <div
      className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-4 sm:p-5"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
          setPaused(false);
        }
      }}
      aria-roledescription="carousel"
      aria-label={ariaLabel}
    >
      <div className="mx-auto w-full max-w-[1024px]">
        <div
          className="relative w-full overflow-hidden rounded-xl border border-zinc-800/90 bg-zinc-950"
          style={{ aspectRatio: `${SLIDE_WIDTH} / ${SLIDE_HEIGHT}` }}
        >
          <Image
            src={current.src}
            alt={current.alt}
            fill
            unoptimized
            priority={safeIndex === 0}
            className="object-contain object-center"
            sizes="(max-width: 1024px) 100vw, 1024px"
          />

          {total > 1 ? (
            <div className="pointer-events-none absolute inset-0 flex items-center justify-between px-1 sm:px-2">
              <button
                type="button"
                aria-label="Previous slide"
                className="pointer-events-auto rounded-full border border-zinc-600 bg-zinc-950/95 px-3 py-2 text-sm text-zinc-200 shadow-lg backdrop-blur-sm transition hover:border-zinc-500 hover:bg-zinc-900"
                onClick={() => go(-1)}
              >
                ←
              </button>
              <button
                type="button"
                aria-label="Next slide"
                className="pointer-events-auto rounded-full border border-zinc-600 bg-zinc-950/95 px-3 py-2 text-sm text-zinc-200 shadow-lg backdrop-blur-sm transition hover:border-zinc-500 hover:bg-zinc-900"
                onClick={() => go(1)}
              >
                →
              </button>
            </div>
          ) : null}
        </div>
      </div>

      {total > 1 ? (
        <div
          className="relative mt-4 flex flex-wrap items-center justify-center gap-2"
          role="tablist"
          aria-label="Heuristic slides"
        >
          {slides.map((s, i) => (
            <button
              key={s.src}
              type="button"
              role="tab"
              aria-selected={i === safeIndex}
              aria-label={`${s.label}, slide ${i + 1} of ${total}`}
              className={`max-w-[9.5rem] truncate rounded-full px-3 py-1.5 text-[10px] font-medium uppercase tracking-wider transition sm:max-w-none ${
                i === safeIndex
                  ? "bg-sky-500/20 text-sky-200 ring-1 ring-sky-500/40"
                  : "bg-zinc-800/60 text-zinc-500 hover:bg-zinc-800 hover:text-zinc-300"
              }`}
              onClick={() => setIndex(i)}
            >
              {s.label}
            </button>
          ))}
        </div>
      ) : null}

      <p className="mt-3 text-center text-[11px] text-zinc-500">
        Nielsen heuristics — do vs. don&apos;t ({safeIndex + 1}/{total})
        {reduceMotion ? (
          <span className="ml-2 text-zinc-600">· Autoplay off</span>
        ) : null}
      </p>
    </div>
  );
}
