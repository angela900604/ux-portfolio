import { WideFigure } from "../e-invoice-app/EInvoiceFigures";

export type FinalProductGroup = {
  title: string;
  description?: string;
  /** 1-based indices matching `final-screen-${nn}.png` in `public/case-studies/baskin-robbins/` */
  screenNumbers: readonly number[];
};

type Props = {
  asset: (name: string) => string;
  groups: readonly FinalProductGroup[];
};

export function FinalProductScreens({ asset, groups }: Props) {
  return (
    <div className="space-y-16">
      {groups.map((group) => (
        <div key={group.title} className="space-y-6">
          <div className="max-w-3xl space-y-2">
            <h3 className="text-zinc-100">{group.title}</h3>
            {group.description ? (
              <p className="text-sm leading-relaxed text-zinc-400">
                {group.description}
              </p>
            ) : null}
          </div>
          <div className="grid max-w-4xl gap-x-6 gap-y-12 sm:grid-cols-2">
            {group.screenNumbers.map((n) => {
              const src = asset(
                `final-screen-${String(n).padStart(2, "0")}.png`
              );
              return (
                <WideFigure
                  key={src}
                  borderless
                  src={src}
                  alt={`Baskin-Robbins Taiwan membership app — ${group.title}, screen ${n}`}
                />
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
