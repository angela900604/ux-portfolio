import Link from "next/link";
import { AccessibilityVoiceoverMain } from "@/app/accessibility-voiceover/AccessibilityVoiceoverMain";
import { SplitCapsuleLink } from "@/app/components/SplitCapsuleLink";
import { CaseStudyContentLayout } from "@/app/case-studies/_components/CaseStudyContentLayout";
import { CompetitorAnalysisMain } from "@/app/competitor-analysis/CompetitorAnalysisMain";
import { MultisegmentInterviewsMain } from "@/app/multisegment-interviews/MultisegmentInterviewsMain";
import { EInvoiceMultisegmentResearchSections } from "@/app/case-studies/e-invoice-app/EInvoiceMultisegmentResearchSections";
import {
  RESEARCH_SECTION_BODY,
  RESEARCH_SECTION_HEADER,
  RESEARCH_SECTION_LABEL,
  RESEARCH_SECTION_TITLE,
} from "@/lib/case-study-theme";

export const metadata = {
  title: "User research journey — Taiwan MoF e-invoice app | Angela Yang",
  description:
    "Competitor benchmarks, multisegment interviews, segment-by-segment user pain synthesis, and VoiceOver accessibility work for the Ministry of Finance Cloud Invoice redesign.",
};

const SECTION_WRAP =
  "scroll-mt-28 space-y-10 border-t border-zinc-800 pt-12 sm:scroll-mt-32 sm:space-y-12 sm:pt-14";

export default function UserResearchJourneyPage() {
  return (
    <article className="min-h-screen bg-zinc-950 text-zinc-100">
      <CaseStudyContentLayout contentClassName="space-y-0 text-base leading-relaxed sm:text-lg">
        <nav className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-zinc-500">
          <Link href="/" className="transition hover:text-zinc-200">
            ← Home
          </Link>
          <span aria-hidden className="text-zinc-700">
            ·
          </span>
          <Link
            href="/case-studies/e-invoice-app"
            className="transition hover:text-zinc-200"
          >
            e-Invoice case study
          </Link>
        </nav>

        <header className={`${RESEARCH_SECTION_HEADER} pb-10 sm:pb-12`}>
          <p className={RESEARCH_SECTION_LABEL}>
            Ministry of Finance Cloud Invoice · User research
          </p>
          <h1 className={`${RESEARCH_SECTION_TITLE} sm:text-4xl`}>
            User research journey
          </h1>
          <p className={RESEARCH_SECTION_BODY}>
            Competitor analysis, multisegment interviews, and accessibility—one
            thread from evidence to shipped patterns (Feb–Nov 2025).
          </p>
        </header>

        <section id="competitor-analysis" className={SECTION_WRAP}>
          <CompetitorAnalysisMain showViewProject={false} />
        </section>

        <section id="multisegment-interviews" className={SECTION_WRAP}>
          <MultisegmentInterviewsMain showViewProject={false} />
        </section>

        <section id="e-invoice-user-pain" className={SECTION_WRAP}>
          <div className={`${RESEARCH_SECTION_HEADER} mb-8 sm:mb-10`}>
            <p className={RESEARCH_SECTION_LABEL}>E-invoice app · Synthesis</p>
            <h2 className={RESEARCH_SECTION_TITLE}>
              User pain by segment &amp; cross-group findings
            </h2>
            <p className={RESEARCH_SECTION_BODY}>
              App Store reviews, interviews, and moderated tests—distilled into
              segment cards, a shared scan/barcode truth, and the home-screen density
              conflict that drove configurable modules in the case study.
            </p>
          </div>
          <EInvoiceMultisegmentResearchSections />
        </section>

        <section id="accessibility" className={SECTION_WRAP}>
          <AccessibilityVoiceoverMain showViewProject={false} />
        </section>

        <div className="border-t border-zinc-800 pt-10 sm:pt-12">
          <SplitCapsuleLink
            href="/case-studies/e-invoice-app"
            label="View project"
            variant="ghostEmerald"
          />
        </div>
      </CaseStudyContentLayout>
    </article>
  );
}
