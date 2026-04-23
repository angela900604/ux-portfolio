"use client";

import Image from "next/image";
import { useCallback, useEffect, useId, useState } from "react";
import type { BeyondGalleryItem } from "../content/beyond-design-gallery";

type TabId = "photography" | "graphic";

const TABS: { id: TabId; label: string }[] = [
  { id: "photography", label: "Photography & travel" },
  {
    id: "graphic",
    label: "Graphic design, drawing style exploration",
  },
];

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
      className="fixed inset-0 z-[100] flex items-center justify-center bg-zinc-950/92 p-4 backdrop-blur-sm"
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
        className="relative max-h-[min(92vh,1200px)] max-w-[min(92vw,1200px)]"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={item.src}
          alt={item.alt}
          width={item.width}
          height={item.height}
          className="h-auto max-h-[min(92vh,1200px)] w-auto max-w-[min(92vw,1200px)] object-contain"
          sizes="(max-width: 1280px) 92vw, 1200px"
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
          className="object-cover opacity-95 transition duration-500 ease-out group-hover:scale-[1.04]"
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
  const [tab, setTab] = useState<TabId>("photography");
  const [lightbox, setLightbox] = useState<BeyondGalleryItem | null>(null);
  const lightboxLabelId = useId();

  const activeItems = tab === "photography" ? photography : graphic;

  const closeLightbox = useCallback(() => setLightbox(null), []);

  return (
    <div className="mt-10">
      <div
        role="tablist"
        aria-label="Beyond design gallery"
        className="flex flex-col gap-1 border-b border-zinc-800 sm:flex-row sm:flex-wrap sm:gap-x-8 sm:gap-y-1"
      >
        {TABS.map((t) => {
          const selected = tab === t.id;
          return (
            <button
              key={t.id}
              type="button"
              role="tab"
              aria-selected={selected}
              id={`beyond-tab-${t.id}`}
              aria-controls="beyond-gallery-panel"
              onClick={() => setTab(t.id)}
              className={`max-w-full pb-3 text-left text-sm font-medium leading-snug transition sm:max-w-[min(100%,28rem)] sm:text-base ${
                selected
                  ? "border-b-2 border-cursor-accent-bright text-zinc-100"
                  : "border-b-2 border-transparent text-zinc-500 hover:text-zinc-300"
              }`}
            >
              {t.label}
            </button>
          );
        })}
      </div>

      <div
        id="beyond-gallery-panel"
        role="tabpanel"
        aria-labelledby={`beyond-tab-${tab}`}
        className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-3 lg:grid-cols-4 lg:grid-rows-[repeat(4,minmax(0,auto))] lg:gap-3"
      >
        {activeItems.map((item) => (
          <GalleryTile
            key={item.src}
            item={item}
            onOpen={() => setLightbox(item)}
          />
        ))}
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
