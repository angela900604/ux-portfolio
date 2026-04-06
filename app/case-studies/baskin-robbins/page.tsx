import Link from "next/link";
import { PhoneMockup, WideFigure } from "../e-invoice-app/EInvoiceFigures";
import { AnnotatedFlowSlideshow } from "./AnnotatedFlowSlideshow";

export const metadata = {
  title: "Baskin-Robbins Taiwan Membership App | Angela Yang",
  description:
    "Lead UX/UI for BR31 Taiwan’s first membership app: team objectives, functional map, style proposals, MVP delivery, and build-ready UI kit and handoff.",
};

const ASSET = (name: string) => `/case-studies/baskin-robbins/${name}`;

const ANNOTATED_SLIDES = [1, 2, 3, 4, 5, 6].map((n) => ({
  src: ASSET(`annotated-${String(n).padStart(2, "0")}.png`),
  alt: `Annotated mockup and page-flow reference ${n} of 6`,
}));

export default function BaskinRobbinsCaseStudy() {
  return (
    <article className="min-h-screen bg-zinc-950 text-zinc-100">
      <header className="border-b border-zinc-800">
        <div className="mx-auto max-w-[1200px] px-6 sm:px-[100px] py-16 sm:py-24">
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
            Baskin Robbins Taiwan Membership App — boosting brand affinity and
            customer engagement.
          </p>
          <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-2 text-sm">
            <div>
              <dt className="text-zinc-500 uppercase tracking-wider">Timeline</dt>
              <dd className="text-zinc-200">December 2024 – March 2025</dd>
            </div>
            <div>
              <dt className="text-zinc-500 uppercase tracking-wider">Role</dt>
              <dd className="text-zinc-200">Lead UX/UI Designer</dd>
            </div>
            <div>
              <dt className="text-zinc-500 uppercase tracking-wider">Project type</dt>
              <dd className="text-zinc-200">Mobile app</dd>
            </div>
            <div>
              <dt className="text-zinc-500 uppercase tracking-wider">Focus</dt>
              <dd className="text-zinc-200">
                Client-driven end-to-end product design
              </dd>
            </div>
          </dl>
          <div className="mt-12">
            <WideFigure
              src={ASSET("hero-membership.png")}
              alt="Baskin-Robbins Taiwan membership app — hero visual"
            />
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-[1200px] px-6 sm:px-[100px] py-12 sm:py-16 space-y-20">
        <section className="space-y-5 max-w-3xl">
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            Team objectives
          </span>
          <h2 className="text-xl font-semibold text-zinc-100">
            Why we built a dedicated membership surface in Taiwan
          </h2>
          <p className="text-zinc-300 leading-relaxed">
            To create a dedicated membership app for BR31 Ice Cream in Taiwan,
            allowing Taiwanese consumers to enjoy digital experiences such as point
            accumulation and reward redemption—similar to the 31 Ice Cream
            membership in Japan.
          </p>
        </section>

        <section className="space-y-5 max-w-3xl">
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            Role &amp; deliverables
          </span>
          <h2 className="text-xl font-semibold text-zinc-100">
            What I owned end-to-end
          </h2>
          <p className="text-zinc-300 leading-relaxed">
            I collaborated with a product manager and four front-end/back-end
            engineers. As the lead designer, I was responsible for the entire UX
            and UI design process—including requirement interviews, user flow
            planning, and final visual design.
          </p>
        </section>

        <section className="space-y-5 max-w-3xl">
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            Project challenges
          </span>
          <h2 className="text-xl font-semibold text-zinc-100">
            Technical and timeline constraints
          </h2>
          <p className="text-zinc-300 leading-relaxed">
            The project faced numerous technical and timeline constraints. To
            ensure the timely launch of the first-phase MVP, we continuously
            adjusted task priorities and maintained frequent internal discussions
            and client communications to align team and client understanding.
          </p>
        </section>

        <section className="space-y-5 max-w-3xl">
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            Project outcomes
          </span>
          <h2 className="text-xl font-semibold text-zinc-100">
            First-phase MVP launch
          </h2>
          <p className="text-zinc-300 leading-relaxed">
            Within four months, we successfully launched the first-phase MVP in
            September 2025—providing BR31 Ice Cream members in Taiwan with a
            seamless point accumulation and redemption experience.
          </p>
        </section>

        <section className="space-y-6 max-w-5xl">
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            Project background
          </span>
          <h2 className="text-xl font-semibold text-zinc-100">
            From Japan&apos;s proven program to Taiwan&apos;s gap
          </h2>
          <p className="text-zinc-300 leading-relaxed max-w-3xl">
            BR31 Ice Cream, known for its 31 playful flavors, had already built a
            strong digital-first membership program in Japan that kept fans
            engaged with rewards and exclusives. In Taiwan, however, the brand
            lacked a dedicated loyalty experience—leaving customers with fewer ways
            to connect and putting the company at risk of falling behind
            competitors with established platforms. Taiwanese consumers, who were
            increasingly drawn to mobile-first rewards and personalized offers,
            needed a smoother way to engage with the brand. Our project set out to
            change that by designing and developing a dedicated membership
            app—bringing the proven success of Japan&apos;s model to Taiwan while
            tailoring the experience to local users.
          </p>
          <p className="text-zinc-200 font-medium text-lg max-w-3xl pt-2">
            The goal was simple yet powerful: transform casual customers into loyal
            fans by offering them a fun, seamless, and rewarding digital journey
            with every scoop.
          </p>
          <div className="space-y-2 pt-2">
            <h3 className="text-sm font-semibold text-zinc-100">
              Stakeholder alignment (Japan HQ · Taiwan)
            </h3>
            <WideFigure
              borderless
              src={ASSET("stakeholder-alignment.png")}
              alt="Stakeholder alignment across Japan HQ and Taiwan"
            />
          </div>
        </section>

        <section className="space-y-5 max-w-3xl">
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            Design process
          </span>
          <h2 className="text-xl font-semibold text-zinc-100">
            A streamlined pipeline under a tight schedule
          </h2>
          <p className="text-zinc-300 leading-relaxed">
            Due to the tight schedule, I streamlined the design process while
            ensuring client requirements were met. I started with a Functional Map to
            understand client needs and confirm feature feasibility with backend
            developers. I then moved into Mockups—designing wireframes, defining
            interactions, annotated slices, and preparing a UI Kit. I provided Style
            Proposals for the client to decide on visual style and color usage.
            Finally, I confirmed Page Flow and system logic with the client so
            engineering could build with a shared map of branching and states.
          </p>
          <h3 className="text-sm font-semibold text-zinc-100 pt-2">
            Functional map · Style proposal · Page flow
          </h3>
          <p className="text-sm text-zinc-400 leading-relaxed">
            Functional mapping, directional style boards, and page-flow validation
            were consolidated in Figma before high-fidelity execution (see style
            proposals and annotated flows below).
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-5">
              <h3 className="text-sm font-semibold text-zinc-100">
                Mockup Figma file
              </h3>
              <p className="mt-2 text-sm text-zinc-300 leading-relaxed">
                Includes complete high-fidelity page designs and slicing
                instructions for the development team&apos;s reference.
              </p>
            </div>
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-5">
              <h3 className="text-sm font-semibold text-zinc-100">
                UI Kit Figma file
              </h3>
              <p className="mt-2 text-sm text-zinc-300 leading-relaxed">
                Systematically organized design components, typography, and color
                guidelines to ensure consistency and improve efficiency.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-5 max-w-3xl">
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            Requirement interviews
          </span>
          <h2 className="text-xl font-semibold text-zinc-100">
            Functional confirmation before high fidelity
          </h2>
          <p className="text-zinc-300 leading-relaxed">
            Ice Cream Taiwan aimed to replicate the Japanese app&apos;s features but,
            due to time and budget constraints, opted for rapid development using
            our standard features. I created a Functional Map integrating backend
            rules and client requirements to clarify the scope.
          </p>
          <p className="text-zinc-300 leading-relaxed">
            Through the Functional Map and client discussions, we agreed on minor
            optimizations for the first-phase launch and deferred larger changes to
            the second phase. We also collaborated with engineers to assess
            feasibility and provide timelines for client decisions.
          </p>
          <p className="text-zinc-300 leading-relaxed">
            The Functional Map helped identify features as web views or external
            URLs—ensuring client alignment and reducing development errors.
          </p>
        </section>

        <section className="space-y-5 max-w-3xl">
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            Function difference
          </span>
          <h2 className="text-xl font-semibold text-zinc-100">
            Local rules vs Japan reference
          </h2>
          <p className="text-zinc-300 leading-relaxed">
            31 Ice Cream Taiwan aimed to align with Japan&apos;s membership rules,
            but market differences required adjustments. For example, Japan uses
            &quot;points&quot; for membership levels, while Taiwan relies on
            &quot;spending amounts.&quot; With no initial plan for point redemption in
            Taiwan, we reassessed the points feature and explored a more suitable
            membership mechanism for the local market.
          </p>
          <p className="text-zinc-300 leading-relaxed">
            Due to time constraints, I prioritized standard features in style
            proposals and mockups—making minor adjustments only after client
            agreement.
          </p>
        </section>

        <section className="space-y-6 max-w-5xl">
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            Visual style &amp; UI design
          </span>
          <h2 className="text-xl font-semibold text-zinc-100">
            Three directions for stakeholder selection
          </h2>
          <p className="text-zinc-300 leading-relaxed max-w-3xl">
            I presented three style options for the client to choose from:
          </p>
          <div className="space-y-4 max-w-3xl">
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-5">
              <h3 className="text-sm font-semibold text-zinc-100">
                Style A · Sweet &amp; energetic
              </h3>
              <p className="mt-2 text-sm text-zinc-300 leading-relaxed">
                Focused on 31 Ice Cream&apos;s signature pink—creating a lively,
                youthful vibe for users who love vibrant colors, conveying joy and
                enthusiasm.
              </p>
            </div>
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-5">
              <h3 className="text-sm font-semibold text-zinc-100">
                Style B · Minimal &amp; fresh
              </h3>
              <p className="mt-2 text-sm text-zinc-300 leading-relaxed">
                Primarily white with pink accents—offering a clean and refreshing
                style similar to Japan&apos;s 31 app, ideal for users seeking
                simplicity.
              </p>
            </div>
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-5">
              <h3 className="text-sm font-semibold text-zinc-100">
                Style C · Gradient &amp; premium
              </h3>
              <p className="mt-2 text-sm text-zinc-300 leading-relaxed">
                Used gradient effects to enhance sophistication—adding depth and
                modern design elements to reflect a premium and innovative brand
                image.
              </p>
            </div>
          </div>
          <div className="space-y-3 pt-2">
            <h3 className="text-sm font-semibold text-zinc-100">
              Style proposals (A / B / C)
            </h3>
            <div className="grid gap-6 md:grid-cols-3">
              <WideFigure
                borderless
                src={ASSET("style-proposal-a.png")}
                alt="Style proposal A — sweet and energetic"
              />
              <WideFigure
                borderless
                src={ASSET("style-proposal-b.png")}
                alt="Style proposal B — minimal and fresh"
              />
              <WideFigure
                borderless
                src={ASSET("style-proposal-c.png")}
                alt="Style proposal C — gradient and premium"
              />
            </div>
          </div>
        </section>

        <section className="space-y-5 max-w-3xl">
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            Challenges
          </span>
          <h2 className="text-xl font-semibold text-zinc-100">
            What made the timeline difficult
          </h2>
          <ul className="list-disc pl-5 space-y-3 text-zinc-300 leading-relaxed marker:text-zinc-500">
            <li>
              Page designs prioritized client needs and existing technical
              constraints due to tight timelines.
            </li>
            <li>
              Explored cost-effective solutions that addressed user pain points
              while still meeting business objectives.
            </li>
            <li>
              Balancing user-focused design goals with engineers&apos; priority to
              minimize system changes required ongoing compromise.
            </li>
            <li>
              The outdated membership system limited opportunities to improve user
              experience.
            </li>
          </ul>
        </section>

        <section className="space-y-5 max-w-3xl">
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            Learnings
          </span>
          <h2 className="text-xl font-semibold text-zinc-100">
            What I took forward
          </h2>
          <p className="text-zinc-300 leading-relaxed">
            I learned to distinguish which UX improvements required backend support
            versus which could be achieved through front-end adjustments. I
            collaborated closely with the backend PM to understand CRM
            capabilities, API usage, and available data—and developed a stronger
            sense of when to advocate for UX and when to adapt to technical
            feasibility.
          </p>
        </section>

        <section className="space-y-6 max-w-5xl">
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            Annotations &amp; page flow
          </span>
          <h2 className="text-xl font-semibold text-zinc-100">
            Developer handoff without guesswork
          </h2>
          <p className="text-zinc-300 leading-relaxed max-w-3xl">
            To ensure smooth developer handoff, I provided comprehensive page
            annotations and slicing instructions alongside the page designs. These
            annotations clarify elements like scrollable and non-scrollable areas,
            and provide essential information on dimensions, constraints, and
            spacing that require particular attention.
          </p>
          <p className="text-zinc-300 leading-relaxed max-w-3xl">
            Once mockups were approved by the client, I used a Page Flow to clearly
            define page-to-page interactions and the system&apos;s decision-making
            logic. Beyond using arrows for the flow, I provided detailed annotations
            so the development team fully comprehended the design guidelines and
            interaction behaviors. To streamline access, I used Figma&apos;s linking
            feature to cross-reference relevant explanations—enabling developers to
            quickly understand the design.
          </p>
          <div className="space-y-3 pt-2">
            <h3 className="text-sm font-semibold text-zinc-100">
              Annotated mockups · Page flow
            </h3>
            <AnnotatedFlowSlideshow items={ANNOTATED_SLIDES} />
          </div>
        </section>

        <section className="space-y-6 max-w-5xl">
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            Delivery
          </span>
          <h2 className="text-xl font-semibold text-zinc-100">
            UI kit, typography, color, and components
          </h2>
          <p className="text-zinc-300 leading-relaxed max-w-3xl">
            I created a UI Kit that systematically organizes core design
            specifications—including Main Components, Colors, Typography, and
            Icons. This setup allows the development team to directly export and use
            these assets—ensuring design consistency and boosting development
            efficiency.
          </p>
          <p className="text-zinc-300 leading-relaxed max-w-3xl">
            Given the need to support both iOS and Android platforms, the app&apos;s
            design was initially developed for iOS using the PingFang TC typeface.
            For Android, Roboto is the chosen font.
          </p>
          <p className="text-zinc-300 leading-relaxed max-w-3xl">
            The palette combines BR31&apos;s signature pink and blue with neutral
            tones to balance playfulness and readability. Primary colors highlight
            key actions, while secondary tones support visual hierarchy.
          </p>
          <p className="text-zinc-300 leading-relaxed max-w-3xl">
            A modular system of buttons, cards, navigation, and input fields was
            built for cross-platform consistency—scalable for future features and
            aligned with BR31&apos;s brand identity.
          </p>
          <div className="space-y-3 pt-2">
            <h3 className="text-sm font-semibold text-zinc-100">
              UI kit · Components
            </h3>
            <div className="mx-auto flex max-w-4xl flex-col gap-10">
              <WideFigure
                borderless
                src={ASSET("ui-kit-01.png")}
                alt="UI kit — components overview 1 of 3"
              />
              <WideFigure
                borderless
                src={ASSET("ui-kit-02.png")}
                alt="UI kit — components overview 2 of 3"
              />
              <WideFigure
                borderless
                src={ASSET("ui-kit-03.png")}
                alt="UI kit — components overview 3 of 3"
              />
            </div>
          </div>
        </section>

        <section className="space-y-10 max-w-6xl">
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            Final product
          </span>
          <h2 className="text-xl font-semibold text-zinc-100">
            What members experience on device
          </h2>
          <p className="max-w-3xl text-zinc-300 leading-relaxed">
            The final app delivers a seamless membership experience—enabling BR31
            Taiwan users to easily accumulate points, redeem rewards, and enjoy
            personalized offers. The design balances brand playfulness with
            usability—ensuring consistency across iOS and Android while meeting both
            client and user needs.
          </p>
          <div className="space-y-10">
            <h3 className="text-sm font-semibold text-zinc-100">
              Final screens (core journey)
            </h3>
            <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 20 }, (_, i) => {
                const src = ASSET(
                  `final-screen-${String(i + 1).padStart(2, "0")}.png`
                );
                return (
                  <PhoneMockup
                    key={src}
                    src={src}
                    alt={`Core journey screen ${i + 1} of 20 — Baskin-Robbins Taiwan membership app`}
                    label={`Screen ${i + 1} of 20`}
                  />
                );
              })}
            </div>
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
