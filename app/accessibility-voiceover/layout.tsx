import { SiteHeaderFooter } from "@/app/components/SiteHeaderFooter";

export default function AccessibilityVoiceoverLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SiteHeaderFooter>{children}</SiteHeaderFooter>;
}
