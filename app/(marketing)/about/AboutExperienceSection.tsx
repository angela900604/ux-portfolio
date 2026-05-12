import {
  ABOUT_EXPERIENCE,
  type AboutExperienceRow,
} from "@/lib/about-experience";
import { MARKETING_SECTION_TITLE_CLASS } from "@/lib/marketing-section-title";

const HOVER_NAV_BLUE =
  "transition hover:text-[color:var(--nav-accent-blue)]";

function ExperienceRow({ row }: { row: AboutExperienceRow }) {
  return (
    <div className="grid grid-cols-1 gap-6 border-t border-zinc-800 py-8 lg:grid-cols-[minmax(0,22rem)_1fr] lg:gap-x-12 xl:gap-x-16">
      <div className="min-w-0 space-y-1.5 font-sans">
        <p className="text-sm font-semibold text-zinc-50 sm:text-base">{row.title}</p>
        <p className="text-sm text-zinc-500">{row.company}</p>
        <p className="text-sm text-zinc-500">{row.dates}</p>
      </div>
      <p className="min-w-0 text-sm font-normal leading-relaxed text-zinc-400 sm:text-[0.9375rem]">
        {row.description}
      </p>
    </div>
  );
}

export function AboutExperienceSection({ resumeHref }: { resumeHref: string }) {
  return (
    <section className="mt-20 font-sans sm:mt-24">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <h2 className={MARKETING_SECTION_TITLE_CLASS}>Experience</h2>
        <a
          href={resumeHref}
          download
          className={`text-sm font-medium text-zinc-400 ${HOVER_NAV_BLUE} sm:text-base`}
        >
          Download CV
        </a>
      </div>

      <div className="mt-8">
        {ABOUT_EXPERIENCE.map((row) => (
          <ExperienceRow key={`${row.title}-${row.dates}-${row.company}`} row={row} />
        ))}
      </div>
    </section>
  );
}
