"use client";

import { useId, useState } from "react";

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
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <div className="rounded-2xl border border-zinc-800/90 bg-zinc-900/35 p-6 sm:p-8">
      <div className="min-w-0 max-w-3xl">
        <span
          className={`inline-flex rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] ${badgeClassName}`}
        >
          {badge}
        </span>
        <h4 className="mt-4 text-xl font-semibold tracking-tight text-zinc-100 sm:text-2xl">
          {title}
        </h4>
        <button
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((v) => !v)}
          className="mt-5 flex items-center gap-2 text-sm font-semibold text-emerald-400 transition hover:text-emerald-300"
        >
          <span>{open ? "View less" : "View more"}</span>
          <span
            aria-hidden
            className={`inline-flex transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-current"
            >
              <path
                d="M4 6l4 4 4-4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </button>
        <div
          id={panelId}
          role="region"
          aria-label="Additional detail"
          hidden={!open}
          className={
            open
              ? "mt-5 space-y-4 border-t border-zinc-800/80 pt-5"
              : "hidden"
          }
        >
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
    </div>
  );
}

const BADGE_USER_PAIN =
  "bg-rose-500/12 text-rose-200/95 ring-1 ring-rose-500/30";

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
            badge="User pain · Younger (18–30)"
            badgeClassName={BADGE_USER_PAIN}
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
            badge="User pain · Middle-aged (31–50)"
            badgeClassName={BADGE_USER_PAIN}
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
            badge="User pain · Silver (51+)"
            badgeClassName={BADGE_USER_PAIN}
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
            badge="User pain · Low vision"
            badgeClassName={BADGE_USER_PAIN}
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

      {/* Shared truth + conflict insights — sibling cards */}
      <section className="grid gap-4 sm:gap-5 lg:grid-cols-2 lg:gap-6">
        <div className="flex min-h-0 flex-col rounded-2xl border border-emerald-500/30 bg-emerald-500/[0.08] p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-emerald-300/95">
            Shared truth
          </p>
          <p className="mt-4 text-lg font-semibold leading-relaxed text-zinc-50 sm:text-xl">
            Everyone has the same entry behavior of showing the carrier barcode and
            scanning paper invoices.
          </p>
        </div>
        <div className="flex min-h-0 flex-col rounded-2xl border border-amber-500/35 bg-amber-500/[0.08] p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-amber-300/90">
            Conflict insights
          </p>
          <p className="mt-4 text-lg font-semibold leading-relaxed text-zinc-100 sm:text-xl">
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
