import Link from "next/link";
import { CaseStudyPrevNext } from "../../_components/CaseStudyPrevNext";
import { MinaInstagramGrid } from "./MinaInstagramGrid";
import { CASE_STUDY_BODY_GRID, SITE_SHELL_INNER } from "@/lib/site-shell";

export const metadata = {
  title:
    "MINA · Marketing designer — Instagram & launch visuals | Angela Yang",
  description:
    "Social and launch graphics for MINA (AI marketplace for parents): Instagram-style grid of campaign visuals, concierge storytelling, and product positioning.",
};

export default function MinaMarketingPage() {
  return (
    <article className="min-h-screen bg-zinc-950 text-zinc-100">
      <header className="border-b border-zinc-800">
        <div className={`${SITE_SHELL_INNER} py-10 sm:py-12`}>
          <div className={`${CASE_STUDY_BODY_GRID} min-w-0`}>
            <Link
              href="/case-studies/ai-marketplace"
              className="text-sm font-medium text-emerald-400/95 underline-offset-[5px] transition hover:text-emerald-300 hover:underline"
            >
              ← Back to MINA product case study
            </Link>
          </div>
        </div>
      </header>

      <div className={`${SITE_SHELL_INNER} pb-16 sm:pb-20 pt-10 sm:pt-12`}>
        <MinaInstagramGrid />
      </div>

      <div
        className={`${SITE_SHELL_INNER} border-t border-zinc-800 pt-12 pb-12 space-y-8`}
      >
        <CaseStudyPrevNext currentSlug="ai-marketplace/marketing" />
        <Link
          href="/"
          className="text-sm font-medium text-zinc-400 transition hover:text-zinc-100"
        >
          ← Back to home
        </Link>
      </div>
    </article>
  );
}
