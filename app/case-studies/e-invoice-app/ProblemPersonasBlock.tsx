import Image from "next/image";
import { ImageLightbox } from "@/app/components/ImageLightbox";
import { SplitCapsuleLink } from "@/app/components/SplitCapsuleLink";
import { CASE_STUDY_SECTION_TITLE_CLASS } from "@/lib/site-shell";
import { CaseStudyInViewSection } from "../_components/CaseStudyInViewSection";

export function ProblemPersonasBlock() {
  return (
    <CaseStudyInViewSection
      id="user-journey-map"
      className="scroll-mt-28 space-y-12 sm:scroll-mt-32"
    >
      <div className="grid min-w-0 gap-10 lg:grid-cols-2 lg:items-start lg:gap-12">
        <div className="min-w-0 space-y-6">
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            01 · The problem
          </span>
          <h2 className={CASE_STUDY_SECTION_TITLE_CLASS}>
            Roughly 20 million people rely on the official app—yet ~2.8★ ratings and
            broken flows were excluding elders, newcomers, and low-vision users.
          </h2>

          <details className="group max-w-3xl rounded-xl border border-zinc-800 bg-zinc-900/35 open:border-emerald-500/25">
            <summary className="cursor-pointer list-none px-4 py-3.5 text-sm font-medium text-emerald-300/95 transition hover:bg-zinc-900/50 hover:text-emerald-200 [&::-webkit-details-marker]:hidden">
              <span className="inline-flex w-full items-center justify-between gap-3">
                <span>Context and design goal</span>
                <span
                  className="shrink-0 text-zinc-500 transition group-open:rotate-180"
                  aria-hidden
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-current"
                  >
                    <path
                      d="M4 6l4 4 4-4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </span>
            </summary>
            <div className="border-t border-zinc-800/90 px-4 pb-4 pt-1 text-sm leading-relaxed text-zinc-300 sm:text-[15px]">
              <p>
                In Taiwan, most retail purchases still produce a{" "}
                <span className="text-zinc-100">uniform invoice</span>{" "}
                <span className="text-zinc-500">(統一發票)</span>—often paper with a
                lottery number and QR code. The Ministry of Finance{" "}
                <span className="text-zinc-100">cloud invoice / e-invoice ecosystem</span>{" "}
                <span className="text-zinc-500">(電子發票)</span> lets people store
                digital copies, bind a{" "}
                <span className="text-zinc-100">mobile carrier barcode</span>{" "}
                <span className="text-zinc-500">(手機條碼)</span> for automatic matching,
                scan paper receipts into the app, and claim or donate prizes—at
                national scale next to cash and card checkout.
              </p>
              <p className="mt-4">
                <span className="font-medium text-zinc-200">Design goal for this work:</span>{" "}
                make those core jobs obvious and trustworthy for{" "}
                <span className="text-zinc-100">
                  elders, newcomers, foreign residents, and low-vision users
                </span>
                —not only for digitally fluent taxpayers—while staying inside public-sector
                policy and engineering constraints.
              </p>
            </div>
          </details>

          <div>
            <SplitCapsuleLink
              href="/user-research-journey#e-invoice-user-pain"
              label="View full user pain synthesis"
              variant="ghostEmerald"
            />
          </div>
        </div>

        <div className="min-w-0 lg:sticky lg:top-24">
          <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40">
            <ImageLightbox
              src="/case-studies/e-invoice/photo-invoice-receipts.png"
              alt="Paper receipts commonly collected for Taiwan's invoice lottery"
              className="block w-full"
              disableHoverScale
            >
              <Image
                src="/case-studies/e-invoice/photo-invoice-receipts.png"
                alt="Paper receipts commonly collected for Taiwan's invoice lottery"
                width={1200}
                height={900}
                className="h-auto w-full object-cover"
              />
            </ImageLightbox>
          </div>
        </div>
      </div>
    </CaseStudyInViewSection>
  );
}
