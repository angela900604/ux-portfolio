"use client";

import { useCallback, useEffect, useState } from "react";
import { PhoneMockup } from "./EInvoiceFigures";

const SLIDE_MS = 3000;

export function OutcomeAutoSlideshow({
  screens,
  label,
  hint,
}: {
  screens: { src: string; alt: string }[];
  label: string;
  hint?: string;
}) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const onChange = () => setReduceMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const step = useCallback(() => {
    setIndex((i) => (i + 1) % screens.length);
  }, [screens.length]);

  useEffect(() => {
    if (screens.length <= 1 || paused || reduceMotion) return;
    const id = window.setInterval(step, SLIDE_MS);
    return () => window.clearInterval(id);
  }, [screens.length, paused, reduceMotion, step]);

  if (screens.length === 0) return null;

  return (
    <div
      className="mx-auto w-full max-w-[320px] space-y-3 text-center"
      aria-roledescription="carousel"
      aria-label={label}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="grid place-items-center">
        {screens.map((s, i) => (
          <div
            key={s.src}
            className={`col-start-1 row-start-1 w-full transition-opacity duration-500 ease-out motion-reduce:transition-none ${
              i === index
                ? "z-10 opacity-100"
                : "z-0 opacity-0 pointer-events-none"
            }`}
            aria-hidden={i !== index}
          >
            <PhoneMockup
              chromeless
              hideCaption
              src={s.src}
              alt={s.alt}
              label=""
            />
          </div>
        ))}
      </div>
      {screens.length > 1 ? (
        <div
          className="flex justify-center gap-1.5"
          role="tablist"
          aria-label="Onboarding screens"
        >
          {screens.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Slide ${i + 1} of ${screens.length}`}
              className={`h-1.5 rounded-full transition-all ${
                i === index
                  ? "w-5 bg-violet-400"
                  : "w-1.5 bg-zinc-600 hover:bg-zinc-500"
              }`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      ) : null}
      <div className="px-1">
        <p className="text-xs font-medium text-zinc-200">{label}</p>
        {hint ? (
          <p className="mt-1 text-[11px] text-zinc-500">{hint}</p>
        ) : null}
      </div>
    </div>
  );
}
