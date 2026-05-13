"use client";

import { useMemo } from "react";
import { usePortfolioWorkFocus } from "@/app/components/PortfolioWorkFocusContext";
import { MARKETING_SECTION_TITLE_CLASS } from "@/lib/marketing-section-title";
import { MARKETING_SELECTED_WORK } from "@/lib/marketing-work";
import { MarketingSelectedWorkGrid } from "./MarketingSelectedWorkGrid";

export function HomeSelectedWorkSection() {
  const { itemsForCurrentFocus } = usePortfolioWorkFocus();
  const visible = useMemo(
    () => itemsForCurrentFocus(MARKETING_SELECTED_WORK),
    [itemsForCurrentFocus],
  );

  return (
    <section className="mt-20 sm:mt-24">
      <h2 className={MARKETING_SECTION_TITLE_CLASS}>
        Selected work
        <span className="ml-2 text-zinc-500">({visible.length})</span>
      </h2>

      <MarketingSelectedWorkGrid items={visible} />
    </section>
  );
}
