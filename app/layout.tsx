import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import { EditorialCursor } from "./components/EditorialCursor";
import { PageCurtain } from "./components/PageCurtain";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import "./globals.css";

const sans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500"],
});

const serifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  variable: "--font-serif-display",
  weight: "400",
});

export const metadata: Metadata = {
  /** Short title for link previews (iMessage, LINE, Slack, etc.) */
  title: "Angela Yang",
  description:
    "Product designer: government-scale digital services (Taiwan), AI products (Vancouver). Research, systems, ship-ready UX—Cursor & Claude in the workflow.",
  openGraph: {
    title: "Angela Yang",
    description:
      "Product designer: government-scale digital services (Taiwan), AI products (Vancouver). Research, systems, ship-ready UX.",
    type: "website",
    siteName: "Angela Yang",
  },
  twitter: {
    card: "summary_large_image",
    title: "Angela Yang",
    description:
      "Product designer: government-scale digital services (Taiwan), AI products (Vancouver). Research, systems, ship-ready UX.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${serifDisplay.variable} scroll-smooth`}
    >
      <body className="min-h-screen overflow-x-hidden">
        <EditorialCursor />
        <PageCurtain />
        <div className="flex min-h-screen flex-col">
          <SiteHeader />

          <main className="flex-1 pt-[4.5rem]">{children}</main>

          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
