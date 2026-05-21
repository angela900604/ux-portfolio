"use client";

import { usePortfolioWorkFocus } from "@/app/components/PortfolioWorkFocusContext";

/** Default (8 cards) + Product filter — personal intro line. */
const HOME_LEAD_ROOTED =
  "Previously designing government-scale products in Taiwan, now based in Vancouver exploring more human-centered digital experiences. Also yes, this site was vibe-coded by me :)";

const HOME_LEAD_MARKETING =
  "Driven by empathy, I turn business goals into visual experiences that truly resonate with people.";

export function HomeLeadByFocus() {
  const { focus } = usePortfolioWorkFocus();

  const text =
    focus === "marketing" ? HOME_LEAD_MARKETING : HOME_LEAD_ROOTED;

  return (
    <p className="max-w-2xl font-sans text-base leading-relaxed text-zinc-300 text-pretty sm:text-lg">
      {text}
    </p>
  );
}
