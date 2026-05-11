import { SiteTopNav } from "@/app/components/SiteTopNav";
import { PortfolioLeftColumn } from "@/app/components/PortfolioLeftColumn";
import { PORTFOLIO_EDGE_GUTTER } from "@/lib/portfolio-shell";

type MainWidth = "editorial" | "full";

const MAIN_INNER: Record<MainWidth, string> = {
  editorial: `${PORTFOLIO_EDGE_GUTTER} mx-auto w-full max-w-6xl py-10 sm:py-12 lg:max-w-[min(100%,72rem)]`,
  full: `${PORTFOLIO_EDGE_GUTTER} w-full py-8 sm:py-10`,
};

export function PortfolioTwoColumnShell({
  children,
  mainWidth = "editorial",
}: {
  children: React.ReactNode;
  mainWidth?: MainWidth;
}) {
  return (
    <div className="min-h-dvh bg-zinc-950 text-zinc-100">
      <SiteTopNav />
      <div className="flex min-h-[calc(100dvh-3.5rem)] flex-col pt-14 lg:h-[calc(100dvh-3.5rem)] lg:flex-row lg:overflow-hidden">
        <PortfolioLeftColumn />

        <main className="min-h-0 min-w-0 flex-1 overflow-x-hidden lg:overflow-y-auto">
          <div className={MAIN_INNER[mainWidth]}>{children}</div>
        </main>
      </div>
    </div>
  );
}
