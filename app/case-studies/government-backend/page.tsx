import type { ReactNode } from "react";
import Link from "next/link";
import { CaseStudyAtAGlance } from "../_components/CaseStudyAtAGlance";
import { CaseStudyContentLayout } from "../_components/CaseStudyContentLayout";
import { CaseStudyPrevNext } from "../_components/CaseStudyPrevNext";
import { CaseStudyScanSummary } from "../_components/CaseStudyScanSummary";
import { FlatAppShot, WideFigure } from "../e-invoice-app/EInvoiceFigures";

export const metadata = {
  title: "Role-Based Government Backend (600+ Staff) | Angela Yang",
  description:
    "Backend platform for the Ministry of Finance uniform invoice lottery redemption app: role-based access, reporting, and version control for 600+ government staff (July–September 2025).",
};

const ASSET = (name: string) => `/case-studies/government-backend/${name}`;

const AT_A_GLANCE_ITEMS = [
  { label: "Timeline", value: "July – September 2025" },
  { label: "Role", value: "Lead UX/UI Designer" },
  { label: "Project type", value: "Backend platform" },
  {
    label: "Focus",
    value:
      "Client-driven end-to-end product design · Cross-functional collaboration",
  },
] as const;

const GOV_BACKEND_TOC = [
  { id: "summary", label: "Summary" },
  { id: "project-background", label: "Project background" },
  { id: "rbac", label: "Role-based access" },
  { id: "iterations", label: "Key iterations" },
  { id: "reflection", label: "Reflection" },
  { id: "final-result", label: "Final result" },
] as const;

const GOV_BACKEND_SCAN_SUMMARY = [
  "Lead UX/UI for the Ministry of Finance uniform invoice lottery redemption backend—role-based access, operational reporting, and workflows for 600+ government staff.",
  "Designed a permission model that hides irrelevant features and restricts high-impact actions by role so teams can work in parallel without breaking public-facing content.",
  "Redesigned reporting into actionable dashboards with weekly/monthly views, filters, and CSV export so staff could prep meetings and audits with less reliance on engineering.",
  "Delivered end-to-end product design with PM and engineering partners on a July–September 2025 timeline.",
] as const;

