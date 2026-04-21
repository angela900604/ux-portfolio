import { FadeInSection } from "./FadeInSection";

const PILLARS = [
  {
    tag: "iOS & mobile",
    title: "Native-feeling apps",
    body: "Ship-ready UI for public and consumer iOS—flows, accessibility, and handoff that engineering can build.",
  },
  {
    tag: "AI & enterprise",
    title: "Complex systems, calm surfaces",
    body: "Dense admin and AI-assisted products: permissions, data-heavy screens, and patterns that scale without noise.",
  },
  {
    tag: "Research",
    title: "Interviews & moderated tests",
    body: "Discovery interviews, usability sessions, and evidence that turns stakeholder debates into decisions.",
  },
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
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-zinc-400 sm:text-lg">
            The same thread runs through every case study:{" "}
            <span className="text-zinc-200">
              research first, then structure, then pixels
            </span>
            —whether the surface is a consumer iPhone app, an AI marketplace, or a
            600-seat government backend.
          </p>
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PILLARS.map((item) => (
              <li
                key={item.tag}
                className="rounded-2xl border border-zinc-800 bg-zinc-900/35 px-5 py-6 sm:px-6 sm:py-7"
              >
                <p className="text-[10px] font-semibold uppercase tracking-widest text-emerald-400/90">
                  {item.tag}
                </p>
                <p className="mt-3 text-lg font-semibold tracking-tight text-zinc-100">
                  {item.title}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                  {item.body}
                </p>
              </li>
            ))}
          </ul>
        </FadeInSection>
      </div>
    </section>
  );
}
