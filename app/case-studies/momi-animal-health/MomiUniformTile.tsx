"use client";

import Image from "next/image";
import { ImageLightbox } from "@/app/components/ImageLightbox";

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
    ? "relative aspect-[5/7] w-full overflow-hidden rounded-[28px] bg-zinc-900/40 ring-1 ring-zinc-700/70"
    : "relative aspect-[4/5] w-full overflow-hidden rounded-[20px] bg-zinc-900/40 ring-1 ring-zinc-800/60";

  const sizes = emphasis
    ? "(max-width: 640px) 100vw, min(50vw, 600px)"
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
