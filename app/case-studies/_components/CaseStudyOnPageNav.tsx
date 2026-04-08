type LinkItem = { href: string; label: string };

export function CaseStudyOnPageNav({
  title = "On this page",
  links,
}: {
  title?: string;
  links: readonly LinkItem[];
}) {
  return (
    <nav
      className="rounded-xl border border-zinc-800/90 bg-zinc-950/80 p-4 sm:p-5"
      aria-label={title}
    >
      <p className="text-xs font-medium uppercase tracking-widest text-zinc-500">
        {title}
      </p>
      <ul className="mt-3 flex flex-wrap gap-2">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="inline-flex rounded-full border border-zinc-700/90 bg-zinc-900/60 px-3 py-1.5 text-xs font-medium text-zinc-300 transition hover:border-violet-500/40 hover:bg-violet-500/10 hover:text-violet-200"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
