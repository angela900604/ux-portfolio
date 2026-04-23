import type { Metadata } from "next";
import { DM_Sans, Fraunces, Space_Grotesk } from "next/font/google";
import { CASE_STUDY_BODY_GRID, SITE_SHELL_CONTAINER } from "@/lib/site-shell";
import { SiteHeader } from "./components/SiteHeader";
import { SoftCursor } from "./components/SoftCursor";
import "./globals.css";

const sans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
});

const serifDisplay = Fraunces({
  subsets: ["latin"],
  variable: "--font-serif-display",
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
      className={`${sans.variable} ${display.variable} ${serifDisplay.variable} scroll-smooth`}
    >
      <body className="min-h-screen overflow-x-hidden">
        <SoftCursor />
        <div className="flex min-h-screen flex-col">
          <SiteHeader />

          <main className="flex-1">{children}</main>

          <footer className="border-t border-zinc-800">
            <div className={`${SITE_SHELL_CONTAINER} py-5 text-xs text-zinc-500`}>
              <div className={CASE_STUDY_BODY_GRID}>
                <div className="lg:col-span-2">
                  <div className="grid grid-cols-1 gap-3 text-center sm:grid-cols-3 sm:items-center sm:gap-4 sm:text-left">
                    <span className="sm:text-left">
                      © {new Date().getFullYear()} Angela Yang
                    </span>
                    <span className="sm:text-center">
                      This website was vibe-coded by me.
                    </span>
                    <span className="sm:text-right">
                      Product Design · UX · Vancouver
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
