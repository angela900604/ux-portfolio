import { FadeInSection } from "./FadeInSection";
import {
  SPECIALIZE_PILLARS,
  specializeSectionIntro,
} from "../content/specialize";

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
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-zinc-400 sm:text-lg">
            {specializeSectionIntro}
          </p>
          <ul className="mt-10 max-w-3xl space-y-8 text-base leading-relaxed text-zinc-300 sm:text-lg">
            {SPECIALIZE_PILLARS.map((pillar) => (
              <li key={pillar.title} className="flex gap-3">
                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500/80" />
                <div className="min-w-0">
                  <p className="font-semibold text-zinc-100">{pillar.title}</p>
                  <p className="mt-2 text-zinc-300">{pillar.summary}</p>
                </div>
              </li>
            ))}
          </ul>
        </FadeInSection>
      </div>
    </section>
  );
}
