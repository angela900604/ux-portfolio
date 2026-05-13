import { MarketingLayoutClient } from "./MarketingLayoutClient";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MarketingLayoutClient>{children}</MarketingLayoutClient>;
}
