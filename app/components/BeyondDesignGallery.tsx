"use client";

import Image from "next/image";
import { useCallback, useEffect, useId, useState } from "react";
import { createPortal } from "react-dom";
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

  if (typeof document === "undefined") return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[11000] flex items-center justify-center bg-zinc-950/96 backdrop-blur-sm"
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
        className="absolute right-3 top-3 z-[1] rounded-full border border-zinc-600 bg-zinc-900/90 px-3 py-1.5 text-sm font-medium text-zinc-200 transition hover:border-zinc-400 hover:text-white sm:right-4 sm:top-4"
      >
        Close
      </button>
      <div
        className="flex h-[100dvh] w-[100dvw] items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={item.src}
          alt={item.alt}
          className="h-[100dvh] w-[100vw] object-contain"
          draggable={false}
        />
      </div>
    </div>,
    document.body,
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
    <div>
      <div className="space-y-12">
        <section>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-3 lg:grid-cols-4 lg:grid-rows-[repeat(4,minmax(0,auto))] lg:gap-3">
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
