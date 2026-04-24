import Image from "next/image";
import Link from "next/link";
import { CaseStudyExpandable } from "../_components/CaseStudyExpandable";
import { CaseStudyInViewSection } from "../_components/CaseStudyInViewSection";
import { EInvoiceMultisegmentResearchSections } from "./EInvoiceMultisegmentResearchSections";

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
        <CaseStudyExpandable label="Context, constraints, and design goal">
          <p className="text-zinc-300">
            In Taiwan, every purchase comes with an invoice. For years, people
            collected stacks of paper receipts and checked them for the
            government&apos;s famous &quot;invoice lottery.&quot; To address waste and
            friction, the Ministry of Finance (MoF) launched the Cloud Invoice App—
            store e-invoices, check lottery numbers, donate with one tap, and cut paper
            while supporting sustainability.
          </p>
          <p className="mt-3 text-zinc-300">
            The issue wasn&apos;t just dated UI: older adults couldn&apos;t use the
            app alone, foreign residents couldn&apos;t parse Chinese labels, and people
            abandoned sign-in at forgot-password.
          </p>
          <p className="mt-4 border-l-2 border-emerald-500/40 pl-4 text-sm text-zinc-400">
            <span className="font-medium text-zinc-200">Design goal:</span> users
            18–70+, including visually impaired, complete core tasks independently—no
            hand-holding or family takeover.
          </p>
        </CaseStudyExpandable>
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

      <EInvoiceMultisegmentResearchSections />

      <div className="pt-4">
        <Link
          href="/user-research-journey"
          className="inline-flex items-center justify-center rounded-full border border-emerald-500/45 bg-emerald-500/15 px-7 py-3 text-base font-semibold text-emerald-100 transition hover:border-emerald-400/70 hover:bg-emerald-500/25 hover:text-white"
        >
          View research journey
        </Link>
      </div>
    </CaseStudyInViewSection>
  );
}
