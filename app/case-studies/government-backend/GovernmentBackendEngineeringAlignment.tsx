import type { ReactNode } from "react";

function RbacCell({ granted }: { granted: boolean }) {
  return (
    <td className="px-2 py-2.5 text-center align-middle text-sm tabular-nums">
      {granted ? (
        <span
          className="inline-flex h-6 w-6 items-center justify-center rounded bg-emerald-600 text-xs font-semibold text-white"
          aria-label="Granted"
        >
          ✓
        </span>
      ) : (
        <span className="text-zinc-600">—</span>
      )}
    </td>
  );
}

function RbacMatrixTable() {
  return (
    <div className="overflow-x-auto rounded-xl border border-zinc-800">
      <table className="min-w-[960px] w-full border-collapse text-left text-sm">
        <thead className="bg-zinc-950 text-zinc-100">
          <tr>
            <th className="border border-zinc-800 px-3 py-2.5 font-semibold">
              Main function
            </th>
            <th className="border border-zinc-800 px-3 py-2.5 font-semibold">
              Sub-function
            </th>
            <th className="border border-zinc-800 px-2 py-2.5 text-center font-semibold">
              Center
            </th>
            <th className="border border-zinc-800 px-2 py-2.5 text-center font-semibold">
              NTA HQ
            </th>
            <th className="border border-zinc-800 px-2 py-2.5 text-center font-semibold">
              NTA branches &amp; offices
            </th>
            <th className="border border-zinc-800 px-2 py-2.5 text-center font-semibold">
              Printing
            </th>
            <th className="border border-zinc-800 px-2 py-2.5 text-center font-semibold">
              Tax admin.
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-zinc-800 bg-zinc-900/30 text-zinc-300">
          <tr className="align-top">
            <td
              className="border border-zinc-800 px-3 py-2.5 text-zinc-200"
              rowSpan={2}
            >
              01 Basic information
            </td>
            <td className="border border-zinc-800 px-3 py-2.5">
              1_1 Terms &amp; privacy · 1_2 Mobile barcode prize remittance notice
            </td>
            <RbacCell granted />
            <RbacCell granted={false} />
            <RbacCell granted={false} />
            <RbacCell granted={false} />
            <RbacCell granted={false} />
          </tr>
          <tr className="align-top">
            <td className="border border-zinc-800 px-3 py-2.5">
              1_3 App version management
            </td>
            <RbacCell granted />
            <RbacCell granted={false} />
            <RbacCell granted={false} />
            <RbacCell granted={false} />
            <RbacCell granted={false} />
          </tr>
          <tr className="align-top">
            <td
              className="border border-zinc-800 px-3 py-2.5 text-zinc-200"
              rowSpan={2}
            >
              02 Data statistics
            </td>
            <td className="border border-zinc-800 px-3 py-2.5">
              2_1 First-time lottery app users
            </td>
            <RbacCell granted />
            <RbacCell granted />
            <RbacCell granted />
            <RbacCell granted />
            <RbacCell granted />
          </tr>
          <tr className="align-top">
            <td className="border border-zinc-800 px-3 py-2.5">
              2_2 Lottery app member count
            </td>
            <RbacCell granted />
            <RbacCell granted />
            <RbacCell granted />
            <RbacCell granted />
            <RbacCell granted />
          </tr>
          <tr className="align-top">
            <td
              className="border border-zinc-800 px-3 py-2.5 text-zinc-200"
              rowSpan={3}
            >
              03 Notifications
            </td>
            <td className="border border-zinc-800 px-3 py-2.5">
              3_1 Announcements
            </td>
            <RbacCell granted />
            <RbacCell granted />
            <RbacCell granted={false} />
            <RbacCell granted={false} />
            <RbacCell granted={false} />
          </tr>
          <tr className="align-top">
            <td className="border border-zinc-800 px-3 py-2.5">
              3_2 Personal notifications
            </td>
            <RbacCell granted />
            <RbacCell granted />
            <RbacCell granted={false} />
            <RbacCell granted={false} />
            <RbacCell granted={false} />
          </tr>
          <tr className="align-top">
            <td className="border border-zinc-800 px-3 py-2.5">
              3_3 Homepage pinned notice
            </td>
            <RbacCell granted />
            <RbacCell granted />
            <RbacCell granted={false} />
            <RbacCell granted={false} />
            <RbacCell granted={false} />
          </tr>
          <tr className="align-top">
            <td
              className="border border-zinc-800 px-3 py-2.5 text-zinc-200"
              rowSpan={2}
            >
              04 Promotion zone
            </td>
            <td className="border border-zinc-800 px-3 py-2.5">
              4_1 Publish promo content
            </td>
            <RbacCell granted={false} />
            <RbacCell granted />
            <RbacCell granted />
            <RbacCell granted={false} />
            <RbacCell granted={false} />
          </tr>
          <tr className="align-top">
            <td className="border border-zinc-800 px-3 py-2.5">
              4_2 Pin promo content
            </td>
            <RbacCell granted={false} />
            <RbacCell granted />
            <RbacCell granted={false} />
            <RbacCell granted={false} />
            <RbacCell granted={false} />
          </tr>
        </tbody>
      </table>
    </div>
  );
}

const STEPS: {
  n: string;
  title: ReactNode;
  body: ReactNode;
}[] = [
  {
    n: "01",
    title: "把抽象的權限爭議變成可以討論的具體東西",
    body: (
      <>
        The first major challenge was enabling multiple departments to
        collaborate within one system while respecting each other&apos;s
        responsibilities. That challenge became the foundation for designing
        role-based access control.
        <br />
        <br />I defined a clear set of principles for access: which roles could
        see which features, and how permissions should differ. If a role had no
        access to a feature, that feature simply did not appear in their sidebar.
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
              <span className="font-mono text-sm font-semibold tabular-nums text-violet-400">
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

      <figure className="space-y-3">
        <RbacMatrixTable />
      </figure>
    </div>
  );
}
