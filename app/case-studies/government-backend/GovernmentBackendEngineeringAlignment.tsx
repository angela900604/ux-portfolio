import type { ReactNode } from "react";
import Image from "next/image";

const ROLE_CHART_SRC = `/case-studies/government-backend/${encodeURIComponent("role chart.png")}`;

const STEPS: {
  n: string;
  title: ReactNode;
  body: ReactNode;
}[] = [
  {
    n: "01",
    title: "Turning abstract permission debates into concrete scope",
    body: (
      <>
        The first major challenge was enabling multiple departments to
        collaborate within one system while respecting each other&apos;s
        responsibilities. That challenge became the foundation for designing
        role-based access control.
      </>
    ),
  },
  {
    n: "02",
    title: "Hide, don't disable",
    body: (
      <>
        For promotion pinning, non-HQ roles had high-impact controls hidden
        entirely rather than greyed out — cleaner for civil servants, fewer
        support tickets, and a single enforcement path for the backend.
      </>
    ),
  },
  {
    n: "03",
    title: "UI never overpromises the API",
    body: (
      <>
        Reporting filters, copy, and defaults were aligned with what the API
        could actually guarantee — so the interface never offered a data slice
        the service couldn&apos;t deliver.
      </>
    ),
  },
];

export function GovernmentBackendEngineeringAlignment() {
  return (
    <div className="space-y-10">
      <ol className="grid w-full max-w-6xl list-none grid-cols-1 gap-8 p-0 md:grid-cols-3 md:gap-6 lg:gap-8">
        {STEPS.map((s) => (
          <li
            key={s.n}
            className="min-w-0 border-t border-zinc-800/80 pt-6 first:border-t-0 first:pt-0 md:border-t-0 md:border-l md:pt-0 md:pl-6 md:first:border-l-0 md:first:pl-0"
          >
            <div className="flex flex-col gap-3">
              <span className="font-mono text-sm font-semibold tabular-nums text-[#05C3DD]">
                {s.n}
              </span>
              <h3 className="text-base font-semibold leading-snug tracking-tight text-zinc-100 sm:text-lg">
                {s.title}
              </h3>
              <p className="text-sm leading-relaxed text-zinc-400 sm:text-[15px]">
                {s.body}
              </p>
            </div>
          </li>
        ))}
      </ol>

      <figure className="space-y-4">
        <p className="max-w-3xl text-sm leading-relaxed text-zinc-400 sm:text-[15px]">
          I defined a clear set of principles for access: which roles could see
          which features, and how permissions should differ. If a role had no
          access to a feature, that feature simply did not appear in their
          sidebar.
        </p>
        <div className="overflow-x-auto rounded-xl border border-zinc-800 bg-zinc-900/30">
          <Image
            src={ROLE_CHART_SRC}
            alt="Role-based access chart: main functions, sub-functions, and permissions by Center, NTA HQ, NTA branches and offices, Printing, and Tax administration"
            width={3949}
            height={1471}
            className="h-auto w-full min-w-[960px] max-w-none"
            unoptimized
            sizes="(min-width: 1152px) 72rem, 100vw"
          />
        </div>
      </figure>
    </div>
  );
}
