import { SiteHeaderFooter } from "@/app/components/SiteHeaderFooter";

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SiteHeaderFooter>{children}</SiteHeaderFooter>;
}
