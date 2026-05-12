import Link from "next/link";
import { CaseStudyPrevNext } from "../../_components/CaseStudyPrevNext";
import { MinaInstagramGrid } from "./MinaInstagramGrid";
import { SITE_SHELL_CONTAINER } from "@/lib/site-shell";

export const metadata = {
  title:
    "MINA · Marketing designer — Instagram & launch visuals | Angela Yang",
  description:
    "Social and launch graphics for MINA (AI marketplace for parents): Instagram-style grid of campaign visuals, concierge storytelling, and product positioning.",
};

export default function MinaMarketingPage() {
  return (
    <article className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className={`${SITE_SHELL_CONTAINER} py-10 sm:py-14`}>
        <Link
          href="/case-studies/ai-marketplace"
          className="text-sm font-medium text-zinc-400 transition hover:text-zinc-100"
        >
          ← Back to MINA case study
        </Link>
        <header className="mt-8 max-w-2xl space-y-4">
          <p className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            Marketing designer
          </p>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            MINA · Instagram &amp; launch visuals
          </h1>
          <p className="text-[15px] leading-relaxed text-zinc-400 sm:text-base">
            Campaign tiles for the MINA brand — marketplace positioning,
            concierge pickup, community programs, and product stories — laid
            out in a profile-style grid so you can scan them like a feed.
          </p>
        </header>
      </div>

      <div className={`${SITE_SHELL_CONTAINER} pb-16 sm:pb-20`}>
        <MinaInstagramGrid />
      </div>

      <div
        className={`${SITE_SHELL_CONTAINER} border-t border-zinc-800 pt-12 pb-12 space-y-8`}
      >
        <CaseStudyPrevNext currentSlug="ai-marketplace/marketing" />
        <Link
          href="/"
          className="text-sm font-medium text-zinc-400 transition hover:text-zinc-100"
        >
          ← Back to home
        </Link>
      </div>
    </article>
  );
}
