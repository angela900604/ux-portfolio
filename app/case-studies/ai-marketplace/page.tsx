import Image from "next/image";
import Link from "next/link";
import {
  CaseStudyAtAGlance,
  CASE_STUDY_AT_A_GLANCE_DARK_HERO_PROPS,
} from "../_components/CaseStudyAtAGlance";
import {
  CaseStudyHeroTldr,
  type CaseStudyHeroTldrMetric,
} from "../_components/CaseStudyHeroTldr";
import { CaseStudyHeroFullBleed } from "../_components/CaseStudyHeroFullBleed";
import { CaseStudyInViewSection } from "../_components/CaseStudyInViewSection";
import { CaseStudyContentLayout } from "../_components/CaseStudyContentLayout";
import { DesignJourneyCollapsible } from "../_components/DesignJourneyCollapsible";
import { CaseStudyPrevNext } from "../_components/CaseStudyPrevNext";

const MINA_HERO = "/case-studies/mina/mina-ai-hero.png";
const MINA_MOCKUP_HAND = "/case-studies/mina/mockup-hand-01.png";
const MINA_MOCKUP_ISO = "/case-studies/mina/mockup-isometric-02.png";
const MINA_MOCKUP_SOFA = "/case-studies/mina/mockup-sofa-04.png";
const MINA_COPILOT_FLOW = "/case-studies/mina/parenting-copilot-flow.png";
/** Figma / component library handoff composite — fills frame below design system intro */
const MINA_COMPONENT_LIBRARY_COVER =
  "/case-studies/mina/component-library-cover.png";
/** Create-listing concepts: single (photo + tabs) vs. multi (agent + tag modals) */
const MINA_LISTING_FLOW_01 = "/case-studies/mina/listing-flow-01.png";
const MINA_LISTING_FLOW_02 = "/case-studies/mina/listing-flow-02.png";

/** Hero “3 demo” clip — WebM (smaller) then H.264 MP4; MOV fallback if a source fails. */
const MINA_THREE_DEMO_SOURCES = {
  webm: "/case-studies/mina/3-demo.webm",
  mp4: "/case-studies/mina/3-demo.mp4",
  movFallback: `/case-studies/mina/${encodeURIComponent("3 demo.mov")}`,
} as const;

/** Canada App Store — Mina - Resale for Parents */
const MINA_APP_STORE =
  "https://apps.apple.com/ca/app/mina-resale-for-parents/id6754006404";

const AT_A_GLANCE_ITEMS = [
  {
    label: "Timeline",
    value: "Sep 2025 – Present",
  },
  {
    label: "Role",
    value: "Sole product designer · 1 PM + 5 engineers",
  },
  {
    label: "Project type",
    value: "AI-native marketplace iOS app · 0→1 consumer product",
  },
  {
    label: "Focus",
    value:
      "Listing funnel, AI trust surfaces, design system, community-led growth",
  },
] as const;

const MINA_TLDR_METRICS: CaseStudyHeroTldrMetric[] = [
  {
    kicker: "Growth",
    value: "~30%",
    title: "Completed listings lift",
    detail:
      "PostHog cohorted A/B after listing funnel redesign. Defined success metrics with PM before shipping.",
  },
  {
    kicker: "Shipped",
    value: "50+",
    title: "0→1 design system (50+ components) + 3 major flows",
  },
  {
    kicker: "Team",
    value: "Sole designer",
    title: "Product design",
    detail: "1 PM + 5 engineers — end-to-end UX on iOS.",
  },
];

const MINA_JOURNEY_IDS = ["engineering-proposal", "design-principles"] as const;

export const metadata = {
  title:
    "MINA · Community-first AI marketplace for parents — impact, trust & design system | Angela Yang",
  description:
    "Sole designer on MINA (iOS): community-driven marketplace for SF parents—growth-focused listing funnel (~30% completed listings lift, PostHog cohorted A/B), share-friendly listing paths, in-person community events, Parenting Copilot for circulation; AI trust, 50+ component system.",
};

