"use client";

import Image from "next/image";
import { ImageLightbox } from "./ImageLightbox";

const R_SCREEN = "rounded-[1.35rem]";

/** Diagrams / wide exports — hover + lightbox */
export function WideFigure({
  src,
  alt,
  caption,
  className = "",
}: {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
}) {
  return (
    <figure className={`space-y-2 ${className}`}>
      <ImageLightbox
        src={src}
        alt={alt}
        className="block overflow-hidden rounded-[20px] border border-zinc-700/60 bg-zinc-900/30"
      >
        <Image
          src={src}
          alt={alt}
          width={2400}
          height={1350}
          className="h-auto w-full object-contain"
          sizes="(max-width: 1200px) 100vw, 1100px"
        />
      </ImageLightbox>
      {caption && (
        <figcaption className="max-w-3xl text-xs text-zinc-500">{caption}</figcaption>
      )}
    </figure>
  );
}

/** Device frame: bezel, dynamic island, side keys — screen is lightbox target */
export function PhoneMockup({
  src,
  alt,
  label,
  hint,
}: {
  src: string;
  alt: string;
  label: string;
  hint?: string;
}) {
  return (
    <figure className="space-y-3">
      <ImageLightbox
        src={src}
        alt={alt}
        ariaLabel={`${alt} — tap to enlarge`}
        className="mx-auto block w-full max-w-[300px]"
      >
        <div className="relative rounded-[3rem] bg-gradient-to-b from-zinc-600 via-zinc-800 to-zinc-950 p-[11px] shadow-[0_28px_56px_-16px_rgba(0,0,0,0.75)] ring-1 ring-white/[0.12]">
          <div
            className="absolute -left-[3px] top-[22%] h-9 w-[3px] rounded-l-md bg-zinc-500/90 shadow-sm"
            aria-hidden
          />
          <div
            className="absolute -left-[3px] top-[30%] h-14 w-[3px] rounded-l-md bg-zinc-500/90 shadow-sm"
            aria-hidden
          />
          <div
            className="absolute -right-[3px] top-[26%] h-20 w-[3px] rounded-r-md bg-zinc-500/90 shadow-sm"
            aria-hidden
          />
          <div className="relative rounded-[2.4rem] bg-black p-[10px] pt-[14px]">
            <div
              className="pointer-events-none absolute left-1/2 top-[10px] z-10 h-[27px] w-[92px] -translate-x-1/2 rounded-full bg-black ring-1 ring-zinc-800"
              aria-hidden
            />
            <div
              className={`overflow-hidden bg-zinc-950 ring-1 ring-zinc-800/90 ${R_SCREEN}`}
            >
              <Image
                src={src}
                alt={alt}
                width={780}
                height={1688}
                className="h-auto w-full object-cover object-top"
                sizes="280px"
              />
            </div>
          </div>
        </div>
      </ImageLightbox>
      <figcaption className="px-1 text-center">
        <p className="text-xs font-medium leading-snug text-zinc-200">{label}</p>
        {hint && (
          <p className="mt-1 text-[11px] leading-snug text-zinc-500">{hint}</p>
        )}
      </figcaption>
    </figure>
  );
}

/** Persona / lifestyle portrait — hover + lightbox */
export function PortraitTile({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <ImageLightbox
      src={src}
      alt={alt}
      className={`block w-full overflow-hidden rounded-xl border border-zinc-700/50 bg-zinc-900/40 ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        width={480}
        height={640}
        className="aspect-[3/4] h-auto w-full object-cover object-center"
        sizes="(max-width: 640px) 100vw, 200px"
      />
    </ImageLightbox>
  );
}
