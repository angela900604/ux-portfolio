function PainBlock({
  badge,
  badgeClassName,
  title,
  body,
  quote,
  quoteSource,
  quoteStyle = "review",
}: {
  badge: string;
  badgeClassName: string;
  title: string;
  body: string;
  quote: string;
  quoteSource?: string;
  /** `review` = italic + curly quotes; `synthesis` = factual pull line below body */
  quoteStyle?: "review" | "synthesis";
}) {
  const quoteClasses =
    quoteStyle === "review"
      ? "text-sm italic leading-relaxed text-zinc-400 sm:text-base"
      : "text-sm leading-relaxed text-zinc-400 sm:text-base";

  return (
    <div className="rounded-2xl border border-zinc-800/90 bg-zinc-900/35 p-6 sm:p-8">
      <div className="min-w-0 max-w-3xl space-y-4">
        <span
          className={`inline-flex rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] ${badgeClassName}`}
        >
          {badge}
        </span>
        <h4 className="text-xl font-semibold tracking-tight text-zinc-100 sm:text-2xl">
          {title}
        </h4>
        <p className="text-base leading-relaxed text-zinc-300 sm:text-[1.05rem]">
          {body}
        </p>
        <figure className="border-l-2 border-amber-500/45 pl-4 pt-1">
          <blockquote className={quoteClasses}>
            {quoteStyle === "review" ? (
              <>
                &ldquo;{quote}&rdquo;
              </>
            ) : (
              quote
            )}
          </blockquote>
          {quoteSource ? (
            <figcaption className="mt-2 text-xs text-zinc-500">{quoteSource}</figcaption>
          ) : null}
        </figure>
      </div>
    </div>
  );
}

const BADGE_APP =
  "bg-amber-500/15 text-amber-200/95 ring-1 ring-amber-500/25";
const BADGE_INTERVIEW =
  "bg-emerald-500/12 text-emerald-200/95 ring-1 ring-emerald-500/25";

/**
 * Condensed user-pain narrative (App Store + interviews) + shared truth.
 * Shared by the e-invoice case study and /multisegment-interviews.
 */
export function EInvoiceMultisegmentResearchSections() {
  return (
    <div className="space-y-12 sm:space-y-16">
      {/* Layer 1 */}
      <section className="space-y-8 sm:space-y-10">
        <header className="max-w-3xl space-y-2">
          <p className="text-xs font-semibold uppercase tracking-widest text-amber-400/90">
            Layer 1 · Where the problem showed up first
          </p>
          <h3 className="text-2xl font-semibold tracking-tight text-zinc-100 sm:text-3xl">
            2.8★ App Store reviews (Taiwan · ~Mar 2024–Mar 2025)
          </h3>
          <p className="text-sm leading-relaxed text-zinc-500">
            Public feedback surfaced findability and older-adult friction before we
            went deep in moderated research.
          </p>
        </header>

        <div className="space-y-8 sm:space-y-10">
          <PainBlock
            badge="User pain · Findability"
            badgeClassName={BADGE_APP}
            title="Findability"
            body="Prize redemption, carrier binding, and settings buried under labels that read like ministry jargon, not tasks."
            quote="I know the feature exists—I saw it in a tutorial—but I can't find it again."
            quoteSource="— App Store review (Taiwan)"
          />
          <PainBlock
            badge="User pain · Older adults"
            badgeClassName={BADGE_APP}
            title="Older adults"
            body='Small type, dense screens, and no obvious "next step"—families stepping in to finish flows on someone else&apos;s phone.'
            quote="My mom gives up. Too many words, too small. She only trusts paper."
            quoteSource="— App Store review (Taiwan)"
          />
        </div>
      </section>

      {/* Layer 2 */}
      <section
        id="personas"
        className="scroll-mt-28 space-y-8 sm:scroll-mt-32 sm:space-y-10"
      >
        <header className="max-w-3xl space-y-2">
          <p className="text-xs font-semibold uppercase tracking-widest text-emerald-400/90">
            Layer 2 · Interviews across five audiences—including low vision
          </p>
          <p className="text-sm leading-relaxed text-zinc-500">
            Five segments agreed on opening with scan—but diverged sharply on sign-in,
            density, and independence.
          </p>
        </header>

        <div className="space-y-8 sm:space-y-10">
          <PainBlock
            badge="Interview signal · Middle-aged (31–50)"
            badgeClassName={BADGE_INTERVIEW}
            title="Forgot passwords / MoF verification codes"
            body="The account gate did its security job—but verification codes and password recovery became the wall people hit before lottery, carrier, or scan tasks."
            quote="Sharpest pain in moderated sessions: forgot passwords and MoF verification codes blocked access before core tasks—not lack of features."
            quoteSource="— Interview synthesis · middle-aged (31–50)"
            quoteStyle="synthesis"
          />
          <PainBlock
            badge="Interview signal · Low vision"
            badgeClassName={BADGE_INTERVIEW}
            title="Can&apos;t complete core tasks without a caregiver"
            body="Blind and low-vision participants relied on family to finish flows: unclear focus, weak roles, and copy that sounded interactive when it wasn&apos;t."
            quote="Low-vision and blind participants often needed help to complete the same tasks younger users did alone—VoiceOver and visual hierarchy were not yet carrying the load."
            quoteSource="— Interview & VoiceOver synthesis · low vision"
            quoteStyle="synthesis"
          />
        </div>
      </section>

      {/* Shared truth */}
      <section className="rounded-2xl border border-emerald-500/30 bg-emerald-500/[0.08] p-6 sm:p-8 md:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-emerald-300/95">
          Shared truth
        </p>
        <h3 className="mt-4 max-w-4xl text-2xl font-semibold leading-snug tracking-tight text-zinc-50 sm:text-3xl sm:leading-snug">
          Everyone converged on the same entry behavior: show the carrier barcode
          and scan paper invoices.
        </h3>
        <p className="mt-5 max-w-3xl text-base leading-relaxed text-zinc-200/95 sm:text-lg">
          On the home screen,{" "}
          <span className="font-medium text-white">
            older and low-vision groups wanted fewer items, more whitespace, and vivid
            color for fast recognition
          </span>
          —while{" "}
          <span className="font-medium text-white">
            younger groups wanted a denser dashboard—more modules, promos, and
            shortcuts—and a cooler, minimal palette
          </span>
          . One layout; two incompatible defaults.
        </p>
      </section>
    </div>
  );
}
