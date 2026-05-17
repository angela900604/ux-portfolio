"use client";

import { useState } from "react";
import { MARKETING_SECTION_TITLE_CLASS } from "@/lib/marketing-section-title";
import { MARKETING_SELECTED_WORK } from "@/lib/marketing-work";
import { MarketingSelectedWorkGrid } from "./MarketingSelectedWorkGrid";

const TIER_1 = MARKETING_SELECTED_WORK.slice(0, 4);
const TIER_2 = MARKETING_SELECTED_WORK.slice(4);

export function HomeSelectedWorkSection() {
  const [moreOpen, setMoreOpen] = useState(false);

  return (
    <section className="mt-20 sm:mt-24">
      <h2 className={MARKETING_SECTION_TITLE_CLASS}>Selected work</h2>

      <MarketingSelectedWorkGrid items={TIER_1} />

      <div className="mt-10">
        <button
          type="button"
          onClick={() => setMoreOpen((v) => !v)}
          className="text-sm font-normal tracking-[-0.01em] text-zinc-500 transition hover:text-zinc-300"
        >
          {moreOpen ? "Less ↑" : "More work ↓"}
        </button>

        {moreOpen && (
          <div className="mt-6">
            <MarketingSelectedWorkGrid items={TIER_2} />
          </div>
        )}
      </div>
    </section>
  );
}
