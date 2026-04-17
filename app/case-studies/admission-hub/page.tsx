import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
import { CaseStudyContentLayout } from "../_components/CaseStudyContentLayout";
import { CaseStudyPrevNext } from "../_components/CaseStudyPrevNext";
import { OutcomesMetricsChart } from "./OutcomesMetricsChart";

const AH_ASSET = (name: string) => `/case-studies/admission-hub/${name}`;

const ADMISSION_TOC = [
  { id: "project-overview", label: "Project overview" },
  { id: "starting-point", label: "Starting point" },
  { id: "challenge", label: "Challenge" },
  { id: "strategy", label: "Strategy" },
  { id: "what-i-did", label: "What I did" },
  { id: "outcomes", label: "Outcomes" },
] as const;

/** Live posts that illustrate the “Canada life + calendar hooks” content shift */
const ADMISSION_IG_EXAMPLES = [
  { href: "https://www.instagram.com/p/ChTR-c8px82/", label: "Feed — Canada life / calendar hook" },
  { href: "https://www.instagram.com/p/CixMlkvuBR2/", label: "Feed — Canada life / calendar hook" },
  { href: "https://www.instagram.com/p/Cf-OA7Wugc4/", label: "Feed — Canada life / calendar hook" },
  { href: "https://www.instagram.com/p/CfdMip6u7tH/", label: "Feed — fireworks times & locations" },
  { href: "https://www.instagram.com/tv/CfLIANdl_Vs/", label: "Reel — local event" },
  { href: "https://www.instagram.com/p/Cdt1HyHOm52/", label: "Feed — seasonal / local guide" },
] as const;

/** Long-form WordPress articles that supported SEO + trust (Taiwan site) */
const ADMISSION_WP_ARTICLES = [
  {
    href: "https://taiwan.admissionhub.com/%e9%97%9c%e6%96%bc-%e5%8a%a0%e6%8b%bf%e5%a4%a7-%e6%9c%89%e8%b6%a3%e7%9a%84%e4%ba%8b%e5%af%a6-50%e5%80%8b/",
    label: "50 interesting facts about Canada (life in Canada)",
  },
  {
    href: "https://taiwan.admissionhub.com/%e5%8a%a0%e6%8b%bf%e5%a4%a7-%e7%95%99%e5%ad%b8%e7%a7%bb%e6%b0%91-%e5%b8%b8%e8%a6%8b%e5%95%8f%e9%a1%8c/",
    label: "Study abroad & immigration — common questions",
  },
  {
    href: "https://taiwan.admissionhub.com/%e5%8a%a0%e6%8b%bf%e5%a4%a7%e6%97%85%e9%81%8a%e7%b0%bd%e8%ad%89-eta-%e7%b7%9a%e4%b8%8a%e7%94%b3%e8%ab%8b/",
    label: "Visitor visa / eTA — online application walkthrough",
  },
] as const;

export const metadata = {
  title: "Admission Hub (Digital Marketing) | Angela Yang",
  description:
    "Digital marketing internship: shifted @adm.tw toward Canada life content (5 posts/week), grew followers and engagement, and lifted organic traffic—with clear before/after on Instagram.",
};

function Section({
  kicker,
  title,
  id,
  children,
}: {
  kicker: string;
  title: string;
  id?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={id ? "scroll-mt-28 sm:scroll-mt-32" : undefined}
    >
      <span className="text-xs font-medium uppercase tracking-widest text-[#8D99AE]">
        {kicker}
      </span>
      <h2 className="mt-2 text-xl font-semibold text-[#2C3E50]">{title}</h2>
      {children}
    </section>
  );
}

