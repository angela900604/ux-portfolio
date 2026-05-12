"use client";

import Image from "next/image";
import { ImageLightbox } from "@/app/components/ImageLightbox";

const IG_W = 819;
const IG_H = 1024;

/** Original asset numbers (`mina-social-NN.png`). Row-major: top six, then middle five, then bottom six. */
const INSTAGRAM_GRID_ORDER = [
  13, 14, 15, 17, 9, 11, 2, 8, 10, 12, 16, 1, 3, 4, 5, 6, 7,
] as const;

const POSTS = INSTAGRAM_GRID_ORDER.map((assetNum) => {
  const n = String(assetNum).padStart(2, "0");
  return {
    src: `/case-studies/mina/instagram/mina-social-${n}.png`,
    alt: `MINA marketing Instagram-style graphic ${assetNum} — brand and product storytelling`,
    key: n,
  };
});

export function MinaInstagramGrid() {
  return (
    <div className="w-full min-w-0 overflow-hidden rounded-sm ring-1 ring-zinc-800">
      <div className="grid grid-cols-3 gap-px bg-zinc-800">
        {POSTS.map((post) => (
          <div
            key={post.key}
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
