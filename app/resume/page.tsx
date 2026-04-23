import Link from "next/link";
import { SITE_SHELL_CONTAINER } from "@/lib/site-shell";

const RESUME_PDF = "/resume/AngelaYang-Resume.pdf";

export const metadata = {
  title: "Resume | Angela Yang",
  description:
    "Angela Yang — Product Designer. Resume PDF: experience, education, and skills.",
};

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className={`${SITE_SHELL_CONTAINER} py-8 sm:py-10`}>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-zinc-500">
              Resume
            </p>
            <h1 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-100 sm:text-3xl">
              Angela (ChiehNi) Yang
            </h1>
            <p className="mt-2 text-sm text-zinc-400">
              Vancouver, BC ·{" "}
              <a
                href="mailto:angela900604@gmail.com"
                className="text-zinc-300 underline decoration-zinc-600 underline-offset-2 hover:text-zinc-100"
              >
                angela900604@gmail.com
              </a>
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 sm:justify-end">
            <a
              href={RESUME_PDF}
              download="AngelaYang-Resume.pdf"
              className="inline-flex items-center justify-center rounded-full border border-zinc-600 bg-zinc-900 px-4 py-2 text-sm font-medium text-zinc-100 transition hover:border-zinc-500 hover:bg-zinc-800"
            >
              Download PDF
            </a>
            <a
              href={RESUME_PDF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-transparent px-4 py-2 text-sm font-medium text-zinc-400 transition hover:text-zinc-100"
            >
              Open in new tab
            </a>
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full border border-transparent px-4 py-2 text-sm font-medium text-zinc-400 transition hover:text-zinc-100"
            >
              ← Back to work
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-zinc-800 bg-zinc-950">
        <div className={`${SITE_SHELL_CONTAINER} pb-6 pt-4`}>
          <p className="text-xs text-zinc-500">
            Preview below. If it does not load, use{" "}
            <a
              href={RESUME_PDF}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 underline decoration-zinc-600 underline-offset-2 hover:text-zinc-200"
            >
              Open in new tab
            </a>
            .
          </p>
        </div>
        <iframe
          title="Angela Yang resume PDF"
          src={`${RESUME_PDF}#view=FitH`}
          className="block h-[min(85dvh,900px)] w-full border-0 bg-zinc-900 sm:h-[min(88dvh,1000px)]"
        />
      </div>
    </div>
  );
}
