import type { Metadata } from "next";
import { MARKETING_SELECTED_WORK } from "@/lib/marketing-work";
import { MarketingSelectedWorkGrid } from "./MarketingSelectedWorkGrid";

export const metadata: Metadata = {
  title: "Angela Yang",
  description:
    "Product designer: government-scale digital services (Taiwan), AI products (Vancouver). Research, systems, ship-ready UX—selected work and about.",
};

const DISPLAY_FONT =
  "var(--font-serif-display), Georgia, 'Times New Roman', serif";

const HOME_LEAD =
  "I design consumer-facing experiences across mobile, web, and tablets. I also value empathy and curiosity in how I approach every problem.";

export default function HomePage() {
  const count = MARKETING_SELECTED_WORK.length;

  return (
    <div className="pb-12">
      <p className="sr-only">Angela Yang — product designer, Vancouver</p>

      <p
        className="max-w-3xl text-[clamp(1.5rem,2.8vw,2.25rem)] font-normal leading-[1.12] tracking-[-0.02em] text-zinc-200"
        style={{ fontFamily: DISPLAY_FONT }}
      >
        {HOME_LEAD}
      </p>

      <section className="mt-14">
        <h2
          className="text-lg font-medium tracking-tight text-zinc-200 sm:text-xl"
          style={{ fontFamily: DISPLAY_FONT }}
        >
          Selected work
          <span className="ml-2 text-zinc-500">({count})</span>
        </h2>

        <MarketingSelectedWorkGrid items={MARKETING_SELECTED_WORK} />
      </section>
    </div>
  );
}
