"use client";

import { useRef, useState } from "react";
import { MARKETING_SELECTED_WORK } from "@/lib/marketing-work";
import { MarketingSelectedWorkGrid } from "./MarketingSelectedWorkGrid";

const TIER_1 = MARKETING_SELECTED_WORK.slice(0, 4);
const TIER_2 = MARKETING_SELECTED_WORK.slice(4);

export function HomeSelectedWorkSection() {
  const [moreOpen, setMoreOpen] = useState(false);
  const tier2Ref = useRef<HTMLDivElement>(null);

  function handleToggle() {
    const opening = !moreOpen;
    setMoreOpen(opening);
    if (opening) {
      // After the state update renders, scroll so the Tier 2 grid comes into view
      requestAnimationFrame(() => {
        tier2Ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  }

  return (
    <section className="mt-12 sm:mt-16">
      <MarketingSelectedWorkGrid items={TIER_1} />

      <div className="mt-10 flex flex-col items-center border-t border-zinc-800 pt-8">
        <button
          type="button"
          onClick={handleToggle}
          className="flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/60 px-5 py-2.5 text-sm font-medium tracking-[-0.01em] text-zinc-300 transition hover:border-zinc-500 hover:bg-zinc-800 hover:text-zinc-100"
        >
          {moreOpen ? "Less ↑" : "More work ↓"}
        </button>

        {moreOpen && (
          <div ref={tier2Ref} className="mt-6 w-full scroll-mt-8">
            <MarketingSelectedWorkGrid items={TIER_2} />
          </div>
        )}
      </div>
    </section>
  );
}
