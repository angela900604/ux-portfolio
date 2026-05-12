import { SiteTopNav } from "@/app/components/SiteTopNav";
import { PortfolioLeftColumn } from "@/app/components/PortfolioLeftColumn";
import { SITE_SHELL_CONTAINER } from "@/lib/site-shell";

type MainWidth = "editorial" | "full";

/**
 * Editorial main (home / about): top padding matches the left rail’s vertical inset
 * (same `py-6` / `sm:py-8` as the aside in `lib/portfolio-shell`) so lead copy aligns
 * with “Hello! This is Angela.” / “About me”. Bottom stays looser for long pages.
 */
const MAIN_INNER: Record<MainWidth, string> = {
  editorial: `${SITE_SHELL_CONTAINER} pt-6 pb-10 sm:pt-8 sm:pb-12`,
  full: `${SITE_SHELL_CONTAINER} py-8 sm:py-10`,
};

export function PortfolioTwoColumnShell({
  children,
  mainWidth = "editorial",
  leftAside,
}: {
  children: React.ReactNode;
  mainWidth?: MainWidth;
  /** When set, replaces the default profile / focus left rail (e.g. case study meta). */
  leftAside?: React.ReactNode;
}) {
  return (
    <div className="flex h-dvh max-h-dvh flex-col overflow-hidden bg-zinc-950 text-zinc-100">
      <SiteTopNav />
      <div className="flex min-h-0 flex-1 flex-col pt-14 lg:flex-row lg:overflow-hidden">
        {leftAside ?? <PortfolioLeftColumn />}

        <main className="min-h-0 min-w-0 flex-1 overflow-x-hidden font-sans lg:overflow-y-auto">
          <div className={MAIN_INNER[mainWidth]}>{children}</div>
        </main>
      </div>
    </div>
  );
}
