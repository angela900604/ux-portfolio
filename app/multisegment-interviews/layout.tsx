import { SiteHeaderFooter } from "@/app/components/SiteHeaderFooter";

export default function MultisegmentInterviewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SiteHeaderFooter>{children}</SiteHeaderFooter>;
}
