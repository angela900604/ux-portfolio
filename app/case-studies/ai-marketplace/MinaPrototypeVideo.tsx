/**
 * One-photo → AI item detection → listing prototype (hero clip for case study).
 * Optional WebM: add `mina-ai-prototype.webm` beside the MP4; browsers skip missing sources.
 */
export function MinaPrototypeVideo() {
  return (
    <figure className="mt-8 w-full min-w-0">
      <div className="overflow-hidden rounded-xl border border-zinc-800/90 bg-zinc-950 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)]">
        <video
          className="block h-auto w-full object-contain"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          aria-label="Screen recording: take one photo; AI detects how many items are in frame and drafts listings."
        >
          {/* MP4 first (shipped); add mina-ai-prototype.webm above when available for lighter playback */}
          <source
            src="/case-studies/mina/mina-ai-prototype.mp4"
            type="video/mp4"
          />
          <source
            src="/case-studies/mina/mina-ai-prototype.webm"
            type="video/webm"
          />
        </video>
      </div>
      <figcaption className="mt-3 text-sm leading-relaxed text-zinc-500">
        Prototype: one photo → AI analyzes item count in-frame → generated
        listings—minimal taps for busy parents.
      </figcaption>
    </figure>
  );
}
