import Link from "next/link";
import { CaseStudyPrevNext } from "../../_components/CaseStudyPrevNext";
import { MinaInstagramGrid } from "./MinaInstagramGrid";
import { SITE_SHELL_INNER } from "@/lib/site-shell";

export const metadata = {
  title: "MINA · Instagram | Angela Yang",
  description:
    "Social and launch graphics for MINA (AI marketplace for parents): full-width portfolio mockups for Instagram and launch, concierge storytelling, and product positioning.",
};

export default function MinaMarketingPage() {
  return (
    <article className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className={`${SITE_SHELL_INNER} pb-16 sm:pb-20 pt-10 sm:pt-12`}>
        <MinaInstagramGrid />
      </div>

      <div
        className={`${SITE_SHELL_INNER} border-t border-zinc-800 pt-12 pb-12 space-y-8`}
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
