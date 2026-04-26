"use client";

import Image from "next/image";
import { useCallback, useEffect, useId, useState } from "react";
import type { BeyondGalleryItem } from "../content/beyond-design-gallery";

function Lightbox({
  item,
  onClose,
  labelId,
}: {
  item: BeyondGalleryItem;
  onClose: () => void;
  labelId: string;
}) {
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-zinc-950/95 p-3 sm:p-6 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby={labelId}
      onClick={onClose}
    >
      <p id={labelId} className="sr-only">
        {item.alt}
      </p>
      <button
        type="button"
        onClick={onClose}
        className="absolute right-4 top-4 rounded-full border border-zinc-600 bg-zinc-900/90 px-3 py-1.5 text-sm font-medium text-zinc-200 transition hover:border-zinc-400 hover:text-white"
      >
        Close
      </button>
      <div
        className="relative max-h-[96vh] max-w-[96vw]"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={item.src}
          alt={item.alt}
          width={item.width}
          height={item.height}
          className="h-auto max-h-[96vh] w-auto max-w-[96vw] object-contain"
          sizes="96vw"
          priority
        />
      </div>
    </div>
  );
}

function GalleryTile({
  item,
  onOpen,
}: {
  item: BeyondGalleryItem;
  onOpen: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className={`group relative block w-full min-w-0 cursor-zoom-in text-left ${item.gridClass}`}
    >
      <div className="relative h-full min-h-[200px] w-full overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40">
        <Image
          src={item.src}
          alt={item.alt}
          fill
          className={`object-cover object-center opacity-95 transition duration-500 ease-out will-change-transform ${
            item.imageClassName ?? "scale-[1.06] sm:scale-[1.08]"
          } group-hover:scale-[1.12]`}
          sizes="(max-width: 1024px) 100vw, 400px"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950/50 to-transparent opacity-0 transition duration-300 group-hover:opacity-100"
          aria-hidden
        />
      </div>
    </button>
  );
}

export function BeyondDesignGallery({
  photography,
  graphic,
}: {
  photography: readonly BeyondGalleryItem[];
  graphic: readonly BeyondGalleryItem[];
}) {
  const [lightbox, setLightbox] = useState<BeyondGalleryItem | null>(null);
  const lightboxLabelId = useId();

  const closeLightbox = useCallback(() => setLightbox(null), []);

  return (
    <div className="mt-10">
      <div className="space-y-12">
        <section>
          <h3 className="text-lg font-semibold tracking-tight text-zinc-100 sm:text-xl">
            Photography &amp; travel
          </h3>
          <div className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-3 lg:grid-cols-4 lg:grid-rows-[repeat(4,minmax(0,auto))] lg:gap-3">
            {photography.map((item) => (
              <GalleryTile
                key={item.src}
                item={item}
                onOpen={() => setLightbox(item)}
              />
            ))}
          </div>
        </section>

        {graphic.length > 0 ? (
          <section>
            <h3 className="text-lg font-semibold tracking-tight text-zinc-100 sm:text-xl">
              Digital marketing, branding, graphic design, creatives
            </h3>
            <div className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-3 lg:auto-rows-auto lg:grid-cols-4 lg:auto-flow-dense lg:gap-3">
              {graphic.map((item) => (
                <GalleryTile
                  key={item.src}
                  item={item}
                  onOpen={() => setLightbox(item)}
                />
              ))}
            </div>
          </section>
        ) : null}
      </div>

      {lightbox ? (
        <Lightbox
          item={lightbox}
          onClose={closeLightbox}
          labelId={lightboxLabelId}
        />
      ) : null}
    </div>
  );
}
