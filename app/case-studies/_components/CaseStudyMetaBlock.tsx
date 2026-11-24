import { CS_BODY, CS_META_LABEL } from "@/lib/case-study-theme";

export type CaseStudyMetaItem = {
  label: string;
  value: string;
};

/** Role / Team / Timeline / Outcome block under a case-study title. */
export function CaseStudyMetaBlock({
  items,
  summary,
}: {
  items: readonly CaseStudyMetaItem[];
  summary?: string;
}) {
  const gridClass =
    items.length >= 4
      ? "sm:grid-cols-2 lg:grid-cols-4"
      : items.length === 3
        ? "sm:grid-cols-3"
        : "sm:grid-cols-2";

  return (
    <div className="mb-8">
      <dl
        className={`grid max-w-5xl grid-cols-1 gap-4 sm:gap-6 ${gridClass}`}
      >
        {items.map((item) => (
          <div key={item.label}>
            <dt className={CS_META_LABEL}>{item.label}</dt>
            <dd className={CS_BODY}>{item.value}</dd>
          </div>
        ))}
      </dl>
      {summary ? (
        <p className={`mt-6 max-w-3xl ${CS_BODY}`}>{summary}</p>
      ) : null}
    </div>
  );
}
