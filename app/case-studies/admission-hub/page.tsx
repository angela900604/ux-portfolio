import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
import VisualPlaceholder from "../_components/VisualPlaceholder";

export const metadata = {
  title: "Admission Hub (Digital Marketing) | Angela Yang",
  description:
    "Created email campaigns, optimized WordPress SEO, and built Instagram + website graphics. Improved engagement and organic traffic.",
};

function Section({
  kicker,
  title,
  children,
}: {
  kicker: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section>
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
        <div className="mx-auto max-w-[1200px] px-6 sm:px-[100px] py-16 sm:py-24">
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

      <div className="mx-auto max-w-[1200px] px-6 sm:px-[100px] py-12 sm:py-16 space-y-16">
        <Section
          kicker="01 · Challenge"
          title="Earn attention, then convert it into trust"
        >
          <p className="mt-4 text-zinc-300 leading-relaxed max-w-2xl">
            For study-abroad audiences, the biggest barrier is information
            quality and clarity. The goal was to help Taiwan-based prospects
            discover relevant content, stay engaged, and take the next step
            with confidence.
          </p>
          <VisualPlaceholder
            label="Challenge context visual"
            hint="Add an example of the original content/landing page state or an audience journey sketch that motivated the campaign work."
            aspect="wide"
          />
        </Section>

        <Section
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

          <div className="mt-8">
            <div className="relative w-full aspect-video overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/30">
              <img
                src="https://www.ycnangelayang.com/wp-content/uploads/2023/07/Trendy-Instagram-Post-Mockups-Community_page-0001.jpg"
                alt="Instagram post mockups (external)"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </Section>

        <Section kicker="03 · Outcomes" title="Measurable growth in engagement and reach">
          <VisualPlaceholder
            label="Outcome evidence"
            hint="Add a screenshot of analytics highlights (Mailchimp, GA, or IG insights) that support the reported lifts."
            aspect="wide"
          />
          <div className="mt-6 rounded-2xl bg-zinc-800/60 border border-zinc-700/50 p-8 sm:p-10">
            <ul className="space-y-3 text-zinc-200">
              <li className="flex gap-3">
                <span className="text-emerald-400 font-semibold shrink-0">+500</span>
                <span>social followers (3 months)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-400 font-semibold shrink-0">+21%</span>
                <span>engagement improvement</span>
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-400 font-semibold shrink-0">+18%</span>
                <span>organic traffic increase</span>
              </li>
            </ul>
          </div>
        </Section>

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