function Metric({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-md bg-emerald-500/15 px-1.5 py-0.5 font-semibold text-emerald-200/95 tabular-nums">
      {children}
    </span>
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

export default function GovernmentBackendCaseStudy() {
  return (
    <article className="min-h-screen bg-zinc-950 text-zinc-100">
      <header className="border-b border-zinc-800">
        <div className="mx-auto max-w-[1280px] px-6 sm:px-[100px] py-16 sm:py-24">
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
            Backend platform for the Ministry of Finance&apos;s Uniform Invoice
            Lottery Redemption App—designed role-based access and reporting tools
            for <Metric>600+</Metric> government staff, enabling faster invoice
            management and reducing errors.
          </p>

          <div className="mt-8">
            <WideFigure
              src={ASSET("hero-platform-overview.png")}
              alt="Government backend platform overview — dashboards and navigation"
            />
          </div>

          <div className="mt-8">
            <CaseStudyAtAGlance items={AT_A_GLANCE_ITEMS} />
          </div>

          <div className="mt-8 space-y-3">
            <p className="text-xs font-medium uppercase tracking-widest text-zinc-500">
              Impact summary
            </p>
            <div className="grid gap-3 sm:grid-cols-2 sm:max-w-2xl">
              <div className="rounded-xl border border-zinc-800/90 bg-zinc-900/50 px-4 py-3">
                <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                  Coverage
                </p>
                <p className="mt-1 text-sm font-medium text-zinc-100">
                  600+ staff · role-based access
                </p>
              </div>
              <div className="rounded-xl border border-zinc-800/90 bg-zinc-900/50 px-4 py-3">
                <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                  Shipped
                </p>
                <p className="mt-1 text-sm font-medium text-zinc-100">
                  July–September 2025
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <CaseStudyScanSummary items={GOV_BACKEND_SCAN_SUMMARY} />
          </div>
        </div>
      </header>

      <CaseStudyContentLayout toc={GOV_BACKEND_TOC}>
        <section
          id="summary"
          className="scroll-mt-28 space-y-6 max-w-3xl sm:scroll-mt-32"
        >
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            Summary
          </span>
          <h2 className="text-xl font-semibold text-zinc-100">
            Supporting <Metric>600+</Metric> government staff with role-based
            access control
          </h2>
          <p className="text-zinc-300 leading-relaxed">
            I designed a role-based permission system that aligned responsibilities
            across departments. By hiding inaccessible features and limiting
            high-impact actions to specific roles, the platform enabled teams to
            work independently while preventing conflicts that could affect
            public-facing content.
          </p>
          <h2 className="text-xl font-semibold text-zinc-100 pt-2">
            Enabling self-service reporting for faster decision-making
          </h2>
          <p className="text-zinc-300 leading-relaxed">
            I redesigned reporting into an actionable dashboard with weekly and
            monthly views, time-based filters, and{" "}
            <span className="rounded-md bg-sky-500/15 px-1.5 py-0.5 font-medium text-sky-200/95">
              CSV export
            </span>
            . Staff could prepare reports independently for meetings and audits,
            reducing reliance on engineers and speeding up operational workflows.
          </p>
          <h2 className="text-xl font-semibold text-zinc-100 pt-2">
            Aligning UI decisions with system logic under tight constraints
          </h2>
          <p className="text-zinc-300 leading-relaxed">
            Working closely with engineers, I designed backend flows that balanced
            flexibility and stability—such as version control with mandatory update
            settings and build-code mapping—so critical updates could be enforced
            quickly without risking system inconsistency.
          </p>
        </section>

        <section
          id="project-background"
          className="max-w-5xl scroll-mt-28 space-y-6 sm:scroll-mt-32"
        >
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            Project background
          </span>
          <h2 className="text-xl font-semibold text-zinc-100">
            Why this platform existed
          </h2>
          <p className="text-zinc-300 leading-relaxed max-w-3xl">
            After completing the Uniform Invoice Lottery Redemption App, I also took
            on designing an entirely new backend management platform. Government
            staff needed a unified system to manage announcements, promotion
            campaigns, push notifications, data reporting, and app version updates.
          </p>
          <p className="text-zinc-300 leading-relaxed max-w-3xl">
            With over <Metric>600</Metric> staff members relying on national
            platforms, consistency and alignment were critical. During early
            discovery, staff repeatedly emphasized their need for workflows to
            feel familiar with the systems they were already using. To clarify
            their expectations, I conducted{" "}
            <Metric>3</Metric> rounds of needs interviews. These sessions helped
            me identify
            feature priorities and validate user flows before diving into design.
          </p>
          <p className="text-zinc-300 leading-relaxed max-w-3xl">
            As the sole UX/UI designer, I collaborated closely with engineers.
            Because our team had also built the app itself, we could strategically
            decide which elements should remain editable in the backend and which
            needed to stay hard-coded to maintain stability during updates. Given
            the tight timeline, I validated requirements through mockups and page
            flows rather than full functional maps. This approach sped up
            collaboration and allowed us to refine details iteratively during
            ongoing discussions with stakeholders and engineers.
          </p>

          <div className="space-y-3 pt-4">
            <h3 className="text-sm font-semibold text-zinc-100">
              Example of corresponding screens
            </h3>
            <p className="max-w-3xl text-sm text-zinc-400 leading-relaxed">
              Staff compose notification content in the backend, set publish timing,
              and schedule delivery in advance. End users receive{" "}
              <span className="text-zinc-200">push notifications</span>, then open the
              in-app <span className="text-zinc-200">notification center</span> and
              message details—aligned with those backend rules.
            </p>
            <div className="space-y-8">
              <div className="min-w-0 space-y-3">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-md bg-sky-500/20 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-sky-200">
                    Backend
                  </span>
                  <span className="text-xs text-zinc-500">
                    Admin console (staff-facing)
                  </span>
                </div>
                <WideFigure
                  borderless
                  src={ASSET("backend-notification-settings.png")}
                  alt="Backend admin: notification content and scheduled publishing"
                  caption="Backend · Notification settings (content + pre-scheduled publish time)."
                />
              </div>
              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-md bg-violet-500/20 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-violet-200">
                    App
                  </span>
                  <span className="text-xs text-zinc-500">
                    End-user mobile (triggered by backend rules)
                  </span>
                </div>
                <div className="grid grid-cols-1 justify-items-center gap-10 sm:grid-cols-3 sm:gap-6">
                  <FlatAppShot
                    uniform
                    frameless
                    src={ASSET("app-push-notification.png")}
                    alt="App: push notification on lock screen triggered by backend settings"
                    label="App · Push notification (triggered by backend)"
                  />
                  <FlatAppShot
                    uniform
                    frameless
                    src={ASSET("app-notification-list.png")}
                    alt="App: notification center list"
                    label="App · Notification center list"
                  />
                  <FlatAppShot
                    uniform
                    frameless
                    src={ASSET("app-notification-detail.png")}
                    alt="App: notification detail screen"
                    label="App · Notification Detail"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="rbac"
          className="max-w-4xl scroll-mt-28 space-y-5 sm:scroll-mt-32"
        >
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            Role-based access control
          </span>
          <h2 className="text-xl font-semibold text-zinc-100">
            Collaboration across departments—without stepping on each other
          </h2>
          <p className="text-zinc-300 leading-relaxed">
            The first major challenge was enabling multiple departments to
            collaborate within one system while respecting each other&apos;s
            responsibilities. That challenge became the foundation for designing
            role-based access control.
          </p>
          <p className="text-zinc-300 leading-relaxed">
            I defined a clear set of principles for access: which roles could see
            which features, and how permissions should differ. If a role had no
            access to a feature, that feature simply did not appear in their
            sidebar.
          </p>
          <p className="text-zinc-300 leading-relaxed">
            Some roles had partial access. For example, in the Promotion Zone
            (public education content), multiple roles could create articles, but
            only the National Tax Bureau Headquarters could pin them to the top.
            Since pinned articles directly shaped the app homepage (limited to{" "}
            <Metric>5</Metric> pinned slots), the &quot;Pin to Top&quot; button only
            appeared for that
            specific role. For all other roles, the article list showed without the
            pinning option.
          </p>
          <p className="text-zinc-300 leading-relaxed">
            This careful role definition empowered each department to work
            independently while preventing conflicts that could undermine
            credibility.
          </p>
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 space-y-4 max-w-3xl">
            <h3 className="text-sm font-semibold text-zinc-100">
              Role &amp; permission example · Promotion Zone
            </h3>
            <p className="text-zinc-300 leading-relaxed text-sm">
              <span className="text-zinc-200 font-medium">General role</span> with
              &quot;Create Article&quot; permission: users can create and manage
              promotion articles. However, the &quot;Pin to Top&quot; option is
              hidden—so they can contribute content without interfering with how
              articles are prioritized on the app homepage.
            </p>
            <p className="text-zinc-300 leading-relaxed text-sm">
              <span className="text-zinc-200 font-medium">
                National Tax Bureau Headquarters role
              </span>{" "}
              with &quot;Create Article&quot; and &quot;Pin to Top&quot;
              permissions: in addition to creating and managing promotion articles,
              this role has exclusive access to &quot;Pin to Top.&quot; Because
              pinned articles directly control up to five homepage slots, only this
              role can decide the final order of content displayed to end users.
            </p>
          </div>

          <div className="space-y-3 pt-2">
            <h3 className="text-sm font-semibold text-zinc-100">
              RBAC in the UI · Role-based visibility
            </h3>
            <p className="text-sm text-zinc-500 max-w-3xl">
              Matrix of main vs. sub-functions by organization (from stakeholder
              definitions): checkmarks indicate access; dashes mean the feature is
              not available for that unit.
            </p>
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
                      1_1 Terms &amp; privacy · 1_2 Mobile barcode prize remittance
                      notice
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
          </div>
        </section>

        <section
          id="iterations"
          className="max-w-3xl scroll-mt-28 space-y-8 sm:scroll-mt-32"
        >
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            Key design iterations
          </span>
          <h2 className="text-xl font-semibold text-zinc-100">
            Two iterations that went through the longest discussions
          </h2>
          <p className="text-zinc-300 leading-relaxed">
            There were many iterations when discussing API capabilities, data
            sources, and staffing needs. I chose the following two features because
            those iterations went through the longest discussions.
          </p>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-zinc-100">
              Design iteration 1 · Data reporting
            </h3>
            <p className="text-zinc-300 leading-relaxed">
              <span className="text-zinc-200 font-semibold">Before:</span> Reporting
              worked, but the layout made it harder to answer common questions in one
              place: how membership trended over a chosen year, how to read peaks
              quickly in meetings, and how to export without second-guessing the
              time range.
            </p>
            <p className="text-zinc-300 leading-relaxed">
              <span className="text-zinc-200 font-semibold">After:</span> I iterated
              on the same metrics with clearer filters (for example, statistical
              year), stronger chart hierarchy and hover detail, and explicit
              weekly/monthly views—so staff could prep for reviews and audits
              without rebuilding tables by hand. Engineers noted that large user
              datasets still needed sensible time bounds and export limits.
            </p>
            <p className="text-zinc-300 leading-relaxed">
              <span className="text-zinc-200 font-semibold">Impact:</span> Present{" "}
              <span className="rounded-md bg-amber-500/15 px-1.5 py-0.5 font-medium text-amber-100/90">
                weekly
              </span>{" "}
              and{" "}
              <span className="rounded-md bg-amber-500/15 px-1.5 py-0.5 font-medium text-amber-100/90">
                monthly
              </span>{" "}
              numbers in meetings without manual calculations; compare time periods
              more easily;{" "}
              <span className="rounded-md bg-sky-500/15 px-1.5 py-0.5 font-medium text-sky-200/95">
                export
              </span>{" "}
              datasets independently, reducing reliance on engineers and speeding up
              decision-making.
            </p>
          </div>

          <div className="max-w-4xl space-y-10 pt-2">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
              <WideFigure
                src={ASSET("iteration-reporting-after-1.png")}
                alt="After: reporting with statistical year filter and cumulative member bar chart for 2024"
                caption="Iteration 1 · After — clearer query + chart (statistical year &amp; monthly cumulative)."
              />
              <WideFigure
                src={ASSET("iteration-reporting-after-2.png")}
                alt="After: reporting with weekly and monthly toggles, tooltip, and CSV export"
                caption="Iteration 1 · After — weekly/monthly views, tooltips, and CSV export."
              />
            </div>
            <WideFigure
              src={ASSET("iteration-reporting-before.png")}
              alt="Before: data reporting dashboard with cumulative member count and monthly bar chart"
              caption="Iteration 1 · Data reporting — before (baseline reporting view)."
            />
          </div>

          <div className="space-y-4 max-w-3xl">
            <h3 className="text-sm font-semibold text-zinc-100">
              Design iteration 2 · App update version control
            </h3>
            <p className="text-zinc-300 leading-relaxed">
              With engineers, I aligned how the UI should surface{" "}
              <span className="text-zinc-200">mandatory vs. optional updates</span>,{" "}
              <span className="text-zinc-200">duplicate version checks</span>, and
              feedback when saves fail—so staff always understand what the system
              will do before data is committed.
            </p>
            <p className="text-zinc-300 leading-relaxed">
              The flow diagram below maps user actions to backend judgment: for
              example, whether an update is forced, whether a version number already
              exists, and how errors surface (inline validation, confirmation
              modals, success toasts). That shared picture kept UX and implementation
              in sync under tight release constraints.
            </p>
          </div>

          <div className="max-w-4xl pt-2">
            <WideFigure
              borderless
              src={ASSET("iteration-version-control-flow.png")}
              alt="Flow diagram: APP version management add and view flows with validation and system decision points"
              caption="Iteration 2 · Version control — UI flows and system judgment (add / view, validation, confirmation)."
            />
          </div>
        </section>

        <section
          id="reflection"
          className="max-w-3xl scroll-mt-28 space-y-5 sm:scroll-mt-32"
        >
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            Reflection
          </span>
          <h2 className="text-xl font-semibold text-zinc-100">
            Processes and interfaces, under constraints
          </h2>
          <p className="text-zinc-300 leading-relaxed">
            This project taught me that designing government-scale platforms
            isn&apos;t just about new features—it&apos;s about integrating with
            established habits, hierarchies, and system logic. The biggest challenge
            was balancing existing workflows with a scalable backend architecture,
            all under a tight timeline.
          </p>
          <p className="text-zinc-300 leading-relaxed">
            I made intentional trade-offs: instead of building a full functional
            map, I validated requirements directly through annotated mockups and
            page flows. This accelerated collaboration but required refining details
            live during discussions. It was a valuable lesson in designing under
            constraints while still maintaining trust and accuracy.
          </p>
          <p className="text-zinc-300 leading-relaxed">
            Most importantly, I learned that in enterprise-scale projects, solving
            problems often means designing processes as much as interfaces. This
            strengthened my ability to align system logic with human workflows,
            advocate for practical solutions, and deliver designs that enhance
            usability while driving organizational efficiency.
          </p>
        </section>

        <section
          id="final-result"
          className="max-w-3xl scroll-mt-28 space-y-5 sm:scroll-mt-32"
        >
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            Final result
          </span>
          <h2 className="text-xl font-semibold text-zinc-100">
            One reliable platform for cross-department operations
          </h2>
          <p className="text-zinc-300 leading-relaxed">
            The final backend platform unified the management of announcements,
            promotions, push notifications, data reports, and app version updates.
            With carefully defined role-based permissions, workflow-driven
            reporting, and system-level consistency, the design enabled government
            staff across multiple departments to collaborate effectively within one
            reliable platform.
          </p>
        </section>

        <section className="border-t border-zinc-800 pt-12 space-y-8">
          <CaseStudyPrevNext currentSlug="government-backend" />
          <Link
            href="/"
            className="text-sm font-medium text-zinc-400 hover:text-zinc-100 transition"
          >
            ← Back to work
          </Link>
        </section>
      </CaseStudyContentLayout>
    </article>
  );
}
