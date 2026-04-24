import Link from "next/link";
import { MultisegmentInterviewsResearchBody } from "./MultisegmentInterviewsResearchBody";

const VIEW_PROJECT_CLASS =
  "inline-flex items-center justify-center rounded-full border border-emerald-500/45 bg-emerald-500/15 px-7 py-3 text-base font-semibold text-emerald-100 transition hover:border-emerald-400/70 hover:bg-emerald-500/25 hover:text-white";

export function MultisegmentInterviewsMain({
  showViewProject = true,
}: {
  showViewProject?: boolean;
}) {
  return (
    <>
      <header className="max-w-3xl space-y-4">
        <p className="text-xs font-medium uppercase tracking-widest text-zinc-500">
          User research · Multisegment interviews
        </p>
        <h2 className="text-3xl font-semibold tracking-tight text-zinc-100 sm:text-4xl">
          From public reviews to five audience groups—including low vision
        </h2>
        <p className="text-sm leading-relaxed text-zinc-400">
          Layered evidence for the Ministry of Finance Cloud Invoice App: what showed
          up in App Store feedback, then what diverged and converged across age,
          language, and ability in moderated research—with sketch personas to keep
          segments tangible for design decisions.
        </p>
      </header>

      <MultisegmentInterviewsResearchBody />

      {showViewProject ? (
        <div className="pt-2">
          <Link href="/case-studies/e-invoice-app" className={VIEW_PROJECT_CLASS}>
            View project
          </Link>
        </div>
      ) : null}
    </>
  );
}
