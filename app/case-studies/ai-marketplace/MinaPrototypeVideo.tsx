/**
 * One-photo listing prototype — autoplay for inline demo (muted + playsInline for iOS).
 * WebM optional: add mina-ai-prototype.webm alongside the MP4 for smaller files on Chrome/Firefox.
 */
export function MinaPrototypeVideo() {
  return (
    <figure className="mx-auto w-full max-w-3xl">
      <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)]">
        <video
          className="h-auto w-full max-h-[min(85vh,720px)] object-contain"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          aria-label="Prototype: one photo is analyzed to detect multiple items and draft listings"
        >
          <source
            src="/case-studies/mina/mina-ai-prototype.webm"
            type="video/webm"
          />
          <source
            src="/case-studies/mina/mina-ai-prototype.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <figcaption className="mt-3 text-center text-xs leading-relaxed text-zinc-500 sm:text-left">
        Prototype flow: one photo → AI estimates items in frame → listing drafts you can edit before publishing.
      </figcaption>
    </figure>
  );
}
