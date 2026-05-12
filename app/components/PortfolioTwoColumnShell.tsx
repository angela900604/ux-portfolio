import { SiteTopNav } from "@/app/components/SiteTopNav";
import { PortfolioLeftColumn } from "@/app/components/PortfolioLeftColumn";
import { PORTFOLIO_X_PAD } from "@/lib/portfolio-shell";

type MainWidth = "editorial" | "full";

const MAIN_INNER: Record<MainWidth, string> = {
  editorial: `${PORTFOLIO_X_PAD} mx-auto w-full max-w-6xl py-10 sm:py-12 lg:max-w-[min(100%,72rem)]`,
  full: `${PORTFOLIO_X_PAD} w-full py-8 sm:py-10`,
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

        <main className="min-h-0 min-w-0 flex-1 overflow-x-hidden lg:overflow-y-auto">
          <div className={MAIN_INNER[mainWidth]}>{children}</div>
        </main>
      </div>
    </div>
  );
}
