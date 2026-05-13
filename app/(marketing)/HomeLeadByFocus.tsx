"use client";

import {
  MARKETING_FLAGSHIP_SERIF,
  MARKETING_FLAGSHIP_SERIF_LEAD_COMPACT_CLASS,
  MARKETING_FLAGSHIP_SERIF_LEAD_MAX_WIDTH_CLASS,
} from "@/lib/marketing-flagship-serif";
import { usePortfolioWorkFocus } from "@/app/components/PortfolioWorkFocusContext";

/** Default (8 cards) + Product filter — same positioning line. */
const HOME_LEAD_ROOTED =
  "Rooted in curiosity and empathy, I design consumer-facing experiences that bridge complex logic with intuitive solutions, solving real frustrations to make digital spaces feel accessible and effortless";

const HOME_LEAD_MARKETING =
  "Driven by empathy, I turn business goals into visual experiences that truly resonate with people.";

export function HomeLeadByFocus() {
  const { focus } = usePortfolioWorkFocus();

  const text =
    focus === "marketing" ? HOME_LEAD_MARKETING : HOME_LEAD_ROOTED;

  return (
    <p
      className={`${MARKETING_FLAGSHIP_SERIF_LEAD_MAX_WIDTH_CLASS} ${MARKETING_FLAGSHIP_SERIF_LEAD_COMPACT_CLASS} text-zinc-200`}
      style={{ fontFamily: MARKETING_FLAGSHIP_SERIF }}
    >
      {text}
    </p>
  );
}
