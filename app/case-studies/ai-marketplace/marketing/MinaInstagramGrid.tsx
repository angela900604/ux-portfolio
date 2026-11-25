"use client";

import Image from "next/image";
import { ImageLightbox } from "@/app/components/ImageLightbox";
import { CASE_STUDY_SECTION_TITLE_CLASS } from "@/lib/site-shell";

const W = 1165;
const H = 874;

const MOCKUPS = [
  {
    src: "/case-studies/mina/instagram/portfolio-mockup-instagram-1.png",
    alt: "MINA marketing — Instagram-style portfolio mockup 1",
    title: "Babies grow fast. Stuff piles up faster.",
  },
  {
    src: "/case-studies/mina/instagram/portfolio-mockup-instagram-2.png",
    alt: "MINA marketing — Instagram-style portfolio mockup 2",
    title: "Is this you? Ghosted. Lowball offer. Stranger pickup.",
  },
  {
    src: "/case-studies/mina/instagram/portfolio-mockup-instagram-4.png",
    alt: "MINA marketing — Instagram-style portfolio mockup 4",
    title:
      "MINA helps parents find quality pre-loved baby items from local SF families.",
  },
  {
    src: "/case-studies/mina/instagram/portfolio-mockup-instagram-3.png",
    alt: "MINA marketing — Instagram-style portfolio mockup 3",
    title: "MINA Selling Agent",
  },
  {
    src: "/case-studies/mina/instagram/portfolio-mockup-instagram.png",
    alt: "MINA marketing — Instagram-style portfolio mockup",
    title: "Book a MINA Concierge pickup now at shop.getmina.app",
  },
] as const;

/** Full-width stack of launch / Instagram mockups (source PNGs, unoptimized for clarity). */
export function MinaInstagramGrid() {
  return (
    <div className="flex w-full min-w-0 flex-col gap-8 sm:gap-10">
      {MOCKUPS.map((item, index) => (
        <figure key={item.src} className="min-w-0 space-y-3">
          <h2 className={CASE_STUDY_SECTION_TITLE_CLASS}>{item.title}</h2>
          <div className="overflow-hidden bg-zinc-800">
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
          </div>
          <figcaption className="text-sm text-zinc-500">{item.title}</figcaption>
        </figure>
      ))}
    </div>
  );
}
