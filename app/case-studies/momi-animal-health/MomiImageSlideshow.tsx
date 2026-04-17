"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";

type MomiSlide = {
  src: string;
  alt: string;
};

const AUTO_MS = 3200;

export function MomiImageSlideshow({
  slides,
  label,
}: {
  slides: MomiSlide[];
  label: string;
}) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = slides.length;

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
    if (paused || total <= 1) return;
    const timerId = window.setInterval(() => {
      setIndex((i) => (i + 1) % total);
    }, AUTO_MS);

    return () => window.clearInterval(timerId);
  }, [paused, total]);

  if (total === 0) return null;

  const current = slides[safeIndex];

  return (
    <div
      className="mx-auto w-full max-w-md rounded-xl border border-[#E8E1D6] bg-white p-3 sm:max-w-lg sm:p-4"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label={label}
    >
      <div className="relative">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border border-[#E8E1D6] bg-[#FDFBF8]">
          <Image
            src={current.src}
            alt={current.alt}
            fill
            className="object-contain"
            sizes="(max-width: 640px) 100vw, 512px"
            priority={safeIndex === 0}
          />
        </div>

        {total > 1 ? (
          <div className="pointer-events-none absolute inset-y-0 left-0 right-0 flex items-center justify-between px-2">
            <button
              type="button"
              aria-label="Previous slide"
              className="pointer-events-auto rounded-full border border-[#D6CBB8] bg-white/90 px-3 py-1.5 text-sm text-[#4A4A4A] transition hover:bg-[#F5F0E8]"
              onClick={() => go(-1)}
            >
              ←
            </button>
            <button
              type="button"
              aria-label="Next slide"
              className="pointer-events-auto rounded-full border border-[#D6CBB8] bg-white/90 px-3 py-1.5 text-sm text-[#4A4A4A] transition hover:bg-[#F5F0E8]"
              onClick={() => go(1)}
            >
              →
            </button>
          </div>
        ) : null}
      </div>

      {total > 1 ? (
        <div className="mt-3 flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === safeIndex}
              className={`h-2 w-2 rounded-full transition ${
                i === safeIndex ? "bg-[#8D99AE]" : "bg-[#D2C8BA] hover:bg-[#B9AE9F]"
              }`}
            />
          ))}
        </div>
      ) : null}

      <p className="mt-2 text-center text-[11px] text-[#7A7A7A]">
        {label} ({safeIndex + 1}/{total})
      </p>
    </div>
  );
}