export default function AdmissionHubCaseStudy() {
  return (
    <article className="min-h-screen bg-[#F5F3EF] text-[#4A4A4A]">
      <header className="border-b border-[#E0D9CE]">
        <div className="mx-auto max-w-[1280px] px-6 sm:px-[100px] py-16 sm:py-24">
          <div className="flex flex-wrap gap-2 text-xs uppercase tracking-widest text-[#7A7A7A] mb-6">
            <span>Case Study</span>
            <span className="text-[#B0B0B0]">·</span>
            <span>Digital Marketing</span>
            <span className="text-[#B0B0B0]">·</span>
            <span>Content + Growth</span>
          </div>

          <h1 className="font-semibold text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight max-w-3xl text-[#2C3E50]">
            Admission Hub
          </h1>
          <p className="mt-4 text-xl text-[#666] max-w-2xl">
            Built a content and campaign system across email, WordPress, and
            Instagram—improving brand recognition and driving SEO growth.
          </p>

          <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-2 text-sm">
            <div>
              <dt className="text-[#7A7A7A] uppercase tracking-wider">Role</dt>
              <dd className="text-[#4A4A4A]">Digital Marketer</dd>
            </div>
            <div>
              <dt className="text-[#7A7A7A] uppercase tracking-wider">Location</dt>
              <dd className="text-[#4A4A4A]">Toronto, ON</dd>
            </div>
            <div>
              <dt className="text-[#7A7A7A] uppercase tracking-wider">
                Timeline
              </dt>
              <dd className="text-[#4A4A4A]">May 2022 – Aug 2022</dd>
            </div>
          </dl>

          <div className="mt-12">
            <div className="relative w-full aspect-[21/9] overflow-hidden rounded-2xl border border-[#D8CFC1] bg-[#FAF7F2]">
              <Image
                src="/home/admcover.jpg"
                alt="Admission Hub cover"
                fill
                className="object-cover"
                sizes="(max-width: 896px) 100vw, 896px"
              />
            </div>
          </div>
        </div>
      </header>

      <CaseStudyContentLayout
        toc={ADMISSION_TOC}
        variant="light"
        contentClassName="space-y-16"
      >
        <Section
          id="project-overview"
          kicker="00 · Project overview"
          title="At a glance"
        >
          <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
            <article className="rounded-2xl border border-[#E8E1D6] bg-white p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-[#7B746B]">
                Brief / Background
              </h3>
              <p className="mt-2 text-sm text-[#666] leading-relaxed">
                Admission Hub supports students and families evaluating Canadian
                study and immigration paths—primarily audiences in Taiwan and Hong
                Kong researching options before they commit.
              </p>
            </article>
            <article className="rounded-2xl border border-[#E8E1D6] bg-white p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-[#7B746B]">
                My role
              </h3>
              <p className="mt-2 text-sm text-[#666] leading-relaxed">
                Digital Marketer
              </p>
            </article>
            <article className="rounded-2xl border border-[#E8E1D6] bg-white p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-[#7B746B]">
                Tools
              </h3>
              <p className="mt-2 text-sm text-[#666] leading-relaxed">
                Mailchimp / WordPress / Figma / Instagram
              </p>
            </article>
          </div>
        </Section>

        <Section
          id="starting-point"
          kicker="01 · Starting point"
          title="What the digital channel looked like when I joined"
        >
          <p className="mt-4 text-[#666] leading-relaxed max-w-2xl">
            <a
              href="https://www.instagram.com/adm.tw/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[#2C3E50] underline decoration-[#D4C5B0] underline-offset-2 hover:decoration-[#8D99AE]"
            >
              @adm.tw
            </a>{" "}
            had just over{" "}
            <span className="font-medium text-[#2C3E50]">1,200 followers</span>.
            Early feed posts often landed around{" "}
            <span className="font-medium text-[#2C3E50]">~5 likes</span>—light
            engagement for an account that needed to feel credible and alive for
            Taiwan-based audiences researching Canada. That baseline made the
            later lifts easier to read: the channel wasn’t starting from
            “already viral,” it was starting from quiet.
          </p>
        </Section>

        <Section
          id="challenge"
          kicker="02 · Challenge"
          title="Earn attention, then convert it into trust"
        >
          <p className="mt-4 text-[#666] leading-relaxed max-w-2xl">
            For study-abroad audiences, the biggest barrier is information
            quality and clarity. The goal was to help Taiwan-based prospects
            discover relevant content, stay engaged, and take the next step
            with confidence—without treating Instagram as a bulletin board of
            services only.
          </p>
        </Section>

        <Section
          id="strategy"
          kicker="03 · Strategy"
          title="My first bet: give people a reason to come back"
        >
          <div className="mt-4 max-w-2xl space-y-4 text-[#666] leading-relaxed">
            <p>
              I shifted the feed toward{" "}
              <span className="font-medium text-[#2C3E50]">
                life-in-Canada storytelling
              </span>
              : holidays, customs, fun facts, and slang. The rhythm was{" "}
              <span className="font-medium text-[#2C3E50]">
                five posts per week
              </span>
              —two tied to the brand&apos;s immigration and study services,
              and three dedicated to cultural hooks designed for saves, shares,
              and repeat visits.
            </p>
            <p>
              <span className="font-medium text-[#2C3E50]">Stories and Reels</span>{" "}
              followed real-time moments people actually care about on the
              ground—cherry blossom season, Pride, fireworks times and
              locations—so the account felt current, not only promotional.
            </p>
            <p>
              This wasn&apos;t about “fixing a formal tone” I had diagnosed in
              copy; it was a deliberate mix so the feed wasn&apos;t only
              service announcements. The bet was simple:{" "}
              <span className="font-medium text-[#2C3E50]">
                interesting, local, calendar-driven content builds habit
              </span>
              , and habit makes service posts land better when they appear.
            </p>
          </div>
        </Section>

        <Section
          id="what-i-did"
          kicker="04 · What I did"
          title="A repeatable campaign + content system"
        >
          <p className="mt-4 text-sm text-[#666] leading-relaxed max-w-3xl">
            I worked in layers: long-form WordPress content for search and
            trust, Mailchimp for sustained touchpoints, and a calendar-driven
            Instagram lane—then tied the same brand system across social posts
            and high-density print-style flyers when services needed to convert.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-[#E8E1D6] bg-white p-6">
              <h3 className="text-sm font-semibold text-[#2C3E50]">
                Email campaigns
              </h3>
              <p className="mt-2 text-sm text-[#666] leading-relaxed">
                Mailchimp execution—templates, segmentation, and cadence tied to
                site content. Details in the email block below.
              </p>
            </div>
            <div className="rounded-2xl border border-[#E8E1D6] bg-white p-6">
              <h3 className="text-sm font-semibold text-[#2C3E50]">
                SEO + WordPress
              </h3>
              <p className="mt-2 text-sm text-[#666] leading-relaxed">
                Utility articles and on-page structure to support organic
                discovery; example live URLs and a screenshot follow.
              </p>
            </div>
            <div className="rounded-2xl border border-[#E8E1D6] bg-white p-6">
              <h3 className="text-sm font-semibold text-[#2C3E50]">
                Visuals for web + social
              </h3>
              <p className="mt-2 text-sm text-[#666] leading-relaxed">
                Figma graphics for the site and Instagram—supporting +500
                followers and +21% engagement over roughly three months.
              </p>
            </div>
            <div className="rounded-2xl border border-[#E8E1D6] bg-white p-6">
              <h3 className="text-sm font-semibold text-[#2C3E50]">
                Consistent brand execution
              </h3>
              <p className="mt-2 text-sm text-[#666] leading-relaxed">
                Campaign and blog visuals so email, web, and social pointed to
                the same story and CTAs.
              </p>
            </div>
          </div>

          <div className="mt-10">
            <h3 className="text-sm font-semibold text-[#2C3E50]">
              WordPress &amp; SEO (utility content)
            </h3>
            <p className="mt-2 text-sm text-[#666] leading-relaxed max-w-3xl">
              Long-form posts for Taiwan- and Hong Kong–based readers
              researching Canada—clear H2/H3 structure, scannable lists, and
              sidebar modules that match the main Admission Hub site. This lane
              complemented Instagram: the blog earned depth and search, while
              social earned frequency and saves.
            </p>
            <figure className="mt-6 bg-[#F5F3EF]">
              <Image
                src={AH_ASSET("wordpress-blog-life-in-canada-50-facts.png")}
                alt="Admission Hub WordPress blog article — 50 interesting facts about Canada, desktop layout with hero image and sidebar widgets"
                width={1024}
                height={581}
                className="block h-auto w-full"
                sizes="(max-width: 896px) 100vw, 896px"
              />
              <figcaption className="mt-4 text-sm text-[#666] leading-relaxed max-w-3xl">
                <span className="font-semibold text-[#2C3E50]">
                  Featured articles (live)
                </span>
                <ul className="mt-2 flex flex-col gap-2">
                  {ADMISSION_WP_ARTICLES.map((item) => (
                    <li key={item.href}>
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#2C3E50] underline decoration-[#D4C5B0] underline-offset-2 hover:decoration-[#8D99AE]"
                      >
                        {item.label}
                      </a>
                      <span className="text-[#9A9288]"> · WordPress</span>
                    </li>
                  ))}
                </ul>
              </figcaption>
            </figure>
          </div>

          <div className="mt-10 rounded-2xl border border-[#E8E1D6] bg-white p-6">
            <h3 className="text-sm font-semibold text-[#2C3E50]">
              Email (Mailchimp) — how sends were structured
            </h3>
            <p className="mt-2 text-xs text-[#8A8379] leading-relaxed max-w-3xl">
              Original campaign screenshots weren&apos;t preserved; this section
              documents the operating pattern instead of mock UI.
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-[#666] leading-relaxed max-w-3xl">
              <li>
                <strong className="font-medium text-[#2C3E50]">Cadence:</strong>{" "}
                Sends aligned with blog publishes and seasonal hooks so
                newsletters weren&apos;t one-off blasts.
              </li>
              <li>
                <strong className="font-medium text-[#2C3E50]">
                  Subject + preheader:
                </strong>{" "}
                Clarity-first lines with Canada keywords; preheader used when it
                added a second beat without repeating the title.
              </li>
              <li>
                <strong className="font-medium text-[#2C3E50]">Template:</strong>{" "}
                Repeatable blocks (hero, body, single primary CTA) to reduce
                layout drift between campaigns.
              </li>
              <li>
                <strong className="font-medium text-[#2C3E50]">Channel fit:</strong>{" "}
                Email pointed back to deep pages; Instagram carried the weekly
                habit—same story, different depth.
              </li>
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              {(
                [
                  "Mailchimp",
                  "Templates",
                  "Segmentation",
                  "Cadence",
                ] as const
              ).map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[#E8E1D6] bg-[#FDFBF8] px-3 py-1 text-xs text-[#5C574F]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-10 rounded-2xl border border-[#E8E1D6] bg-white p-6">
            <h3 className="text-sm font-semibold text-[#2C3E50]">
              Calendar hooks &amp; “utility” social
            </h3>
            <p className="mt-2 text-sm text-[#666] leading-relaxed max-w-3xl">
              A lot of the momentum came from posts that matched how people use
              Instagram to plan a weekend—fireworks times and locations,
              seasonal guides, and other shareable local moments. The composite
              image after this list shows{" "}
              <span className="font-medium text-[#2C3E50]">
                culture-lane social
              </span>{" "}
              next to a{" "}
              <span className="font-medium text-[#2C3E50]">
                service-lane flyer
              </span>{" "}
              in the same brand frame; the links are live examples of the
              broader calendar pattern.
            </p>
            <ul className="mt-4 flex flex-col gap-2 text-sm">
              {ADMISSION_IG_EXAMPLES.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#2C3E50] underline decoration-[#D4C5B0] underline-offset-2 hover:decoration-[#8D99AE]"
                  >
                    {item.label}
                  </a>
                  <span className="text-[#9A9288]"> · Instagram</span>
                </li>
              ))}
            </ul>
          </div>

          <figure className="mt-10 bg-[#F5F3EF]">
            <Image
              src={AH_ASSET("dragon-boat-and-coop-creative.png")}
              alt="Admission Hub — Dragon Boat Festival Instagram post mockup beside Working Holiday COOP service flyer for Canada ADM"
              width={1024}
              height={556}
              className="block h-auto w-full"
              sizes="(max-width: 896px) 100vw, 896px"
            />
            <figcaption className="mt-4 space-y-2 text-sm text-[#666] leading-relaxed max-w-3xl">
              <p>
                <strong className="text-[#2C3E50]">Left (Instagram):</strong>{" "}
                Calendar-driven cultural post engineered for saves and
                shares—keeping the feed lively between service moments.
              </p>
              <p>
                <strong className="text-[#2C3E50]">Right (flyer):</strong>{" "}
                High-density Working Holiday COOP explainer—badges, proof
                collage, QR—for comprehension and next-step contact.
              </p>
              <p className="text-xs text-[#8A8379] italic">
                Same brand system, two jobs-to-be-done: habit on social,
                clarity on conversion.
              </p>
            </figcaption>
          </figure>
        </Section>

        <Section
          id="outcomes"
          kicker="05 · Outcomes"
          title="Measurable growth in engagement and reach"
        >
          <div className="mt-4 flex flex-wrap items-center gap-2 sm:gap-3">
            <span className="inline-flex items-center rounded-full border border-[#E8E1D6] bg-white px-4 py-2 text-sm font-medium tabular-nums text-[#2C3E50]">
              ~5 likes
              <span className="ml-2 text-xs font-normal text-[#8A8379]">
                typical post (before)
              </span>
            </span>
            <span className="text-[#8A8379]" aria-hidden>
              →
            </span>
            <span className="inline-flex items-center rounded-full border border-[#305E98]/30 bg-[#305E98]/08 px-4 py-2 text-sm font-semibold tabular-nums text-[#305E98]">
              ~30 likes
              <span className="ml-2 text-xs font-normal text-[#5C6F8A]">
                typical post (during)
              </span>
            </span>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3 max-w-3xl">
            <div className="rounded-xl border border-[#E8E1D6] bg-white p-4">
              <p className="text-xs font-medium uppercase tracking-wider text-[#8A8379]">
                Instagram
              </p>
              <p className="mt-2 text-sm text-[#666] leading-relaxed">
                Follower growth + stronger engagement from a mixed feed:
                calendar/utility posts plus service moments.
              </p>
            </div>
            <div className="rounded-xl border border-[#E8E1D6] bg-white p-4">
              <p className="text-xs font-medium uppercase tracking-wider text-[#8A8379]">
                Site / SEO
              </p>
              <p className="mt-2 text-sm text-[#666] leading-relaxed">
                Organic sessions up—supported by long-form WordPress pages and
                consistent on-page structure.
              </p>
            </div>
            <div className="rounded-xl border border-[#E8E1D6] bg-white p-4">
              <p className="text-xs font-medium uppercase tracking-wider text-[#8A8379]">
                Email
              </p>
              <p className="mt-2 text-sm text-[#666] leading-relaxed">
                Newsletters paired with content releases so the site and inbox
                reinforced the same narrative week to week.
              </p>
            </div>
          </div>

          <p className="mt-6 text-xs text-[#8A8379] leading-relaxed max-w-3xl">
            Figures are from the same ~three-month execution window referenced in
            the role; percentages follow the team&apos;s internal analytics
            definitions at the time (not a third-party benchmark study).
          </p>

          <div className="mt-6 max-w-3xl">
            <OutcomesMetricsChart />
          </div>
        </Section>

        <section className="border-t border-[#E0D9CE] pt-12 space-y-8">
          <CaseStudyPrevNext currentSlug="admission-hub" variant="light" />
          <Link
            href="/"
            className="text-sm font-medium text-[#6A6358] hover:text-[#2C3E50] transition"
          >
            ← Back to work
          </Link>
        </section>
      </CaseStudyContentLayout>
    </article>
  );
}

