import type { Metadata } from "next";
import {
  MARKETING_FOCUS_TAGS,
  MARKETING_SELECTED_WORK,
} from "@/lib/marketing-work";
import { MarketingSelectedWorkGrid } from "./MarketingSelectedWorkGrid";

export const metadata: Metadata = {
  title: "Angela Yang",
  description:
    "Product designer: government-scale digital services (Taiwan), AI products (Vancouver). Research, systems, ship-ready UX—selected work and about.",
};

const DISPLAY_FONT =
  "var(--font-serif-display), Georgia, 'Times New Roman', serif";

export default function HomePage() {
  const count = MARKETING_SELECTED_WORK.length;

  return (
    <div className="pb-12">
      <p className="sr-only">Angela Yang — product designer, Vancouver</p>

      <section>
        <ul className="flex flex-wrap gap-2">
          {MARKETING_FOCUS_TAGS.map((tag) => (
            <li key={tag}>
              <span className="inline-flex rounded-full border border-zinc-700/80 bg-zinc-900/40 px-3 py-1.5 text-xs font-medium tracking-wide text-zinc-300">
                {tag}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12 border-t border-zinc-800 pt-12">
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
