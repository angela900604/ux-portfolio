import { PortfolioTwoColumnShell } from "@/app/components/PortfolioTwoColumnShell";
import { SitePageFooter } from "@/app/components/SitePageFooter";

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PortfolioTwoColumnShell mainWidth="full" footer={<SitePageFooter />}>
      {children}
    </PortfolioTwoColumnShell>
  );
}
