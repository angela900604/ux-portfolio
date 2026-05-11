import { SiteHeaderFooter } from "@/app/components/SiteHeaderFooter";

export default function UserResearchJourneyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SiteHeaderFooter>{children}</SiteHeaderFooter>;
}
