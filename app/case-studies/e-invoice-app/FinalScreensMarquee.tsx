"use client";

import type { CSSProperties } from "react";
import Image from "next/image";
import { ImageLightbox } from "./ImageLightbox";

export type FinalMarqueeSlide = {
  src: string;
  alt: string;
};

function MarqueeSlide({
  slide,
  ariaHidden,
}: {
  slide: FinalMarqueeSlide;
  ariaHidden?: boolean;
}) {
  return (
    <div
      className="mx-3 w-[min(78vw,280px)] shrink-0 sm:mx-4 sm:w-[300px]"
      aria-hidden={ariaHidden || undefined}
    >
      <ImageLightbox
        src={slide.src}
        alt={slide.alt}
        className="block overflow-visible bg-transparent"
      >
        <Image
          src={slide.src}
          alt={slide.alt}
          width={900}
          height={506}
          className="h-auto w-full object-contain"
          sizes="300px"
        />
      </ImageLightbox>
    </div>
  );
}

/**
 * Infinite horizontal marquee (duplicate track + translate -50%).
 * Respects prefers-reduced-motion via CSS (animation disabled → static row, scrollable).
 */
export function FinalScreensMarquee({
  slides,
  durationSec,
}: {
  slides: readonly FinalMarqueeSlide[];
  /** Full loop duration; defaults from slide count */
  durationSec?: number;
}) {
  if (slides.length === 0) return null;

  const seconds =
    durationSec ?? Math.max(48, Math.round(slides.length * 3.2));

  return (
    <div
      className="relative py-2"
      role="region"
      aria-label="Final solution screens — auto-scrolling gallery. Pause with reduced motion in system settings."
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
