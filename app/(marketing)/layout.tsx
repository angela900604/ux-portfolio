import { MarketingThreeColumnShell } from "./MarketingThreeColumnShell";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MarketingThreeColumnShell>{children}</MarketingThreeColumnShell>;
}
