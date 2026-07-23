import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { SoftCursor } from "./components/SoftCursor";
import "./globals.css";

const sans = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
});

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-serif",
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
      className={`${sans.variable} ${serif.variable} scroll-smooth`}
    >
      <body className="min-h-screen overflow-x-hidden bg-paper text-ink">
        <SoftCursor />
        {children}
      </body>
    </html>
  );
}
