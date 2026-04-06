import Link from "next/link";
import VisualPlaceholder from "../_components/VisualPlaceholder";

export const metadata = {
  title: "Role-Based Government Backend (600+ Staff) | Angela Yang",
  description:
    "Backend platform for the Ministry of Finance uniform invoice lottery redemption app: role-based access, reporting, and version control for 600+ government staff (July–September 2025).",
};

export default function GovernmentBackendCaseStudy() {
  return (
    <article className="min-h-screen bg-zinc-950 text-zinc-100">
      <header className="border-b border-zinc-800">
        <div className="mx-auto max-w-[1200px] px-6 sm:px-[100px] py-16 sm:py-24">
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
            for 600+ government staff, enabling faster invoice management and
            reducing errors.
          </p>
          <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-2 text-sm">
            <div>
              <dt className="text-zinc-500 uppercase tracking-wider">Timeline</dt>
              <dd className="text-zinc-200">July – September 2025</dd>
            </div>
            <div>
              <dt className="text-zinc-500 uppercase tracking-wider">Role</dt>
              <dd className="text-zinc-200">Lead UX/UI Designer</dd>
            </div>
            <div>
              <dt className="text-zinc-500 uppercase tracking-wider">
                Project type
              </dt>
              <dd className="text-zinc-200">Backend platform</dd>
            </div>
            <div>
              <dt className="text-zinc-500 uppercase tracking-wider">Focus</dt>
              <dd className="text-zinc-200">
                Client-driven end-to-end product design · Cross-functional
                collaboration
              </dd>
            </div>
          </dl>
          <div className="mt-12">
            <VisualPlaceholder
              label="Hero visual (platform overview)"
              hint="Replace with a representative dashboard or workflow image from this project."
              aspect="wide"
            />
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-[1200px] px-6 sm:px-[100px] py-12 sm:py-16 space-y-20">
        <section className="space-y-6 max-w-3xl">
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            Summary
          </span>
          <h2 className="text-xl font-semibold text-zinc-100">
            Supporting 600+ government staff with role-based access control
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
            monthly views, time-based filters, and CSV export. Staff could prepare
            reports independently for meetings and audits, reducing reliance on
            engineers and speeding up operational workflows.
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

        <section className="space-y-5 max-w-3xl">
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            Project background
          </span>
          <h2 className="text-xl font-semibold text-zinc-100">
            Why this platform existed
          </h2>
          <p className="text-zinc-300 leading-relaxed">
            After completing the Uniform Invoice Lottery Redemption App, I also took
            on designing an entirely new backend management platform. Government
            staff needed a unified system to manage announcements, promotion
            campaigns, push notifications, data reporting, and app version updates.
          </p>
          <p className="text-zinc-300 leading-relaxed">
            With over 600 staff members relying on national platforms, consistency
            and alignment were critical. During early discovery, staff repeatedly
            emphasized their need for workflows to feel familiar with the systems
            they were already using. To clarify their expectations, I conducted
            three rounds of needs interviews. These sessions helped me identify
            feature priorities and validate user flows before diving into design.
          </p>
          <p className="text-zinc-300 leading-relaxed">
            As the sole UX/UI designer, I collaborated closely with engineers.
            Because our team had also built the app itself, we could strategically
            decide which elements should remain editable in the backend and which
            needed to stay hard-coded to maintain stability during updates. Given
            the tight timeline, I validated requirements through mockups and page
            flows rather than full functional maps. This approach sped up
            collaboration and allowed us to refine details iteratively during
            ongoing discussions with stakeholders and engineers.
          </p>
          <VisualPlaceholder
            label="Example of corresponding screens"
            hint="Add redacted screenshots that show how backend tasks map to the live product."
            aspect="wide"
          />
        </section>

        <section className="space-y-5 max-w-3xl">
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
            Since pinned articles directly shaped the app homepage (limited to five
            pinned slots), the &quot;Pin to Top&quot; button only appeared for that
            specific role. For all other roles, the article list showed without the
            pinning option.
          </p>
          <p className="text-zinc-300 leading-relaxed">
            This careful role definition empowered each department to work
            independently while preventing conflicts that could undermine
            credibility.
          </p>
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 space-y-4">
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
          <VisualPlaceholder
            label="RBAC in the UI (role-based visibility)"
            hint="Show sidebar and article tools with Pin to Top visible only for the HQ role."
            aspect="wide"
          />
        </section>

        <section className="space-y-8 max-w-3xl">
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
              <span className="text-zinc-200 font-semibold">Before:</span> The
              original reporting page only showed yearly totals through a dropdown
              (for example, 2026, 2027, 2028). This made it unusable for staff who
              needed weekly views, cumulative tracking, and campaign-specific
              queries.
            </p>
            <p className="text-zinc-300 leading-relaxed">
              <span className="text-zinc-200 font-semibold">After:</span> I
              redesigned the page into an actionable dashboard that displayed data
              from the past 12 months relative to the query date; introduced
              toggles for Weekly View (every Sunday) and Monthly View (end of each
              month)—because staff feedback showed they relied on weekly and
              monthly reports for meetings and archiving; and enabled CSV export.
              Engineers noted that massive user data required filtering or
              time-based limits to stay manageable.
            </p>
            <p className="text-zinc-300 leading-relaxed">
              <span className="text-zinc-200 font-semibold">Impact:</span> Present
              weekly and monthly numbers in meetings without manual calculations;
              compare time periods more easily; export datasets independently,
              reducing reliance on engineers and speeding up decision-making.
            </p>
          </div>

          <VisualPlaceholder
            label="Iteration 1 · Data reporting (before / after)"
            hint="Place a before/after pair for the reporting dashboard and export path."
            aspect="wide"
          />

          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-zinc-100">
              Design iteration 2 · App update version control
            </h3>
            <p className="text-zinc-300 leading-relaxed">
              <span className="text-zinc-200 font-semibold">Before:</span> The
              first backend design only let staff add new versions. It lacked
              critical controls: no way to enforce mandatory updates and no syncing
              of version numbers with app build codes. This created risks of
              mismatched versions and made urgent updates nearly impossible.
              Engineers clarified that version control directly affected user
              experience and app stability—without precise control, users could
              remain on outdated builds or face inconsistencies.
            </p>
            <p className="text-zinc-300 leading-relaxed">
              <span className="text-zinc-200 font-semibold">After:</span> I
              redesigned the page into an actionable dashboard that included a Force
              Update option to mark versions as mandatory so critical updates
              couldn&apos;t be skipped; accurate version mapping so version numbers
              mapped directly to app build codes, reducing mismatches; and input
              flexibility—dropdowns for common fields reduced errors, while manual
              input fields gave staff the flexibility they needed.
            </p>
            <p className="text-zinc-300 leading-relaxed">
              <span className="text-zinc-200 font-semibold">Impact:</span> This
              empowered staff to handle version control independently, reduced risks
              of mismatched versions, and ensured that critical security or
              policy-driven updates could be rolled out instantly. It showed how UI
              decisions could align directly with system logic to create a more
              reliable workflow.
            </p>
          </div>

          <VisualPlaceholder
            label="Iteration 2 · Version control (before / after)"
            hint="Show force update, build-code mapping, and safer field inputs."
            aspect="wide"
          />
        </section>

        <section className="space-y-5 max-w-3xl">
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            Visual consistency
          </span>
          <h2 className="text-xl font-semibold text-zinc-100">
            Familiarity reduces training overhead
          </h2>
          <p className="text-zinc-300 leading-relaxed">
            Beyond features, staff emphasized the need for the backend to feel
            consistent with their existing tools. This was less about solving
            &quot;pain points&quot; and more about reducing training overhead. To
            meet this need, I kept sidebar information architecture aligned with
            existing platforms; preserved familiar table layouts, button placements,
            and status tags; and maintained overall interaction consistency to lower
            the learning curve across departments.
          </p>
          <VisualPlaceholder
            label="Visual consistency reference"
            hint="Optional: a side-by-side showing alignment with existing internal tools."
            aspect="wide"
          />
        </section>

        <section className="space-y-5 max-w-3xl">
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

        <section className="space-y-5 max-w-3xl">
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
