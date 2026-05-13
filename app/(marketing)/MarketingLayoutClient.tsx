"use client";

import { PortfolioTwoColumnShell } from "@/app/components/PortfolioTwoColumnShell";
import { PortfolioWorkFocusProvider } from "@/app/components/PortfolioWorkFocusContext";

export function MarketingLayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PortfolioWorkFocusProvider>
      <PortfolioTwoColumnShell mainWidth="editorial">
        {children}
      </PortfolioTwoColumnShell>
    </PortfolioWorkFocusProvider>
  );
}
