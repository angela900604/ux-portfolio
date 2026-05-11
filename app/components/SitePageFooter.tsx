import { CASE_STUDY_BODY_GRID, SITE_SHELL_CONTAINER } from "@/lib/site-shell";

export function SitePageFooter() {
  return (
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
  );
}
