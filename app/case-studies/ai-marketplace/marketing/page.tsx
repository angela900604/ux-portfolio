import Link from "next/link";
import { CaseStudyPrevNext } from "../../_components/CaseStudyPrevNext";
import { MinaInstagramGrid } from "./MinaInstagramGrid";
import { SITE_SHELL_INNER } from "@/lib/site-shell";

export const metadata = {
  title: "MINA · Instagram | Angela Yang",
  description:
    "MINA marketing work — social and launch graphics, Instagram grid, Canva, Figma, Lovart.",
};

export default function MinaMarketingPage() {
  return (
    <article className="min-h-screen bg-paper text-ink">
      <div className={`${SITE_SHELL_INNER} pb-16 sm:pb-20 pt-10 sm:pt-12`}>
        <MinaInstagramGrid />
      </div>

      <div
        className={`${SITE_SHELL_INNER} border-t border-ink-line pt-12 pb-12 space-y-8`}
      >
        <CaseStudyPrevNext currentSlug="ai-marketplace/marketing" />
        <Link
          href="/"
          className="text-sm font-medium text-ink-soft transition hover:text-ink"
        >
          ← Back to home
        </Link>
      </div>
    </article>
  );
}
