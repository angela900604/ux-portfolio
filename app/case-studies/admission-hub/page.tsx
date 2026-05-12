import Link from "next/link";
import Image from "next/image";
import { ImageLightbox } from "@/app/components/ImageLightbox";
import type { ReactNode } from "react";
import { CaseStudyContentLayout } from "../_components/CaseStudyContentLayout";
import { CaseStudyInViewSection } from "../_components/CaseStudyInViewSection";
import { CaseStudyPrevNext } from "../_components/CaseStudyPrevNext";
import { OutcomesMetricsChart } from "./OutcomesMetricsChart";
import { CASE_STUDY_BODY_GRID, SITE_SHELL_INNER } from "@/lib/site-shell";

const AH_ASSET = (name: string) => `/case-studies/admission-hub/${name}`;

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
  title?: string;
  id?: string;
  children: ReactNode;
}) {
  return (
    <CaseStudyInViewSection
      id={id}
      className={id ? "scroll-mt-28 sm:scroll-mt-32" : undefined}
    >
      <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
        {kicker}
      </span>
      {title ? <h2 className="mt-2 text-zinc-100">{title}</h2> : null}
      {children}
    </CaseStudyInViewSection>
  );
}

export default function AdmissionHubCaseStudy() {
  return (
    <article className="min-h-screen bg-zinc-950 text-zinc-100">
      <header className="border-b border-zinc-800">
        <div className={`${SITE_SHELL_INNER} py-12 sm:py-16`}>
          <div className={`${CASE_STUDY_BODY_GRID} min-w-0`}>
            <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40">
              <ImageLightbox
                src={AH_ASSET("case-hero-cover.png")}
                alt="Admission Hub promotional flyer mockup — Working Holiday COOP and Canada study messaging"
                className="block w-full"
                disableHoverScale
              >
                <Image
                  src={AH_ASSET("case-hero-cover.png")}
                  alt="Admission Hub promotional flyer mockup — Working Holiday COOP and Canada study messaging"
                  width={1200}
                  height={675}
                  className="h-auto w-full object-cover object-[center_40%]"
                  sizes="(max-width: 768px) 100vw, 1080px"
                  priority
                />
              </ImageLightbox>
            </div>
          </div>
        </div>
      </header>

      <CaseStudyContentLayout
        contentClassName="space-y-20 sm:space-y-24"
      >
        <Section id="strategy" kicker="01 · Strategy">
          <div className="mt-4 max-w-2xl space-y-4 text-zinc-400 leading-relaxed">
            <p>
              I shifted toward{" "}
              <span className="font-medium text-zinc-100">
                life-in-Canada storytelling
              </span>
              —holidays, customs, fun facts, and slang—at{" "}
              <span className="font-medium text-zinc-100">
                five posts per week
              </span>
              , with two tied to immigration and study services and three
              dedicated to cultural hooks built for saves, shares, and repeat
              visits.
            </p>
            <p>
              I used Stories and Reels for real-time moments people actually
              care about on the ground—cherry blossom season, Pride, fireworks
              times and locations.
            </p>
            <p>
              Email marketing and long-form WordPress content worked as the
              slower, higher-intent layer: together they helped{" "}
              <span className="font-medium text-zinc-100">
                attract and nurture prospective clients
              </span>{" "}
              (lead generation) by moving curious readers from discovery into
              consultations—with subject lines, CTAs, and article depth matched
              to where people were in the journey.
            </p>
          </div>

          <figure className="mt-10 bg-zinc-900/25">
            <ImageLightbox
              src={AH_ASSET("dragon-boat-and-coop-creative.png")}
              alt="Admission Hub — Dragon Boat Festival Instagram post mockup beside Working Holiday COOP service flyer for Canada ADM"
              className="block w-full"
              disableHoverScale
            >
              <Image
                src={AH_ASSET("dragon-boat-and-coop-creative.png")}
                alt="Admission Hub — Dragon Boat Festival Instagram post mockup beside Working Holiday COOP service flyer for Canada ADM"
                width={1024}
                height={556}
                className="block h-auto w-full"
                sizes="(max-width: 896px) 100vw, 896px"
              />
            </ImageLightbox>
          </figure>
        </Section>

        <Section
          id="what-i-did"
          kicker="02 · What I did"
          title="A repeatable campaign + content system"
        >
          <div className="mt-4 rounded-2xl border border-zinc-800 bg-zinc-900/35 p-6">
            <h5 className="text-zinc-100">
              Email (Mailchimp) — how sends were structured
            </h5>
            <p className="mt-2 text-sm text-zinc-400 leading-relaxed max-w-3xl">
              Mailchimp execution—templates, segmentation, and cadence tied to
              site content—so sends consistently fed the pipeline of{" "}
              <span className="font-medium text-zinc-100">
                prospective clients
              </span>{" "}
              researching Canada options (lead generation), not just one-off
              announcements.
            </p>
            <p className="mt-2 text-xs text-zinc-500 leading-relaxed max-w-3xl">
              Original campaign screenshots weren&apos;t preserved.
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-zinc-400 leading-relaxed max-w-3xl">
              <li>
                <strong className="font-medium text-zinc-100">Cadence:</strong>{" "}
                Sends aligned with blog publishes and seasonal hooks so
                newsletters weren&apos;t one-off blasts.
              </li>
              <li>
                <strong className="font-medium text-zinc-100">
                  Subject + preheader:
                </strong>{" "}
                Clarity-first lines with Canada keywords; preheader used when it
                added a second beat without repeating the title.
              </li>
              <li>
                <strong className="font-medium text-zinc-100">Template:</strong>{" "}
                Repeatable blocks (hero, body, single primary CTA) to reduce
                layout drift between campaigns.
              </li>
              <li>
                <strong className="font-medium text-zinc-100">Channel fit:</strong>{" "}
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
                  className="rounded-full border border-zinc-700 bg-zinc-900/50 px-3 py-1 text-xs text-zinc-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-10 rounded-2xl border border-zinc-800 bg-zinc-900/35 p-6">
            <h5 className="text-zinc-100">
              SEO + WordPress
            </h5>
            <p className="mt-2 text-sm text-zinc-400 leading-relaxed max-w-3xl">
              Utility articles and on-page structure to support organic
              discovery.
            </p>
            <p className="mt-3 text-sm text-zinc-400 leading-relaxed max-w-3xl">
              Long posts with clear outlines and sidebars so Taiwan- and Hong
              Kong–based readers could self-serve before consulting.
            </p>
            <figure className="mt-6 bg-zinc-900/20">
              <ImageLightbox
                src={AH_ASSET("wordpress-blog-life-in-canada-50-facts.png")}
                alt="Admission Hub WordPress blog article — 50 interesting facts about Canada, desktop layout with hero image and sidebar widgets"
                className="block w-full"
                disableHoverScale
              >
                <Image
                  src={AH_ASSET("wordpress-blog-life-in-canada-50-facts.png")}
                  alt="Admission Hub WordPress blog article — 50 interesting facts about Canada, desktop layout with hero image and sidebar widgets"
                  width={1024}
                  height={581}
                  className="block h-auto w-full"
                  sizes="(max-width: 896px) 100vw, 896px"
                />
              </ImageLightbox>
              <figcaption className="mt-4 text-sm text-zinc-400 leading-relaxed">
                <span className="font-semibold text-zinc-100">
                  Featured articles (live)
                </span>
                <ul className="mt-2 flex flex-col gap-2">
                  {ADMISSION_WP_ARTICLES.map((item) => (
                    <li key={item.href}>
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-100 underline decoration-zinc-600 underline-offset-2 hover:decoration-zinc-400"
                      >
                        {item.label}
                      </a>
                      <span className="text-zinc-500"> · WordPress</span>
                    </li>
                  ))}
                </ul>
              </figcaption>
            </figure>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2 lg:items-start">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/35 p-6">
              <h5 className="text-zinc-100">
                Visuals for web + social
              </h5>
              <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                Figma graphics for the site and Instagram—supporting +500
                followers and +21% engagement over roughly three months.
              </p>
              <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
                I locked hero hierarchy and promo clarity so culture posts and
                conversion flyers still read as one ADM system.
              </p>
              <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
                Campaign and blog visuals so email, web, and social pointed to
                the same story and CTAs.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/35 p-6">
              <h5 className="text-zinc-100">
                Calendar hooks &amp; “utility” social
              </h5>
              <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                I chased utility moments people actually search for on Instagram
                (times, places, seasonal hooks).
              </p>
              <ul className="mt-4 flex flex-col gap-2 text-sm">
                {ADMISSION_IG_EXAMPLES.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-100 underline decoration-zinc-600 underline-offset-2 hover:decoration-zinc-400"
                    >
                      {item.label}
                    </a>
                    <span className="text-zinc-500"> · Instagram</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        <Section
          id="outcomes"
          kicker="03 · Outcomes"
          title="Measurable growth in engagement and reach"
        >
          <p className="mt-4 max-w-3xl text-sm text-zinc-400 leading-relaxed">
            The numbers below are anchored in{" "}
            <a
              href="https://www.instagram.com/adm.tw/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-zinc-100 underline decoration-zinc-600 underline-offset-2 hover:decoration-zinc-400"
            >
              @adm.tw
            </a>{" "}
            on Instagram—especially follower growth and typical post engagement.
            Mailchimp sends and WordPress articles also pushed readers toward the
            account during the same stretch.
          </p>

          <p className="mt-3 text-xs font-medium uppercase tracking-widest text-zinc-500">
            Instagram · typical post likes
          </p>
          <div className="mt-2 flex flex-wrap items-center gap-2 sm:gap-3">
            <span className="inline-flex items-center rounded-full border border-zinc-700 bg-zinc-900/40 px-4 py-2 text-sm font-medium tabular-nums text-zinc-100">
              ~5 likes
              <span className="ml-2 text-xs font-normal text-zinc-500">
                typical post (before)
              </span>
            </span>
            <span className="text-zinc-500" aria-hidden>
              →
            </span>
            <span className="inline-flex items-center rounded-full border border-zinc-700 bg-zinc-900/40 px-4 py-2 text-sm font-medium tabular-nums text-zinc-100">
              ~30 likes
              <span className="ml-2 text-xs font-normal text-zinc-500">
                typical post (during)
              </span>
            </span>
          </div>

          <div className="mt-8 max-w-3xl">
            <OutcomesMetricsChart />
          </div>
        </Section>

        <CaseStudyInViewSection className="space-y-8 border-t border-zinc-800 pt-12">
          <CaseStudyPrevNext currentSlug="admission-hub" />
          <Link
            href="/"
            className="text-sm font-medium text-zinc-400 transition hover:text-zinc-100"
          >
            ← Back to home
          </Link>
        </CaseStudyInViewSection>
      </CaseStudyContentLayout>
    </article>
  );
}

