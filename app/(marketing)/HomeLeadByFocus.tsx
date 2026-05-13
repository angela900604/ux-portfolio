"use client";

import {
  MARKETING_FLAGSHIP_SERIF,
  MARKETING_FLAGSHIP_SERIF_LEAD_COMPACT_CLASS,
  MARKETING_FLAGSHIP_SERIF_LEAD_MAX_WIDTH_CLASS,
} from "@/lib/marketing-flagship-serif";
import { usePortfolioWorkFocus } from "@/app/components/PortfolioWorkFocusContext";

const HOME_LEAD_DEFAULT =
  "I design consumer-facing experiences across mobile, web, and tablets, and I also value empathy and curiosity in how I approach every problem.";

const HOME_LEAD_PRODUCT =
  "Rooted in curiosity and empathy, I design consumer-facing experiences that bridge complex logic with intuitive solutions, solving real frustrations to make digital spaces feel accessible and effortless";

const HOME_LEAD_MARKETING =
  "Driven by empathy, I turn business goals into visual experiences that truly resonate with people.";

export function HomeLeadByFocus() {
  const { focus } = usePortfolioWorkFocus();

  const text =
    focus === "product"
      ? HOME_LEAD_PRODUCT
      : focus === "marketing"
        ? HOME_LEAD_MARKETING
        : HOME_LEAD_DEFAULT;

  return (
    <p
      className={`${MARKETING_FLAGSHIP_SERIF_LEAD_MAX_WIDTH_CLASS} ${MARKETING_FLAGSHIP_SERIF_LEAD_COMPACT_CLASS} text-zinc-200`}
      style={{ fontFamily: MARKETING_FLAGSHIP_SERIF }}
    >
      {text}
    </p>
  );
}
