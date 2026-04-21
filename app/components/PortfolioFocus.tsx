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
        </FadeInSection>

        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {SPECIALIZE_PILLARS.map((pillar, i) => (
            <li key={pillar.title} className="h-full min-h-0">
              <FadeInSection className="h-full" delay={0.05 + i * 0.06}>
                <div className="flex h-full min-h-0 flex-col rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 sm:p-8">
                  <h3 className="text-lg font-semibold tracking-tight text-zinc-100 sm:text-xl">
                    {pillar.title}
                  </h3>
                  <p className="mt-4 flex-1 text-base leading-relaxed text-zinc-300 sm:text-lg">
                    {pillar.summary}
                  </p>
                  {pillar.details.length > 0 ? (
                    <p className="mt-5 border-t border-zinc-800/80 pt-5 text-sm leading-relaxed text-zinc-400 sm:text-base">
                      {pillar.details.join(" ")}
                    </p>
                  ) : null}
                </div>
              </FadeInSection>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
