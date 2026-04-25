function PainBlock({
  badge,
  segmentLabel,
  segmentClassName,
  cardAccentClassName,
  title,
  body,
  quotes,
}: {
  badge: string;
  segmentLabel: string;
  segmentClassName: string;
  cardAccentClassName: string;
  title: string;
  body: string;
  quotes: {
    quote: string;
    quoteSource?: string;
    quoteStyle?: "review" | "synthesis";
  }[];
}) {
  return (
    <div
      className={`rounded-2xl border border-zinc-700/80 bg-zinc-900/55 p-5 shadow-[0_1px_0_rgba(255,255,255,0.03)_inset] sm:p-6 ${cardAccentClassName}`}
    >
      <div className="min-w-0 max-w-3xl space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex rounded-full border border-zinc-600 bg-zinc-800/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-zinc-100">
            {badge}
          </span>
          <span
            className={`inline-flex rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] ${segmentClassName}`}
          >
            {segmentLabel}
          </span>
        </div>
        <h4 className="text-2xl font-semibold tracking-tight text-zinc-50 sm:text-[1.85rem]">
          {title}
        </h4>
        <p className="text-base leading-relaxed text-zinc-300 sm:text-[1.05rem]">
          {body}
        </p>
        {quotes.map((q, i) => {
          const quoteClasses =
            q.quoteStyle === "synthesis"
              ? "text-sm leading-relaxed text-zinc-300 sm:text-base"
              : "text-sm italic leading-relaxed text-zinc-200 sm:text-base";
          return (
            <figure
              key={i}
              className="border-l-2 border-zinc-600 pl-4 pt-1"
            >
              <blockquote className={quoteClasses}>
                {q.quoteStyle === "synthesis" ? (
                  q.quote
                ) : (
                  <>
                    &ldquo;{q.quote}&rdquo;
                  </>
                )}
              </blockquote>
              {q.quoteSource ? (
                  <figcaption className="mt-2 text-xs text-zinc-500">
                  {q.quoteSource}
                </figcaption>
              ) : null}
            </figure>
          );
        })}
      </div>
    </div>
  );
}

const BADGE_SEGMENT_YOUNGER = "bg-amber-100 text-amber-900";
const BADGE_SEGMENT_MIDDLE = "bg-amber-100 text-amber-900";
const BADGE_SEGMENT_SILVER = "bg-indigo-100 text-indigo-900";
const BADGE_SEGMENT_LOW_VISION = "bg-emerald-100 text-emerald-900";

/**
 * Condensed user-pain narrative (App Store + interviews) for the e-invoice case study.
 * Standalone research page: `app/multisegment-interviews/MultisegmentInterviewsResearchBody.tsx`.
 */
