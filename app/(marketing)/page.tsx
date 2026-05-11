import type { Metadata } from "next";
import Link from "next/link";
import {
  MARKETING_FOCUS_TAGS,
  MARKETING_SELECTED_WORK,
} from "@/lib/marketing-work";
import { MarketingHomeLogos } from "./MarketingHomeLogos";
import { MarketingHomeTagline } from "./MarketingHomeTagline";

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
    <div className="pb-16">
      <p className="sr-only">Angela Yang — product designer, Vancouver</p>

      <section>
        <h1
          className="text-[clamp(2rem,5.5vw,3.25rem)] font-normal leading-[1.08] tracking-[-0.02em] text-zinc-50"
          style={{ fontFamily: DISPLAY_FONT }}
        >
          Hello! I&apos;m Angela.
        </h1>
        <MarketingHomeTagline />
        <p className="mt-8 text-sm leading-relaxed text-zinc-500 sm:text-base">
          A product designer for consumer mobile and growth—shipping complex,
          multi-role UX across government-scale and B2C, with a strong research
          foundation across diverse segments. Focused on AI-driven products and
          cross-functional leadership; based in Vancouver, open to relocate,
          remote, or hybrid.
        </p>
      </section>

      <section className="mt-12">
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

      <MarketingHomeLogos />

      <section className="mt-16 border-t border-zinc-800 pt-14">
        <h2
          className="text-lg font-medium tracking-tight text-zinc-200 sm:text-xl"
          style={{ fontFamily: DISPLAY_FONT }}
        >
          Selected work
          <span className="ml-2 text-zinc-500">({count})</span>
        </h2>

        <ul className="mt-10 divide-y divide-zinc-800 border-y border-zinc-800">
          {MARKETING_SELECTED_WORK.map((item) => (
            <li key={item.slug}>
              <Link
                href={item.href}
                className="group flex flex-col gap-1 py-6 transition sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
              >
                <span
                  className="text-base font-medium text-zinc-100 transition group-hover:text-[color:var(--color-cursor-accent)] sm:text-lg"
                  style={{ fontFamily: DISPLAY_FONT }}
                >
                  {item.title}
                </span>
                <span className="flex shrink-0 flex-wrap items-baseline gap-x-2 text-xs text-zinc-500 sm:justify-end sm:text-sm">
                  <span>{item.discipline}</span>
                  <span className="text-zinc-600">{item.year}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
