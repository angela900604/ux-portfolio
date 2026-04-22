import Image from "next/image";
import Link from "next/link";
import { CaseStudyAtAGlance } from "../_components/CaseStudyAtAGlance";
import { CaseStudyHeroFullBleed } from "../_components/CaseStudyHeroFullBleed";
import { CaseStudyInViewSection } from "../_components/CaseStudyInViewSection";
import { CaseStudyContentLayout } from "../_components/CaseStudyContentLayout";
import { DesignJourneyCollapsible } from "../_components/DesignJourneyCollapsible";
import { CaseStudyPrevNext } from "../_components/CaseStudyPrevNext";
import { CaseStudyScanSummary } from "../_components/CaseStudyScanSummary";
import { MinaPrototypeVideo } from "./MinaPrototypeVideo";

const MINA_HERO = "/case-studies/mina/mina-ai-hero.png";

/** Canada App Store — Mina - Resale for Parents */
const MINA_APP_STORE =
  "https://apps.apple.com/ca/app/mina-resale-for-parents/id6754006404";

const AT_A_GLANCE_ITEMS = [
  { label: "Timeline", value: "2025 – Present (ongoing)" },
  { label: "Role", value: "Product designer · AI UX" },
  {
    label: "Project type",
    value: "Mobile app · AI marketplace (zero-to-one)",
  },
  { label: "Region", value: "San Francisco · parent communities" },
] as const;

const MINA_SCAN_SUMMARY = [
  "Zero-to-one iOS marketplace: AI-native listing and chat for SF parent communities—community-first GTM, case study grows as we ship.",
  "Live on the App Store (Canada); flows and metrics will expand here.",
] as const;

const MINA_JOURNEY_IDS = ["engineering-proposal", "design-principles"] as const;

const MINA_TOC = [
  { id: "why-this-exists", label: "Opportunity" },
  { id: "pain-we-solve", label: "The pain we solve" },
  { id: "outcome-impact", label: "Outcome & impact" },
  { id: "product-strategy", label: "Product strategy" },
  { id: "core-experience", label: "Core experience" },
  { id: "design-journey", label: "Design journey" },
  { id: "engineering-proposal", label: "Proposal & alignment" },
  { id: "design-principles", label: "Design principles" },
] as const;

