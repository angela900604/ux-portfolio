"use client";

import Image from "next/image";
import { ImageLightbox } from "../e-invoice-app/ImageLightbox";

/** Fixed aspect + cover crop so every tile matches height in the grid. */
export function MomiUniformTile({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <figure className="m-0">
      <ImageLightbox
        src={src}
        alt={alt}
        ariaLabel={`${alt} — tap to enlarge`}
        className="block w-full"
      >
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[20px] bg-zinc-900/30 ring-1 ring-zinc-800/50">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover object-center"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
      </ImageLightbox>
    </figure>
  );
}
