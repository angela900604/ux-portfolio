"use client";

import { useRef, useState } from "react";
import { MARKETING_SELECTED_WORK } from "@/lib/marketing-work";
import { MarketingSelectedWorkGrid } from "./MarketingSelectedWorkGrid";

const TIER_1 = MARKETING_SELECTED_WORK.slice(0, 6);
const TIER_2 = MARKETING_SELECTED_WORK.slice(6);

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

      <div className="mt-10 flex flex-col items-center border-t border-ink-line pt-8">
        <button
          type="button"
          onClick={handleToggle}
          className="flex items-center gap-2 rounded-full border border-ink-line bg-paper px-5 py-2.5 text-sm font-normal tracking-[-0.01em] text-ink-soft transition hover:border-ink hover:text-ink"
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
