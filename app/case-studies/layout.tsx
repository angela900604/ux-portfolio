import { CaseStudyLeftAside } from "@/app/components/CaseStudyLeftAside";
import { PortfolioTwoColumnShell } from "@/app/components/PortfolioTwoColumnShell";

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PortfolioTwoColumnShell
      mainWidth="full"
      theme="paper"
      leftAside={<CaseStudyLeftAside />}
    >
      {children}
    </PortfolioTwoColumnShell>
  );
}
