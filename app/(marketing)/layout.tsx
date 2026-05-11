import { PortfolioTwoColumnShell } from "@/app/components/PortfolioTwoColumnShell";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PortfolioTwoColumnShell mainWidth="editorial">
      {children}
    </PortfolioTwoColumnShell>
  );
}
