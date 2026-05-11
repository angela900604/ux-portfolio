import { SiteHeaderFooter } from "@/app/components/SiteHeaderFooter";

export default function ResearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SiteHeaderFooter>{children}</SiteHeaderFooter>;
}
