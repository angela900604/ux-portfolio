"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { ImageLightbox } from "./ImageLightbox";

const SLIDES = [
  {
    src: "/case-studies/e-invoice/slideshow-1.png",
    alt: "Flow architecture: login and registration iteration",
  },
  {
    src: "/case-studies/e-invoice/slideshow-2.png",
    alt: "Flow architecture: forgot password and verification paths",
  },
  {
    src: "/case-studies/e-invoice/slideshow-3.png",
    alt: "Flow architecture: notification center and re-login logic",
  },
] as const;

const INTERVAL_MS = 5500;

export default function FlowSlideshow() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const advance = useCallback(() => {
    setIndex((i) => (i + 1) % SLIDES.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(advance, INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [paused, advance]);

  const currentSlide = SLIDES[index];

  return (
    <figure className="space-y-3">
      <ImageLightbox src={currentSlide.src} alt={currentSlide.alt} className="block w-full">
        <div
          className="relative w-full aspect-[16/10] overflow-hidden rounded-[20px] bg-zinc-950"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          role="region"
          aria-roledescription="carousel"
          aria-label="Flow architecture slides"
        >
          {SLIDES.map((slide, i) => (
            <div
              key={slide.src}
              className={`absolute inset-0 transition-opacity duration-700 ease-out ${
                i === index ? "opacity-100 z-[1]" : "opacity-0 z-0"
              }`}
              aria-hidden={i !== index}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                className="object-cover object-center"
                sizes="(max-width: 1440px) 100vw, 1240px"
                priority={i === 0}
              />
            </div>
          ))}
        </div>
      </ImageLightbox>
      <div className="flex flex-wrap items-center justify-end gap-3">
        <p className="sr-only" aria-live="polite">
          Slide {index + 1} of {SLIDES.length}. Auto-advances; pauses on hover.
        </p>
        <div className="flex gap-2" role="tablist" aria-label="Slide indicators">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === index}
              className={`h-2 rounded-full transition-all ${
                i === index
                  ? "w-8 bg-violet-400"
                  : "w-2 bg-zinc-600 hover:bg-zinc-500"
              }`}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </figure>
  );
}