export default function AiMarketplaceCaseStudy() {
  return (
    <article className="min-h-screen bg-zinc-950 text-zinc-100">
      <header className="border-b border-zinc-800">
        <CaseStudyHeroFullBleed
          imageSrc={MINA_HERO}
          imageAlt="MINA app showcase: AI-assisted buyer chat, marketplace home with picks and events, and community events"
          imageClassName="object-cover object-[center_45%]"
          eyebrow={
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-full border border-emerald-400/45 bg-emerald-500/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-emerald-100">
                Live product
              </span>
              <span className="inline-flex items-center rounded-full border border-amber-400/45 bg-amber-500/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-amber-50">
                Ongoing
              </span>
              <span className="text-xs uppercase tracking-widest text-white/70">
                Case study · AI marketplace · Zero to one
              </span>
            </div>
          }
          title={
            <h1 className="mt-5 max-w-4xl text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
              MINA — an AI-native marketplace for parents who outgrow baby gear
              overnight
            </h1>
          }
          subtitle={
            <p className="text-lg leading-relaxed text-zinc-200 sm:text-xl">
              A community flywheel for SF parents: IRL events, shareable listings,
              and an AI Copilot that moves gear through the circles people already
              trust.
            </p>
          }
          leadBelowSubtitle={
            <div className="space-y-6">
              <CaseStudyAtAGlance
                items={AT_A_GLANCE_ITEMS}
                {...CASE_STUDY_AT_A_GLANCE_DARK_HERO_PROPS}
                noAccentGridClassName="grid w-full min-w-0 grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8 [&>div]:min-w-0"
              />
              <div className="max-w-3xl">
                <a
                  href={MINA_APP_STORE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-400 px-7 py-3.5 text-base font-semibold text-zinc-950 shadow-[0_12px_40px_-12px_rgba(52,211,153,0.55)] ring-1 ring-white/15 transition hover:bg-emerald-300 hover:shadow-[0_14px_44px_-12px_rgba(52,211,153,0.6)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-200"
                >
                  Mina · App Store (Canada)
                  <span aria-hidden className="text-lg leading-none">
                    →
                  </span>
                </a>
              </div>
            </div>
          }
        >
          <figure className="mb-8 w-full min-w-0">
            <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-zinc-800/80 bg-black shadow-[0_20px_50px_-20px_rgba(0,0,0,0.65)]">
              <video
                className="absolute inset-0 h-full w-full object-cover object-center"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                aria-label="MINA app demo: three flows screen recording."
              >
                <source src={MINA_THREE_DEMO_SOURCES.webm} type="video/webm" />
                <source src={MINA_THREE_DEMO_SOURCES.mp4} type="video/mp4" />
                <source
                  src={MINA_THREE_DEMO_SOURCES.movFallback}
                  type="video/quicktime"
                />
              </video>
            </div>
          </figure>

          <section>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="overflow-hidden rounded-xl sm:row-span-2">
                <Image
                  src={MINA_MOCKUP_HAND}
                  alt="MINA Parenting Copilot on iPhone, held in hand against a light textured background"
                  width={720}
                  height={1024}
                  className="h-auto w-full object-cover"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
              <div className="overflow-hidden rounded-xl">
                <Image
                  src={MINA_MOCKUP_ISO}
                  alt="MINA listing detail shown in an isometric iPhone mockup"
                  width={1024}
                  height={576}
                  className="h-auto w-full object-cover"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
              <div className="overflow-hidden rounded-xl">
                <Image
                  src={MINA_MOCKUP_SOFA}
                  alt="MINA review listing screen shown on iPhone mockup on a leather sofa"
                  width={1024}
                  height={576}
                  className="h-auto w-full object-cover"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
            </div>
          </section>

          <div className="mt-10">
            <CaseStudyHeroTldr
              headline={
                <>
                  Sole designer on MINA — AI-native marketplace for parents ·
                  Listing funnel, trust-first surfaces, and system work · iOS live
                  in Canada
                </>
              }
              metrics={MINA_TLDR_METRICS}
            />
          </div>
        </CaseStudyHeroFullBleed>
      </header>

      <CaseStudyContentLayout>
        <CaseStudyInViewSection
          id="context"
          className="scroll-mt-28 space-y-6 sm:scroll-mt-32 sm:space-y-8"
        >
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            Opportunity
          </span>
          <div className="max-w-3xl space-y-8">
            <div className="space-y-3">
              <h2 className="text-xl font-semibold leading-snug tracking-tight text-zinc-100 sm:text-2xl md:text-[1.65rem] md:leading-snug">
                No moms wants to list 47 baby items one by one.
              </h2>
              <p className="text-zinc-300 leading-relaxed">
                SF moms in tight spaces cycle through baby gear every few months.
                They knew about Facebook Marketplace. They just couldn&apos;t
                face creating listings one by one for a bag full of onesies.
              </p>
            </div>
            <div className="grid items-stretch gap-4 lg:max-w-none lg:grid-cols-[1fr_auto_1fr] lg:gap-6">
              <div className="rounded-2xl border border-zinc-800/80 bg-zinc-900/45 p-5 sm:p-6">
                <span className="inline-flex rounded-full border border-amber-300/60 bg-amber-400/20 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-amber-100">
                  The insight
                </span>
                <p
                  className="mt-4"
                  style={{
                    fontSize: "13px",
                    color: "rgba(255,255,255,0.5)",
                    marginBottom: "16px",
                  }}
                >
                  Three ways parents want to move gear showed up in early
                  conversations.
                </p>
                <div className="flex items-center mb-[10px]">
                  <span
                    style={{
                      border: "1px solid #C8A84B",
                      borderRadius: "20px",
                      padding: "5px 14px",
                      fontSize: "16px",
                      fontWeight: 600,
                      display: "inline-block",
                      color: "#C8A84B",
                    }}
                  >
                    List fast
                  </span>
                  <span
                    style={{
                      fontSize: "22px",
                      fontWeight: 500,
                      color: "rgba(255,255,255,0.7)",
                      marginLeft: "14px",
                    }}
                  >
                    wants listings without form grind
                  </span>
                </div>
                <div className="flex items-center mb-[10px]">
                  <span
                    style={{
                      border: "1px solid rgba(255,255,255,0.25)",
                      borderRadius: "20px",
                      padding: "5px 14px",
                      fontSize: "16px",
                      fontWeight: 600,
                      display: "inline-block",
                      color: "rgba(255,255,255,0.6)",
                    }}
                  >
                    Sell fast
                  </span>
                  <span
                    style={{
                      fontSize: "22px",
                      fontWeight: 500,
                      color: "rgba(255,255,255,0.7)",
                      marginLeft: "14px",
                    }}
                  >
                    wants timely picks as baby stages change
                  </span>
                </div>
                <div className="flex items-center mb-[10px]">
                  <span
                    style={{
                      border: "1px solid rgba(255,255,255,0.25)",
                      borderRadius: "20px",
                      padding: "5px 14px",
                      fontSize: "16px",
                      fontWeight: 600,
                      display: "inline-block",
                      color: "rgba(255,255,255,0.6)",
                    }}
                  >
                    Giveaway free fast
                  </span>
                  <span
                    style={{
                      fontSize: "22px",
                      fontWeight: 500,
                      color: "rgba(255,255,255,0.7)",
                      marginLeft: "14px",
                    }}
                  >
                    big IRL drop-off + perks as return
                  </span>
                </div>
              </div>
              <div className="hidden items-center justify-center lg:flex" aria-hidden>
                <span className="text-3xl font-semibold text-zinc-500">→</span>
              </div>
              <div className="rounded-2xl border border-zinc-800/80 bg-zinc-900/45 p-5 sm:p-6">
                <span className="inline-flex rounded-full border border-emerald-300/60 bg-emerald-400/20 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-emerald-100">
                  The design response
                </span>
                <div className="mt-4">
                  <div>
                    <p
                      style={{
                        fontSize: "11px",
                        color: "rgba(255,255,255,0.35)",
                        marginBottom: "3px",
                      }}
                    >
                      List fast
                    </p>
                    <p
                      style={{
                        fontSize: "24px",
                        fontWeight: 600,
                        color: "#F0F0F0",
                      }}
                    >
                      One photo — single vs. multi paths split up front; tabs and
                      progressive detail instead of staring at a spinner.
                    </p>
                  </div>
                  <div
                    style={{
                      borderTop: "1px solid rgba(255,255,255,0.07)",
                      paddingTop: "12px",
                      marginTop: "12px",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "11px",
                        color: "rgba(255,255,255,0.35)",
                        marginBottom: "3px",
                      }}
                    >
                      Sell fast
                    </p>
                    <p
                      style={{
                        fontSize: "24px",
                        fontWeight: 600,
                        color: "#F0F0F0",
                      }}
                    >
                      Parenting Copilot nudges buyers when their baby enters a new
                      phase and surfaces the gear they&apos;ll need next.
                    </p>
                  </div>
                  <div
                    style={{
                      borderTop: "1px solid rgba(255,255,255,0.07)",
                      paddingTop: "12px",
                      marginTop: "12px",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "11px",
                        color: "rgba(255,255,255,0.35)",
                        marginBottom: "3px",
                      }}
                    >
                      Giveaway free fast
                    </p>
                    <p
                      style={{
                        fontSize: "24px",
                        fontWeight: 600,
                        color: "#F0F0F0",
                      }}
                    >
                      MINA Circle — claim free items.
                    </p>
                    <p
                      style={{
                        fontSize: "15px",
                        fontWeight: 500,
                        color: "rgba(255,255,255,0.5)",
                        marginTop: "10px",
                        lineHeight: 1.45,
                      }}
                    >
                      At offline events, parents can donate a big bag of baby gear
                      and get return value through event partner perks and coupons.
                    </p>
                  </div>
                  <p
                    style={{
                      fontSize: "12px",
                      color: "rgba(255,255,255,0.35)",
                      marginTop: "16px",
                      fontStyle: "italic",
                    }}
                  >
                    The AI removes the admin. The community provides the motivation.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 max-w-3xl overflow-hidden rounded-xl border border-zinc-800/50 bg-zinc-900/40">
            <Image
              src="/case-studies/mina/community-collage.jpg"
              alt="MINA community event: signage, parents trying the app, and team at a local gathering"
              width={768}
              height={1024}
              className="h-auto w-full object-contain"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>
        </CaseStudyInViewSection>

        <CaseStudyInViewSection
          id="track-a-impact"
          className="scroll-mt-28 space-y-6 sm:scroll-mt-32"
        >
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            Track A · Business impact
          </span>
          <div className="max-w-3xl space-y-4">
            <h2 className="text-xl font-semibold leading-snug tracking-tight text-zinc-100 sm:text-2xl md:text-[1.65rem] md:leading-snug">
              I redesigned the listing flow end-to-end — completed listings up ~30%
              in a cohorted A/B.
            </h2>
            <p className="text-zinc-300 leading-relaxed">
              Posting one item on Facebook Marketplace takes 10 minutes. Posting a
              bag of baby gear takes all afternoon.
            </p>
            <div className="space-y-4 text-zinc-300 leading-relaxed">
              <p>
                The create-listing experience now{" "}
                <span className="text-zinc-100">
                  separates single-item and multi-item paths at the start
                </span>
                —each tuned to how long generation takes and how much conversation
                parents need.
              </p>
              <p>
                <span className="text-zinc-100">Single listing</span> drops the chat
                agent. It&apos;s a{" "}
                <span className="text-zinc-100">photo-first layout with tabs</span>:
                listing details appear as they&apos;re generated so users aren&apos;t
                stuck watching a spinner while the model catches up.
              </p>
              <p>
                <span className="text-zinc-100">Multiple listings</span> keep the{" "}
                <span className="text-zinc-100">conversational agent</span>. Tapping a
                tag opens a modal with that item&apos;s draft; after everything looks
                right, a single &quot;ready to publish&quot; beat hands off to ship.
              </p>
              <p>
                <span className="text-zinc-100">Zip code and meetup preference</span>{" "}
                belong in account setup—I&apos;d guide people through them in
                onboarding so listings don&apos;t re-litigate logistics every time.
                If life changes, they adjust once in Settings.
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:gap-5">
            <figure className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40">
              <Image
                src={MINA_LISTING_FLOW_01}
                alt="MINA create listing — single-item style flow: photo focus with tabs as AI fills listing details progressively"
                width={1024}
                height={1024}
                className="h-auto w-full object-cover"
                sizes="(max-width: 640px) 100vw, 50vw"
                unoptimized
              />
            </figure>
            <figure className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40">
              <Image
                src={MINA_LISTING_FLOW_02}
                alt="MINA create listing — multi-item agent flow: conversational UI with tag-driven listing detail modals before publish"
                width={1024}
                height={1024}
                className="h-auto w-full object-cover"
                sizes="(max-width: 640px) 100vw, 50vw"
                unoptimized
              />
            </figure>
          </div>

          <div
            id="ai-trust"
            className="scroll-mt-28 space-y-4 pt-4 sm:scroll-mt-32 sm:pt-6"
          >
            <div className="rounded-2xl border border-[#B75E45]/50 bg-[#B75E45]/18 p-6 sm:p-8">
              <span className="text-xs font-medium uppercase tracking-widest text-[#E8A995]">
                Trust &amp; control
              </span>
              <h3 className="mt-3 text-xl font-semibold leading-snug tracking-tight text-zinc-50 sm:text-2xl md:text-[1.65rem] md:leading-snug">
                Preview before publish, explicit confirmations, and reversibility—so
                parents always know what the AI did
              </h3>
              <p className="mt-4 text-zinc-300 leading-relaxed">
                Parents are right to worry about{" "}
                <span className="text-zinc-100">automation anxiety</span>
                —loss of control, unclear system behavior, and mistakes that are
                hard to undo. That shows up in marketplaces as “did the AI publish
                the wrong price?” or “did it message someone for me without asking?”
              </p>
              <p className="mt-4 text-zinc-300 leading-relaxed">
                I designed for{" "}
                <span className="text-zinc-100">
                  preview before publish, explicit confirmations, and reversibility
                </span>
                : users see drafts, approve boundaries, and understand what the
                system did on their behalf.
              </p>
            </div>
          </div>
        </CaseStudyInViewSection>

        <CaseStudyInViewSection
          id="track-b-copilot"
          className="scroll-mt-28 space-y-5 sm:scroll-mt-32"
        >
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            Track B · AI depth
          </span>
          <h2 className="max-w-3xl text-xl font-semibold leading-snug tracking-tight text-zinc-100 sm:text-2xl md:text-[1.65rem] md:leading-snug">
            Babies grow fast. The Copilot notices when a phase is ending and asks:
            ready to pass this along?
          </h2>
          <p className="max-w-3xl text-zinc-300 leading-relaxed">
            The copilot is a life-stage triggered circulation system: it helps
            parents notice when a phase is ending, what gear tends to matter next,
            and how to move items out kindly.
          </p>
          <figure className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40">
            <Image
              src={MINA_COPILOT_FLOW}
              alt="Parenting Copilot flow from trigger notification to conversational recommendations and one-tap handoff to listing intent"
              width={1024}
              height={576}
              className="h-auto w-full object-cover"
              sizes="(max-width: 1200px) 100vw, 1152px"
            />
          </figure>

          <div
            id="mina-ai-api-ux"
            className="scroll-mt-28 space-y-5 border-t border-zinc-800/90 pt-8 sm:scroll-mt-32 sm:pt-10"
          >
            <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
              System constraints
            </span>
            <h3 className="max-w-3xl text-lg font-semibold leading-snug tracking-tight text-zinc-100 sm:text-xl md:text-[1.35rem] md:leading-snug">
              How listing AI and Copilot UX bridge real API behavior—not just
              feature copy
            </h3>
            <div className="grid gap-4 md:grid-cols-2 md:gap-5">
              <div className="rounded-2xl border border-zinc-800/90 bg-zinc-900/45 p-6 sm:p-7">
                <p className="text-sm leading-relaxed text-zinc-300 sm:text-base">
                  <span className="font-medium text-zinc-100">
                    AI-generated listings aren&apos;t instant.
                  </span>{" "}
                  Model latency varies, so I designed around multi-turn disclosure
                  and partial drafts—parents always see forward progress instead of a
                  blocking spinner that implies instant completion. Engineering
                  could stream or chunk responses without the UI lying about
                  readiness.
                </p>
              </div>
              <div className="rounded-2xl border border-zinc-800/90 bg-zinc-900/45 p-6 sm:p-7">
                <p className="text-sm leading-relaxed text-zinc-300 sm:text-base">
                  <span className="font-medium text-zinc-100">
                    Preview-before-publish is trust-first for parents
                  </span>
                  —but it also matches how the team wanted to treat server state:
                  drafts stay explicit until a publish action, which simplifies
                  rollback and moderation hooks when the model mis-labels price or
                  condition.
                </p>
              </div>
            </div>
          </div>
        </CaseStudyInViewSection>

        <CaseStudyInViewSection
          id="design-system"
          className="scroll-mt-28 space-y-4 sm:scroll-mt-32"
        >
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            Design system
          </span>
          <h2 className="max-w-3xl text-xl font-semibold leading-snug tracking-tight text-zinc-100 sm:text-2xl md:text-[1.65rem] md:leading-snug">
            50+ components so engineering could move without redesigning atoms
          </h2>
          <p className="max-w-3xl text-zinc-300 leading-relaxed">
            I owned the{" "}
            <span className="text-zinc-100">Figma library and patterns</span> for
            navigation, listings, chat, AI surfaces, and forms—enough coverage
            that new screens composed from documented pieces instead of one-offs.
            That mattered because we were shipping{" "}
            <span className="text-zinc-100">three major flows in parallel</span>{" "}
            with a small eng team. Named variants, spacing, and component props in
            Figma mirrored how iOS consumed them—so devs could pull a cell, a
            chat bubble, or a CTA stack without a bespoke spec each time.
          </p>
          <figure className="relative aspect-[1024/633] w-full max-w-none overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/50 shadow-[0_0_0_1px_rgba(255,255,255,0.04)_inset]">
            <Image
              src={MINA_COMPONENT_LIBRARY_COVER}
              alt="MINA design system handoff: component library overview, tokens, and UI patterns for engineering"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1280px) 100vw, 1280px"
              unoptimized
              priority={false}
            />
          </figure>
          <div className="w-full max-w-3xl space-y-3">
            <div className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/50 shadow-[0_0_0_1px_rgba(255,255,255,0.04)_inset]">
              <iframe
                title="MINA UI component library portfolio (HTML)"
                src="/case-studies/mina/ui_component_library_portfolio.html"
                className="block h-[min(88vh,1100px)] w-full border-0 bg-[#F8EFEC]"
                loading="lazy"
              />
            </div>
          </div>
        </CaseStudyInViewSection>

        <DesignJourneyCollapsible
          journeySectionIds={MINA_JOURNEY_IDS}
          panelId="mina-design-journey-panel"
        >
          <CaseStudyInViewSection
            id="engineering-proposal"
            className="scroll-mt-28 space-y-5 sm:scroll-mt-32"
          >
            <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
              Proposal &amp; alignment
            </span>
            <h2 className="text-zinc-100">
              An innovative create-listing flow—and how we stress-tested it with
              engineering
            </h2>
            <p className="text-zinc-300 leading-relaxed">
              Our co-founder emphasized that{" "}
              <span className="text-zinc-100">
                investors care about measurable upside and how clearly the product
                stands out
              </span>
              . To ground that story, I audited{" "}
              <span className="text-zinc-100">
                create-listing flows across mainstream marketplace apps
              </span>
              . None of them centered on a{" "}
              <span className="text-zinc-100">chat-native agent</span> for listing
              creation—most still feel like long forms and category pickers. That
              gap became the wedge I wanted to spell out for the team.
            </p>
            <p className="text-zinc-300 leading-relaxed">
              I translated the direction into{" "}
              <span className="text-zinc-100">mockups and a page flow</span> so
              engineers could follow the narrative: users choose{" "}
              <span className="text-zinc-100">single vs. multiple listings</span> up
              front. One path is{" "}
              <span className="text-zinc-100">
                photo + tabs—details stream in as the model generates
              </span>
              ; the other keeps a{" "}
              <span className="text-zinc-100">
                chat agent with tags and modals per item
              </span>{" "}
              before a final publish. Logistics fields like zip and meetup preference
              sit in onboarding / Settings so the listing flow doesn&apos;t repeat
              them. The goal was a differentiated story that still matched model
              latency and trust constraints.
            </p>
            <p className="text-zinc-300 leading-relaxed">
              Engineers pushed back on feasibility:{" "}
              <span className="text-zinc-100">
                one image alone may not carry enough signal for full listing quality
              </span>
              . I folded that into the flow by adding an explicit beat where the
              agent{" "}
              <span className="text-zinc-100">
                asks the user to upload additional photos
              </span>{" "}
              when detail is thin—so the experience stays ambitious but honest about
              what multimodal models need.
            </p>
            <p className="text-zinc-300 leading-relaxed">
              Beyond the selling agent, I also sketched how MINA could grow into
              adjacent agents: one that{" "}
              <span className="text-zinc-100">
                helps coordinate buyers and sellers
              </span>{" "}
              (status, timing, handoff), and a{" "}
              <span className="text-zinc-100">parenting copilot</span> that nudges
              parents through developmental phases—what stage the baby is entering
              and what gear tends to matter—so the app feels useful even between
              transactions.
            </p>
            <p className="text-zinc-300 leading-relaxed">
              The team raised a fair concern: promoting{" "}
              <span className="text-zinc-100">several different AI chat agents</span>{" "}
              could confuse users on the surface and multiply complexity in the
              backend model layer. My counter was directional:{" "}
              <span className="text-zinc-100">
                if each agent has a clearly separated entry point in the product,
                can we also treat the underlying models or orchestration as
                separate lanes—so the UX stays legible and the stack does not
                collapse into one overloaded generalist?
              </span>{" "}
              That question stays open; it is part of the ongoing design–engineering
              trade space as we narrow MVP scope.
            </p>
          </CaseStudyInViewSection>

          <CaseStudyInViewSection
            id="design-principles"
            className="scroll-mt-28 space-y-4 sm:scroll-mt-32"
          >
            <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
              Design principles (draft)
            </span>
            <h2 className="text-zinc-100">
              Trust, speed, and parent-grade clarity
            </h2>
            <ul className="space-y-3 text-zinc-300 leading-relaxed list-none">
              <li className="flex gap-3">
                <span className="text-violet-400 font-semibold shrink-0">01</span>
                <span>
                  <span className="text-zinc-100">Preview before publish</span> —
                  AI drafts are always visible and editable; nothing ships silently.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-violet-400 font-semibold shrink-0">02</span>
                <span>
                  <span className="text-zinc-100">Local-first language</span> —
                  copy and defaults tuned for SF pickup reality (density, transit,
                  weather).
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-violet-400 font-semibold shrink-0">03</span>
                <span>
                  <span className="text-zinc-100">Quiet automation</span> — the
                  agent reduces coordination noise without hiding who is on the
                  other side of a transaction.
                </span>
              </li>
            </ul>
          </CaseStudyInViewSection>
        </DesignJourneyCollapsible>

        <CaseStudyInViewSection className="border-t border-zinc-800 pt-12 space-y-8">
          <CaseStudyPrevNext currentSlug="ai-marketplace" />
          <Link
            href="/"
            className="text-sm font-medium text-zinc-400 hover:text-zinc-100 transition"
          >
            ← Back to work
          </Link>
        </CaseStudyInViewSection>
      </CaseStudyContentLayout>
    </article>
  );
}
