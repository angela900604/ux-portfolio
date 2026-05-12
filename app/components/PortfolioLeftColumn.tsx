"use client";

import Image from "next/image";
import { ImageLightbox } from "@/app/components/ImageLightbox";
import {
  MARKETING_FLAGSHIP_SERIF,
  MARKETING_FLAGSHIP_SERIF_LEAD_CLASS,
} from "@/lib/marketing-flagship-serif";
import { PORTFOLIO_LEFT_RAIL_CLASS } from "@/lib/portfolio-shell";

const PROFILE_SRC = "/about/profile-v2.png";

const FOCUS_LINES = ["Product design", "Marketing design"] as const;

const HOVER_NAV = "transition hover:text-[color:var(--nav-accent-blue)]";

/**
 * Persistent left rail: hello, profile photo, spacer, bottom meta (focus →
 * divider → location → ©). Bottom block pins to column foot on desktop.
 */
export function PortfolioLeftColumn() {
  return (
    <aside className={`${PORTFOLIO_LEFT_RAIL_CLASS} font-sans`}>
      <div className="min-w-0 shrink-0">
        <h1
          className={`${MARKETING_FLAGSHIP_SERIF_LEAD_CLASS} text-zinc-50`}
          style={{ fontFamily: MARKETING_FLAGSHIP_SERIF }}
        >
          Hello! I&apos;m Angela.
        </h1>
      </div>

      <div className="mt-6 w-full max-w-[280px] shrink-0 overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/30 sm:max-w-[min(100%,20rem)]">
        <ImageLightbox
          src={PROFILE_SRC}
          alt="Angela Yang — profile photo"
          className="block w-full"
          disableHoverScale
          ariaLabel="View profile photo larger"
        >
          <div className="relative aspect-[3/4] w-full">
            <Image
              src={PROFILE_SRC}
              alt="Angela Yang — profile photo"
              fill
              className="object-cover object-[center_15%]"
              sizes="(max-width: 1024px) 88vw, 320px"
              priority
            />
          </div>
        </ImageLightbox>
      </div>

      <div className="min-h-0 flex-1 shrink" aria-hidden />

      <div className="shrink-0 pb-0 pt-2 lg:mt-0">
        <ul
          className="space-y-2 text-[clamp(0.8rem,1.6vw,0.95rem)] font-normal leading-snug tracking-[-0.015em] text-zinc-50"
          aria-label="Focus areas"
        >
          {FOCUS_LINES.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>

        <div className="my-6 border-t border-zinc-800" aria-hidden />

        <div className="space-y-2 text-xs leading-relaxed text-zinc-500">
          <p className="text-zinc-400">Based in Vancouver, BC</p>
          <a
            href="mailto:angela900604@gmail.com"
            className={`block text-zinc-400 ${HOVER_NAV}`}
          >
            angela900604@gmail.com
          </a>
          <a
            href="https://linkedin.com/in/angelayangg/"
            target="_blank"
            rel="noopener noreferrer"
            className={`block text-zinc-400 ${HOVER_NAV}`}
          >
            LinkedIn
          </a>
        </div>

        <p className="mt-6 text-[11px] leading-relaxed text-zinc-600">
          © {new Date().getFullYear()} · vibe-coded by me.
        </p>
      </div>
    </aside>
  );
}