export const metadata = {
  title: "MINA · AI Marketplace for Parents (Coming Soon) | Angela Yang",
  description:
    "Zero-to-one concept: a San Francisco mom-first marketplace for fast-turnover baby gear—AI agent chat, one-photo multi-listing, and seller-led coordination to cut listing time and buyer management.",
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
              <span className="inline-flex items-center rounded-full border border-violet-400/50 bg-violet-500/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-violet-100">
                Coming soon
              </span>
              <span className="inline-flex items-center rounded-full border border-amber-400/45 bg-amber-500/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-amber-50">
                Ongoing project
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
              Starting from zero with San Francisco mom communities: reduce waste,
              reclaim space, and make resale feel as light as a conversation—not a
              second job.
            </p>
          }
        >
          <p className="text-sm text-zinc-400 max-w-2xl leading-relaxed border-l-2 border-violet-500/50 pl-4">
            This case study is <span className="text-zinc-200">in progress</span>.
            Deeper flows, research snapshots, and metrics will be added as the work
            ships.
          </p>

          <div className="mt-8">
            <CaseStudyAtAGlance items={AT_A_GLANCE_ITEMS} />
          </div>

          <div className="mt-8 space-y-3">
            <p className="text-xs font-medium uppercase tracking-widest text-zinc-500">
              Impact summary
            </p>
            <div className="grid gap-3 sm:grid-cols-2 sm:max-w-2xl">
              <div className="rounded-xl border border-zinc-800/90 bg-zinc-900/50 px-4 py-3">
                <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                  Live product
                </p>
                <p className="mt-1 text-sm font-medium text-zinc-100">
                  Mina — iPhone · App Store (Canada)
                </p>
              </div>
              <div className="rounded-xl border border-zinc-800/90 bg-zinc-900/50 px-4 py-3">
                <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                  App Store (Canada)
                </p>
                <p className="mt-1 text-sm font-medium text-zinc-100">
                  Resale marketplace for parents
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <CaseStudyScanSummary items={MINA_SCAN_SUMMARY} />
          </div>

          <a
            href="#why-this-exists"
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-violet-500/35 bg-violet-500/10 px-4 py-2.5 text-sm font-medium text-violet-200 transition hover:border-violet-400/45 hover:bg-violet-500/15"
          >
            Jump to story
            <span aria-hidden className="text-violet-400/90">
              {"\u2193"}
            </span>
          </a>

          <div className="mt-12 space-y-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-medium uppercase tracking-widest text-zinc-500">
                  App Store
                </p>
                <h3 className="mt-1 text-zinc-100">
                  Live product
                </h3>
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

      <CaseStudyContentLayout toc={MINA_TOC}>
        <CaseStudyInViewSection
          id="why-this-exists"
          className="scroll-mt-28 sm:scroll-mt-32"
        >
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_min(18rem,32vw)] lg:items-stretch lg:gap-10 xl:grid-cols-[minmax(0,1fr)_22.5rem] xl:gap-12">
            <div className="min-w-0 space-y-4">
              <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
                Opportunity
              </span>
              <h2 className="max-w-3xl text-xl font-semibold leading-snug tracking-tight text-zinc-100 sm:text-2xl md:text-[1.65rem] md:leading-snug">
                SF parents burn through baby gear fast, but resale is still too
                slow and too much admin—so great items stall in closets instead of
                reaching the next family.
              </h2>
              <p className="text-zinc-300 leading-relaxed">
                The opening came from{" "}
                <span className="text-zinc-100">dense, trust-based mom networks</span>{" "}
                where demand is real—if we could remove the listing and coordination
                tax with an{" "}
                <span className="text-zinc-100">AI-first path</span>.
              </p>
            </div>
            <div className="relative min-h-[min(52vw,22rem)] w-full min-w-0 overflow-hidden rounded-xl border border-zinc-800/50 bg-zinc-900/40 sm:min-h-[20rem] lg:min-h-0">
              <Image
                src="/case-studies/mina/community-collage.jpg"
                alt="MINA community event: signage, parents trying the app, and team at a local gathering"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 360px"
              />
            </div>
          </div>
        </CaseStudyInViewSection>

        <CaseStudyInViewSection
          id="pain-we-solve"
          className="scroll-mt-28 space-y-4 sm:scroll-mt-32"
        >
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            The pain we are solving
          </span>
          <h2 className="text-zinc-100">
            Too much gear, too little time—and resale that feels like admin work
          </h2>
          <p className="text-zinc-300 leading-relaxed">
            Classic resale asks parents to behave like shops—listings, DMs, pickup
            logistics. The pain is the{" "}
            <span className="text-zinc-100">attention tax</span> every time a stage
            ends and a new pile appears.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-rose-400/90">
                Short use cycles
              </p>
              <p className="mt-2 text-sm text-zinc-300 leading-relaxed">
                Items serve a phase, then become obsolete for{" "}
                <em>your</em> family—while still valuable for the next parent in line.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-emerald-400/90">
                Sustainability without guilt trips
              </p>
              <p className="mt-2 text-sm text-zinc-300 leading-relaxed">
                SF audiences respond to reuse when the path is credible and
                low-friction—not when it adds another chore.
              </p>
            </div>
          </div>
        </CaseStudyInViewSection>

        <CaseStudyInViewSection
          id="outcome-impact"
          className="scroll-mt-28 space-y-6 sm:scroll-mt-32"
        >
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            Outcome &amp; impact
          </span>
          <h2 className="max-w-3xl text-lg font-semibold leading-snug tracking-tight text-zinc-100 sm:text-xl md:text-2xl md:leading-snug">
            Seller research on MINA prioritized real jobs—e.g. move outgrown
            baby gear fast, with minimal time—not just &quot;this button is
            annoying.&quot; Layering that with PostHog drop-offs, I redesigned
            checkout and listing;{" "}
            <span className="text-emerald-200/95">listing completion rose ~30%</span>
            .
          </h2>
          <MinaPrototypeVideo />
        </CaseStudyInViewSection>

        <CaseStudyInViewSection
          id="product-strategy"
          className="scroll-mt-28 space-y-4 sm:scroll-mt-32"
        >
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            Product strategy
          </span>
          <h2 className="text-zinc-100">
            Community first, then scale—so listings find the right families faster
          </h2>
          <p className="text-zinc-300 leading-relaxed">
            We are intentionally{" "}
            <span className="text-zinc-100">aggregating mom communities</span> early:
            shared norms, mutual trust, and local pickup density beat anonymous
            nationwide matching for this category. The goal is to{" "}
            <span className="text-zinc-100">decrease listing time</span> and{" "}
            <span className="text-zinc-100">decrease learning time</span>—parents
            should recognize the product in seconds and complete a sale without
            reading a manual.
          </p>
        </CaseStudyInViewSection>

        <CaseStudyInViewSection
          id="core-experience"
          className="scroll-mt-28 space-y-6 sm:scroll-mt-32"
        >
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            Core experience
          </span>
          <h2 className="text-zinc-100">
            An AI agent you talk to—not a form you fight with
          </h2>
          <p className="text-zinc-300 leading-relaxed">
            The app is centered on{" "}
            <span className="text-zinc-100">conversation with an AI agent</span> as
            the primary interface. Instead of navigating dense settings, sellers
            describe what they are passing on, confirm details in plain language,
            and let the system handle the busywork. The same agent helps with{" "}
            <span className="text-zinc-100">transactions</span>: suggesting fair
            pricing language, surfacing next steps, and coordinating{" "}
            <span className="text-zinc-100">location and time</span> through dialogue
            so sellers spend less energy managing individual buyers.
          </p>

          <div className="rounded-2xl border border-violet-500/25 bg-violet-500/5 p-6 sm:p-8">
            <h6 className="text-violet-200">
              One photo → many listings
            </h6>
            <p className="mt-3 text-zinc-300 leading-relaxed">
              Parents can <span className="text-zinc-100">take one photo</span> (or a
              single upload batch) and let AI propose{" "}
              <span className="text-zinc-100">multiple listings at once</span>
              —titles, categories, condition notes, and bundle suggestions—ready to
              edit before anything goes live. The objective is to make batching
              outgrown gear feel closer to &quot;showing a friend what is on the
              floor&quot; than &quot;opening a spreadsheet.&quot;
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/35 p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
                Seller ↔ AI
              </p>
              <p className="mt-2 text-sm text-zinc-300 leading-relaxed">
                Pickup windows, handoff spots, and buyer communication are steered
                through chat so sellers are not juggling five threads per item.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/35 p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
                Less buyer management
              </p>
              <p className="mt-2 text-sm text-zinc-300 leading-relaxed">
                The agent carries routine coordination and status updates—parents
                intervene when judgment matters, not for every ping.
              </p>
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
            creation—most still feel like long forms and category pickers. That gap
            became the wedge I wanted to spell out for the team.
          </p>
          <p className="text-zinc-300 leading-relaxed">
            I translated the direction into{" "}
            <span className="text-zinc-100">mockups and a page flow</span> so
            engineers could follow the narrative beat-by-beat: the user opens with a
            single photo; the model analyzes the scene,{" "}
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
            . I folded that into the flow by adding an explicit beat where the agent{" "}
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
            parents through developmental phases—what stage the baby is entering and
            what gear tends to matter—so the app feels useful even between
            transactions.
          </p>
          <p className="text-zinc-300 leading-relaxed">
            The team raised a fair concern: promoting{" "}
            <span className="text-zinc-100">several different AI chat agents</span>{" "}
            could confuse users on the surface and multiply complexity in the
            backend model layer. My counter was directional:{" "}
            <span className="text-zinc-100">
              if each agent has a clearly separated entry point in the product, can
              we also treat the underlying models or orchestration as separate
              lanes—so the UX stays legible and the stack does not collapse into one
              overloaded generalist?
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
                <span className="text-zinc-100">Preview before publish</span> — AI
                drafts are always visible and editable; nothing ships silently.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-violet-400 font-semibold shrink-0">02</span>
              <span>
                <span className="text-zinc-100">Local-first language</span> — copy and
                defaults tuned for SF pickup reality (density, transit, weather).
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-violet-400 font-semibold shrink-0">03</span>
              <span>
                <span className="text-zinc-100">Quiet automation</span> — the agent
                reduces coordination noise without hiding who is on the other side
                of a transaction.
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
