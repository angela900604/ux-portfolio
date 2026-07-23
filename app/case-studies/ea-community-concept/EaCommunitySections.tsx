const EA_ACCENT = "#F97316";

export const EA_ASSET = (name: string) =>
  `/case-studies/ea-community-concept/${encodeURIComponent(name)}`;

export const RESEARCH_STATS = [
  {
    value: "41%",
    caption: "of teens report participating in online groups centered around hobbies",
  },
  {
    value: "84%",
    caption:
      "of respondents emphasized connecting with like-minded gamers for engagement",
  },
  {
    value: "40%",
    caption: "of teens participate in groups with a focus on humor",
  },
] as const;

export const ALEX_PERSONA = {
  name: "Alex Lewis",
  role: "Graphic Designer",
  age: 24,
  location: "Vancouver, CA",
  quote:
    "I find it challenging to connect with other gamers who have different interests and experiences, so I don't see a compelling reason to interact with them",
  scenario:
    "Alex is a passionate gamer who spends most of his free time playing games on his Mac. He has developed strong skills across genres—but Mac lacks social features for adding friends in-game. He struggles to find common interests outside gaming, which limits conversations with others.",
  behaviour:
    "Enjoys multiplayer games and connecting with other gamers to play together and share experiences.",
  painPoints:
    "Hard to talk with strangers outside gaming—feels he doesn't have enough shared interests to sustain a conversation.",
  motivation:
    "Wants to make connections with other gamers who share his interests—not just the same game library.",
} as const;

export type FlowStepKind = "start" | "end" | "screen" | "action" | "system";

export type FlowStep = {
  kind: FlowStepKind;
  label: string;
  note?: string;
};

export const TASK_FLOW_STEPS: FlowStep[] = [
  { kind: "start", label: "Start" },
  { kind: "screen", label: "Community Screen" },
  { kind: "action", label: "Input keyword in search bar" },
  {
    kind: "system",
    label: "Show communities matching keywords",
    note: "Surfaces groups where users can meet people with common interests—not just shared game titles.",
  },
  { kind: "action", label: "Select a community to join" },
  {
    kind: "screen",
    label: "Community Profile",
    note: "Bio description · member count · offline & online event list",
  },
  { kind: "action", label: "Select an event" },
  {
    kind: "screen",
    label: "Event Screen",
    note: "Join Event CTA · event summary · details · similar event recommendations",
  },
  { kind: "action", label: "Register for event" },
  { kind: "end", label: "End" },
];

const FLOW_KIND_LABEL: Record<FlowStepKind, string> = {
  start: "Start",
  end: "End",
  screen: "Screen",
  action: "Action",
  system: "System",
};

const FLOW_KIND_STYLE: Record<FlowStepKind, string> = {
  start: "border-ink-line bg-paper-soft text-ink-soft",
  end: "border-ink-line bg-paper-soft text-ink-soft",
  screen: "border-fuchsia-500/40 bg-fuchsia-950/30 text-fuchsia-100",
  action: "border-sky-500/40 bg-sky-950/30 text-sky-100",
  system: "border-orange-500/40 bg-orange-950/25 text-orange-100",
};

export function ResearchStatsGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {RESEARCH_STATS.map((stat) => (
        <div
          key={stat.value + stat.caption.slice(0, 12)}
          className="flex flex-col overflow-hidden p-5 sm:p-6"
        >
          <p
            className="text-4xl font-bold tabular-nums tracking-tight sm:text-5xl"
            style={{ color: EA_ACCENT }}
          >
            {stat.value}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-ink-soft">{stat.caption}</p>
        </div>
      ))}
    </div>
  );
}

export function PersonaBlock() {
  const p = ALEX_PERSONA;
  return (
    <div className="max-w-3xl space-y-6 overflow-hidden p-6 sm:p-8">
      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-widest text-ink-muted">
          Persona
        </p>
        <p className="text-xl font-semibold text-ink">{p.name}</p>
        <p className="text-sm text-ink-muted">
          {p.role} · Age {p.age} · {p.location}
        </p>
      </div>

      <blockquote className="border-l-2 pl-4" style={{ borderColor: EA_ACCENT }}>
        <p className="text-base italic leading-relaxed text-ink-soft sm:text-lg">
          &ldquo;{p.quote}&rdquo;
        </p>
      </blockquote>

      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-widest text-ink-muted">
          Scenario
        </p>
        <p className="text-sm leading-relaxed text-ink-soft sm:text-base">
          {p.scenario}
        </p>
      </div>

      <dl className="grid gap-4 sm:grid-cols-3">
        <div>
          <dt className="text-[11px] font-semibold uppercase tracking-wider text-ink-muted">
            Behaviour
          </dt>
          <dd className="mt-1.5 text-sm leading-relaxed text-ink-soft">{p.behaviour}</dd>
        </div>
        <div>
          <dt className="text-[11px] font-semibold uppercase tracking-wider text-ink-muted">
            Pain points
          </dt>
          <dd className="mt-1.5 text-sm leading-relaxed text-ink-soft">{p.painPoints}</dd>
        </div>
        <div>
          <dt className="text-[11px] font-semibold uppercase tracking-wider text-ink-muted">
            Motivation
          </dt>
          <dd className="mt-1.5 text-sm leading-relaxed text-ink-soft">{p.motivation}</dd>
        </div>
      </dl>
    </div>
  );
}

export function TaskFlowSteps() {
  return (
    <ol className="max-w-3xl space-y-0">
      {TASK_FLOW_STEPS.map((step, index) => (
        <li key={step.label} className="relative flex gap-4 pb-6 last:pb-0">
          {index < TASK_FLOW_STEPS.length - 1 ? (
            <span
              className="absolute left-[1.125rem] top-10 bottom-0 w-px bg-zinc-700/80"
              aria-hidden
            />
          ) : null}
          <div
            className={`relative z-[1] flex h-9 w-9 shrink-0 items-center justify-center rounded-full border text-[10px] font-bold uppercase tracking-wide ${FLOW_KIND_STYLE[step.kind]}`}
            aria-hidden
          >
            {index + 1}
          </div>
          <div className="min-w-0 flex-1 pt-0.5">
            <div className="flex flex-wrap items-center gap-2">
              <p className="font-semibold text-ink">{step.label}</p>
              <span className="rounded-full border border-ink-line bg-paper-soft px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-ink-muted">
                {FLOW_KIND_LABEL[step.kind]}
              </span>
            </div>
            {step.note ? (
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{step.note}</p>
            ) : null}
          </div>
        </li>
      ))}
    </ol>
  );
}
