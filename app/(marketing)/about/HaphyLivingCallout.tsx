"use client";

import Image from "next/image";
import { ImageLightbox } from "@/app/components/ImageLightbox";
import {
  HAPHY_LIVING_PRODUCT_IMAGES,
  HAPHY_LIVING_SHOP_URL,
} from "@/app/content/haphy-living";

const HAPHY_LINK_CLASS =
  "font-medium text-zinc-200 underline decoration-dotted decoration-zinc-600 underline-offset-[3px] transition-colors hover:decoration-zinc-400";

const BEYOND_GALLERY_RADIUS_CLASS = "rounded-lg";

export function HaphyLivingCallout() {
  return (
    <figure className="mt-6 min-w-0">
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-3 lg:grid-cols-3 lg:gap-3">
        {HAPHY_LIVING_PRODUCT_IMAGES.map((item) => (
          <ImageLightbox
            key={item.src}
            src={item.src}
            alt={item.alt}
            className="block w-full min-w-0"
          >
            <div
              className={`relative w-full overflow-hidden border border-zinc-800 bg-zinc-900/40 ${BEYOND_GALLERY_RADIUS_CLASS}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={item.width}
                height={item.height}
                className="h-auto w-full object-contain object-center"
                sizes="(max-width: 1024px) 100vw, 400px"
              />
            </div>
          </ImageLightbox>
        ))}
      </div>

      <figcaption className="mt-4 max-w-4xl font-sans text-[17px] font-normal leading-[1.7] text-zinc-400 text-pretty xl:max-w-5xl">
        I run{" "}
        <a
          href={HAPHY_LIVING_SHOP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={HAPHY_LINK_CLASS}
        >
          Haphy Living
        </a>
        , an Etsy shop where I illustrate my bunny Haphy into everyday
        objects—brand, packaging, and customer care.
      </figcaption>
    </figure>
  );
}
