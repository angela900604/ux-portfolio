import { SiteTopNav } from "@/app/components/SiteTopNav";
import { PortfolioLeftColumn } from "@/app/components/PortfolioLeftColumn";

type MainWidth = "editorial" | "full";

const MAIN_INNER: Record<MainWidth, string> = {
  editorial:
    "mx-auto w-full max-w-6xl px-6 py-10 sm:px-8 sm:py-14 lg:max-w-[min(100%,72rem)] lg:px-10 lg:py-16",
  full: "mx-auto w-full max-w-[1480px] px-6 py-8 sm:px-[100px] sm:py-10",
};

export function PortfolioTwoColumnShell({
  children,
  mainWidth = "editorial",
  footer = null,
}: {
  children: React.ReactNode;
  mainWidth?: MainWidth;
  footer?: React.ReactNode;
}) {
  return (
    <div className="min-h-dvh bg-zinc-950 text-zinc-100">
      <SiteTopNav />
      <div className="flex min-h-[calc(100dvh-3.5rem)] flex-col pt-14 lg:h-[calc(100dvh-3.5rem)] lg:flex-row lg:overflow-hidden">
        <PortfolioLeftColumn />

        <main className="min-h-0 min-w-0 flex-1 overflow-x-hidden lg:overflow-y-auto">
          <div className={MAIN_INNER[mainWidth]}>{children}</div>
          {footer}
        </main>
      </div>
    </div>
  );
}
