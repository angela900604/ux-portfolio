import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
import { CaseStudyContentLayout } from "../_components/CaseStudyContentLayout";
import { CaseStudyPrevNext } from "../_components/CaseStudyPrevNext";
import { WideFigure } from "../e-invoice-app/EInvoiceFigures";
import { OutcomesMetricsChart } from "./OutcomesMetricsChart";

const AH_ASSET = (name: string) => `/case-studies/admission-hub/${name}`;

const ADMISSION_TOC = [
  { id: "challenge", label: "Challenge" },
  { id: "what-i-did", label: "What I did" },
  { id: "outcomes", label: "Outcomes" },
] as const;

export const metadata = {
  title: "Admission Hub (Digital Marketing) | Angela Yang",
  description:
    "Created email campaigns, optimized WordPress SEO, and built Instagram + website graphics. Improved engagement and organic traffic.",
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
      <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
        {kicker}
      </span>
      <h2 className="mt-2 text-xl font-semibold text-zinc-100">{title}</h2>
      {children}
    </section>
  );
}

export default function AdmissionHubCaseStudy() {
  return (
    <article className="min-h-screen bg-zinc-950 text-zinc-100">
      <header className="border-b border-zinc-800">
        <div className="mx-auto max-w-[1280px] px-6 sm:px-[100px] py-16 sm:py-24">
          <div className="flex flex-wrap gap-2 text-xs uppercase tracking-widest text-zinc-500 mb-6">
            <span>Case Study</span>
            <span className="text-zinc-600">·</span>
            <span>Digital Marketing</span>
            <span className="text-zinc-600">·</span>
            <span>Content + Growth</span>
          </div>

          <h1 className="font-semibold text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight max-w-3xl">
            Admission Hub
          </h1>
          <p className="mt-4 text-xl text-zinc-400 max-w-2xl">
            Built a content and campaign system across email, WordPress, and
            Instagram—improving brand recognition and driving SEO growth.
          </p>

          <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-2 text-sm">
            <div>
              <dt className="text-zinc-500 uppercase tracking-wider">Role</dt>
              <dd className="text-zinc-200">Digital Marketer</dd>
            </div>
            <div>
              <dt className="text-zinc-500 uppercase tracking-wider">Location</dt>
              <dd className="text-zinc-200">Toronto, ON</dd>
            </div>
            <div>
              <dt className="text-zinc-500 uppercase tracking-wider">
                Timeline
              </dt>
              <dd className="text-zinc-200">May – Aug 2022</dd>
            </div>
          </dl>

          <div className="mt-12">
            <div className="relative w-full aspect-[21/9] overflow-hidden rounded-2xl border border-zinc-700/50 bg-zinc-900/30">
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

      <CaseStudyContentLayout toc={ADMISSION_TOC} contentClassName="space-y-16">
        <Section
          id="challenge"
          kicker="01 · Challenge"
          title="Earn attention, then convert it into trust"
        >
          <p className="mt-4 text-zinc-300 leading-relaxed max-w-2xl">
            For study-abroad audiences, the biggest barrier is information
            quality and clarity. The goal was to help Taiwan-based prospects
            discover relevant content, stay engaged, and take the next step
            with confidence.
          </p>
        </Section>

        <Section
          id="what-i-did"
          kicker="02 · What I did"
          title="A repeatable campaign + content system"
        >
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6">
              <h3 className="text-sm font-semibold text-zinc-100">
                Email campaigns
              </h3>
              <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                Leveraged Mailchimp to design and execute email campaigns that
                improved brand recognition and engagement.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6">
              <h3 className="text-sm font-semibold text-zinc-100">SEO + WordPress</h3>
              <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                Wrote and optimized content on WordPress to improve SEO. This
                contributed to an 18% increase in organic traffic.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6">
              <h3 className="text-sm font-semibold text-zinc-100">
                Visuals for web + social
              </h3>
              <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                Used Figma to create digital graphics for the website and
                Instagram, driving +500 social followers and +21% engagement in
                three months.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6">
              <h3 className="text-sm font-semibold text-zinc-100">
                Consistent brand execution
              </h3>
              <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                Built campaign assets and supporting content (including posters
                and blog-style visuals) to keep tone consistent across
                touchpoints.
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <WideFigure
              borderless
              src={AH_ASSET("what-i-did-01.png")}
              alt="Admission Hub — seasonal social post (Dragon Boat Festival) and Working Holiday COOP program flyer"
            />
            <WideFigure
              borderless
              src={AH_ASSET("what-i-did-02.png")}
              alt="Admission Hub — print flyer for Working Holiday COOP and Canada ADM services"
            />
          </div>
        </Section>

        <Section
          id="outcomes"
          kicker="03 · Outcomes"
          title="Measurable growth in engagement and reach"
        >
          <p className="mt-4 text-zinc-300 leading-relaxed max-w-2xl">
            Reported lifts over a three-month window: audience growth on social,
            stronger engagement on content, and more organic sessions on the site.
          </p>
          <div className="mt-6 max-w-3xl">
            <OutcomesMetricsChart />
          </div>
        </Section>

        <section className="border-t border-zinc-800 pt-12 space-y-8">
          <CaseStudyPrevNext currentSlug="admission-hub" />
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

