import Image from "next/image";
import Link from "next/link";
import { CaseStudyInViewSection } from "../_components/CaseStudyInViewSection";

export function ProblemPersonasBlock() {
  return (
    <CaseStudyInViewSection
      id="user-journey-map"
      className="scroll-mt-28 space-y-12 sm:scroll-mt-32"
    >
      <div className="max-w-3xl space-y-6">
        <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
          01 · The problem
        </span>
        <h2 className="max-w-3xl text-zinc-100">
          Roughly 20 million people rely on the official app—yet ~2.8★ ratings and
          broken flows were excluding elders, newcomers, and low-vision users.
        </h2>
        <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-start">
          <Link
            href="/user-research-journey#e-invoice-user-pain"
            className="inline-flex items-center justify-center rounded-full border border-emerald-500/45 bg-emerald-500/15 px-7 py-3.5 text-base font-semibold text-emerald-100 transition hover:border-emerald-400/70 hover:bg-emerald-500/25 hover:text-white"
          >
            Context and design goal
          </Link>
          <Link
            href="/user-research-journey#e-invoice-user-pain"
            className="inline-flex items-center justify-center rounded-full border border-emerald-500/45 bg-emerald-500/15 px-7 py-3.5 text-base font-semibold text-emerald-100 transition hover:border-emerald-400/70 hover:bg-emerald-500/25 hover:text-white"
          >
            View full user pain synthesis
          </Link>
        </div>
        <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40">
          <Image
            src="/case-studies/e-invoice/photo-invoice-receipts.png"
            alt="Paper receipts commonly collected for Taiwan's invoice lottery"
            width={1200}
            height={900}
            className="h-auto w-full object-cover"
          />
        </div>
      </div>
    </CaseStudyInViewSection>
  );
}
