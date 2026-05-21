"use client";

import { usePortfolioWorkFocus } from "@/app/components/PortfolioWorkFocusContext";

const HOME_LEAD_MARKETING =
  "Driven by empathy, I turn business goals into visual experiences that truly resonate with people.";

export function HomeLeadByFocus() {
  const { focus } = usePortfolioWorkFocus();

  if (focus === "marketing") {
    return (
      <p className="max-w-2xl font-sans text-lg leading-relaxed text-zinc-300 text-pretty sm:text-xl">
        {HOME_LEAD_MARKETING}
      </p>
    );
  }

  return (
    <div className="max-w-2xl space-y-3 font-sans text-lg leading-relaxed text-zinc-300 sm:text-xl">
      <p>
        Previously designing government-scale products in Taiwan, now based in
        Vancouver exploring more human-centered digital experiences.
      </p>
      <p>Also yes, this site was vibe-coded by me :)</p>
    </div>
  );
}
