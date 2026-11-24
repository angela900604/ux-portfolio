import Link from "next/link";

const FOOTER_LINK =
  "text-zinc-300 underline decoration-dotted decoration-zinc-600 underline-offset-[3px] transition-colors hover:text-zinc-100 hover:decoration-zinc-400";

/** Site-wide footer: existing contact + home. */
export function SiteSimpleFooter() {
  return (
    <footer className="border-t border-zinc-800 px-5 py-6 text-sm text-zinc-300 sm:px-10 lg:px-[63px]">
      <p className="flex flex-wrap items-center gap-x-3 gap-y-1">
        <a
          href="mailto:angela900604@gmail.com"
          className={FOOTER_LINK}
        >
          angela900604@gmail.com
        </a>
        <span aria-hidden className="text-zinc-600">
          ·
        </span>
        <a
          href="https://www.linkedin.com/in/angelayangg/"
          target="_blank"
          rel="noopener noreferrer"
          className={FOOTER_LINK}
        >
          LinkedIn
        </a>
        <span aria-hidden className="text-zinc-600">
          ·
        </span>
        <Link href="/" className={FOOTER_LINK}>
          Back to home
        </Link>
      </p>
    </footer>
  );
}
