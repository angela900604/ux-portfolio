import Link from "next/link";

export const metadata = {
  title: "Resume | Angela Yang",
  description: "Angela Yang — Product Designer. Experience, education, skills.",
};

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-[#FCFAF7] text-stone-900">
      <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
        <p className="text-xs font-medium uppercase tracking-widest text-stone-500 mb-2">
          Resume
        </p>
        <h1 className="text-2xl font-semibold tracking-tight">
          Angela (ChiehNi) Yang
        </h1>
        <p className="mt-2 text-sm text-stone-600">
          778-317-5206 · angela900604@gmail.com · linkedin.com/in/angelayangg/
          · ycnangelayang.com
        </p>
        <p className="mt-5">
          <a
            href="/AngelaYang_Resume.pdf"
            download="AngelaYang_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-lg border border-stone-300 bg-white px-4 py-2 text-sm font-medium text-stone-900 shadow-sm transition hover:border-stone-400 hover:bg-stone-50"
          >
            Download PDF resume
          </a>
        </p>

        <section className="mt-10">
          <h2 className="text-xs font-medium uppercase tracking-widest text-stone-500 border-b border-stone-200 pb-2">
            Work experience
          </h2>

          <div className="mt-6 space-y-8">
            <div>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <span className="font-medium text-stone-900">
                  Product Designer (Fixed-term)
                </span>
                <span className="text-sm text-stone-500">Sep 2025 – Present</span>
              </div>
              <p className="text-sm text-stone-600">MINA AI · San Francisco, CA (Remote)</p>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-stone-700 leading-relaxed">
                <li>
                  Sole UX designer at an early-stage AI marketplace startup for
                  mothers in San Francisco; end-to-end product design for
                  sustainability-focused buy/sell/exchange and community.
                </li>
                <li>
                  Collaborated with product and engineering in sprint planning;
                  translated roadmap into user flows, wireframes, and prototypes.
                  Used PostHog and qualitative feedback to redesign checkout;
                  increased completed listings by ~30%.
                </li>
                <li>
                  Led design of Parenting Copilot and Photo-to-Publish (AI
                  listing workflow: titles, descriptions, price suggestions from
                  photos), reducing listing time from ~3–5 minutes and balancing
                  AI automation with user control.
                </li>
                <li>
                  Proposed free-item community exchange for lower-income
                  families. Built component library and Figma specs for 8
                  engineers; detailed handoff for AI listings, messaging, and
                  transactions.
                </li>
              </ul>
            </div>

            <div>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <span className="font-medium text-stone-900">
                  Product Designer
                </span>
                <span className="text-sm text-stone-500">Jul 2024 – Nov 2025</span>
              </div>
              <p className="text-sm text-stone-600">
                Turn Cloud Technology Service Taiwan · Taipei, Taiwan
              </p>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-stone-700 leading-relaxed">
                <li>
                  End-to-end UX for Taiwan Ministry Invoice App (nationwide
                  public service); redesigned auth, clarified login terminology,
                  added biometric login; moderated prototype testing (~88%
                  aggregate task success, per-task rates in study docs).
                </li>
                <li>
                  30+ user research sessions (focus groups, 1:1) across
                  teenagers, seniors, foreigners, visually impaired; journey maps,
                  personas, functional maps, prototypes for government
                  stakeholder approval.
                </li>
                <li>
                  Multi-mode UI for different user groups; WCAG and Taiwan
                  Ministry of Digital Affairs certification support.
                </li>
                <li>
                  Consumer mobile and internal government dashboards; 50+
                  component design system (iOS guidelines); Baskin-Robbins
                  Taiwan membership platform (points, vouchers, POS).
                </li>
              </ul>
            </div>

            <div>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <span className="font-medium text-stone-900">
                  UX Designer (Fixed-term)
                </span>
                <span className="text-sm text-stone-500">Feb 2024 – Jun 2024</span>
              </div>
              <p className="text-sm text-stone-600">YK Labs · Los Angeles, CA (Remote)</p>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-stone-700 leading-relaxed">
                <li>
                  Sole UX designer for PerfectInterview.ai (AI mock interview
                  platform). Heuristic eval and usability testing; redesigned
                  onboarding — full mock interview completion +35%. Launched
                  marketing site in Framer.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-xs font-medium uppercase tracking-widest text-stone-500 border-b border-stone-200 pb-2">
            Education
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-stone-700">
            <li>
              <span className="font-medium text-stone-900">BA New Media Studies</span>
              , University of Toronto · Sep 2019 – Jun 2024
            </li>
            <li>
              <span className="font-medium text-stone-900">UX Design Diploma</span>
              , BrainStation · Apr 2023 – Jul 2023
            </li>
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="text-xs font-medium uppercase tracking-widest text-stone-500 border-b border-stone-200 pb-2">
            Skills
          </h2>
          <p className="mt-4 text-sm text-stone-600 leading-relaxed">
            Figma, FigJam, Adobe Photoshop, Illustrator, Canva, Miro, Notion,
            Framer, Lovable · Wireframing, prototyping, user research, usability
            testing, design systems, accessibility, journey mapping, personas ·
            PostHog, Google Analytics · Agile, cross-functional collaboration
          </p>
        </section>

        <div className="mt-12 pt-8 border-t border-stone-200">
          <p className="text-xs text-stone-500 mb-2">
            <a
              href="/AngelaYang_Resume.pdf"
              download="AngelaYang_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-stone-600 underline decoration-stone-300 underline-offset-2 hover:text-stone-900 hover:decoration-stone-500"
            >
              PDF resume
            </a>{" "}
            — tailored version for download or print.
          </p>
          <Link
            href="/"
            className="text-sm font-medium text-stone-600 hover:text-stone-900"
          >
            ← Back to work
          </Link>
        </div>
      </div>
    </div>
  );
}
