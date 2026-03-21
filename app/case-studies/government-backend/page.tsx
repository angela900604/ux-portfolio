import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Role-Based Government Backend (600+ Staff) | Angela Yang",
  description:
    "Senior product design for a Ministry of Finance operations platform: RBAC, unified workflows, and measurable gains in speed and data accuracy for 600+ staff across four departments.",
};

const HERO = "/case-studies/government-backend/hero.png";

function CaseImage({
  src,
  alt,
  caption,
  aspect = "wide",
  fullBleed = false,
}: {
  src: string;
  alt: string;
  caption?: string;
  aspect?: "video" | "wide";
  fullBleed?: boolean;
}) {
  const aspectClass = aspect === "wide" ? "aspect-[21/9]" : "aspect-video";
  return (
    <figure className="space-y-2">
      <div
        className={`relative w-full ${aspectClass} overflow-hidden rounded-2xl ${
          fullBleed
            ? "bg-zinc-950"
            : "bg-zinc-800/80 border border-zinc-700/50"
        }`}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className={
            fullBleed
              ? "object-cover object-center"
              : "object-contain p-4 sm:p-6"
          }
          sizes="(max-width: 1440px) 100vw, 1240px"
        />
      </div>
      {caption && (
        <figcaption className="text-xs text-zinc-500 max-w-2xl">{caption}</figcaption>
      )}
    </figure>
  );
}

