import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Baskin-Robbins Taiwan Membership App | Angela Yang",
  description:
    "Lead UX/UI for Taiwan’s first BR31 loyalty app: MVP scoping against Japan reference, localized membership rules, POS-ready redemption, and dev-ready systems design in four months.",
};

const HERO = "/case-studies/baskin-robbins/hero.png";

function CaseImage({
  src,
  alt,
  caption,
  fullBleed = true,
}: {
  src: string;
  alt: string;
  caption?: string;
  fullBleed?: boolean;
}) {
  return (
    <figure className="space-y-2">
      <div
        className={`relative w-full aspect-[21/9] overflow-hidden rounded-2xl ${
          fullBleed ? "bg-zinc-950" : "bg-zinc-800/80 border border-zinc-700/50"
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
          priority
        />
      </div>
      {caption && (
        <figcaption className="text-xs text-zinc-500 max-w-2xl">{caption}</figcaption>
      )}
    </figure>
  );
}

export default function BaskinRobbinsCaseStudy() {
  return (
    <article className="min-h-screen bg-zinc-950 text-zinc-100">
      <header className="border-b border-zinc-800">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-[100px] py-16 sm:py-24">
          <div className="flex flex-wrap gap-2 text-xs uppercase tracking-widest text-zinc-500 mb-6">
            <span>Case Study</span>
            <span className="text-zinc-600">·</span>
            <span>Mobile · Loyalty</span>
            <span className="text-zinc-600">·</span>
            <span>Zero-to-one</span>
          </div>
          <h1 className="font-semibold text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight max-w-3xl">
            Baskin-Robbins Taiwan&apos;s first membership app
          </h1>
          <p className="mt-4 text-xl text-zinc-400 max-w-2xl">
            Built the loyalty surface Taiwan didn&apos;t have—points, rewards, and
            a store-ready redemption path—by scoping a credible MVP against a
            Japan reference model and real CRM constraints.
          </p>
          <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-2 text-sm">
            <div>
              <dt className="text-zinc-500 uppercase tracking-wider">Role</dt>
              <dd className="text-zinc-200">Lead UX/UI Designer</dd>
            </div>
            <div>
              <dt className="text-zinc-500 uppercase tracking-wider">Timeline</dt>
              <dd className="text-zinc-200">Dec 2024 – Mar 2025 (design phase)</dd>
            </div>
            <div>
              <dt className="text-zinc-500 uppercase tracking-wider">Team</dt>
              <dd className="text-zinc-200">PM · 4 engineers · client + JP HQ</dd>
            </div>
            <div>
              <dt className="text-zinc-500 uppercase tracking-wider">Scope</dt>
              <dd className="text-zinc-200">End-to-end app UX/UI · UI kit · handoff</dd>
            </div>
          </dl>
          <div className="mt-12">
            <CaseImage
              src={HERO}
              alt="Baskin-Robbins Taiwan membership app on iPhones: home hub with loyalty actions and flavor catalog"
              caption="Home hub for points, vouchers, and member actions next to dense catalog browse—brand-forward layout with a single primary navigation model."
            />
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-[1440px] px-6 sm:px-[100px] py-12 sm:py-16 space-y-20">
        {/* Context */}
        <section>
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            Context
          </span>
          <h2 className="mt-2 text-xl font-semibold text-zinc-100">
            Japan had the program; Taiwan had the gap
          </h2>
          <div className="mt-5 space-y-4 text-zinc-300 leading-relaxed max-w-3xl">
            <p>
              In Japan, BR31 already runs a mature digital membership: rewards,
              exclusives, and repeat engagement. In Taiwan, the brand was still
              missing a{" "}
              <span className="text-zinc-100">first-party loyalty surface</span>{" "}
              that could compete with chains already owning mobile rewards and
              personalized offers.
            </p>
            <p>
              The product mandate wasn&apos;t “make pretty screens”—it was to{" "}
              <span className="text-zinc-100">
                convert occasional buyers into repeat members
              </span>{" "}
              through a coherent earn-and-redeem loop, while staying aligned with
              headquarters and shippable on a fixed calendar.
            </p>
          </div>
        </section>

        {/* Problem */}
        <section>
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            Problem
          </span>
          <h2 className="mt-2 text-xl font-semibold text-zinc-100">
            Copying Japan wouldn&apos;t work—and neither would scope creep
          </h2>
          <ul className="mt-5 space-y-3 text-zinc-300 leading-relaxed max-w-3xl list-none">
            <li className="flex gap-3">
              <span className="text-rose-400 font-semibold shrink-0">
                Market rules
              </span>
              <span>
                Japan uses points to drive membership tiers; Taiwan&apos;s
                commercial and CRM setup emphasized{" "}
                <span className="text-zinc-100">spend-based progression</span>.
                Treating “parity” as identical UI would have shipped the wrong
                mental model.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-rose-400 font-semibold shrink-0">
                Delivery ceiling
              </span>
              <span>
                The client wanted Japan-like breadth; engineering needed{" "}
                <span className="text-zinc-100">
                  minimal backend churn and predictable surfaces
                </span>
                (including webviews and external URLs where native wasn&apos;t
                justified for MVP).
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-rose-400 font-semibold shrink-0">
                Omnichannel truth
              </span>
              <span>
                Rewards only matter if redemption works in store. The design had
                to anticipate{" "}
                <span className="text-zinc-100">
                  member identity at POS—QR or equivalent handoff
                </span>
                —so digital and physical stayed one account, not two stories.
              </span>
            </li>
          </ul>
        </section>

        {/* My role */}
        <section>
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            My role
          </span>
          <h2 className="mt-2 text-xl font-semibold text-zinc-100">
            Own the path from ambiguity to build-ready files
          </h2>
          <div className="mt-5 space-y-4 text-zinc-300 leading-relaxed max-w-3xl">
            <p>
              I led UX and UI with the PM and four engineers. That meant
              requirements synthesis,{" "}
              <span className="text-zinc-100">
                feasibility negotiation with backend reality
              </span>
              , and continuous alignment with Taiwan stakeholders and Japan
              headquarters—not a handoff after a big reveal.
            </p>
            <ul className="list-disc pl-5 space-y-2 marker:text-zinc-500">
              <li>
                <span className="text-zinc-100">Functional map</span> merging
                client goals with CRM capabilities and API boundaries—so scope was
                explicit before pixels.
              </li>
              <li>
                <span className="text-zinc-100">Flows + page logic</span> after
                wireframe approval: branching, edge cases, and what ships as
                webview vs native.
              </li>
              <li>
                <span className="text-zinc-100">Hi-fi UI + UI kit</span>{" "}
                (components, color, type, icons) for consistent iOS/Android
                implementation.
              </li>
              <li>
                <span className="text-zinc-100">Developer handoff</span>:
                annotations, slicing notes, scroll vs fixed regions, and Figma links
                so engineering didn&apos;t interpret layout by guesswork.
              </li>
            </ul>
          </div>
        </section>

        {/* Key decisions */}
        <section>
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            Key decisions
          </span>
          <h2 className="mt-2 text-xl font-semibold text-zinc-100">
            What we optimized for under pressure
          </h2>
          <div className="mt-6 space-y-8 max-w-3xl">
            <div>
              <h3 className="text-sm font-semibold text-zinc-100">
                MVP scope as a contract—not a wish list
              </h3>
              <p className="mt-2 text-zinc-300 leading-relaxed">
                The functional map forced decisions: what lands in phase one, what
                waits for phase two, and which experiences stay{" "}
                <span className="text-zinc-100">thin wrappers (webview/URL)</span>{" "}
                to protect the launch date. That reduced rework when product,
                client, and engineering meant different things by “launch.”
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-zinc-100">
                Localize the membership mechanic, not just the copy
              </h3>
              <p className="mt-2 text-zinc-300 leading-relaxed">
                We reassessed points vs spend when Taiwan had no initial
                one-to-one redemption plan like Japan. I reframed UX around the
                mechanism the business could operationalize—so screens matched
                backend rules users would actually hit.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-zinc-100">
                Visual direction as a business choice
              </h3>
              <p className="mt-2 text-zinc-300 leading-relaxed">
                I presented three distinct directions (energetic pink-led,
                minimal/fresh, gradient/premium). The selected route balanced{" "}
                <span className="text-zinc-100">
                  brand energy with scanability
                </span>
                for dense menus and promo surfaces—because loyalty apps fail when
                users can&apos;t complete tasks in line or at the counter.
              </p>
            </div>
          </div>
        </section>

        {/* Solution */}
        <section>
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            Solution
          </span>
          <h2 className="mt-2 text-xl font-semibold text-zinc-100">
            A member hub, not a brochure
          </h2>
          <div className="mt-5 space-y-4 text-zinc-300 leading-relaxed max-w-3xl">
            <p>
              The app centers on{" "}
              <span className="text-zinc-100">
                earn → track → redeem
              </span>
              : points, vouchers, and transaction visibility, with quick actions
              surfaced on home so habitual use doesn&apos;t depend on hunting
              through catalogs.
            </p>
            <p>
              Flavor and merchandising content stay visually rich but structured:
              grids, promos, and navigation patterns that repeat so learnability
              compounds across sessions.
            </p>
            <p>
              Cross-platform execution was specified, not implied:{" "}
              <span className="text-zinc-100">
                PingFang TC on iOS, Roboto on Android
              </span>
              ; BR pink and blue anchored to components; modular buttons, cards,
              nav, and inputs so future features don&apos;t fork the system.
            </p>
          </div>
        </section>

        {/* Impact */}
        <section>
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            Outcomes
          </span>
          <h2 className="mt-2 text-xl font-semibold text-zinc-100">
            What “done” meant in this engagement
          </h2>
          <p className="mt-4 text-zinc-300 leading-relaxed max-w-3xl">
            This project measured success in delivery quality under constraint: a
            client-approved MVP packaged for engineering, aligned with HQ, and
            honest about what required backend work vs front-end-only wins.
          </p>
          <div className="mt-8 rounded-2xl bg-zinc-800/60 border border-zinc-700/50 p-8 sm:p-10 max-w-3xl">
            <ul className="space-y-4 text-zinc-200">
              <li className="flex gap-3">
                <span className="text-emerald-400 font-semibold shrink-0">
                  ~4 months
                </span>
                <span>
                  From kickoff to dev-ready mockups and UI kit—while continuously
                  trimming and reprioritizing for the MVP launch window.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-400 font-semibold shrink-0">
                  Fewer build-time surprises
                </span>
                <span>
                  Flow diagrams with system logic + annotations reduced ambiguous
                  tickets; webview vs native was decided early to match capacity.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-400 font-semibold shrink-0">
                  Phase-one MVP
                </span>
                <span>
                  Scoped for launch on an agreed timeline (including post-design
                  build), with larger parity moves queued for phase two instead of
                  collapsing the schedule.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-400 font-semibold shrink-0">
                  Skill carryover
                </span>
                <span>
                  Clearer judgment on when UX needs backend support vs when
                  front-end patterns suffice—critical for enterprise-style
                  delivery.
                </span>
              </li>
            </ul>
          </div>
          <p className="mt-6 text-zinc-500 text-sm max-w-3xl">
            Quantitative engagement metrics post-launch can be added once the
            client releases them; the portfolio story here is judgment, scope
            control, and ship-ready craft.
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
