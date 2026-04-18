import Link from "next/link";

export const metadata = {
  title: "Resume | Angela Yang",
  description:
    "Angela Yang — Product Designer. Professional summary, experience, education, and skills.",
};

const RESUME_NAV = [
  { id: "professional-summary", label: "Professional summary" },
  { id: "work-experience", label: "Work experience" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
] as const;

function ResumeSideNav({ className = "" }: { className?: string }) {
  return (
    <nav
      className={className}
      aria-label="Resume sections"
    >
      <p className="mb-3 text-[10px] font-semibold uppercase tracking-widest text-stone-500">
        On this page
      </p>
      <ul className="space-y-0.5 border-l border-stone-200">
        {RESUME_NAV.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="block border-l-2 border-transparent py-1 pl-3 text-left text-[13px] leading-snug text-stone-600 transition hover:border-[#5F6F89] hover:text-stone-900"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-[#FCFAF7] text-stone-900">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-[100px] py-16 sm:py-24">
        <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_11.5rem] lg:gap-10 xl:grid-cols-[minmax(0,1fr)_12.5rem] xl:gap-12">
          <div className="min-w-0">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-stone-500">
              Resume
            </p>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
              Angela (ChiehNi) Yang
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-stone-600 sm:text-xl">
              Vancouver, BC · Eligible to work in Canada · 778-317-5206 ·
              angela900604@gmail.com ·{" "}
              <a
                href="https://linkedin.com/in/angelayangg/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-800 underline decoration-stone-300 underline-offset-[3px] hover:text-stone-950"
              >
                LinkedIn
              </a>{" "}
              ·{" "}
              <a
                href="https://www.ycnangelayang.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-800 underline decoration-stone-300 underline-offset-[3px] hover:text-stone-950"
              >
                Portfolio
              </a>
            </p>

            <div className="mt-8 border-b border-stone-200 pb-6 lg:hidden">
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-widest text-stone-500">
                Jump to
              </p>
              <ul className="flex flex-wrap gap-2">
                {RESUME_NAV.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="inline-flex rounded-full border border-stone-300 bg-white/80 px-3 py-1.5 text-sm font-medium text-stone-700 transition hover:border-[#5F6F89] hover:text-stone-900"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <section
              id="professional-summary"
              className="mt-12 scroll-mt-28 sm:scroll-mt-32"
            >
              <h2 className="border-b border-stone-200 pb-3 text-base font-semibold uppercase tracking-widest text-stone-600">
                Professional summary
              </h2>
              <p className="mt-6 text-lg leading-[1.65] text-stone-800 sm:text-xl">
                Product Designer with end-to-end experience owning design systems,
                shipping AI-powered products, and driving measurable outcomes at
                early-stage startups and government-scale platforms. Deep expertise
                in Figma — component libraries, variables/tokens, auto-layout,
                variants, and full design system architecture. Fluent with modern
                vibe-coding tools (Claude, Lovart, Framer, Cursor, Stitch) to
                produce realistic, production-like prototypes that accelerate
                engineer collaboration. Grounded in Jobs-to-Be-Done thinking,
                hypothesis-driven discovery, and analytics-connected iteration
                (PostHog, Google Analytics). Comfortable as a sole IC designer in
                ambiguous, fast-moving environments — balancing craft with
                speed-to-market.
              </p>
            </section>

            <section
              id="work-experience"
              className="mt-14 scroll-mt-28 sm:scroll-mt-32"
            >
              <h2 className="border-b border-stone-200 pb-3 text-base font-semibold uppercase tracking-widest text-stone-600">
                Work experience
              </h2>

              <div className="mt-8 space-y-12">
                <div>
                  <div className="flex flex-wrap items-baseline justify-between gap-3">
                    <span className="text-xl font-semibold text-stone-900 sm:text-2xl">
                      Product Designer — Fixed-Term Contract (Concurrent) · MINA AI
                    </span>
                    <span className="text-base text-stone-500 sm:text-lg">
                      Sep 2025 – Present
                    </span>
                  </div>
                  <p className="mt-2 text-lg text-stone-600 sm:text-xl">
                    San Francisco, California (Remote) · Early-stage AI marketplace
                    startup
                  </p>
                  <ul className="mt-4 list-disc space-y-3 pl-6 text-lg leading-[1.65] text-stone-800 marker:text-stone-400 sm:text-xl">
                    <li>
                      Sole IC end-to-end designer at an early-stage AI startup;
                      owned full design system in Figma including component
                      library, tokens/variables, auto-layout architecture, and
                      variant management — directly accelerating sprint velocity
                      with a cross-functional team of 1 PM and 5 engineers.
                    </li>
                    <li>
                      Defined Jobs-to-Be-Done for sellers by synthesizing
                      qualitative user research with PostHog funnel analytics;
                      redesigned checkout and listing flows based on validated
                      insights, increasing completed listings by ~30%.
                    </li>
                    <li>
                      Architected user flows and high-fidelity prototypes for
                      AI-assisted features (Photo-to-Publish, Parenting Copilot) —
                      balancing automation with user control, edge-case handling,
                      and production-like interaction fidelity using Claude and
                      Lovart.
                    </li>
                    <li>
                      Led product decision-making as primary design voice:
                      synthesized market research, user needs, and company
                      strategy to define MVP scope and feature prioritization
                      alongside co-founders; clearly communicated design rationale
                      and tradeoffs to both technical and non-technical
                      stakeholders.
                    </li>
                    <li>
                      Operated autonomously in an ambiguous, fast-moving
                      environment — translating a shifting product roadmap into
                      clear wireframes, prototypes, and shipping-ready specs on
                      Agile sprint cycles.
                    </li>
                  </ul>
                </div>

                <div>
                  <div className="flex flex-wrap items-baseline justify-between gap-3">
                    <span className="text-xl font-semibold text-stone-900 sm:text-2xl">
                      Product Designer — Permanent Full-Time (Concurrent through
                      Nov 2025) · Turn Cloud Technology Service Taiwan
                    </span>
                    <span className="text-base text-stone-500 sm:text-lg">
                      Jul 2024 – Nov 2025
                    </span>
                  </div>
                  <p className="mt-2 text-lg text-stone-600 sm:text-xl">
                    Taipei, Taiwan (On-site) · Cross-platform mobile &amp; web,
                    government and consumer products
                  </p>
                  <ul className="mt-4 list-disc space-y-3 pl-6 text-lg leading-[1.65] text-stone-800 marker:text-stone-400 sm:text-xl">
                    <li>
                      Built and maintained a 50+ component Figma design system
                      based on iOS guidelines — covering component libraries,
                      variant states, spacing tokens, and accessibility patterns —
                      standardizing UI across multiple mobile and web applications
                      and enabling faster, more consistent feature development.
                    </li>
                    <li>
                      Improved login success rate from 68% to 92% on the Taiwan
                      Ministry Invoice App (a nationwide public service) by
                      redesigning authentication flows through heuristic
                      evaluation and hypothesis-driven usability testing;
                      collaborated with cross-functional teams of 10+ engineers
                      with clear documentation of design decisions and tradeoffs.
                    </li>
                    <li>
                      Conducted 30+ user research sessions — focus groups, 1-on-1 interviews, usability tests — across diverse demographics
                      (teenagers, seniors, foreigners, visually impaired users);
                      synthesized findings into JTBD-framed insights that shaped
                      inclusive, multi-mode interface strategies balancing WCAG
                      compliance with modern UI preferences.
                    </li>
                    <li>
                      Created detailed user journey maps, personas, information
                      architecture maps, and Figma prototype demonstrations used
                      to communicate design proposals to government senior
                      leadership for project approval; earned certification from
                      Taiwan&apos;s Ministry of Digital Affairs.
                    </li>
                    <li>
                      Led UX design for the Baskin-Robbins membership platform —
                      integrating point-earning, voucher redemption, and in-store
                      POS systems — as well as internal government management
                      dashboards spanning complex B2B-style interfaces.
                    </li>
                  </ul>
                </div>

                <div>
                  <div className="flex flex-wrap items-baseline justify-between gap-3">
                    <span className="text-xl font-semibold text-stone-900 sm:text-2xl">
                      UX Designer — Fixed-Term Contract · YK Labs
                    </span>
                    <span className="text-base text-stone-500 sm:text-lg">
                      Feb 2024 – Jun 2024
                    </span>
                  </div>
                  <p className="mt-2 text-lg text-stone-600 sm:text-xl">
                    Los Angeles, California (Remote) · AI-powered interview
                    preparation platform
                  </p>
                  <ul className="mt-4 list-disc space-y-3 pl-6 text-lg leading-[1.65] text-stone-800 marker:text-stone-400 sm:text-xl">
                    <li>
                      Increased full mock interview completion rates by 35% on
                      PerfectInterview.ai by redesigning onboarding — simplifying
                      setup steps, restructuring task progression — validated
                      through heuristic evaluation, usability testing, and PostHog
                      analytics to identify drop-off points and measure funnel
                      performance.
                    </li>
                    <li>
                      Applied outcome-driven design methods: defined hypotheses
                      before each design iteration, measured results
                      quantitatively, and documented findings clearly for product
                      stakeholders.
                    </li>
                    <li>
                      Designed and launched a responsive marketing website in
                      Framer using code-adjacent rapid prototyping, improving
                      product clarity and pre-signup conversion by helping
                      prospective users understand the AI interview experience.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section
              id="education"
              className="mt-14 scroll-mt-28 sm:scroll-mt-32"
            >
              <h2 className="border-b border-stone-200 pb-3 text-base font-semibold uppercase tracking-widest text-stone-600">
                Education
              </h2>
              <ul className="mt-6 space-y-4 text-lg leading-relaxed text-stone-800 sm:text-xl">
                <li>
                  <span className="font-semibold text-stone-900">
                    Bachelor of Arts in New Media Studies
                  </span>
                  , University of Toronto · Sep 2019 – Jun 2024
                </li>
                <li>
                  <span className="font-semibold text-stone-900">
                    User Experience Design Diploma
                  </span>
                  , BrainStation · Apr 2023 – Jul 2023
                </li>
              </ul>
            </section>

            <section
              id="skills"
              className="mt-14 scroll-mt-28 sm:scroll-mt-32"
            >
              <h2 className="border-b border-stone-200 pb-3 text-base font-semibold uppercase tracking-widest text-stone-600">
                Skills
              </h2>
              <div className="mt-6 space-y-5 text-lg leading-[1.65] text-stone-800 sm:text-xl">
                <p>
                  <span className="font-semibold text-stone-900">
                    Figma expertise:
                  </span>{" "}
                  Component libraries, variables/tokens, auto-layout, variants,
                  file architecture, design system ownership &amp; maintenance
                </p>
                <p>
                  <span className="font-semibold text-stone-900">
                    Vibe coding tools:
                  </span>{" "}
                  Claude, Lovart, Cursor, Stitch, Framer — rapid prototyping with
                  realistic data and production-like interactions
                </p>
                <p>
                  <span className="font-semibold text-stone-900">UX methods:</span>{" "}
                  End-to-end product design, Jobs-to-Be-Done framing,
                  hypothesis-driven experiments, user research (interviews, focus
                  groups, usability testing), journey mapping, personas,
                  information architecture, wireframing, A/B testing, competitor
                  analysis
                </p>
                <p>
                  <span className="font-semibold text-stone-900">Analytics:</span>{" "}
                  PostHog, Google Analytics, conversion optimization, funnel
                  analysis, outcome-driven iteration
                </p>
                <p>
                  <span className="font-semibold text-stone-900">
                    Design tools:
                  </span>{" "}
                  Figma, FigJam, Adobe Illustrator, Adobe Photoshop, Canva, Framer,
                  WordPress, Notion, Miro
                </p>
                <p>
                  <span className="font-semibold text-stone-900">Platforms:</span>{" "}
                  Mobile UX (iOS), responsive web, design systems, accessibility
                  (WCAG), B2B dashboards, government platforms
                </p>
                <p>
                  <span className="font-semibold text-stone-900">Workflow:</span>{" "}
                  Agile, IC / solo designer, cross-functional collaboration, sprint
                  planning, stakeholder communication, documentation
                </p>
              </div>
            </section>

            <div className="mt-16 border-t border-stone-200 pt-10">
              <Link
                href="/"
                className="text-lg font-medium text-stone-600 hover:text-stone-900"
              >
                ← Back to work
              </Link>
            </div>
          </div>

          <aside className="hidden lg:block">
            <ResumeSideNav className="sticky top-28 pt-2 sm:top-32" />
          </aside>
        </div>
      </div>
    </div>
  );
}
