"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ImageLightbox } from "@/app/components/ImageLightbox";

const DISPLAY_FONT =
  "var(--font-serif-display), Georgia, 'Times New Roman', serif";

const PROFILE_SRC = "/about/profile-v2.png";

const FOCUS_LINES = [
  "Product design",
  "Marketing design",
  "Branding",
] as const;

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
 * Persistent left rail: clock, hello, optional About photo, then bottom stack
 * (focus lines → divider → location & links → © + vibe-coded).
 */
export function PortfolioLeftColumn() {
  const pathname = usePathname();
  const tick = useLocaleDateTime();
  const showAboutPhoto = pathname === "/about";

  return (
    <aside className="flex min-h-0 shrink-0 flex-col border-b border-zinc-800 p-6 sm:p-8 lg:h-full lg:w-[min(24vw,20rem)] lg:shrink-0 lg:overflow-y-auto lg:border-b-0 lg:border-r lg:border-zinc-800 xl:w-[min(26vw,22rem)]">
      <p className="shrink-0 text-[11px] font-medium uppercase tracking-[0.2em] text-zinc-600">
        {tick || "\u00a0"}
      </p>

      <div className="mt-8 min-w-0 shrink-0">
        <h1
          className="text-[clamp(1.5rem,2.8vw,2.25rem)] font-normal leading-[1.1] tracking-[-0.02em] text-zinc-50"
          style={{ fontFamily: DISPLAY_FONT }}
        >
          Hello! I&apos;m Angela.
        </h1>
      </div>

      {showAboutPhoto ? (
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
      ) : null}

      <div className="min-h-4 flex-1 shrink lg:min-h-0" aria-hidden />

      <div className="mt-10 shrink-0 border-t border-zinc-800 pt-8 lg:mt-auto">
        <ul
          className="space-y-2 text-[clamp(0.8rem,1.6vw,0.95rem)] font-normal leading-snug tracking-[-0.015em] text-zinc-50"
          style={{ fontFamily: DISPLAY_FONT }}
          aria-label="Focus areas"
        >
          {FOCUS_LINES.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>

        <div
          className="my-6 border-t border-zinc-800"
          aria-hidden
        />

        <div className="space-y-2 text-xs leading-relaxed text-zinc-500">
          <p className="text-zinc-400">Based in Vancouver, BC</p>
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

        <p className="mt-6 text-[11px] leading-relaxed text-zinc-600">
          © {new Date().getFullYear()} · vibe-coded by me.
        </p>
      </div>
    </aside>
  );
}
