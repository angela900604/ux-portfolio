import Link from "next/link";
import { AccessibilityVoiceoverMain } from "@/app/accessibility-voiceover/AccessibilityVoiceoverMain";
import { CaseStudyContentLayout } from "@/app/case-studies/_components/CaseStudyContentLayout";
import { CompetitorAnalysisMain } from "@/app/competitor-analysis/CompetitorAnalysisMain";
import { MultisegmentInterviewsMain } from "@/app/multisegment-interviews/MultisegmentInterviewsMain";

export const metadata = {
  title: "User research journey — Taiwan MoF e-invoice app | Angela Yang",
  description:
    "Competitor benchmarks, multisegment interviews (including low vision), and VoiceOver accessibility work for the Ministry of Finance Cloud Invoice redesign.",
};

const VIEW_PROJECT_CLASS =
  "inline-flex items-center justify-center rounded-full border border-emerald-500/45 bg-emerald-500/15 px-7 py-3 text-base font-semibold text-emerald-100 transition hover:border-emerald-400/70 hover:bg-emerald-500/25 hover:text-white";

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

        <header className="max-w-3xl space-y-4 pb-10 sm:pb-12">
          <p className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            Ministry of Finance Cloud Invoice · User research
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-100 sm:text-4xl">
            User research journey
          </h1>
          <p className="text-sm leading-relaxed text-zinc-400 sm:text-base">
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

        <section id="accessibility" className={SECTION_WRAP}>
          <AccessibilityVoiceoverMain showViewProject={false} />
        </section>

        <div className="border-t border-zinc-800 pt-10 sm:pt-12">
          <Link href="/case-studies/e-invoice-app" className={VIEW_PROJECT_CLASS}>
            View project
          </Link>
        </div>
      </CaseStudyContentLayout>
    </article>
  );
}
