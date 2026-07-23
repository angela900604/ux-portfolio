"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { ImageLightbox } from "@/app/components/ImageLightbox";
import {
  MARKETING_FLAGSHIP_SERIF,
  MARKETING_FLAGSHIP_SERIF_LEAD_CLASS,
} from "@/lib/marketing-flagship-serif";
import { PORTFOLIO_LEFT_RAIL_CLASS } from "@/lib/portfolio-shell";

const PROFILE_SRC = "/about/profile-v2.png";

const HOVER_NAV = "transition hover:text-[color:var(--nav-accent-blue)]";

/**
 * Persistent left rail: hello (home) or about label, profile photo, spacer,
 * bottom meta (focus → divider → location → ©).
 */
export function PortfolioLeftColumn() {
  const pathname = usePathname() ?? "";
  const isAbout =
    pathname === "/about" || pathname.startsWith("/about/");

  return (
    <aside className={`${PORTFOLIO_LEFT_RAIL_CLASS} font-sans`}>
      <div className="min-w-0 shrink-0">
        <h1
          className={`${MARKETING_FLAGSHIP_SERIF_LEAD_CLASS} text-zinc-50`}
          style={{ fontFamily: MARKETING_FLAGSHIP_SERIF }}
        >
          {isAbout ? "About me" : "Hi, I'm Angela."}
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

      <div className="hidden min-h-0 shrink lg:block lg:flex-1" aria-hidden />

      <div className="shrink-0 pb-0 pt-2 lg:mt-0">
        <p className="text-[clamp(0.8rem,1.6vw,0.95rem)] font-normal leading-snug tracking-[-0.015em] text-zinc-50">
          Product Designer
        </p>

        <div className="my-6 border-t border-zinc-800" aria-hidden />

        <div className="space-y-2 text-xs leading-relaxed text-zinc-500">
          <p className="text-zinc-400">Based in Vancouver, BC</p>
          <a
            href="mailto:angela900604@gmail.com"
            className={`block text-zinc-400 ${HOVER_NAV}`}
          >
            angela900604@gmail.com
          </a>
          <div className="flex items-center gap-3 pt-1">
            <a
              href="https://www.linkedin.com/in/angelayangg/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className={`text-zinc-400 ${HOVER_NAV}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-[18px] w-[18px]"
                aria-hidden
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/_ycn.ay/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className={`text-zinc-400 ${HOVER_NAV}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-[18px] w-[18px]"
                aria-hidden
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
          </div>
        </div>

        <p className="mt-6 text-[11px] leading-relaxed text-zinc-600">
          © {new Date().getFullYear()} · vibe-coded by me.
        </p>
      </div>
    </aside>
  );
}
