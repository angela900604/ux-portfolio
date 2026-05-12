import { CaseStudyLeftAside } from "@/app/components/CaseStudyLeftAside";
import { PortfolioTwoColumnShell } from "@/app/components/PortfolioTwoColumnShell";

export default function UserResearchJourneyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PortfolioTwoColumnShell
      mainWidth="full"
      leftAside={<CaseStudyLeftAside />}
    >
      {children}
    </PortfolioTwoColumnShell>
  );
}
