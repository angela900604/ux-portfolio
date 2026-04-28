import Image from "next/image";
import Link from "next/link";
import {
  CaseStudyAtAGlance,
  CASE_STUDY_AT_A_GLANCE_DARK_HERO_PROPS,
} from "../_components/CaseStudyAtAGlance";
import { CaseStudyHeroFullBleed } from "../_components/CaseStudyHeroFullBleed";
import { CaseStudyInViewSection } from "../_components/CaseStudyInViewSection";
import { CaseStudyContentLayout } from "../_components/CaseStudyContentLayout";
import { DesignJourneyCollapsible } from "../_components/DesignJourneyCollapsible";
import { CaseStudyPrevNext } from "../_components/CaseStudyPrevNext";
import { MinaPrototypeVideo } from "./MinaPrototypeVideo";

const MINA_HERO = "/case-studies/mina/mina-ai-hero.png";
const MINA_MOCKUP_HAND = "/case-studies/mina/mockup-hand-01.png";
const MINA_MOCKUP_ISO = "/case-studies/mina/mockup-isometric-02.png";
const MINA_MOCKUP_SOFA = "/case-studies/mina/mockup-sofa-04.png";
const MINA_COPILOT_FLOW = "/case-studies/mina/parenting-copilot-flow.png";

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
    label: "Outcome",
    value:
      "Redesigned the listing funnel for seller conversion — completed listings up ~30% (PostHog cohorted A/B). Defined success metrics with PM before shipping.",
  },
  {
    label: "Team",
    value: "Sole product designer (IC) · 1 PM + 5 engineers",
  },
  {
    label: "Shipped",
    value: "0→1 design system (50+ components) + 3 major flows",
  },
  {
    label: "Timeline",
    value: "Sep 2025 – Present (ongoing) · iOS live in Canada",
  },
] as const;

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
              Community-driven product design: SF parent networks and IRL events
              feed the flywheel—listings built to share outward, a Parenting
              Copilot that nudges gear circulation inside those circles, and
              growth through the listing funnel—conversion, engagement, and AI
              surfaces people can trust. Checkout, publish, and a system that
              scales with a small team.
            </p>
          }
          leadBelowSubtitle={
            <CaseStudyAtAGlance
              items={AT_A_GLANCE_ITEMS}
              {...CASE_STUDY_AT_A_GLANCE_DARK_HERO_PROPS}
            />
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
                  alt="MINA Parenting Copilot shown in an iPhone hand mockup"
                  width={736}
                  height={1104}
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

          <div className="mt-12 space-y-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-medium uppercase tracking-widest text-zinc-500">
                  App Store
                </p>
                <h3 className="mt-1 text-zinc-100">Live product</h3>
                <p className="mt-1 max-w-xl text-sm text-zinc-500">
                  Mina — Resale for Parents is available on the App Store in Canada
                  for iPhone.
                </p>
              </div>
              <a
                href={MINA_APP_STORE}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full border border-zinc-600 bg-zinc-900/50 px-5 py-2.5 text-sm font-medium text-zinc-100 transition hover:border-zinc-500 hover:bg-zinc-800/80 sm:self-start"
              >
                Mina · App Store (Canada)
                <span aria-hidden className="text-zinc-500">
                  {"\u2197"}
                </span>
              </a>
            </div>
          </div>
        </CaseStudyHeroFullBleed>
      </header>

      <CaseStudyContentLayout>
        <CaseStudyInViewSection
          id="context"
          className="scroll-mt-28 space-y-4 sm:scroll-mt-32"
        >
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            Opportunity
          </span>
          <h2 className="max-w-3xl text-xl font-semibold leading-snug tracking-tight text-zinc-100 sm:text-2xl md:text-[1.65rem] md:leading-snug">
            SF parents burn through baby gear fast, but resale is still too slow
            and too much admin
          </h2>
          <p className="max-w-3xl text-zinc-300 leading-relaxed">
            MINA is a{" "}
            <span className="text-zinc-100">zero-to-one iOS marketplace</span>{" "}
            for parents—starting in{" "}
            <span className="text-zinc-100">
              San Francisco mom communities
            </span>
            —where used baby and kids gear turns over fast. The wedge is{" "}
            <span className="text-zinc-100">
              AI-assisted listing and chat on top of community-led distribution
            </span>
            , not another generic classifieds app. I joined as the{" "}
            <span className="text-zinc-100">sole product designer (IC)</span>,
            pairing daily with one PM and five engineers while we shipped the
            first public build in Canada.
          </p>
          <p className="max-w-3xl text-zinc-300 leading-relaxed">
            Distribution is inherently social: I treated{" "}
            <span className="text-zinc-100">
              listing completion and share-out
            </span>{" "}
            as one thread—clear publish states and lightweight paths for parents
            to pass items to people they already know, not only browse inside the
            app.{" "}
            <span className="text-zinc-100">Community events</span> (signage,
            demos, conversations on the ground) informed how much explanation
            first-time sellers need. The{" "}
            <span className="text-zinc-100">Parenting Copilot</span> sits on the
            same thesis: nudge life-stage transitions so gear keeps moving within
            the network—member connection driving circulation, not one-off
            transactions.
          </p>
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
          <div className="grid items-start gap-8 lg:grid-cols-[1fr_auto] lg:gap-10">
            <div className="min-w-0 space-y-4">
              <h2 className="max-w-3xl text-xl font-semibold leading-snug tracking-tight text-zinc-100 sm:text-2xl md:text-[1.65rem] md:leading-snug">
                Hand listing over to an agent: one photo to listing
              </h2>
              <p className="max-w-3xl text-zinc-300 leading-relaxed">
                Classic resale still behaves like running a tiny shop: forms, photos,
                buyer threads, pickup coordination. I{" "}
                <span className="text-zinc-100">
                  redesigned checkout and the listing path end-to-end
                </span>{" "}
                to reduce drop-off and ambiguity—clear steps, fewer dead ends, and UI
                that matches how parents actually move from intent to a completed
                listing.
              </p>
              <p className="max-w-3xl text-zinc-300 leading-relaxed">
                <span className="text-zinc-100">
                  Redesigned the listing funnel to improve seller conversion
                </span>
                —completed listings up ~30% (
                <span className="text-zinc-100">PostHog</span> cohorted A/B on the
                same funnel).{" "}
                <span className="text-zinc-100">
                  Defined success metrics with the PM before shipping
                </span>{" "}
                so we could read a clean signal on conversion, not just ship
                pixels.
              </p>
              <p className="max-w-3xl text-zinc-300 leading-relaxed">
                For each test, the PM and I framed a{" "}
                <span className="text-zinc-100">clear hypothesis</span> (what we
                expected to move seller completion) and{" "}
                <span className="text-zinc-100">
                  success metrics plus guardrails
                </span>{" "}
                —typically completion rate with step-level drop-off and
                time-to-publish—before splitting traffic, with{" "}
                <span className="text-zinc-100">
                  funnel and property definitions documented
                </span>{" "}
                so PM and analytics could read the same numbers. We evaluated
                outcomes in{" "}
                <span className="text-zinc-100">PostHog cohorted funnels</span>{" "}
                against those definitions, then{" "}
                <span className="text-zinc-100">
                  shipped, refined, or queued the next iteration
                </span>{" "}
                from what the data showed, not from the strongest mockup alone.
              </p>
              <p className="max-w-3xl text-sm leading-relaxed text-zinc-400">
                The clip here is the{" "}
                <span className="text-zinc-200">
                  one-photo → detection → draft listing
                </span>{" "}
                direction we aligned on with engineering—same product surface family
                as the shipping listing experience.
              </p>
            </div>
            <div className="mx-auto flex w-full max-w-[300px] shrink-0 flex-col items-center lg:mx-0 lg:items-end">
              <MinaPrototypeVideo />
            </div>
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
                system did on their behalf. The goal is the same class of trust
                and transparency hiring managers expect from consumer AI surfaces—
                legible limits, not magic.
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
            Parenting Copilot, a life-stage triggered circulation system
          </h2>
          <p className="max-w-3xl text-zinc-300 leading-relaxed">
            The copilot is a{" "}
            <span className="text-zinc-100">
              life-stage triggered circulation system
            </span>
            : it helps parents notice when a phase is ending, what gear tends to
            matter next, and how to move items out kindly—without pretending to
            be medical advice. Sub-flows include{" "}
            <span className="text-zinc-100">asking about a specific item</span>{" "}
            and follow-up questions where the model proposes next steps but{" "}
            <span className="text-zinc-100">never bypasses explicit consent</span>.
          </p>
          <p className="max-w-3xl text-zinc-300 leading-relaxed">
            This flow doubles as the narrative bridge—Pass It On and suggested
            items are the copilot surface meeting the listing surface.
            That is intentional product architecture: one trust model, two
            outcomes (clarity for parents, liquidity for the marketplace). At
            the community layer, it is also how{" "}
            <span className="text-zinc-100">
              member-to-member connection sustains supply
            </span>
            —parents get timely nudges to circulate gear, and the marketplace
            captures that motion instead of relying on cold discovery alone.
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
            with a small eng team.
          </p>
          <div className="w-full max-w-3xl space-y-3">
            <p className="max-w-3xl text-sm leading-relaxed text-zinc-300">
              Component library portfolio (HTML preview)—embedded below; scroll
              inside the frame to browse components.
            </p>
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
              engineers could follow the narrative beat-by-beat: the user opens
              with a single photo; the model analyzes the scene,{" "}
              <span className="text-zinc-100">
                detects items, and surfaces labels on the image
              </span>
              ; the user then talks to the agent in chat about intent—for example,
              &quot;I want to sell this stroller&quot;—and the system{" "}
              <span className="text-zinc-100">drafts a listing</span> from that
              conversation. The goal was to show a differentiated, investor-friendly
              story without hiding the hard parts.
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
