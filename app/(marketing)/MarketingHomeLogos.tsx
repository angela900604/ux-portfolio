"use client";

import Image from "next/image";
import { ImageLightbox } from "@/app/components/ImageLightbox";

const HERO_LOGOS = [
  { src: "/home/logos/figma.png", alt: "Figma" },
  { src: "/home/logos/claude.png", alt: "Claude" },
  { src: "/home/logos/cursor.png", alt: "Cursor" },
  { src: "/home/logos/github.png", alt: "GitHub" },
  { src: "/home/logos/vercel.png", alt: "Vercel" },
  { src: "/home/logos/gemini.png", alt: "Gemini" },
  { src: "/home/logos/chatgpt.png", alt: "ChatGPT" },
] as const;

export function MarketingHomeLogos() {
  return (
    <div className="mt-12 border-t border-zinc-800 pt-10">
      <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-zinc-600">
        Tools in the loop
      </p>
      <ul className="mt-6 grid grid-cols-4 justify-items-center gap-x-4 gap-y-5 sm:grid-cols-7">
        {HERO_LOGOS.map((logo) => (
          <li
            key={logo.src}
            className="flex h-10 w-full max-w-[4.5rem] items-center justify-center sm:h-11 sm:max-w-[5rem]"
          >
            <ImageLightbox
              src={logo.src}
              alt={logo.alt}
              className="relative h-8 w-full sm:h-9"
              disableHoverScale
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                className="object-contain object-center opacity-85 [filter:grayscale(1)]"
                sizes="(max-width: 640px) 20vw, 80px"
              />
            </ImageLightbox>
          </li>
        ))}
      </ul>
    </div>
  );
}
