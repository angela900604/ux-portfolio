import type { CSSProperties } from "react";
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
import { CaseStudyPrevNext } from "../_components/CaseStudyPrevNext";
import { ImageLightbox } from "@/app/components/ImageLightbox";
import { SplitCapsuleLink } from "@/app/components/SplitCapsuleLink";
import { SITE_GUTTER_CLASS } from "@/lib/site-shell";

const MINA_HERO = "/case-studies/mina/mina-ai-hero.png";
const MINA_MOCKUP_HAND = "/case-studies/mina/mockup-hand-01.png";
/** Selling agent — `selling agent.png` in public. Intrinsic px must match file on disk. */
const MINA_SELLING_AGENT = `/case-studies/mina/${encodeURIComponent("selling agent.png")}`;
const MINA_SELLING_AGENT_W = 2113;
const MINA_SELLING_AGENT_H = 903;
const MINA_OPPORTUNITY_IMAGE = "/case-studies/mina/mina-event-opportunity.png";
const MINA_OPPORTUNITY_W = 1024;
const MINA_OPPORTUNITY_H = 907;
const MINA_MOCKUP_ISO = "/case-studies/mina/mockup-isometric-02.png";
const MINA_MOCKUP_SOFA = "/case-studies/mina/mockup-sofa-04.png";
/** Track B — `track b.png` in public. Intrinsic px must match file on disk. */
const MINA_COPILOT_FLOW = `/case-studies/mina/${encodeURIComponent("track b.png")}`;
const MINA_COPILOT_FLOW_W = 7680;
const MINA_COPILOT_FLOW_H = 3212;
/** Create-listing evolution — workaround vs one-photo multi-listing mocks. */
const MINA_CREATE_FLOW_WORKAROUND = "/case-studies/mina/mina-create-flow-workaround.png";
const MINA_CREATE_FLOW_WORKAROUND_W = 423;
const MINA_CREATE_FLOW_WORKAROUND_H = 860;
const MINA_CREATE_FLOW_ONE_PHOTO_MULTI =
  "/case-studies/mina/mina-create-flow-one-photo-multi.png";
const MINA_CREATE_FLOW_ONE_PHOTO_MULTI_W = 423;
const MINA_CREATE_FLOW_ONE_PHOTO_MULTI_H = 860;

/**
 * Hero screen recording (`herovideo.mov` → MP4 stream-copy + VP9 WebM). MP4 first in `<video>`
 * so Chrome/Firefox prefer H.264. Intrinsic px must match exported file.
 */
const MINA_HERO_VID_W = 1576;
const MINA_HERO_VID_H = 814;
const MINA_HERO_VID_SOURCES = {
  mp4: "/case-studies/mina/herovideo.mp4",
  webm: "/case-studies/mina/herovideo.webm",
} as const;

/** Canada App Store — Mina - Resale for Parents */
const MINA_APP_STORE =
  "https://apps.apple.com/ca/app/mina-resale-for-parents/id6754006404";

