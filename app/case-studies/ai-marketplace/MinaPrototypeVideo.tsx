/**
 * One-photo → AI item detection → listing prototype inside an iPhone-style frame.
 * Optional WebM: add `mina-ai-prototype.webm` beside the MP4.
 */
export function MinaPrototypeVideo() {
  return (
    <figure className="mx-auto mt-8 w-full max-w-[300px] min-w-0">
      <div className="relative mx-auto rounded-[3rem] bg-gradient-to-b from-zinc-600 via-zinc-800 to-zinc-950 p-[11px] shadow-[0_28px_56px_-16px_rgba(0,0,0,0.75)] ring-1 ring-white/[0.12]">
        <div
          className="absolute -left-[3px] top-[22%] h-9 w-[3px] rounded-l-md bg-zinc-500/90 shadow-sm"
          aria-hidden
        />
        <div
          className="absolute -left-[3px] top-[30%] h-14 w-[3px] rounded-l-md bg-zinc-500/90 shadow-sm"
          aria-hidden
        />
        <div
          className="absolute -right-[3px] top-[26%] h-20 w-[3px] rounded-r-md bg-zinc-500/90 shadow-sm"
          aria-hidden
        />
        <div className="relative rounded-[2.4rem] bg-black p-[10px] pt-[14px]">
          <div
            className="pointer-events-none absolute left-1/2 top-[10px] z-10 h-[27px] w-[92px] -translate-x-1/2 rounded-full bg-black ring-1 ring-zinc-800"
            aria-hidden
          />
          <div className="aspect-[9/19.5] overflow-hidden rounded-[1.35rem] bg-zinc-950 ring-1 ring-zinc-800/90">
            <video
              className="h-full w-full object-cover object-top"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              aria-label="Screen recording: take one photo; AI detects how many items are in frame and drafts listings."
            >
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
        </div>
      </div>
      <figcaption className="mt-4 w-full max-w-full text-center text-[11px] leading-snug text-zinc-500 sm:mx-auto sm:text-xs sm:leading-normal md:text-sm md:whitespace-nowrap md:overflow-x-auto">
        Prototype: one photo → AI analyzes item count in-frame → generated listings—minimal taps for busy parents.
      </figcaption>
    </figure>
  );
}
