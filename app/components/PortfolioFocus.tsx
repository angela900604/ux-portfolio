import { FadeInSection } from "./FadeInSection";

/** One line each — no category labels or body copy */
const LINES = [
  "iOS & mobile — native flows, accessibility, handoff engineering can build.",
  "AI & enterprise — dense admin, permissions, and UI that stays calm at scale.",
  "Research — interviews and moderated tests that turn debate into decisions.",
] as const;

export function PortfolioFocus() {
  return (
    <section
      className="border-b border-zinc-800"
      aria-labelledby="portfolio-focus-heading"
    >
      <div className="mx-auto max-w-[1440px] px-6 sm:px-[100px] py-12 sm:py-16">
        <FadeInSection>
          <h2
            id="portfolio-focus-heading"
            className="text-2xl font-semibold tracking-tight text-zinc-100 sm:text-3xl md:text-[2rem]"
          >
            What I specialize in
          </h2>
          <ul className="mt-8 max-w-3xl space-y-4 text-base leading-relaxed text-zinc-300 sm:text-lg">
            {LINES.map((line) => (
              <li key={line} className="flex gap-3">
                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500/80" />
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </FadeInSection>
      </div>
    </section>
  );
}
