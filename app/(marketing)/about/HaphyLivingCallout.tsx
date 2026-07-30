"use client";

import Image from "next/image";
import { ImageLightbox } from "@/app/components/ImageLightbox";
import {
  HAPHY_LIVING_PRODUCT_IMAGES,
  HAPHY_LIVING_SHOP_URL,
} from "@/app/content/haphy-living";

const HAPHY_LINK_CLASS =
  "font-medium text-zinc-200 underline decoration-dotted decoration-zinc-600 underline-offset-[3px] transition-colors hover:decoration-zinc-400";

export function HaphyLivingCallout() {
  return (
    <div className="mt-6">
      <h3 className="text-lg font-semibold tracking-tight text-zinc-100 sm:text-xl">
        Haphy Living
      </h3>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-base">
        I also run{" "}
        <a
          href={HAPHY_LIVING_SHOP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={HAPHY_LINK_CLASS}
        >
          Haphy Living
        </a>
        , an Etsy shop where I illustrate and sell products around my bunny
        Haphy—brand, listings, packaging, and customer care, all solo.
      </p>
      <div className="mt-5 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-3">
        {HAPHY_LIVING_PRODUCT_IMAGES.map((item) => (
          <ImageLightbox
            key={item.src}
            src={item.src}
            alt={item.alt}
            className="block w-full"
          >
            <div className="relative aspect-square overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover object-center"
                sizes="(max-width: 640px) 45vw, 220px"
              />
            </div>
          </ImageLightbox>
        ))}
      </div>
    </div>
  );
}
