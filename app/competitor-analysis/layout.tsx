import { SiteHeaderFooter } from "@/app/components/SiteHeaderFooter";

export default function CompetitorAnalysisLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SiteHeaderFooter>{children}</SiteHeaderFooter>;
}