export function EInvoiceMultisegmentResearchSections() {
  return (
    <div className="space-y-12 sm:space-y-16">
      <section
        id="personas"
        className="scroll-mt-28 space-y-8 sm:scroll-mt-32 sm:space-y-10"
      >
        <div className="space-y-8 sm:space-y-10">
          <PainBlock
            badge="User pain"
            segmentLabel="Younger (18–30)"
            segmentClassName={BADGE_SEGMENT_YOUNGER}
            cardAccentClassName="border-l-[3px] border-l-amber-500"
            title="Hard time finding features, couldn&apos;t see what I wanted right after open"
            body="App Store reviews flagged findability first: prize redemption, carrier binding, and settings buried under labels that read like ministry jargon, not tasks. Younger participants wanted a richer first screen too—the layout read as sparse next to consumer apps they use daily, so lottery status, spending, and shortcuts didn&apos;t show up where they expected."
            quotes={[
              {
                quote:
                  "I know the feature exists—I saw it in a tutorial—but I can't find it again.",
                quoteSource: "— App Store review (Taiwan)",
                quoteStyle: "review",
              },
              {
                quote:
                  "On open, I still have to dig—I want the important stuff visible immediately, not a home that feels empty next to the apps I use every day.",
                quoteSource: "— Interview synthesis · younger (18–30)",
                quoteStyle: "synthesis",
              },
            ]}
          />
          <PainBlock
            badge="User pain"
            segmentLabel="Middle-aged 31-50"
            segmentClassName={BADGE_SEGMENT_MIDDLE}
            cardAccentClassName="border-l-[3px] border-l-amber-500"
            title="Forgot passwords / MoF verification codes"
            body="The account gate did its security job—but verification codes and password recovery became the wall people hit before lottery, carrier, or scan tasks."
            quotes={[
              {
                quote:
                  "Sharpest pain in moderated sessions: forgot passwords and MoF verification codes blocked access before core tasks—not lack of features.",
                quoteSource: "— Interview synthesis · middle-aged (31–50)",
                quoteStyle: "synthesis",
              },
            ]}
          />
          <PainBlock
            badge="User pain"
            segmentLabel="Silver 51+"
            segmentClassName={BADGE_SEGMENT_SILVER}
            cardAccentClassName="border-l-[3px] border-l-indigo-500"
            title="Don&apos;t know the next step; fear tapping wrong"
            body='Reviews also described small type, dense screens, and no obvious "next step"—families stepping in to finish flows on someone else&apos;s phone. In sessions, older participants froze at ambiguous controls: without an obvious next step, they worried about triggering the wrong action on an official app—so they slowed down or passed the phone to family.'
            quotes={[
              {
                quote:
                  "My mom gives up. Too many words, too small. She only trusts paper.",
                quoteSource: "— App Store review (Taiwan)",
                quoteStyle: "review",
              },
              {
                quote:
                  "Sharpest pain for silver users: uncertainty about what to tap next and anxiety about mistakes—not lack of motivation to use the service.",
                quoteSource: "— Interview synthesis · silver (51+)",
                quoteStyle: "synthesis",
              },
            ]}
          />
          <PainBlock
            badge="User pain"
            segmentLabel="Low vision"
            segmentClassName={BADGE_SEGMENT_LOW_VISION}
            cardAccentClassName="border-l-[3px] border-l-emerald-500"
            title="Can&apos;t complete core tasks without a caregiver"
            body="Blind and low-vision participants relied on family to finish flows: unclear focus, weak roles, and copy that sounded interactive when it wasn&apos;t."
            quotes={[
              {
                quote:
                  "Low-vision and blind participants often needed help to complete the same tasks younger users did alone—VoiceOver and visual hierarchy were not yet carrying the load.",
                quoteSource: "— Interview & VoiceOver synthesis · low vision",
                quoteStyle: "synthesis",
              },
            ]}
          />
        </div>
      </section>

      {/* Shared truth + conflict insights */}
      <section className="space-y-4 border-t border-zinc-800/90 pt-5 sm:space-y-5 sm:pt-6">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-500">
          Cross-group findings
        </p>
        <div className="grid gap-4 sm:gap-5 lg:grid-cols-2 lg:gap-6">
          <div className="flex min-h-0 flex-col rounded-2xl border border-zinc-700/80 border-l-[3px] border-l-emerald-500 bg-zinc-900/55 p-5 shadow-[0_1px_0_rgba(255,255,255,0.03)_inset] sm:p-6">
            <p className="inline-flex w-fit rounded-full bg-emerald-600 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-white">
            Shared truth
            </p>
            <p className="mt-4 text-lg font-semibold leading-relaxed text-zinc-100 sm:text-xl">
            Everyone has the same entry behavior of showing the carrier barcode and
            scanning paper invoices.
            </p>
          </div>
          <div className="flex min-h-0 flex-col rounded-2xl border border-zinc-700/80 border-l-[3px] border-l-orange-500 bg-zinc-900/55 p-5 shadow-[0_1px_0_rgba(255,255,255,0.03)_inset] sm:p-6">
            <p className="inline-flex w-fit rounded-full bg-orange-600 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-white">
            Conflict insights
            </p>
            <p className="mt-4 text-lg font-semibold leading-relaxed text-zinc-100 sm:text-xl">
            On the home screen, older and low-vision groups wanted fewer items, more
            whitespace, and vivid color for fast recognition—while younger groups
            wanted a denser dashboard—more modules, promos, and shortcuts—and a
            cooler, minimal palette. One layout; two incompatible defaults.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
