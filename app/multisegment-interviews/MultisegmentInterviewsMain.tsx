import { SplitCapsuleLink } from "@/app/components/SplitCapsuleLink";
import { MultisegmentInterviewsResearchBody } from "./MultisegmentInterviewsResearchBody";

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
          <SplitCapsuleLink
            href="/case-studies/e-invoice-app"
            label="View project"
            variant="ghostEmerald"
          />
        </div>
      ) : null}
    </>
  );
}
