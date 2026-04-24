import { CaseStudyExpandable } from "../_components/CaseStudyExpandable";

export const YOUTUBE_A11Y_EMBED =
  "https://www.youtube.com/embed/yfwERMFfXDM";
export const YOUTUBE_A11Y_URL =
  "https://www.youtube.com/shorts/yfwERMFfXDM?si=edcvB-xno43PtoFN";

/**
 * VoiceOver research narrative + YouTube clip (MoF Cloud Invoice legacy app).
 * Used on `/accessibility-voiceover` (linked from the site home research skills).
 */
export function EInvoiceVoiceOverAccessibilityPanel() {
  return (
    <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-10">
      <div className="min-w-0 flex-1 leading-relaxed text-zinc-300">
        <CaseStudyExpandable label="VoiceOver findings &amp; engineering handoff">
          <p>
            I interviewed blind participants and recorded VoiceOver sessions on the
            legacy app—unclear focus feedback, controls not exposed as buttons, and
            static copy read as interactive.
          </p>
          <p className="mt-3">
            I annotated components for alt text, reading order, and action vs.
            information, and paired with engineering for implementation. The revised
            build is planned for Taiwan&apos;s accessibility certification pathway
            (2026).
          </p>
        </CaseStudyExpandable>
      </div>
      <div className="mx-auto w-full max-w-[280px] shrink-0 lg:mx-0">
        <div className="relative aspect-[9/16] overflow-hidden rounded-[20px] border border-zinc-700 bg-black">
          <iframe
            src={YOUTUBE_A11Y_EMBED}
            title="VoiceOver accessibility research — e-invoice app"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        </div>
        <p className="mt-2 text-center text-[11px] text-zinc-500">
          Short clip ·{" "}
          <a
            href={YOUTUBE_A11Y_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 underline hover:text-zinc-200"
          >
            Open on YouTube
          </a>
        </p>
      </div>
    </div>
  );
}
