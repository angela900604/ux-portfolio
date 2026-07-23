import {
  ABOUT_EXPERIENCE,
  type AboutExperienceRow,
} from "@/lib/about-experience";
import { MARKETING_SECTION_TITLE_CLASS } from "@/lib/marketing-section-title";

function ExperienceRow({ row }: { row: AboutExperienceRow }) {
  return (
    <div className="grid grid-cols-1 gap-6 border-t border-ink-line py-8 lg:grid-cols-[minmax(0,17rem)_1fr] lg:gap-x-10 xl:grid-cols-[minmax(0,18rem)_1fr] xl:gap-x-14">
      <div className="min-w-0 space-y-1.5 font-sans">
        <p className="text-sm font-medium text-ink sm:text-base">{row.title}</p>
        <p className="text-sm font-normal text-ink-muted">{row.company}</p>
        <p className="text-sm font-normal text-ink-muted">{row.dates}</p>
      </div>
      <p className="min-w-0 text-sm font-normal leading-relaxed text-ink-soft sm:text-[0.9375rem]">
        {row.description}
      </p>
    </div>
  );
}

export function AboutExperienceSection() {
  return (
    <section className="mt-20 font-sans sm:mt-24">
      <h2 className={MARKETING_SECTION_TITLE_CLASS}>Experience</h2>

      <div className="mt-8">
        {ABOUT_EXPERIENCE.map((row) => (
          <ExperienceRow key={`${row.title}-${row.dates}-${row.company}`} row={row} />
        ))}
      </div>
    </section>
  );
}
