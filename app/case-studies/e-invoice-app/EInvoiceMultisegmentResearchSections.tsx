function PainBlock({
  badge,
  badgeClassName,
  title,
  body,
  quotes,
}: {
  badge: string;
  badgeClassName: string;
  title: string;
  body: string;
  quotes: {
    quote: string;
    quoteSource?: string;
    quoteStyle?: "review" | "synthesis";
  }[];
}) {
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
        {quotes.map((q, i) => {
          const quoteClasses =
            q.quoteStyle === "synthesis"
              ? "text-sm leading-relaxed text-zinc-400 sm:text-base"
              : "text-sm italic leading-relaxed text-zinc-400 sm:text-base";
          return (
            <figure
              key={i}
              className="border-l-2 border-amber-500/45 pl-4 pt-1"
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

const BADGE_INTERVIEW =
  "bg-emerald-500/12 text-emerald-200/95 ring-1 ring-emerald-500/25";

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
            badge="Interview signal · Younger (18–30)"
            badgeClassName={BADGE_INTERVIEW}
            title="UI felt too bare—couldn&apos;t see what I wanted right after open"
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
            badge="Interview signal · Middle-aged (31–50)"
            badgeClassName={BADGE_INTERVIEW}
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
            badge="Interview signal · Silver (51+)"
            badgeClassName={BADGE_INTERVIEW}
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
            badge="Interview signal · Low vision"
            badgeClassName={BADGE_INTERVIEW}
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

      {/* Shared truth */}
      <section className="rounded-2xl border border-emerald-500/30 bg-emerald-500/[0.08] p-6 sm:p-8 md:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-emerald-300/95">
          Shared truth
        </p>
        <h3 className="mt-4 max-w-4xl text-2xl font-semibold leading-snug tracking-tight text-zinc-50 sm:text-3xl sm:leading-snug">
          Everyone has the same entry behavior of showing the carrier barcode and
          scanning paper invoices.
        </h3>
        <div className="mt-6 rounded-2xl border border-zinc-700/80 bg-zinc-950/40 p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-amber-400/90">
            Conflict insights
          </p>
          <p className="mt-4 max-w-4xl text-base font-semibold leading-relaxed text-zinc-100 sm:text-lg">
            On the home screen, older and low-vision groups wanted fewer items, more
            whitespace, and vivid color for fast recognition—while younger groups
            wanted a denser dashboard—more modules, promos, and shortcuts—and a
            cooler, minimal palette. One layout; two incompatible defaults.
          </p>
        </div>
      </section>
    </div>
  );
}
