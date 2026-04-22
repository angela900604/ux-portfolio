import type { Metadata } from "next";
import { DM_Sans, Fraunces, Space_Grotesk } from "next/font/google";
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
          <header className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-sm">
            <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 sm:px-[100px] py-4">
              <a
                href="/"
                className="text-base font-medium tracking-wide text-zinc-400 hover:text-zinc-100 transition"
              >
                Angela Yang
              </a>
              <nav className="flex gap-8 text-base text-zinc-400">
                <a href="/" className="hover:text-zinc-100 transition">
                  Work
                </a>
                <a href="/about" className="hover:text-zinc-100 transition">
                  About
                </a>
                <a href="/resume" className="hover:text-zinc-100 transition">
                  Resume
                </a>
              </nav>
            </div>
          </header>

          <main className="flex-1">{children}</main>

          <footer className="border-t border-zinc-800">
            <div className="mx-auto max-w-[1440px] px-6 sm:px-[100px] py-5 text-xs text-zinc-500">
              <div className="grid grid-cols-1 gap-3 text-center sm:grid-cols-3 sm:items-center sm:gap-4 sm:text-left">
                <span className="sm:text-left">
                  © {new Date().getFullYear()} Angela Yang
                </span>
                <span className="text-[11px] leading-relaxed text-zinc-600 sm:text-center">
                  This website was vibe-coded by me.
                </span>
                <span className="sm:text-right">Product Design · UX · Vancouver</span>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