export default function GovernmentBackendCaseStudy() {
  return (
    <article className="min-h-screen bg-zinc-950 text-zinc-100">
      <header className="border-b border-zinc-800">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-[100px] py-16 sm:py-24">
          <div className="flex flex-wrap gap-2 text-xs uppercase tracking-widest text-zinc-500 mb-6">
            <span>Case Study</span>
            <span className="text-zinc-600">·</span>
            <span>Public Service</span>
            <span className="text-zinc-600">·</span>
            <span>Enterprise System</span>
          </div>
          <h1 className="font-semibold text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight max-w-3xl">
            Role-based backend for 600+ government staff
          </h1>
          <p className="mt-4 text-xl text-zinc-400 max-w-2xl">
            Administrative platform for the Ministry of Finance’s uniform-invoice
            lottery redemption operations—one system of record, explicit
            permissions, and workflows that scale across departments.
          </p>
          <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-2 text-sm">
            <div>
              <dt className="text-zinc-500 uppercase tracking-wider">Role</dt>
              <dd className="text-zinc-200">Senior Product Designer</dd>
            </div>
            <div>
              <dt className="text-zinc-500 uppercase tracking-wider">Scale</dt>
              <dd className="text-zinc-200">600+ users · 4 departments</dd>
            </div>
            <div>
              <dt className="text-zinc-500 uppercase tracking-wider">Surface</dt>
              <dd className="text-zinc-200">Web admin · responsive</dd>
            </div>
            <div>
              <dt className="text-zinc-500 uppercase tracking-wider">Client</dt>
              <dd className="text-zinc-200">Ministry of Finance, R.O.C.</dd>
            </div>
          </dl>
          <div className="mt-12">
            <CaseImage
              src={HERO}
              alt="Desktop dashboard and mobile view of the government backend operations platform"
              caption="Unified admin: desktop operations view with a responsive companion for field and on-call workflows."
              aspect="wide"
              fullBleed
            />
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-[1440px] px-6 sm:px-[100px] py-12 sm:py-16 space-y-20">
        {/* 1. Context */}
        <section>
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            1 · Context
          </span>
          <h2 className="mt-2 text-xl font-semibold text-zinc-100">
            Operations software where mistakes become compliance risk
          </h2>
          <div className="mt-5 space-y-4 text-zinc-300 leading-relaxed max-w-3xl">
            <p>
              This backend supports staff who review applications, reconcile
              payouts, and audit activity around Taiwan’s uniform-invoice lottery
              redemption. Work spans four departments with different mandates but
              overlapping data—exactly where informal tools and “who has the latest
              spreadsheet?” create drift.
            </p>
            <p>
              The product problem wasn’t a missing feature list; it was{" "}
              <span className="text-zinc-100">
                fragmented tooling, unclear ownership of data, and permission
                models that didn’t match how power and responsibility actually
                flow in government operations
              </span>
              . That’s why the interface had to encode policy—not just display it.
            </p>
          </div>
        </section>

        {/* 2. Problem */}
        <section>
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            2 · Problem
          </span>
          <h2 className="mt-2 text-xl font-semibold text-zinc-100">
            Manual glue, inconsistent truth, and access that was either too loose
            or too blunt
          </h2>
          <ul className="mt-5 space-y-3 text-zinc-300 leading-relaxed max-w-3xl list-none">
            <li className="flex gap-3">
              <span className="text-violet-400 font-semibold shrink-0">
                Workflow cost
              </span>
              <span>
                Staff re-keyed information across tools and cross-checked status by
                message chains. High-throughput periods meant errors scaled with
                volume—not with headcount.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-violet-400 font-semibold shrink-0">
                Source of truth
              </span>
              <span>
                Multiple partial systems produced conflicting application states.
                Managers couldn’t trust dashboards because metrics weren’t tied to
                a single lifecycle model.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-violet-400 font-semibold shrink-0">
                Access control
              </span>
              <span>
                Sensitive financial and citizen-adjacent data required{" "}
                <span className="text-zinc-100">
                  granular, auditable permissions
                </span>
                —not role titles copied from an org chart. “Admin” as a catch-all
                was both risky and unusable at scale.
              </span>
            </li>
          </ul>
        </section>

        {/* 3. My Role */}
        <section>
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            3 · My role
          </span>
          <h2 className="mt-2 text-xl font-semibold text-zinc-100">
            End-to-end product design for a system that has to ship and stay
            governable
          </h2>
          <div className="mt-5 space-y-4 text-zinc-300 leading-relaxed max-w-3xl">
            <p>I owned:</p>
            <ul className="list-disc pl-5 space-y-2 marker:text-zinc-500">
              <li>
                <span className="text-zinc-100">Research with staff</span>{" "}
                (interviews and workflow observation) to map real tasks, exceptions,
                and escalation—not idealized process diagrams.
              </li>
              <li>
                <span className="text-zinc-100">Information architecture</span> for
                navigation, record lifecycles, and cross-department handoffs.
              </li>
              <li>
                <span className="text-zinc-100">UX and UI</span> for dense,
                policy-heavy screens: tables, filters, bulk actions, and
                confirmation patterns that reduce wrong clicks under time pressure.
              </li>
              <li>
                <span className="text-zinc-100">Design system foundations</span> so
                new modules don’t invent new interaction models every quarter.
              </li>
            </ul>
            <p className="text-zinc-400 text-sm">
              Engineering and compliance were embedded partners; my job was to make
              constraints visible in the UI so policy, security, and usability
              didn’t trade off in the dark.
            </p>
          </div>
        </section>

        {/* 4. Key Decisions */}
        <section>
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            4 · Key decisions
          </span>
          <h2 className="mt-2 text-xl font-semibold text-zinc-100">
            Product architecture choices, not decoration
          </h2>
          <div className="mt-6 space-y-8 max-w-3xl">
            <div>
              <h3 className="text-sm font-semibold text-zinc-100">
                Role-based access control (RBAC) as the spine
              </h3>
              <p className="mt-2 text-zinc-300 leading-relaxed">
                I modeled permissions as{" "}
                <span className="text-zinc-100">
                  capabilities tied to tasks and data domains
                </span>
                —exposed as a matrix (roles × actions) leadership could review.
                That turned “who can do what” from tribal knowledge into an
                inspectable contract: critical for audits and for onboarding 600+
                people with mixed digital literacy.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-zinc-100">
                One operational dashboard for situational awareness
              </h3>
              <p className="mt-2 text-zinc-300 leading-relaxed">
                Department heads needed a single place to see backlog, SLA risk,
                and anomalies—not exports emailed at end of day. The dashboard
                anchored KPIs to the same record model staff used in detail views,
                so “pending review” in a chart meant the same thing as “pending”
                in a row—reducing debate in meetings.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-zinc-100">
                Standardized components for repeatable data entry
              </h3>
              <p className="mt-2 text-zinc-300 leading-relaxed">
                High-frequency forms moved to{" "}
                <span className="text-zinc-100">
                  grouped field patterns, inline validation, and explicit save vs.
                  submit
                </span>
                —so partial work didn’t pollute production state. The goal was to
                remove ambiguity at the moment of entry, where most errors originate.
              </p>
            </div>
          </div>
        </section>

        {/* 5. Solution */}
        <section>
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            5 · Solution
          </span>
          <h2 className="mt-2 text-xl font-semibold text-zinc-100">
            What shipped: clarity under load, trust through structure
          </h2>
          <div className="mt-5 space-y-4 text-zinc-300 leading-relaxed max-w-3xl">
            <p>
              <span className="text-zinc-100">User management</span> consolidated
              staff records with searchable tables, status (active/inactive), and
              side-panel editing so role changes didn’t require duplicating
              accounts or offline requests.
            </p>
            <p>
              <span className="text-zinc-100">Core workflows</span> moved from
              text-heavy, flat layouts to a predictable shell: primary navigation,
              contextual secondary actions, and forms broken into scannable groups—
              reducing cognitive load when a case file spans many fields and
              attachments.
            </p>
            <p>
              <span className="text-zinc-100">Managers</span> got chart-backed
              summaries (e.g. total applications, pending reviews) tied to filters
              they could drill from—so review meetings started from shared numbers,
              not competing spreadsheets.
            </p>
            <p className="text-zinc-400 text-sm">
              Visual language stayed enterprise-blue and restrained: the point was
              legibility and auditability, not brand novelty.
            </p>
          </div>
        </section>

        {/* 6. Impact */}
        <section>
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            6 · Impact
          </span>
          <h2 className="mt-2 text-xl font-semibold text-zinc-100">
            Measured efficiency and fewer failure modes at scale
          </h2>
          <p className="mt-4 text-zinc-300 leading-relaxed max-w-3xl">
            After rollout and stabilization, operations metrics moved in the
            direction the product was built for: less manual repetition, fewer
            inconsistent records, and faster alignment between departments because
            the system—not Slack—carried state.
          </p>
          <div className="mt-8 rounded-2xl bg-zinc-800/60 border border-zinc-700/50 p-8 sm:p-10 max-w-3xl">
            <ul className="space-y-4 text-zinc-200">
              <li className="flex gap-3">
                <span className="text-emerald-400 font-semibold shrink-0">
                  ~30% less time
                </span>
                <span>on manual data entry and cross-tool reconciliation.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-400 font-semibold shrink-0">
                  ~99% accuracy
                </span>
                <span>
                  on key operational datasets after consolidation—fewer downstream
                  corrections and exception handling.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-400 font-semibold shrink-0">
                  600+ staff
                </span>
                <span>
                  onboarded into a unified environment with role-appropriate
                  access—scaling without turning everyone into an “admin.”
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-400 font-semibold shrink-0">
                  Trust & collaboration
                </span>
                <span>
                  Qualitatively, teams reported higher confidence in shared numbers
                  and smoother handoffs—because the UI reflected one lifecycle, not
                  parallel unofficial truths.
                </span>
              </li>
            </ul>
          </div>
        </section>

        <section className="border-t border-zinc-800 pt-12">
          <Link
            href="/"
            className="text-sm font-medium text-zinc-400 hover:text-zinc-100 transition"
          >
            ← Back to work
          </Link>
        </section>
      </div>
    </article>
  );
}
