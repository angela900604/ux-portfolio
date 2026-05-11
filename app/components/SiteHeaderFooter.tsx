import Link from "next/link";
import { CASE_STUDY_BODY_GRID, SITE_SHELL_CONTAINER } from "@/lib/site-shell";

export function SiteHeaderFooter({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-950 text-zinc-100">
      <header className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-sm">
        <div className={`${SITE_SHELL_CONTAINER} py-4`}>
          <div className={CASE_STUDY_BODY_GRID}>
            <div className="flex min-w-0 items-center justify-between gap-6">
              <Link
                href="/"
                className="text-base font-medium tracking-wide text-zinc-400 transition hover:text-zinc-100"
              >
                Angela Yang
              </Link>
              <nav className="flex shrink-0 gap-6 text-base text-zinc-400 sm:gap-8">
                <Link href="/" className="transition hover:text-zinc-100">
                  Home
                </Link>
                <Link href="/about" className="transition hover:text-zinc-100">
                  About
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t border-zinc-800">
        <div className={`${SITE_SHELL_CONTAINER} py-5 text-xs text-zinc-500`}>
          <div className={CASE_STUDY_BODY_GRID}>
            <div>
              <div className="grid grid-cols-1 gap-3 text-center sm:grid-cols-3 sm:items-center sm:gap-4 sm:text-left">
                <span className="sm:text-left">
                  © {new Date().getFullYear()} Angela Yang
                </span>
                <span className="sm:text-center">
                  This website was vibe-coded by me.
                </span>
                <span className="sm:text-right">
                  Product Design · UX · Vancouver
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
