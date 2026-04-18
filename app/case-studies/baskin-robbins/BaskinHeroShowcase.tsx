"use client";

import Image from "next/image";
import { ImageLightbox } from "../e-invoice-app/ImageLightbox";

export type BaskinHeroImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export function BaskinHeroShowcase({
  primary,
  secondary,
}: {
  primary: BaskinHeroImage;
  secondary: readonly BaskinHeroImage[];
}) {
  return (
    <div className="mt-8 grid gap-4">
      <ImageLightbox
        src={primary.src}
        alt={primary.alt}
        className="block w-full rounded-2xl border border-zinc-800 bg-zinc-900/40"
      >
        <div className="relative aspect-[256/140] w-full overflow-hidden sm:aspect-[1024/560]">
          <Image
            src={primary.src}
            alt={primary.alt}
            fill
            className="object-cover"
            sizes="(max-width: 1280px) 100vw, 1080px"
            priority
          />
        </div>
      </ImageLightbox>

      <div className="grid gap-4 sm:grid-cols-3">
        {secondary.map((img) => (
          <ImageLightbox
            key={img.src}
            src={img.src}
            alt={img.alt}
            className="block h-full min-h-0 rounded-2xl border border-zinc-800 bg-zinc-900/40"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden sm:aspect-[16/10]">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 33vw"
                priority
              />
            </div>
          </ImageLightbox>
        ))}
      </div>
    </div>
  );
}
