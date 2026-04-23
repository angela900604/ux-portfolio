import Link from "next/link";
import { CASE_STUDY_BODY_GRID, SITE_SHELL_CONTAINER } from "@/lib/site-shell";

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
    <nav className={className} aria-label="Resume sections">
      <p className="mb-3 text-[10px] font-semibold uppercase tracking-widest text-zinc-500">
        On this page
      </p>
      <ul className="space-y-0.5 border-l border-zinc-800">
        {RESUME_NAV.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="block border-l-2 border-transparent py-1 pl-3 text-left text-[13px] leading-snug text-zinc-400 transition hover:border-violet-500/50 hover:text-zinc-100"
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
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className={`${SITE_SHELL_CONTAINER} py-16 sm:py-24`}>
        <div className={CASE_STUDY_BODY_GRID}>
          <div className="min-w-0">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-zinc-500">
              Resume
            </p>
            <h1 className="text-zinc-100">Angela (ChiehNi) Yang</h1>
            <p className="mt-4 text-base leading-relaxed text-zinc-400 sm:text-lg">
              Vancouver, BC (open to relocate) · Canadian Citizen · 778-317-5206 ·{" "}
              angela900604@gmail.com ·{" "}
              <a
                href="https://linkedin.com/in/angelayangg/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-200 underline decoration-zinc-600 underline-offset-[3px] hover:text-white"
              >
                LinkedIn
              </a>
            </p>

            <div className="mt-8 border-b border-zinc-800 pb-6 lg:hidden">
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-widest text-zinc-500">
                Jump to
              </p>
              <ul className="flex flex-wrap gap-2">
                {RESUME_NAV.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="inline-flex rounded-full border border-zinc-700 bg-zinc-900/50 px-3 py-1.5 text-sm font-medium text-zinc-300 transition hover:border-violet-500/40 hover:text-zinc-100"
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
              <h2 className="border-b border-zinc-800 pb-3 text-xs font-semibold uppercase tracking-widest text-zinc-500">
                Professional summary
              </h2>
              <p className="mt-6 text-base leading-[1.65] text-zinc-300 sm:text-lg">
                Product Designer focused on AI-driven and B2B SaaS products,
                designing complex systems, multi-role workflows, and scalable
                design systems across mobile and web. Strong in multi-segment
                user research and comfortable leading cross-functional teams to
                drive product decisions and deliver high-impact features.
              </p>
            </section>

            <section
              id="work-experience"
              className="mt-14 scroll-mt-28 sm:scroll-mt-32"
            >
              <h2 className="border-b border-zinc-800 pb-3 text-xs font-semibold uppercase tracking-widest text-zinc-500">
                Work experience
              </h2>

              <div className="mt-8 space-y-12">
                <div>
                  <div className="flex flex-wrap items-baseline justify-between gap-3">
                    <span className="text-xl font-semibold text-zinc-100 sm:text-2xl">
                      Product Designer — Fixed-Term Contract (Concurrent) · MINA
                      AI
                    </span>
                    <span className="text-base text-zinc-500 sm:text-lg">
                      Sep 2025 – Present
                    </span>
                  </div>
                  <p className="mt-2 text-base text-zinc-400 sm:text-lg">
                    San Francisco, California (Remote) · Early-stage AI marketplace
                    startup
                  </p>
                  <ul className="mt-4 list-disc space-y-3 pl-6 text-base leading-[1.65] text-zinc-300 marker:text-zinc-600 sm:text-lg">
                    <li>
                      Sole IC end-to-end designer at an early-stage AI startup;
                      owned a full design system in Figma including component
                      library, tokens/variables, auto-layout architecture, and
                      variant management, directly accelerating sprint velocity
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
                      AI-assisted features (Photo-to-Publish, Parenting Copilot),
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
                      environment, translating a shifting product roadmap into
                      clear wireframes, prototypes, and shipping-ready specs on
                      Agile sprint cycles.
                    </li>
                  </ul>
                </div>

                <div>
                  <div className="flex flex-wrap items-baseline justify-between gap-3">
                    <span className="text-xl font-semibold text-zinc-100 sm:text-2xl">
                      Product Designer — Permanent Full-Time (Concurrent through
                      Nov 2025) · Turn Cloud Technology Service
                    </span>
                    <span className="text-base text-zinc-500 sm:text-lg">
                      Jul 2024 – Nov 2025
                    </span>
                  </div>
                  <p className="mt-2 text-base text-zinc-400 sm:text-lg">
                    Taipei, Taiwan (On-site) · Cross-platform mobile &amp; web,
                    government and consumer products
                  </p>
                  <ul className="mt-4 list-disc space-y-3 pl-6 text-base leading-[1.65] text-zinc-300 marker:text-zinc-600 sm:text-lg">
                    <li>
                      Built and maintained a 50+ component Figma design system
                      for a B2B CRM platform, covering component libraries, variant
                      states, spacing tokens, and accessibility patterns based on
                      iOS guidelines; standardized UI across mobile and web
                      applications, enabling faster and more consistent feature
                      development across the product.
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
                      Conducted 30+ user research sessions, focus groups, 1-on-1
                      interviews, usability tests, across diverse demographics
                      (teenagers, seniors, foreigners, visually impaired users);
                      synthesized findings into JTBD-framed insights that shaped
                      inclusive, multi-mode interface strategies balancing WCAG
                      compliance with modern UI preferences.
                    </li>
                    <li>
                      Created detailed user journey maps, personas, information
                      architecture maps, and Figma prototype demonstrations
                      used to communicate design proposals to government senior
                      leadership for project approval; earned certification from
                      Taiwan&apos;s Ministry of Digital Affairs.
                    </li>
                    <li>
                      Sole designer on a government backend platform built from
                      0–1; independently designed the full product (information
                      architecture, component system, and high-fidelity specs),
                      spanning complex B2B-style admin interfaces closely
                      analogous to enterprise SaaS environments.
                    </li>
                    <li>
                      Led UX design for the Baskin-Robbins membership platform,
                      integrating point-earning, voucher redemption.
                    </li>
                  </ul>
                </div>

                <div>
                  <div className="flex flex-wrap items-baseline justify-between gap-3">
                    <span className="text-xl font-semibold text-zinc-100 sm:text-2xl">
                      UX Designer — Fixed-Term Contract · YK Labs
                    </span>
                    <span className="text-base text-zinc-500 sm:text-lg">
                      Feb 2024 – Jun 2024
                    </span>
                  </div>
                  <p className="mt-2 text-base text-zinc-400 sm:text-lg">
                    Los Angeles, California (Remote) · AI-powered interview
                    preparation platform
                  </p>
                  <ul className="mt-4 list-disc space-y-3 pl-6 text-base leading-[1.65] text-zinc-300 marker:text-zinc-600 sm:text-lg">
                    <li>
                      Increased full mock interview completion rates by 35% on
                      PerfectInterview.ai by redesigning onboarding, simplifying
                      setup steps, restructuring task progression, and validated
                      through heuristic evaluation, usability testing, and PostHog
                      analytics to identify drop-off points and measure funnel
                      performance.
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
              <h2 className="border-b border-zinc-800 pb-3 text-xs font-semibold uppercase tracking-widest text-zinc-500">
                Education
              </h2>
              <ul className="mt-6 space-y-4 text-base leading-relaxed text-zinc-300 sm:text-lg">
                <li>
                  <span className="font-semibold text-zinc-100">
                    Bachelor of Arts in New Media Studies
                  </span>
                  , University of Toronto · Sep 2019 – Jun 2024
                </li>
                <li>
                  <span className="font-semibold text-zinc-100">
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
              <h2 className="border-b border-zinc-800 pb-3 text-xs font-semibold uppercase tracking-widest text-zinc-500">
                Skills
              </h2>
              <div className="mt-6 space-y-5 text-base leading-[1.65] text-zinc-300 sm:text-lg">
                <p>
                  <span className="font-semibold text-zinc-100">
                    Design Tools:
                  </span>{" "}
                  Figma, Adobe Illustrator, Adobe Photoshop, Canva, Framer,
                  WordPress, Notion, Miro
                </p>
                <p>
                  <span className="font-semibold text-zinc-100">
                    Vibe Coding Tools:
                  </span>{" "}
                  Cursor, Claude, Figma Make, Lovart, Gemini, Stitch, Framer
                </p>
                <p>
                  <span className="font-semibold text-zinc-100">
                    Figma Expertise:
                  </span>{" "}
                  Component libraries, variables / tokens, auto-layout, variants,
                  file architecture, design system ownership &amp; maintenance
                </p>
                <p>
                  <span className="font-semibold text-zinc-100">UX Methods:</span>{" "}
                  End-to-End Product Design, Hypothesis-Driven Experiments, User
                  Research (interviews, focus groups, usability testing), Journey
                  Mapping, Personas, Information Architecture, Wireframing, A/B
                  Testing, Competitor Analysis
                </p>
                <p>
                  <span className="font-semibold text-zinc-100">Analytics:</span>{" "}
                  PostHog, Google Analytics, Conversion Optimization,
                  Outcome-Driven Iteration
                </p>
                <p>
                  <span className="font-semibold text-zinc-100">Platforms:</span>{" "}
                  Mobile UX (iOS), Responsive Web, Design Systems, Accessibility
                  (WCAG), B2B Dashboards, Government Platforms
                </p>
                <p>
                  <span className="font-semibold text-zinc-100">Workflow:</span>{" "}
                  Agile, IC / Solo Designer, Cross-functional Collaboration,
                  Sprint Planning, Stakeholder Communication, Documentation
                </p>
              </div>
            </section>

            <div className="mt-16 border-t border-zinc-800 pt-10">
              <Link
                href="/"
                className="text-base font-medium text-zinc-400 hover:text-zinc-100 sm:text-lg"
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
