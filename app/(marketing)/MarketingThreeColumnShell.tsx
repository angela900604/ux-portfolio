"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const ACCENT_CLASS = "text-[color:var(--color-cursor-accent)]";

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

function MarketingSideNav() {
  const pathname = usePathname();
  const tick = useLocaleDateTime();

  const linkClass = (href: string) => {
    const active =
      href === "/"
        ? pathname === "/"
        : pathname === href || pathname.startsWith(`${href}/`);
    return active
      ? `font-medium ${ACCENT_CLASS}`
      : "text-zinc-500 transition hover:text-zinc-200";
  };

  return (
    <div className="flex flex-col gap-10">
      <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-zinc-600">
        {tick || "\u00a0"}
      </p>
      <div>
        <Link
          href="/"
          className="text-sm font-medium tracking-wide text-zinc-300 transition hover:text-zinc-50"
        >
          Angela Yang
        </Link>
        <nav className="mt-8 flex flex-col gap-4 text-sm">
          <Link href="/" className={linkClass("/")}>
            Home
          </Link>
          <Link href="/about" className={linkClass("/about")}>
            About
          </Link>
        </nav>
      </div>
    </div>
  );
}

function MarketingSideMeta() {
  return (
    <div className="flex flex-col justify-end gap-6 text-xs leading-relaxed text-zinc-500">
      <div className="space-y-1">
        <p>Based in Vancouver, BC</p>
        <p>Product design · UX</p>
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
          className="block transition hover:text-[color:var(--color-cursor-accent)]"
        >
          LinkedIn
        </a>
      </div>
      <p className="text-zinc-600">© {new Date().getFullYear()}</p>
    </div>
  );
}

/**
 * Desktop (lg+): fixed left/right columns; center column scrolls.
 * Mobile: stacked shell with natural page scroll.
 */
export function MarketingThreeColumnShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-dvh bg-zinc-950 text-zinc-100">
      <div className="flex min-h-dvh flex-col lg:h-dvh lg:overflow-hidden lg:flex-row">
        <aside className="flex shrink-0 flex-col justify-between border-b border-zinc-800 p-6 sm:p-8 lg:h-full lg:w-[min(18vw,15rem)] lg:shrink-0 lg:border-b-0 lg:border-r lg:border-zinc-800 xl:w-[min(18vw,17rem)]">
          <MarketingSideNav />
          <div className="mt-10 hidden lg:block">
            <p className="text-[11px] text-zinc-600">
              This site was vibe-coded by me.
            </p>
          </div>
        </aside>

        <main className="min-h-0 min-w-0 flex-1 overflow-x-hidden lg:overflow-y-auto">
          <div className="mx-auto w-full max-w-3xl px-6 py-12 sm:px-8 sm:py-16 lg:max-w-[42rem] lg:px-10 lg:py-20">
            {children}
          </div>
        </main>

        <aside className="flex shrink-0 flex-col justify-end border-t border-zinc-800 p-6 sm:p-8 lg:h-full lg:w-[min(18vw,15rem)] lg:shrink-0 lg:border-l lg:border-t-0 lg:border-zinc-800 xl:w-[min(18vw,17rem)]">
          <MarketingSideMeta />
        </aside>
      </div>
    </div>
  );
}
