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
import { ImageLightbox } from "@/app/components/ImageLightbox";
import { SplitCapsuleLink } from "@/app/components/SplitCapsuleLink";

const MINA_HERO = "/case-studies/mina/mina-ai-hero.png";
const MINA_MOCKUP_HAND = "/case-studies/mina/mockup-hand-01.png";
/** Track A — dual listing flows art. `unoptimized` = serve PNG as-is (no Next re-encode). W/H must match file pixels (e.g. @3x from 1024×656pt → 3072×1968). */
const MINA_TRACK_A_FLOWS = "/case-studies/mina/track-a-listing-flows-full.png";
const MINA_TRACK_A_FLOWS_W = 1024;
const MINA_TRACK_A_FLOWS_H = 656;
const MINA_OPPORTUNITY_IMAGE = "/case-studies/mina/mina-event-opportunity.png";
const MINA_OPPORTUNITY_W = 1024;
const MINA_OPPORTUNITY_H = 907;
const MINA_MOCKUP_ISO = "/case-studies/mina/mockup-isometric-02.png";
const MINA_MOCKUP_SOFA = "/case-studies/mina/mockup-sofa-04.png";
const MINA_COPILOT_FLOW = "/case-studies/mina/parenting-copilot-flow.png";
/** Track B Copilot flow art. `unoptimized` on `<Image>` = PNG served as-is. W/H must match file pixels. */
const MINA_COPILOT_FLOW_W = 1024;
const MINA_COPILOT_FLOW_H = 428;

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
    value: "Sole",
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
                <SplitCapsuleLink
                  href={MINA_APP_STORE}
                  label="Mina · App Store (Canada)"
                  variant="mina"
                  target="_blank"
                  rel="noopener noreferrer"
                />
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
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:items-stretch">
              <div className="relative min-h-[min(88vw,480px)] w-full overflow-hidden rounded-xl sm:row-span-2 sm:min-h-[min(100%,640px)]">
                <ImageLightbox
                  src={MINA_MOCKUP_HAND}
                  alt="MINA Parenting Copilot on iPhone, held in hand against a light textured background"
                  className="absolute inset-0"
                  disableHoverScale
                >
                  <Image
                    src={MINA_MOCKUP_HAND}
                    alt="MINA Parenting Copilot on iPhone, held in hand against a light textured background"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </ImageLightbox>
              </div>
              <div className="overflow-hidden rounded-xl">
                <ImageLightbox
                  src={MINA_MOCKUP_ISO}
                  alt="MINA listing detail shown in an isometric iPhone mockup"
                  className="block w-full"
                  disableHoverScale
                >
                  <Image
                    src={MINA_MOCKUP_ISO}
                    alt="MINA listing detail shown in an isometric iPhone mockup"
                    width={1024}
                    height={576}
                    className="h-auto w-full object-cover"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </ImageLightbox>
              </div>
              <div className="overflow-hidden rounded-xl">
                <ImageLightbox
                  src={MINA_MOCKUP_SOFA}
                  alt="MINA review listing screen shown on iPhone mockup on a leather sofa"
                  className="block w-full"
                  disableHoverScale
                >
                  <Image
                    src={MINA_MOCKUP_SOFA}
                    alt="MINA review listing screen shown on iPhone mockup on a leather sofa"
                    width={1024}
                    height={576}
                    className="h-auto w-full object-cover"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </ImageLightbox>
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
                      Two create paths: single listing (photo-first sheet, fields
                      fill in as the model streams) vs. multiple listings (chat agent,
                      tags on the photo, modals per item—then one publish).
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
            <ImageLightbox
              src={MINA_OPPORTUNITY_IMAGE}
              alt="MINA IRL event: tabletop signage with PSA, register QR and perks, and tips; parents trying the app together"
              className="block w-full"
              disableHoverScale
            >
              <Image
                src={MINA_OPPORTUNITY_IMAGE}
                alt="MINA IRL event: tabletop signage with PSA, register QR and perks, and tips; parents trying the app together"
                width={MINA_OPPORTUNITY_W}
                height={MINA_OPPORTUNITY_H}
                className="h-auto w-full object-contain"
                sizes="(max-width: 1024px) 100vw, 768px"
              />
            </ImageLightbox>
          </div>
        </CaseStudyInViewSection>

        <CaseStudyInViewSection
          id="track-a-impact"
          className="scroll-mt-28 space-y-6 sm:scroll-mt-32"
        >
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            Track A · Business impact
          </span>
          <div className="min-w-0 space-y-8">
            <h2 className="max-w-3xl text-xl font-semibold leading-snug tracking-tight text-zinc-100 sm:text-2xl md:text-[1.65rem] md:leading-snug">
              I redesigned the listing flow end-to-end — completed listings up ~30%
              in a cohorted A/B.
            </h2>

            <div className="grid max-w-5xl gap-4 sm:grid-cols-2 sm:gap-5">
              <div className="flex flex-col gap-3 rounded-2xl border border-zinc-700/80 bg-zinc-900/50 p-5 sm:gap-3.5 sm:p-6">
                <p className="text-xs font-medium uppercase tracking-widest text-zinc-500">
                  System constraints
                </p>
                <p className="text-xs font-semibold uppercase leading-relaxed tracking-[0.08em] text-zinc-200 sm:text-sm">
                  No full-screen spinner. Parents see progress as latency does its
                  work.
                </p>
                <p className="text-sm leading-relaxed text-zinc-400 sm:text-[15px]">
                  <span className="font-semibold text-zinc-100">
                    AI-generated listings aren&apos;t instant—show staged progress,
                    not a spinner for users to stare and wait.
                  </span>
                </p>
              </div>
              <div className="flex flex-col gap-3 rounded-2xl border border-zinc-700/80 bg-zinc-900/50 p-5 sm:gap-3.5 sm:p-6">
                <p className="text-xs font-medium uppercase tracking-widest text-zinc-500">
                  Automation and user control balance
                </p>
                <p className="text-sm leading-relaxed text-zinc-300 sm:text-[15px]">
                  Preview-before-publish is trust-first for parents—and it mirrors
                  real server state: nothing ships until publish.
                </p>
              </div>
            </div>

            <div className="max-w-4xl w-full">
              <div className="w-full overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40">
                <ImageLightbox
                  src={MINA_TRACK_A_FLOWS}
                  alt="MINA: one photo to multiple listings—AI tags on image, review details per item, confirm to publish; one photo to a single listing—create listing screen with title and fields appearing progressively instead of a blocking spinner"
                  className="block w-full"
                  disableHoverScale
                >
                  <Image
                    src={MINA_TRACK_A_FLOWS}
                    alt="MINA: one photo to multiple listings—AI tags on image, review details per item, confirm to publish; one photo to a single listing—create listing screen with title and fields appearing progressively instead of a blocking spinner"
                    width={MINA_TRACK_A_FLOWS_W}
                    height={MINA_TRACK_A_FLOWS_H}
                    className="h-auto w-full object-contain"
                    unoptimized
                    sizes="(max-width: 640px) 100vw, min(896px, calc(100vw - 3rem))"
                  />
                </ImageLightbox>
              </div>
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
          <div className="min-w-0 space-y-5">
            <h2 className="max-w-3xl text-xl font-semibold leading-snug tracking-tight text-zinc-100 sm:text-2xl md:text-[1.65rem] md:leading-snug">
              Babies grow fast. The Copilot notices when a phase is ending and asks:
              ready to pass this along?
            </h2>
            <p className="max-w-3xl text-zinc-300 leading-relaxed">
              The copilot is a life-stage triggered circulation system: it helps
              parents notice when a phase is ending, what gear tends to matter next,
              and how to move items out kindly.
            </p>
            <div className="max-w-4xl w-full">
              <figure className="w-full overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40">
                <ImageLightbox
                  src={MINA_COPILOT_FLOW}
                  alt="Parenting Copilot flow: lock-screen stage nudge, in-app exploration stage and gear picks, what to expect next, then chat to request an item, MINA confirms, and pickup is scheduled with order details"
                  className="block w-full"
                  disableHoverScale
                >
                  <Image
                    src={MINA_COPILOT_FLOW}
                    alt="Parenting Copilot flow: lock-screen stage nudge, in-app exploration stage and gear picks, what to expect next, then chat to request an item, MINA confirms, and pickup is scheduled with order details"
                    width={MINA_COPILOT_FLOW_W}
                    height={MINA_COPILOT_FLOW_H}
                    className="h-auto w-full object-contain"
                    unoptimized
                    sizes="(max-width: 640px) 100vw, min(896px, calc(100vw - 3rem))"
                  />
                </ImageLightbox>
              </figure>
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
              engineers could follow two beats:{" "}
              <span className="text-zinc-100">single listing</span> (photo stays
              dominant; a sheet streams fields as the model catches up—no chat
              middleman) and{" "}
              <span className="text-zinc-100">multiple listings</span> (same photo,
              chat agent, on-image tags, modal detail per item, then batch publish).
              The goal was a differentiated story that still matched what multimodal
              models and moderation needed.
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
