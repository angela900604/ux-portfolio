import {
  ABOUT_EXPERIENCE,
  type AboutExperienceRow,
} from "@/lib/about-experience";

const HOVER_NAV_BLUE =
  "transition hover:text-[color:var(--nav-accent-blue)]";

function ExperienceRow({ row }: { row: AboutExperienceRow }) {
  return (
    <div className="grid grid-cols-1 gap-6 border-t border-zinc-800 py-8 lg:grid-cols-[minmax(0,13rem)_1fr] lg:gap-x-16">
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
    <section className="mt-12 font-sans">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-50 sm:text-3xl">
          Experience
        </h2>
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
