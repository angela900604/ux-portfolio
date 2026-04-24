import Link from "next/link";
import { CaseStudyExpandable } from "@/app/case-studies/_components/CaseStudyExpandable";
import { CompetitorLandscapeTable } from "@/app/case-studies/e-invoice-app/CompetitorLandscapeTable";
import { SITE_SHELL_CONTAINER } from "@/lib/site-shell";

export const metadata = {
  title: "Competitor analysis — Taiwan e-invoice apps | Angela Yang",
  description:
    "Benchmarking MoF Cloud Invoice, third-party passbooks, and LINE before IA and UI: what to mirror, what to avoid, and how findings shaped shipped patterns.",
};

export default function CompetitorAnalysisPage() {
  return (
    <article className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className={`${SITE_SHELL_CONTAINER} py-12 sm:py-16`}>
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

        <header className="mt-10 max-w-3xl space-y-4">
          <p className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            User research · Competitor analysis
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-100 sm:text-4xl">
            MoF, mature third parties, and LINE showed where trust and habit
            live—we borrowed patterns that still fit ministry rules.
          </h1>
          <p className="text-sm leading-relaxed text-zinc-400">
            Quick competitive read before IA and UI: what to mirror, what to avoid,
            and what stayed out of bounds. Pulled from the Ministry of Finance Cloud
            Invoice App redesign (Feb–Sep 2025).
          </p>
        </header>

        <div className="mt-12 max-w-4xl space-y-8">
          <CompetitorLandscapeTable />
          <CaseStudyExpandable label="How benchmarks shaped shipped UI">
            <p className="max-w-3xl text-sm leading-relaxed text-zinc-400">
              <span className="text-zinc-200">How this shaped the work:</span> I
              borrowed clear onboarding patterns from LINE, scan-and-login pacing and
              spending views from strong third parties, and data plus sensory feedback
              ideas from high-rated apps—then folded everything back into
              accessibility rules, ministry policy, and what engineering could ship.
            </p>
          </CaseStudyExpandable>
        </div>
      </div>
    </article>
  );
}
