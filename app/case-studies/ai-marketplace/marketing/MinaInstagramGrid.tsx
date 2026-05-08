"use client";

import Image from "next/image";
import { ImageLightbox } from "@/app/components/ImageLightbox";

const IG_W = 819;
const IG_H = 1024;

const POSTS = Array.from({ length: 17 }, (_, i) => {
  const n = String(i + 1).padStart(2, "0");
  return {
    src: `/case-studies/mina/instagram/mina-social-${n}.png`,
    alt: `MINA marketing Instagram-style graphic ${i + 1} — brand and product storytelling`,
  };
});

export function MinaInstagramGrid() {
  return (
      <div className="mx-auto w-full max-w-[min(100%,960px)] overflow-hidden rounded-sm ring-1 ring-zinc-800">
        <div className="grid grid-cols-3 gap-px bg-zinc-800">
        {POSTS.map((post) => (
          <div
            key={post.src}
            className="relative aspect-square overflow-hidden bg-zinc-950"
          >
            <ImageLightbox
              src={post.src}
              alt={post.alt}
              className="relative block h-full w-full"
              disableHoverScale
            >
              <Image
                src={post.src}
                alt={post.alt}
                width={IG_W}
                height={IG_H}
                className="h-full w-full object-cover"
                sizes="(max-width: 640px) 34vw, 300px"
                unoptimized
              />
            </ImageLightbox>
          </div>
        ))}
      </div>
    </div>
  );
}
