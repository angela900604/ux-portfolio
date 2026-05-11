import Link from "next/link";
import { SiteTopNav } from "@/app/components/SiteTopNav";
import { CASE_STUDY_BODY_GRID, SITE_SHELL_CONTAINER } from "@/lib/site-shell";

export function SiteHeaderFooter({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-950 text-zinc-100">
      <SiteTopNav />

      <main className="flex-1 pt-14">{children}</main>

      <footer className="border-t border-zinc-800">
        <div className={`${SITE_SHELL_CONTAINER} py-5 text-xs text-zinc-500`}>
          <div className={CASE_STUDY_BODY_GRID}>
            <div>
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
  );
}
