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
                Admission Hub supports students preparing for study-abroad
                pathways. This project focused on building a consistent digital
                marketing system across email, social content, and website channels.
              </p>
            </article>
            <article className="rounded-2xl border border-[#E8E1D6] bg-white p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-[#7B746B]">
                My role
              </h3>
              <p className="mt-2 text-sm text-[#666] leading-relaxed">
                Owned campaign execution across digital marketing, social content,
                and WordPress-driven SEO updates.
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
            <article className="rounded-2xl border border-[#E8E1D6] bg-white p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-[#7B746B]">
                Timeline
              </h3>
              <p className="mt-2 text-sm text-[#666] leading-relaxed">
                May 2022 – Aug 2022
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
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-[#E8E1D6] bg-white p-6">
              <h3 className="text-sm font-semibold text-[#2C3E50]">
                Email campaigns
              </h3>
              <p className="mt-2 text-sm text-[#666] leading-relaxed">
                Leveraged Mailchimp to design and execute email campaigns that
                improved brand recognition and engagement.
              </p>
            </div>
            <div className="rounded-2xl border border-[#E8E1D6] bg-white p-6">
              <h3 className="text-sm font-semibold text-[#2C3E50]">SEO + WordPress</h3>
              <p className="mt-2 text-sm text-[#666] leading-relaxed">
                Wrote and optimized content on WordPress to improve SEO. This
                contributed to an 18% increase in organic traffic.
              </p>
            </div>
            <div className="rounded-2xl border border-[#E8E1D6] bg-white p-6">
              <h3 className="text-sm font-semibold text-[#2C3E50]">
                Visuals for web + social
              </h3>
              <p className="mt-2 text-sm text-[#666] leading-relaxed">
                Used Figma to create digital graphics for the website and
                Instagram, driving +500 social followers and +21% engagement in
                three months.
              </p>
            </div>
            <div className="rounded-2xl border border-[#E8E1D6] bg-white p-6">
              <h3 className="text-sm font-semibold text-[#2C3E50]">
                Consistent brand execution
              </h3>
              <p className="mt-2 text-sm text-[#666] leading-relaxed">
                Built campaign assets and supporting content (including posters
                and blog-style visuals) to keep tone consistent across
                touchpoints.
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-[#E8E1D6] bg-white p-6 max-w-2xl">
            <h3 className="text-sm font-semibold text-[#2C3E50]">
              Calendar hooks &amp; “utility” social
            </h3>
            <p className="mt-2 text-sm text-[#666] leading-relaxed">
              A lot of the momentum came from posts that matched how people use
              Instagram to plan a weekend—fireworks times and locations,
              seasonal guides, and other shareable local moments. The Dragon Boat
              Festival creative below is one strong visual in that same calendar
              lane; the examples on the live feed show the broader pattern.
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

          <div className="mt-8">
            <Image
              src={AH_ASSET("what-i-did-hero.png")}
              alt="Admission Hub — Dragon Boat Festival social creative paired with Working Holiday COOP poster"
              width={1600}
              height={900}
              className="h-auto w-full object-contain"
              sizes="(max-width: 1024px) 100vw, 1100px"
            />
          </div>
        </Section>

        <Section
          id="outcomes"
          kicker="05 · Outcomes"
          title="Measurable growth in engagement and reach"
        >
          <p className="mt-4 text-[#666] leading-relaxed max-w-2xl">
            These numbers reflect growth during my time in the role: about{" "}
            <span className="font-medium text-[#2C3E50]">three months</span> of
            execution. On top of{" "}
            <span className="font-medium text-[#2C3E50]">+500 net new followers</span>,{" "}
            <span className="font-medium text-[#2C3E50]">+21% engagement</span>, and{" "}
            <span className="font-medium text-[#2C3E50]">+18% organic traffic</span>{" "}
            on the site, typical feed posts moved from roughly{" "}
            <span className="font-medium text-[#2C3E50]">~5 likes to ~30 likes</span>
            —a concrete before/after on the same channel.
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

