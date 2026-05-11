import { SiteTopNav } from "@/app/components/SiteTopNav";
import { MarketingLeftIntro } from "./MarketingLeftIntro";

/**
 * Fixed top nav (full width). Desktop: left = intro + meta, center = scrollable
 * main. Mobile: stacked — intro, main.
 */
export function MarketingThreeColumnShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-dvh bg-zinc-950 text-zinc-100">
      <SiteTopNav />
      <div className="flex min-h-[calc(100dvh-3.5rem)] flex-col pt-14 lg:h-[calc(100dvh-3.5rem)] lg:flex-row lg:overflow-hidden">
        <MarketingLeftIntro />

        <main className="min-h-0 min-w-0 flex-1 overflow-x-hidden lg:overflow-y-auto">
          <div className="mx-auto w-full max-w-6xl px-6 py-10 sm:px-8 sm:py-14 lg:max-w-[min(100%,72rem)] lg:px-10 lg:py-16">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
