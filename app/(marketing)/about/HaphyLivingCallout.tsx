"use client";

import Image from "next/image";
import { ImageLightbox } from "@/app/components/ImageLightbox";
import {
  HAPHY_LIVING_PRODUCT_IMAGES,
  HAPHY_LIVING_SHOP_URL,
} from "@/app/content/haphy-living";
import {
  MARKETING_FLAGSHIP_SERIF,
  MARKETING_FLAGSHIP_SERIF_LEAD_COMPACT_CLASS,
  MARKETING_FLAGSHIP_SERIF_LEAD_MAX_WIDTH_WIDE_CLASS,
} from "@/lib/marketing-flagship-serif";

const HAPHY_LINK_CLASS =
  "font-medium text-zinc-200 underline decoration-dotted decoration-zinc-600 underline-offset-[3px] transition-colors hover:decoration-zinc-400";

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
            <div className="relative h-full min-h-[200px] w-full overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover object-center opacity-95"
                sizes="(max-width: 1024px) 100vw, 400px"
              />
            </div>
          </ImageLightbox>
        ))}
      </div>

      <figcaption
        className={`mt-4 text-zinc-400 ${MARKETING_FLAGSHIP_SERIF_LEAD_COMPACT_CLASS} ${MARKETING_FLAGSHIP_SERIF_LEAD_MAX_WIDTH_WIDE_CLASS}`}
        style={{ fontFamily: MARKETING_FLAGSHIP_SERIF }}
      >
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
