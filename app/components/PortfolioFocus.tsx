import { SITE_SHELL_CONTAINER } from "@/lib/site-shell";
import { FadeInSection } from "./FadeInSection";
import {
  SPECIALIZE_PILLARS,
  specializeSectionIntro,
} from "../content/specialize";

const SECTION_TITLE =
  "text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-[1.08] tracking-tight text-zinc-100";

const BODY =
  "text-[15px] sm:text-[16px] leading-relaxed text-zinc-400";

export function PortfolioFocus() {
  return (
    <section
      className="border-b border-zinc-800"
      aria-labelledby="portfolio-focus-heading"
    >
      <div
        className={`${SITE_SHELL_CONTAINER} py-16 sm:py-20 lg:py-[120px]`}
      >
        <div className="mb-12 grid gap-8 lg:mb-16 lg:grid-cols-2 lg:items-start lg:gap-16">
          <FadeInSection>
            <h2 id="portfolio-focus-heading" className={SECTION_TITLE}>
              What I specialize in
            </h2>
          </FadeInSection>
          <FadeInSection delay={0.08}>
            <p className={`${BODY} max-w-xl text-pretty text-zinc-300`}>
              {specializeSectionIntro}
            </p>
          </FadeInSection>
        </div>

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {SPECIALIZE_PILLARS.map((pillar, i) => (
            <li key={pillar.title} className="h-full min-h-0">
              <FadeInSection className="h-full" delay={i * 0.08}>
                <div className="flex h-full min-h-0 flex-col rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 sm:p-8">
                  <h3 className="text-lg font-semibold tracking-tight text-zinc-100 sm:text-xl">
                    {pillar.title}
                  </h3>
                  <p className="mt-4 flex-1 text-[15px] leading-relaxed text-zinc-300 sm:text-[16px]">
                    {pillar.summary}
                  </p>
                  {pillar.details.length > 0 ? (
                    <p className="mt-5 border-t border-zinc-800/80 pt-5 text-[14px] leading-relaxed text-zinc-400 sm:text-[15px]">
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
