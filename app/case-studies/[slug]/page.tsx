import Link from "next/link";
import { notFound } from "next/navigation";
import VisualPlaceholder from "../_components/VisualPlaceholder";

const KNOWN_SLUGS = [
  "e-invoice-app",
  "ai-marketplace",
  "government-backend",
  "baskin-robbins",
  "admission-hub",
  "momi-animal-health",
  "phyphyya",
];

export default function CaseStudySlugPage({
  params,
}: {
  // Next.js app-router passes `params` as a plain object (not a Promise).
  params: { slug: string };
}) {
  const { slug } = params;
  const isKnown = KNOWN_SLUGS.includes(slug);

  if (!isKnown) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col items-center justify-center px-6">
      <p className="text-xs font-medium uppercase tracking-widest text-zinc-500 mb-2">
        Case study
        <span className="text-zinc-600 mx-2">·</span>
        {slug}
      </p>
      <h1 className="text-center text-zinc-200 max-w-md">
        This case study is coming soon.
      </h1>
      <p className="mt-3 text-sm text-zinc-500 text-center max-w-sm">
        Content and visuals for this project will be added here. For now, check
        out the e-Invoice flagship case.
      </p>
      <div className="w-full max-w-[720px] mt-8">
        <VisualPlaceholder
          label="Case study visuals (coming soon)"
          hint="Add 1–3 key screens or artifacts that anchor the narrative once the write-up is ready."
          aspect="wide"
        />
      </div>
      <Link
        href="/case-studies/e-invoice-app"
        className="mt-8 text-sm font-medium text-zinc-300 hover:text-zinc-100"
      >
        View flagship case study →
      </Link>
      <Link href="/" className="mt-4 text-sm text-zinc-500 hover:text-zinc-300">
        ← Back to work
      </Link>
    </div>
  );
}
