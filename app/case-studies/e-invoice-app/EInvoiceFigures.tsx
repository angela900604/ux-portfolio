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
  frame = "default",
  borderless = false,
  cropTopBottomPx = 0,
}: {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  /** `white`: full white background, no border; caption renders outside the image area */
  frame?: "default" | "white";
  /** Omit border stroke on the default (dark) frame */
  borderless?: boolean;
  /** Crop this many pixels from top and bottom (e.g. hero tuning) */
  cropTopBottomPx?: number;
}) {
  const imageInner = (
    <ImageLightbox
      src={src}
      alt={alt}
      className={
        frame === "white"
          ? "block w-full overflow-hidden bg-white"
          : `block overflow-hidden rounded-[20px] ${
              borderless
                ? "bg-zinc-900/30"
                : "border border-zinc-700/60 bg-zinc-900/30"
            }`
      }
    >
      <Image
        src={src}
        alt={alt}
        width={2400}
        height={1350}
        className={`h-auto w-full object-contain ${
          frame === "white" ? "bg-white" : ""
        }`}
        sizes="(max-width: 1200px) 100vw, 1100px"
      />
    </ImageLightbox>
  );

  const image =
    cropTopBottomPx > 0 ? (
      <div
        className="overflow-hidden rounded-[20px]"
        style={{
          clipPath: `inset(${cropTopBottomPx}px 0 ${cropTopBottomPx}px 0)`,
        }}
      >
        {imageInner}
      </div>
    ) : (
      imageInner
    );

  if (frame === "white") {
    return (
      <figure className={`space-y-0 ${className}`}>
        <div className="bg-white">{image}</div>
        {caption && (
          <figcaption className="mt-3 max-w-3xl text-xs leading-relaxed text-zinc-500">
            {caption}
          </figcaption>
        )}
      </figure>
    );
  }

  return (
    <figure className={`space-y-2 ${className}`}>
      {image}
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
  className = "",
}: {
  src: string;
  alt: string;
  label: string;
  hint?: string;
  className?: string;
}) {
  return (
    <figure className={`space-y-3 ${className}`}>
      <ImageLightbox
        src={src}
        alt={alt}
        ariaLabel={`${alt} — tap to enlarge`}
        className="mx-auto block w-full max-w-[280px]"
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

/** App screenshot without device chrome — rounded container + lightbox */
export function FlatAppShot({
  src,
  alt,
  label,
  className = "",
}: {
  src: string;
  alt: string;
  label: string;
  className?: string;
}) {
  return (
    <figure className={`flex w-full max-w-[280px] flex-col space-y-2 ${className}`}>
      <ImageLightbox
        src={src}
        alt={alt}
        ariaLabel={`${alt} — tap to enlarge`}
        className="mx-auto block w-full max-w-[280px] overflow-hidden rounded-[20px] border border-zinc-700/60 bg-zinc-900/30"
      >
        <Image
          src={src}
          alt={alt}
          width={780}
          height={1688}
          className="h-auto w-full object-contain object-top"
          sizes="(max-width: 640px) 72vw, 280px"
        />
      </ImageLightbox>
      <figcaption className="text-center">
        <p className="text-xs font-medium leading-snug text-zinc-200">{label}</p>
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
