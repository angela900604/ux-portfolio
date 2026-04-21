"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";

const AUTO_MS = 4200;

export type HeuristicSlide = {
  src: string;
  alt: string;
  /** Short label shown under dots */
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
      aria-roledescription="carousel"
      aria-label={ariaLabel}
    >
      <div className="relative">
        <div
          className="relative w-full overflow-hidden rounded-xl border border-zinc-800/90 bg-zinc-950"
          style={{ aspectRatio: "1024 / 371" }}
        >
          <Image
            src={current.src}
            alt={current.alt}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, min(72rem, 100vw)"
            priority={safeIndex === 0}
          />
        </div>

        {total > 1 ? (
          <div className="pointer-events-none absolute inset-y-0 left-0 right-0 flex items-center justify-between px-2">
            <button
              type="button"
              aria-label="Previous slide"
              className="pointer-events-auto rounded-full border border-zinc-600 bg-zinc-950/90 px-3 py-1.5 text-sm text-zinc-200 transition hover:border-zinc-500 hover:bg-zinc-900"
              onClick={() => go(-1)}
            >
              ←
            </button>
            <button
              type="button"
              aria-label="Next slide"
              className="pointer-events-auto rounded-full border border-zinc-600 bg-zinc-950/90 px-3 py-1.5 text-sm text-zinc-200 transition hover:border-zinc-500 hover:bg-zinc-900"
              onClick={() => go(1)}
            >
              →
            </button>
          </div>
        ) : null}
      </div>

      {total > 1 ? (
        <div className="mt-3 flex flex-wrap items-center justify-center gap-2">
          {slides.map((s, i) => (
            <button
              key={s.src}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`${s.label} — slide ${i + 1}`}
              aria-current={i === safeIndex}
              className={`max-w-[10rem] truncate rounded-full px-3 py-1 text-[10px] font-medium uppercase tracking-wider transition sm:max-w-none ${
                i === safeIndex
                  ? "bg-sky-500/20 text-sky-200 ring-1 ring-sky-500/40"
                  : "bg-zinc-800/60 text-zinc-500 hover:bg-zinc-800 hover:text-zinc-300"
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>
      ) : null}

      <p className="mt-3 text-center text-[11px] text-zinc-500">
        Nielsen heuristics — do vs. don&apos;t ({safeIndex + 1}/{total})
        {reduceMotion ? <span className="ml-2 text-zinc-600">· Auto-advance off</span> : null}
      </p>
    </div>
  );
}
