"use client";

import Image from "next/image";
import { ImageLightbox } from "@/app/components/ImageLightbox";

const W = 1165;
const H = 874;

const MOCKUPS = [
  {
    src: "/case-studies/mina/instagram/portfolio-mockup-instagram-1.png",
    alt: "MINA marketing — Instagram-style portfolio mockup 1",
  },
  {
    src: "/case-studies/mina/instagram/portfolio-mockup-instagram-2.png",
    alt: "MINA marketing — Instagram-style portfolio mockup 2",
  },
  {
    src: "/case-studies/mina/instagram/portfolio-mockup-instagram-4.png",
    alt: "MINA marketing — Instagram-style portfolio mockup 4",
  },
  {
    src: "/case-studies/mina/instagram/portfolio-mockup-instagram-3.png",
    alt: "MINA marketing — Instagram-style portfolio mockup 3",
  },
  {
    src: "/case-studies/mina/instagram/portfolio-mockup-instagram.png",
    alt: "MINA marketing — Instagram-style portfolio mockup",
  },
] as const;

/** Full-width stack of launch / Instagram mockups (source PNGs, unoptimized for clarity). */
export function MinaInstagramGrid() {
  return (
    <div className="flex w-full min-w-0 flex-col gap-8 sm:gap-10">
      {MOCKUPS.map((item, index) => (
        <figure
          key={item.src}
          className="min-w-0 overflow-hidden rounded-lg border border-zinc-800 bg-zinc-950"
        >
          <ImageLightbox
            src={item.src}
            alt={item.alt}
            className="relative block w-full"
            disableHoverScale
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={W}
              height={H}
              className="h-auto w-full object-contain align-top"
              sizes="(max-width: 1536px) min(100vw - 48px, 1400px), 1400px"
              unoptimized
              priority={index === 0}
            />
          </ImageLightbox>
        </figure>
      ))}
    </div>
  );
}
