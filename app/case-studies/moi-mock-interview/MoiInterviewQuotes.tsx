import type { ReactNode } from "react";

function QuoteBubble({
  children,
  align,
}: {
  children: ReactNode;
  align: "left" | "right";
}) {
  return (
    <div
      className={`flex ${align === "left" ? "justify-start" : "justify-end"}`}
    >
      <div
        className={`max-w-[min(100%,26rem)] rounded-2xl border border-zinc-700/70 bg-zinc-900/55 px-4 py-3 text-sm leading-relaxed text-zinc-200 shadow-sm sm:px-5 sm:py-4 ${
          align === "left"
            ? "rounded-tl-md border-sky-500/25"
            : "rounded-tr-md border-fuchsia-500/20"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

export function MoiInterviewQuotes() {
  return (
    <div className="space-y-4">
      <p className="text-[11px] font-medium uppercase tracking-widest text-zinc-500">
        From 10 interviews · new graduates · North America
      </p>
      <div className="space-y-3">
        <QuoteBubble align="left">
          <p>
            I&apos;m never sure if I&apos;ve practiced the{" "}
            <span className="font-medium text-sky-200/95">right</span> things—or
            with the right person. That uncertainty is exhausting.
          </p>
        </QuoteBubble>
        <QuoteBubble align="right">
          <p>
            When I walk in under-prepared, I spiral. I can feel my confidence
            drop before I even answer the first question.
          </p>
        </QuoteBubble>
        <QuoteBubble align="left">
          <p>
            I wish I could get real feedback on how I did, but hiring managers
            don&apos;t have time—and I&apos;m left guessing.
          </p>
        </QuoteBubble>
      </div>
      <p className="text-xs text-zinc-500">
        MoI had to work for introverts who need practice most—but find live mocks
        draining.
      </p>
    </div>
  );
}
