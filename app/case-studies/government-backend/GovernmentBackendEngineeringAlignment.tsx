import type { ReactNode } from "react";

function IconTableGrid({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  );
}

function IconEyeOff({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49" />
      <path d="M14.084 14.158a3 3 0 0 1-4.242-4.242" />
      <path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.008-5.063" />
      <path d="m2 2 20 20" />
    </svg>
  );
}

function IconMessage({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

function AlignmentDonut() {
  return (
    <div
      className="relative mx-auto aspect-square w-full max-w-[280px] shrink-0 sm:max-w-[320px]"
      role="img"
      aria-label="Three-part alignment model: workshop matrix for concrete debates, hide instead of disable for risky controls, and UI scoped to API guarantees."
    >
      <div
        className="absolute inset-0 rounded-full shadow-[0_0_0_1px_rgba(255,255,255,0.06)_inset]"
        style={{
          background:
            "conic-gradient(from -90deg, rgb(139 92 246) 0deg 120deg, rgb(14 165 233) 120deg 240deg, rgb(245 158 11) 240deg 360deg)",
        }}
      />
      <div className="absolute inset-[20%] flex items-center justify-center rounded-full bg-white shadow-[inset_0_1px_0_0_rgba(0,0,0,0.06)] ring-1 ring-zinc-900/10">
        <div className="flex items-center gap-2.5 px-3" aria-hidden>
          <IconTableGrid className="text-violet-600" />
          <IconEyeOff className="text-sky-600" />
          <IconMessage className="text-amber-600" />
        </div>
      </div>
    </div>
  );
}

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
      <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-14">
        <AlignmentDonut />
        <ol className="min-w-0 flex-1 list-none space-y-8 p-0">
          {STEPS.map((s) => (
            <li key={s.n} className="flex gap-4">
              <span className="mt-0.5 shrink-0 font-mono text-sm font-semibold tabular-nums text-violet-400">
                {s.n}
              </span>
              <div className="min-w-0 space-y-2">
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
      </div>

      <figure className="space-y-3">
        <h4 className="text-sm font-semibold text-zinc-200">
          RBAC in the UI · Role-based visibility
        </h4>
        <p className="max-w-3xl text-sm text-zinc-500">
          Matrix of main vs. sub-functions by organization (from stakeholder
          definitions): checkmarks indicate access; dashes mean the feature is not
          available for that unit.
        </p>
        <RbacMatrixTable />
        <figcaption className="text-xs leading-relaxed text-zinc-500">
          Stakeholder workshop matrix — same rows used in Figma flows and grant
          dictionary for engineering handoff.
        </figcaption>
      </figure>
    </div>
  );
}
