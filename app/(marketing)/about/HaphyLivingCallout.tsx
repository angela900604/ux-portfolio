"use client";

import Image from "next/image";
import { ImageLightbox } from "@/app/components/ImageLightbox";
import {
  HAPHY_LIVING_PRODUCT_IMAGES,
  HAPHY_LIVING_SHOP_INSTAGRAM_URL,
} from "@/app/content/haphy-living";

const HAPHY_LINK_CLASS =
  "font-medium text-zinc-200 underline decoration-dotted decoration-zinc-600 underline-offset-[3px] transition-colors hover:decoration-zinc-400";

const BEYOND_GALLERY_RADIUS_CLASS = "rounded-lg";

export function HaphyLivingCallout() {
  return (
    <figure className="mt-6 min-w-0">
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-3">
        {HAPHY_LIVING_PRODUCT_IMAGES.slice(0, 2).map((item) => (
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

      <figcaption className="mt-4 max-w-4xl font-sans text-[15px] font-normal leading-[1.65] text-zinc-400 text-pretty xl:max-w-5xl">
        <a
          href={HAPHY_LIVING_SHOP_INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={HAPHY_LINK_CLASS}
        >
          Shop on Instagram — @haphyliving
        </a>
      </figcaption>
    </figure>
  );
}
