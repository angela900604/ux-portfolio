import Image from "next/image";
import { SplitCapsuleLink } from "@/app/components/SplitCapsuleLink";
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
          <SplitCapsuleLink
            href="/user-research-journey#e-invoice-user-pain"
            label="Context and design goal"
            variant="ghostEmerald"
          />
          <SplitCapsuleLink
            href="/user-research-journey#e-invoice-user-pain"
            label="View full user pain synthesis"
            variant="ghostEmerald"
          />
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
