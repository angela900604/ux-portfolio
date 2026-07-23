import { SplitCapsuleLink } from "@/app/components/SplitCapsuleLink";
import { MultisegmentInterviewsResearchBody } from "./MultisegmentInterviewsResearchBody";
import {
  RESEARCH_SECTION_BODY,
  RESEARCH_SECTION_HEADER,
  RESEARCH_SECTION_LABEL,
  RESEARCH_SECTION_TITLE,
} from "@/lib/case-study-theme";

export function MultisegmentInterviewsMain({
  showViewProject = true,
}: {
  showViewProject?: boolean;
}) {
  return (
    <>
      <header className={RESEARCH_SECTION_HEADER}>
        <p className={RESEARCH_SECTION_LABEL}>
          User research · Multisegment interviews
        </p>
        <h2 className={RESEARCH_SECTION_TITLE}>
          From public reviews to five audience groups—including low vision
        </h2>
        <p className={RESEARCH_SECTION_BODY}>
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
