function PainBlock({
  badge,
  segments,
  cardAccentClassName,
  title,
  body,
  quotes,
}: {
  badge: string;
  segments: { label: string; className: string }[];
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
          {segments.map((seg) => (
            <span
              key={seg.label}
              className={`inline-flex rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] ${seg.className}`}
            >
              {seg.label}
            </span>
          ))}
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
const BADGE_SEGMENT_FOREIGN = "bg-sky-100 text-sky-900";
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
            segments={[
              { label: "Younger (18–30)", className: BADGE_SEGMENT_YOUNGER },
              { label: "Silver (51+)", className: BADGE_SEGMENT_SILVER },
            ]}
            cardAccentClassName="border-l-[3px] border-l-amber-500"
            title="Hard time finding features, couldn&apos;t find what I wanted right after open; Don&apos;t know the next step"
            body="App Store reviews and interviews pointed to the same pattern on open: people still had to hunt for what they needed. Prize redemption, carrier binding, and settings sat under labels that read like ministry jargon, not tasks—and the first screen felt sparse next to everyday consumer apps, so lottery status, spending, and shortcuts did not show up where younger users expected. Reviews also described small type, dense screens, and no obvious next step—families stepped in to finish flows on someone else&apos;s phone. In sessions, older participants froze at ambiguous controls: without a clear next step, they worried about triggering the wrong action on an official app—so they slowed down or passed the phone to family. The sharpest pain was findability and uncertainty about what to tap next—not lack of motivation to use the service."
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
            segments={[
              { label: "Middle-aged (31–50)", className: BADGE_SEGMENT_MIDDLE },
            ]}
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
            segments={[
              {
                label: "Foreign resident",
                className: BADGE_SEGMENT_FOREIGN,
              },
            ]}
            cardAccentClassName="border-l-[3px] border-l-sky-500"
            title="Carrier binding and auto-transfer read as jargon without English or plain-language help"
            body="Without detailed explanations or an English interface, many foreign residents could not tell what carrier binding or automatic prize transfer settings were for—including that winnings can be deposited automatically. The labels assumed prior civic vocabulary, so the tasks sounded abstract instead of tied to daily shopping and payouts."
            quotes={[
              {
                quote:
                  "Participants who relied on English or mixed Chinese could follow the taps in a tutorial but still could not explain what carrier binding or auto-deposit did for them in real life—so they abandoned the settings or left prizes unclaimed.",
                quoteSource: "— Interview synthesis · foreign residents",
                quoteStyle: "synthesis",
              },
            ]}
          />
          <PainBlock
            badge="User pain"
            segments={[
              { label: "Low vision", className: BADGE_SEGMENT_LOW_VISION },
            ]}
            cardAccentClassName="border-l-[3px] border-l-emerald-500"
            title="Scan entry too small; no sound to confirm a scan landed"
            body="The original scan-invoice entry was easy to miss: even when people remembered where it lived, the control was too small to hit reliably. Scanning also gave no audio cue—so after aiming at a barcode, they could not tell whether the app had registered a successful scan."
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
