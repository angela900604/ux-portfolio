"use client";

import type { CSSProperties } from "react";
import Image from "next/image";

export type BaskinMarqueeSlide = {
  src: string;
  alt: string;
};

function MarqueeSlide({
  slide,
  ariaHidden,
}: {
  slide: BaskinMarqueeSlide;
  ariaHidden?: boolean;
}) {
  return (
    <div
      className="mx-3 w-[min(78vw,280px)] shrink-0 sm:mx-4 sm:w-[300px]"
      aria-hidden={ariaHidden || undefined}
    >
      <Image
        src={slide.src}
        alt={slide.alt}
        width={900}
        height={506}
        className="h-auto w-full object-contain bg-transparent"
        sizes="300px"
      />
    </div>
  );
}

/**
 * Same infinite marquee behavior as e-invoice `FinalScreensMarquee` (global CSS
 * classes + duplicate track). BR31: pink strip, no lightbox, no borders on slides.
 */
export function BaskinFinalScreensMarquee({
  slides,
  durationSec,
  backgroundColor = "#FEE7F4",
}: {
  slides: readonly BaskinMarqueeSlide[];
  durationSec?: number;
  /** Marquee strip background (default light pink for BR31). */
  backgroundColor?: string;
}) {
  if (slides.length === 0) return null;

  const seconds =
    durationSec ?? Math.max(48, Math.round(slides.length * 3.2));

  return (
    <div
      className="relative left-1/2 w-screen max-w-[100vw] -translate-x-1/2 py-6 sm:py-8"
      style={{ backgroundColor }}
      role="region"
      aria-label="Shipped product screens — auto-scrolling gallery. Pause with reduced motion in system settings."
    >
      <div className="final-screens-marquee-viewport -mx-1 sm:-mx-2">
        <div
          className="final-screens-marquee-track flex w-max py-1"
          style={
            {
              "--final-marquee-duration": `${seconds}s`,
            } as CSSProperties
          }
        >
          {slides.map((slide, i) => (
            <MarqueeSlide key={`a-${slide.src}-${i}`} slide={slide} />
          ))}
          {slides.map((slide, i) => (
            <MarqueeSlide
              key={`b-${slide.src}-${i}`}
              slide={slide}
              ariaHidden
            />
          ))}
        </div>
      </div>
    </div>
  );
}
