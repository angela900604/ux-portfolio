export type CaseStudyTocItem = {
  id: string;
  label: string;
};

type Props = {
  items: readonly CaseStudyTocItem[];
  variant?: "dark" | "light";
  /** e.g. Traditional Chinese label above the list */
  heading?: string;
  className?: string;
};

/**
 * Sticky in-page navigation for case studies (desktop / large tablet).
 */
export function CaseStudySideNav({
  items,
  variant = "dark",
  heading = "On this page",
  className = "",
}: Props) {
  if (items.length === 0) return null;

  const isDark = variant === "dark";

  return (
    <aside
      className={`hidden lg:block ${className}`}
      aria-label={heading}
    >
      <nav className="sticky top-28 max-h-[min(100vh-7rem,32rem)] overflow-y-auto overscroll-contain pr-1 sm:top-32">
        <p
          className={
            isDark
              ? "mb-3 text-[10px] font-semibold uppercase tracking-widest text-zinc-500"
              : "mb-3 text-[10px] font-semibold uppercase tracking-widest text-[#7A7A7A]"
          }
        >
          {heading}
        </p>
        <ul
          className={
            isDark
              ? "space-y-0.5 border-l border-zinc-800"
              : "space-y-0.5 border-l border-[#D4C5B0]/80"
          }
        >
          {items.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={
                  isDark
                    ? "block border-l-2 border-transparent py-1 pl-3 text-left text-[12px] leading-snug text-zinc-500 transition hover:border-violet-500/60 hover:text-zinc-200"
                    : "block border-l-2 border-transparent py-1 pl-3 text-left text-[12px] leading-snug text-[#6B6B6B] transition hover:border-[#8D99AE] hover:text-[#2C3E50]"
                }
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
