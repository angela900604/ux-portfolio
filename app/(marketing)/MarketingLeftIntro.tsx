"use client";

import { useEffect, useState } from "react";
import { MarketingHomeTagline } from "./MarketingHomeTagline";

const DISPLAY_FONT =
  "var(--font-serif-display), Georgia, 'Times New Roman', serif";

function useLocaleDateTime() {
  const [label, setLabel] = useState("");

  useEffect(() => {
    const format = () =>
      new Date().toLocaleString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      });
    setLabel(format());
    const id = window.setInterval(() => setLabel(format()), 30_000);
    return () => window.clearInterval(id);
  }, []);

  return label;
}

/**
 * Left column: clock, hello, cycling line, location + focus stack, contact / ©,
 * footer line.
 */
export function MarketingLeftIntro() {
  const tick = useLocaleDateTime();

  return (
    <aside className="flex shrink-0 flex-col border-b border-zinc-800 p-6 sm:p-8 lg:h-full lg:w-[min(24vw,20rem)] lg:shrink-0 lg:overflow-y-auto lg:border-b-0 lg:border-r lg:border-zinc-800 xl:w-[min(26vw,22rem)]">
      <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-zinc-600">
        {tick || "\u00a0"}
      </p>

      <div className="mt-8 min-w-0 flex-1">
        <h1
          className="text-[clamp(1.5rem,2.8vw,2.25rem)] font-normal leading-[1.1] tracking-[-0.02em] text-zinc-50"
          style={{ fontFamily: DISPLAY_FONT }}
        >
          Hello! I&apos;m Angela.
        </h1>
        <MarketingHomeTagline />
      </div>

      <div className="mt-10 space-y-5 border-t border-zinc-800/80 pt-8 text-xs leading-relaxed text-zinc-500">
        <div className="space-y-1">
          <p>Based in Vancouver, BC</p>
          <ul
            className="mt-4 space-y-2.5 text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-zinc-500"
            aria-label="Focus areas"
          >
            <li>Product design</li>
            <li>Marketing design</li>
            <li>Branding</li>
          </ul>
        </div>
        <div className="space-y-1">
          <a
            href="mailto:angela900604@gmail.com"
            className="block text-zinc-400 transition hover:text-[color:var(--color-cursor-accent)]"
          >
            angela900604@gmail.com
          </a>
          <a
            href="https://linkedin.com/in/angelayangg/"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-zinc-400 transition hover:text-[color:var(--color-cursor-accent)]"
          >
            LinkedIn
          </a>
        </div>
        <p className="text-zinc-600">© {new Date().getFullYear()}</p>
      </div>

      <p className="mt-8 text-[11px] text-zinc-600 lg:mt-auto lg:pt-6">
        This site was vibe-coded by me.
      </p>
    </aside>
  );
}
