"use client";

import Image from "next/image";
import { ImageLightbox } from "../e-invoice-app/ImageLightbox";

/** Fixed aspect + cover crop so every tile matches height in the grid. */
export function MomiUniformTile({
  src,
  alt,
  emphasis = false,
}: {
  src: string;
  alt: string;
  /** Taller, wider tiles for hero mockups (vs. dense utility grids) */
  emphasis?: boolean;
}) {
  const frame = emphasis
    ? "relative aspect-[3/4] w-full overflow-hidden rounded-[24px] bg-zinc-900/20 ring-1 ring-[#C4B8A8]/80"
    : "relative aspect-[4/5] w-full overflow-hidden rounded-[20px] bg-zinc-900/30 ring-1 ring-zinc-800/50";

  const sizes = emphasis
    ? "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, min(42vw, 520px)"
    : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw";

  return (
    <figure className="m-0">
      <ImageLightbox
        src={src}
        alt={alt}
        ariaLabel={`${alt} — tap to enlarge`}
        className="block w-full"
      >
        <div className={frame}>
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover object-center"
            sizes={sizes}
          />
        </div>
      </ImageLightbox>
    </figure>
  );
}
