import { SiteTopNav } from "@/app/components/SiteTopNav";
import { PortfolioLeftColumn } from "@/app/components/PortfolioLeftColumn";
import { SITE_GUTTER_CLASS, SITE_SHELL_CONTAINER } from "@/lib/site-shell";

type MainWidth = "editorial" | "full";

/**
 * Editorial main (home / about): top padding matches the left rail’s top inset
 * (`pt-12` / `sm:pt-16` in `lib/portfolio-shell` aside) so lead copy aligns with
 * “Hello! This is Angela.” / “About me”. Bottom stays looser for long pages.
 */
const MAIN_INNER: Record<MainWidth, string> = {
  editorial: `${SITE_SHELL_CONTAINER} pt-12 pb-10 sm:pt-16 sm:pb-12`,
  /** Case studies: full width of main (between gutters) so full-bleed bands can span the column. */
  full: `w-full min-w-0 ${SITE_GUTTER_CLASS} py-8 sm:py-10`,
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
  // Mobile: let the page grow and use normal document scroll (fixed `dvh` + `overflow-hidden`
  // without `main` overflow was clipping content). Desktop: lock height and scroll `main`.
  return (
    <div className="flex min-h-dvh flex-col overflow-x-hidden bg-zinc-950 text-zinc-100 lg:h-dvh lg:max-h-dvh lg:overflow-hidden">
      <SiteTopNav />
      <div className="flex flex-col pt-14 lg:min-h-0 lg:flex-1 lg:flex-row lg:overflow-hidden">
        {leftAside ?? <PortfolioLeftColumn />}

        <main className="min-w-0 w-full flex-1 overflow-x-hidden font-sans lg:min-h-0 lg:overflow-y-auto">
          <div className={MAIN_INNER[mainWidth]}>{children}</div>
        </main>
      </div>
    </div>
  );
}
