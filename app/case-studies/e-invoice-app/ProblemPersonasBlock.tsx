import Image from "next/image";
import Link from "next/link";
import { ImageLightbox } from "@/app/components/ImageLightbox";
import { CaseStudyInViewSection } from "../_components/CaseStudyInViewSection";

export function ProblemPersonasBlock() {
  return (
    <CaseStudyInViewSection
      id="user-journey-map"
      className="scroll-mt-28 space-y-12 sm:scroll-mt-32"
    >
      <div className="grid min-w-0 gap-10 lg:grid-cols-2 lg:items-start lg:gap-12">
        <div className="min-w-0 space-y-6">
          <span className="cs-section-eyebrow">
            01 · The problem
          </span>
          <p className="max-w-3xl cs-body">
            Roughly 20 million people rely on this official app, yet only 2.8★ App
            Store ratings (~Mar 2024–Mar 2025) and broken flows were excluding
            elders, newcomers, and low-vision users.
          </p>

          <div>
            <Link
              href="/user-research-journey#e-invoice-user-pain"
              className="text-sm font-medium text-emerald-400/95 underline-offset-[5px] transition hover:text-emerald-300 hover:underline"
            >
              View full user pain synthesis
            </Link>
          </div>

          <div className="max-w-3xl space-y-4">
            <p className="text-sm font-medium text-emerald-300/95">
              Context and design goal
            </p>
            <div className="cs-body-sm space-y-4 sm:text-[15px]">
              <p>
                In Taiwan, retail purchases always come with a{" "}
                <span className="text-zinc-100">uniform invoice</span>{" "}
                <span className="text-zinc-500">(統一發票)</span>, often paper with a
                lottery number and QR code. The Ministry of Finance{" "}
                <span className="text-zinc-100">cloud invoice / e-invoice ecosystem</span>{" "}
                <span className="text-zinc-500">(電子發票)</span> lets people store digital
                copies, bind a{" "}
                <span className="text-zinc-100">mobile carrier barcode</span>{" "}
                <span className="text-zinc-500">(手機條碼)</span> for automatic matching,
                scan paper receipts into the app, and claim or donate prizes.
              </p>
              <p>
                The design goal was to redesign the information architecture, flow,
                and UI to make those core jobs obvious and trustworthy for{" "}
                <span className="text-zinc-100">
                  elders, newcomers, foreign residents, and low-vision users
                </span>
                .
              </p>
            </div>
          </div>
        </div>

        <div className="min-w-0 lg:sticky lg:top-24">
          <div className="overflow-hidden">
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
