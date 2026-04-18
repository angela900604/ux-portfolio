import type { Metadata } from "next";
import { DM_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";

const sans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Angela Yang — Product Designer",
  description:
    "Product designer: government-scale digital services (Taiwan), AI products (Vancouver). Research, systems, ship-ready UX—Cursor & Claude in the workflow.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${display.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased font-sans">
        <div className="flex min-h-screen flex-col">
          <header className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-sm">
            <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 sm:px-[100px] py-4">
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
            <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 sm:px-[100px] py-5 text-xs text-zinc-500">
              <span>© {new Date().getFullYear()} Angela Yang</span>
              <span>Product Design · UX · Vancouver</span>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
