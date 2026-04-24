export const YOUTUBE_A11Y_EMBED =
  "https://www.youtube.com/embed/yfwERMFfXDM";
export const YOUTUBE_A11Y_URL =
  "https://www.youtube.com/shorts/yfwERMFfXDM?si=edcvB-xno43PtoFN";

/**
 * VoiceOver research narrative + YouTube clip (MoF Cloud Invoice legacy app).
 * Used on `/user-research-journey` (#accessibility) and linked from the case study.
 */
export function EInvoiceVoiceOverAccessibilityPanel() {
  return (
    <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-10">
      <div className="min-w-0 flex-1 space-y-5 leading-relaxed text-zinc-300">
        <p>
          One of the most impactful parts of this project was working with visually
          impaired users. I interviewed two blind participants and recorded how one
          of them used the &quot;before&quot; version of the app with iOS VoiceOver.
          The video revealed key pain points—like unclear feedback sounds for focus
          states, buttons not being recognized as buttons, and sections being read as
          interactable when they weren&apos;t.
        </p>
        <p>
          From there, I annotated the entire app: defining alt text for each
          component, setting correct reading orders, and ensuring VoiceOver
          communicated whether an element was actionable or purely informational. I
          also worked closely with engineers to ensure these annotations could be
          implemented. This accessibility work has become a major differentiator for
          the app. The revised version will be submitted to the official
          Accessibility Platform by Taiwan&apos;s Ministry of Digital Affairs in
          early 2026, with the goal of receiving national certification.
        </p>
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