/** Translucent terracotta panels — quote banner + selling-agent constraint cards */
const MINA_TERRACOTTA_SURFACE: CSSProperties = {
  backgroundColor: "rgba(180, 80, 55, 0.18)",
  border: "0.5px solid rgba(200, 100, 70, 0.3)",
};

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
            <div
              className="relative w-full min-h-0 overflow-hidden rounded-xl border border-zinc-800/80 bg-black shadow-[0_20px_50px_-20px_rgba(0,0,0,0.65)]"
              style={{ aspectRatio: `${MINA_HERO_VID_W} / ${MINA_HERO_VID_H}` }}
            >
              <video
                className="absolute inset-0 h-full w-full min-h-0 min-w-0 rounded-[inherit] object-contain object-center"
                width={MINA_HERO_VID_W}
                height={MINA_HERO_VID_H}
                poster={MINA_HERO}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                aria-label="MINA hero: three iPhone flows—Parenting Copilot, create listing with AI tags, and offer flow."
              >
                <source src={MINA_HERO_VID_SOURCES.mp4} type="video/mp4" />
                <source src={MINA_HERO_VID_SOURCES.webm} type="video/webm" />
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
                  Listing funnel, trust-first surfaces, and system work
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
            <div className="max-w-3xl">
              <div className="rounded-2xl border border-zinc-800/80 bg-zinc-900/45 p-5 sm:p-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-zinc-500">
                  The insight
                </p>
                <p className="mt-4 text-sm leading-relaxed text-zinc-400 sm:text-[15px]">
                  Three ways parents want to move gear came up in early
                  conversations.
                </p>
                <div className="mt-4 flex flex-wrap items-baseline gap-x-3 gap-y-2 border-b border-zinc-800/80 pb-4">
                  <span className="rounded-full border border-amber-400/70 bg-amber-500/10 px-3.5 py-1 text-sm font-semibold text-amber-200">
                    List fast
                  </span>
                  <span className="text-lg font-medium leading-snug text-zinc-200 sm:text-xl">
                    Wants to bulk-list items without filling out a separate form
                    for each one
                  </span>
                </div>
                <div className="mt-4 flex flex-wrap items-baseline gap-x-3 gap-y-2 border-b border-zinc-800/80 pb-4">
                  <span className="rounded-full border border-amber-400/70 bg-amber-500/10 px-3.5 py-1 text-sm font-semibold text-amber-200">
                    Sell fast
                  </span>
                  <span className="text-lg font-medium leading-snug text-zinc-200 sm:text-xl">
                    Wants items gone before the baby outgrows them — timing matters
                    more than price
                  </span>
                </div>
                <div className="mt-4 flex flex-wrap items-baseline gap-x-3 gap-y-2">
                  <span className="rounded-full border border-amber-400/70 bg-amber-500/10 px-3.5 py-1 text-sm font-semibold text-amber-200">
                    Giveaway free fast
                  </span>
                  <span className="text-lg font-medium leading-snug text-zinc-200 sm:text-xl">
                    Just wants to drop off a black garbage bag and be done with it —
                    no listings, no chats
                  </span>
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
          <div className="mt-8 max-w-3xl rounded-2xl border border-zinc-800/80 bg-zinc-900/45 p-5 sm:p-6">
            <span className="inline-flex rounded-full border border-emerald-300/60 bg-emerald-400/20 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-emerald-100">
              The design response
            </span>
            <p className="mt-4 text-sm leading-relaxed text-zinc-300 sm:text-[15px]">
              Each path uses{" "}
              <span className="font-semibold text-zinc-100">AI where it helps</span>{" "}
              — removing admin work while keeping parents in control of what publishes.
            </p>
            <div className="mt-6 overflow-hidden rounded-xl border border-zinc-800 bg-black">
              <div className="divide-y divide-zinc-800">
                <div className="px-5 py-6 sm:px-6 sm:py-8">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-500">
                    List fast
                  </p>
                  <p className="mt-2 text-lg font-semibold leading-snug text-white sm:text-xl">
                    Selling Agent — one photo, multiple listings.
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-400 sm:text-[15px]">
                    Take one photo and the agent generates all your listings at once.
                    No forms, no repetition — review and publish in one go.
                  </p>
                </div>
                <div className="px-5 py-6 sm:px-6 sm:py-8">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-500">
                    Sell fast
                  </p>
                  <p className="mt-2 text-lg font-semibold leading-snug text-white sm:text-xl">
                    Parenting Copilot nudges buyers when their baby enters a new phase
                    and surfaces the gear they&apos;ll need next.
                  </p>
                </div>
                <div className="px-5 py-6 sm:px-6 sm:py-8">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-500">
                    Giveaway free fast
                  </p>
                  <p className="mt-2 text-lg font-semibold leading-snug text-white sm:text-xl">
                    MINA Circle — claim free donated items.
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-400 sm:text-[15px]">
                    At offline events, parents drop off a bag of gear and walk away
                    with partner discount coupons. No listings, no chat threads —
                    just done.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CaseStudyInViewSection>

        <section
          className="relative left-1/2 w-screen max-w-[100vw] -translate-x-1/2 py-6 sm:py-8 md:py-10"
          aria-label="Principle: AI and community"
        >
          <div
            className={`w-full py-8 sm:py-10 md:py-12 ${SITE_GUTTER_CLASS}`}
            style={MINA_TERRACOTTA_SURFACE}
          >
            <p
              className="text-center text-[clamp(1.5rem,4vw,3.25rem)] font-medium italic leading-[1.12] tracking-tight text-[#f0e8e4]"
              style={{ fontFamily: "Georgia, serif" }}
            >
              &ldquo;The AI removes the admin. The community provides the
              motivation.&rdquo;
            </p>
          </div>
        </section>

        <CaseStudyInViewSection
          id="selling-agent"
          className="scroll-mt-28 space-y-6 sm:scroll-mt-32"
        >
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            Selling agent
          </span>
          <div className="min-w-0 space-y-8">
            <h2 className="max-w-3xl text-xl font-semibold leading-snug tracking-tight text-zinc-100 sm:text-2xl md:text-[1.65rem] md:leading-snug">
              The redesign of the create listing flow enhanced completed listings by
              up to 30%.
            </h2>

            <div className="max-w-4xl w-full">
              <div className="w-full overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40">
                <ImageLightbox
                  src={MINA_SELLING_AGENT}
                  alt="MINA Selling Agent: create-listing flows—photo-first single listing with fields streaming in, and multi-listing path with on-image AI tags, per-item review, and publish"
                  className="block w-full"
                  disableHoverScale
                >
                  <Image
                    src={MINA_SELLING_AGENT}
                    alt="MINA Selling Agent: create-listing flows—photo-first single listing with fields streaming in, and multi-listing path with on-image AI tags, per-item review, and publish"
                    width={MINA_SELLING_AGENT_W}
                    height={MINA_SELLING_AGENT_H}
                    className="h-auto w-full object-contain"
                    unoptimized
                    sizes="(max-width: 640px) 100vw, min(896px, calc(100vw - 3rem))"
                  />
                </ImageLightbox>
              </div>
            </div>

            <div className="grid max-w-5xl gap-5 sm:grid-cols-2 sm:gap-6">
              <div
                className="flex flex-col gap-3 rounded-2xl p-5 sm:gap-4 sm:p-6"
                style={MINA_TERRACOTTA_SURFACE}
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[rgba(220,140,110,0.7)]">
                  System constraints
                </p>
                <h3 className="text-base font-semibold leading-snug text-[#f0e8e4] sm:text-lg">
                  No blocking spinner — show staged progress while AI work lands
                </h3>
                <p className="text-[15px] leading-relaxed text-[rgba(220,200,190,0.7)] sm:text-base">
                  AI-generated listings aren&apos;t instant. Give parents a clear
                  sense of forward motion instead of a full-screen spinner they have to
                  stare at while models and moderation catch up.
                </p>
              </div>
              <div
                className="flex flex-col gap-3 rounded-2xl p-5 sm:gap-4 sm:p-6"
                style={MINA_TERRACOTTA_SURFACE}
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[rgba(220,140,110,0.7)]">
                  Automation and user control
                </p>
                <h3 className="text-base font-semibold leading-snug text-[#f0e8e4] sm:text-lg">
                  Preview before publish — trust-first, and true to server state
                </h3>
                <p className="text-[15px] leading-relaxed text-[rgba(220,200,190,0.7)] sm:text-base">
                  Nothing ships until publish. Parents always see drafts and edits
                  first, which matches how the backend actually commits listings.
                </p>
              </div>
            </div>
          </div>
        </CaseStudyInViewSection>

        <CaseStudyInViewSection
          id="parenting-copilot"
          className="scroll-mt-28 space-y-5 sm:scroll-mt-32"
        >
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            Parenting copilot
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
          id="create-listing-evolution"
          className="scroll-mt-28 space-y-8 sm:scroll-mt-32"
        >
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            Create listing
          </span>
          <div className="min-w-0 space-y-8">
            <h2 className="max-w-3xl text-xl font-semibold leading-snug tracking-tight text-zinc-100 sm:text-2xl md:text-[1.65rem] md:leading-snug">
              How the create-listing flow evolved
            </h2>
            <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12">
              <div className="min-w-0 space-y-6 text-zinc-300 leading-relaxed lg:col-span-7">
                <p>
                  The original vision was simple: a parent dumps a pile of photos,
                  and AI figures out which ones belong to the same listing. The
                  engineer said it wasn&apos;t feasible — the model couldn&apos;t
                  reliably group photos that way.
                </p>
                <p>
                  So I designed a workaround: one screen where parents could
                  manually add listings and upload photos to each, then publish
                  everything at once. It was technically sound.
                </p>
                <p>
                  But after going deeper on the core user pain point, I realized it
                  hadn&apos;t solved anything. Parents still had to build each
                  listing by hand. The form grind was still there.
                </p>
                <p>
                  I went back to the engineer with a different ask — one photo,
                  multiple listings, with AI filling in the details.
                </p>
                <p>
                  He was willing to try, but flagged a real edge case: blurry
                  photos would cause inaccurate detections, and the model would
                  silently generate bad data. So I added a photo-quality prompt —
                  if the image wasn&apos;t clear enough, the app would ask the
                  parent to retake it before the AI ran.
                </p>
                <p>
                  The final flow wasn&apos;t the original vision, and it wasn&apos;t
                  the safe workaround either. It came from pushing past the first
                  &ldquo;no&rdquo; to find what was actually possible — and then
                  designing around the edges of that.
                </p>
              </div>
              <aside className="mx-auto w-full max-w-xl lg:sticky lg:top-28 lg:col-span-5 lg:mx-0 lg:max-w-none lg:self-start">
                <div className="flex min-w-0 flex-row items-center justify-center gap-2 sm:gap-3">
                  <div className="min-w-0 flex-1 overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40 shadow-[0_20px_50px_-24px_rgba(0,0,0,0.5)]">
                    <ImageLightbox
                      src={MINA_CREATE_FLOW_WORKAROUND}
                      alt="MINA Create workaround: Listing #1 with multi-photo grid, cover tag, remove controls, Add Another Listing, and Next"
                      className="block w-full"
                      disableHoverScale
                    >
                      <Image
                        src={MINA_CREATE_FLOW_WORKAROUND}
                        alt="MINA Create workaround: Listing #1 with multi-photo grid, cover tag, remove controls, Add Another Listing, and Next"
                        width={MINA_CREATE_FLOW_WORKAROUND_W}
                        height={MINA_CREATE_FLOW_WORKAROUND_H}
                        className="h-auto w-full object-contain"
                        unoptimized
                        sizes="(max-width: 1024px) 42vw, 200px"
                      />
                    </ImageLightbox>
                  </div>
                  <div
                    className="flex shrink-0 items-center justify-center text-zinc-500"
                    aria-hidden="true"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="h-7 w-7 sm:h-8 sm:w-8"
                    >
                      <path
                        d="M5 12h12M13 6l6 6-6 6"
                        stroke="currentColor"
                        strokeWidth="1.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="min-w-0 flex-1 overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40 shadow-[0_20px_50px_-24px_rgba(0,0,0,0.5)]">
                    <ImageLightbox
                      src={MINA_CREATE_FLOW_ONE_PHOTO_MULTI}
                      alt="MINA Create listing: one photo with AI tags for Blush Bow Beanie and Alya Signature Sleepsuit, Publish button, and Ask MINA chat field"
                      className="block w-full"
                      disableHoverScale
                    >
                      <Image
                        src={MINA_CREATE_FLOW_ONE_PHOTO_MULTI}
                        alt="MINA Create listing: one photo with AI tags for Blush Bow Beanie and Alya Signature Sleepsuit, Publish button, and Ask MINA chat field"
                        width={MINA_CREATE_FLOW_ONE_PHOTO_MULTI_W}
                        height={MINA_CREATE_FLOW_ONE_PHOTO_MULTI_H}
                        className="h-auto w-full object-contain"
                        unoptimized
                        sizes="(max-width: 1024px) 42vw, 200px"
                      />
                    </ImageLightbox>
                  </div>
                </div>
              </aside>
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
            I owned a scalable Figma system that mirrored iOS—using standardized
            variants, spacing, and component props—so a small team could ship
            multiple complex flows fast without one-off specs.
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
