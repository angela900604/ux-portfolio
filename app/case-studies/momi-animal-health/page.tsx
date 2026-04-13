import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
import { CaseStudyContentLayout } from "../_components/CaseStudyContentLayout";
import { CaseStudyPrevNext } from "../_components/CaseStudyPrevNext";
import { MomiOutcomesChart } from "./MomiOutcomesChart";
import { MomiUniformTile } from "./MomiUniformTile";

export const metadata = {
  title: "MOMI Animal Health | Angela Yang",
  description:
    "Designed social and promotional content for rabbit-care products and supported eCommerce execution, driving a 75% increase in online sales within two months.",
};

const MOMI_ASSET = (n: string) => `/case-studies/momi-animal-health/${n}`;

const MOMI_TOC = [
  { id: "goal", label: "Goal" },
  { id: "what-i-did", label: "What I did" },
  { id: "outcomes", label: "Outcomes" },
] as const;

const WHAT_I_DID_IMAGES = Array.from({ length: 9 }, (_, i) => ({
  src: MOMI_ASSET(`what-i-did-${String(i + 1).padStart(2, "0")}.png`),
  alt: `MOMI Animal Health — campaign and product creative ${i + 1} of 9`,
}));

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

export default function MomiAnimalHealthCaseStudy() {
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
            MOMI Animal Health
          </h1>
          <p className="mt-4 text-xl text-zinc-400 max-w-2xl">
            Supported marketing execution and designed content for social,
            promotions, and eCommerce—helping drive online sales growth for
            rabbit-care products.
          </p>

          <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-2 text-sm">
            <div>
              <dt className="text-zinc-500 uppercase tracking-wider">Role</dt>
              <dd className="text-zinc-200">Social Media & eCommerce</dd>
            </div>
            <div>
              <dt className="text-zinc-500 uppercase tracking-wider">Location</dt>
              <dd className="text-zinc-200">Taipei, Taiwan</dd>
            </div>
            <div>
              <dt className="text-zinc-500 uppercase tracking-wider">
                Timeline
              </dt>
              <dd className="text-zinc-200">Mar – Aug 2021</dd>
            </div>
          </dl>

          <div className="mt-12">
            <div className="relative w-full aspect-[21/9] overflow-hidden rounded-2xl border border-zinc-700/50 bg-zinc-900/30">
              <Image
                src="/home/momicover.png"
                alt="MOMI Animal Health cover"
                fill
                className="object-cover"
                sizes="(max-width: 896px) 100vw, 896px"
              />
            </div>
          </div>
        </div>
      </header>

      <CaseStudyContentLayout toc={MOMI_TOC} contentClassName="space-y-16">
        <Section
          id="goal"
          kicker="01 · Goal"
          title="Make product value feel clear and actionable"
        >
          <p className="mt-4 text-zinc-300 leading-relaxed max-w-2xl">
            MOMI Animal Health focuses on high-quality rabbit care products. The
            marketing goal was to communicate product benefits visually while
            supporting purchase and account questions across social and
            eCommerce channels.
          </p>
        </Section>

        <Section
          id="what-i-did"
          kicker="02 · What I did"
          title="Content system across touchpoints"
        >
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6">
              <h3 className="text-sm font-semibold text-zinc-100">Social content</h3>
              <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                Designed user-friendly social media posts using Canva and worked
                with Facebook campaigns to boost engagement.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6">
              <h3 className="text-sm font-semibold text-zinc-100">
                Promotions & creatives
              </h3>
              <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                Created print posters, banners, and flyers using Photoshop and
                Illustrator to support exhibitions and retail advertising.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6">
              <h3 className="text-sm font-semibold text-zinc-100">eCommerce support</h3>
              <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                Designed promotional covers for MOMO’s eCommerce platform and
                managed client inquiries via chat and social media.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6">
              <h3 className="text-sm font-semibold text-zinc-100">
                Outcome-focused execution
              </h3>
              <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                Partnered with the marketing team to run campaigns that improved
                online purchase conversion.
              </p>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:items-stretch">
            {WHAT_I_DID_IMAGES.map((item) => (
              <MomiUniformTile key={item.src} src={item.src} alt={item.alt} />
            ))}
          </div>
        </Section>

        <Section
          id="outcomes"
          kicker="03 · Outcomes"
          title="A clear lift in online sales"
        >
          <p className="mt-4 text-zinc-300 leading-relaxed max-w-2xl">
            Within two months, stronger creatives and clearer messaging translated
            into measurable eCommerce lift and more consistent storytelling across
            channels.
          </p>
          <div className="mt-6 max-w-3xl">
            <MomiOutcomesChart />
          </div>
        </Section>

        <section className="border-t border-zinc-800 pt-12 space-y-8">
          <CaseStudyPrevNext currentSlug="momi-animal-health" />
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
