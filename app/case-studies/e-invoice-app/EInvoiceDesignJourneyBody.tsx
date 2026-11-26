import { WideFigure } from "./EInvoiceFigures";
import { CaseStudyInViewSection } from "../_components/CaseStudyInViewSection";
import { CASE_STUDY_SECTION_TITLE_CLASS } from "@/lib/site-shell";
import { CS_H3 } from "@/lib/case-study-theme";

const ASSET = (name: string) => `/case-studies/e-invoice/case-assets/${name}`;

const FUNCTIONAL_MAP_INITIAL_DISCUSSION = {
  src:
    "/case-studies/e-invoice/" +
    encodeURIComponent("Example of Initial Feature Discussion Stage.png"),
  alt: "Example of initial feature discussion stage: functional map and touchpoints before wireframes",
} as const;

const STYLE_SWATCHES: { hex: string; name: string }[] = [
  { hex: "#25244A", name: "Deep navy" },
  { hex: "#51B0A9", name: "Teal" },
  { hex: "#A089FD", name: "Lavender" },
  { hex: "#E57651", name: "Coral" },
  { hex: "#F8D364", name: "Warm yellow" },
];

const M_TXT =
  "rounded-md bg-emerald-500/20 px-1.5 py-0.5 font-semibold tabular-nums text-emerald-200";
const M_TIME =
  "rounded-md bg-amber-500/15 px-1.5 py-0.5 font-medium tabular-nums text-amber-100/95";
const E_INVOICE_ACCENT_LABEL = "font-semibold text-emerald-300";
const JOURNEY_EMPHASIS = "font-semibold text-emerald-200";

export function EInvoiceDesignJourneyBody() {
  return (
    <div className="space-y-16 sm:space-y-20">
      <CaseStudyInViewSection
        id="functional-map"
        className="scroll-mt-28 space-y-5 sm:scroll-mt-32"
      >
        <span className="cs-section-eyebrow">Functional map</span>
        <p className="max-w-3xl cs-body">
          Before moving to wireframe, I mapped out a{" "}
          <span className={JOURNEY_EMPHASIS}>functional map</span> for all
          features (login, home, prize redemptions, etc) and{" "}
          <span className={JOURNEY_EMPHASIS}>validated</span> each touchpoint
          with <span className={JOURNEY_EMPHASIS}>internal stakeholders</span>{" "}
          (engineers on{" "}
          <span className={JOURNEY_EMPHASIS}>
            API availability and data sources
          </span>
          ) and{" "}
          <span className={JOURNEY_EMPHASIS}>external stakeholders</span>{" "}
          (government staff clients) to confirm the scope was{" "}
          <span className={JOURNEY_EMPHASIS}>feasible</span>.
        </p>
        <WideFigure
          borderless
          src={FUNCTIONAL_MAP_INITIAL_DISCUSSION.src}
          alt={FUNCTIONAL_MAP_INITIAL_DISCUSSION.alt}
          width={7136}
          height={2520}
          unoptimized
        />
      </CaseStudyInViewSection>

      <CaseStudyInViewSection
        id="page-flow-design"
        className="scroll-mt-28 space-y-12 sm:scroll-mt-32"
      >
        <div className="max-w-3xl space-y-4">
          <p className="max-w-3xl cs-body">
            In user interviews, people described how they wanted the app to
            feel in everyday use—easy to scan, calm, and not overwhelming.
            They said they wanted something that felt familiar and light, not
            stiff or crowded. Those conversations kept circling back to the
            same qualities, which we captured as:
          </p>
          <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
            Interview keywords
          </p>
          <ul
            className="flex flex-wrap gap-2.5"
            aria-label="User interview keywords (English)"
          >
            {(["Intuitive", "Minimal", "Fresh", "Modern"] as const).map(
              (word) => (
                <li key={word}>
                  <span className="inline-flex rounded-lg border border-emerald-500/45 bg-emerald-500/10 px-3 py-1.5 text-[14px] font-medium tracking-wide text-emerald-100">
                    {word}
                  </span>
                </li>
              ),
            )}
          </ul>
        </div>

        <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-14">
          <div className="min-w-0 space-y-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-violet-400/90">
              Moodboard &amp; style directions
            </p>
            <h3 className={CASE_STUDY_SECTION_TITLE_CLASS}>
              Vibrant, Life, Fun
            </h3>
            <p className="text-zinc-400 leading-relaxed">
              The approved route stayed closest to daily behavior: a
              multi-color system where{" "}
              <span className="text-zinc-400">hue signals function</span>, larger
              readable type, and rounded cards/buttons that lower intimidation
              for mixed-skill users. This matched interview keywords
              (intuitive, minimal, fresh, modern) while keeping public-service trust.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              Compared with modern minimal and professional practical, this
              direction best balanced recognition speed for silver users and
              visual clarity for younger users. It improved scan-findability,
              hierarchy legibility, and one-handed task completion in
              real-world contexts (checkout lines, transit, crowded retail).
            </p>
          </div>
          <div className="min-w-0 space-y-6 lg:sticky lg:top-24 lg:self-start">
            <WideFigure
              borderless
              src={ASSET("moodboard-lifestyle-hero.png")}
              alt="Person using a phone outdoors in an urban setting, sunny lifestyle context"
            />
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                Palette
              </p>
              <ul className="mt-3 flex flex-wrap gap-3">
                {STYLE_SWATCHES.map((s) => (
                  <li
                    key={s.hex}
                    className="flex flex-col items-center gap-1.5 text-center"
                  >
                    <span
                      className="h-11 w-11 rounded-xl shadow-md sm:h-12 sm:w-12"
                      style={{ backgroundColor: s.hex }}
                      title={s.hex}
                    />
                    <span className="max-w-[5.5rem] text-[10px] leading-tight text-zinc-500">
                      {s.name}
                      <span className="block font-mono text-zinc-400">
                        {s.hex}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="max-w-3xl space-y-4 pt-2">
          <h3 className={CASE_STUDY_SECTION_TITLE_CLASS}>
            Mockups &amp; design system
          </h3>
          <p className="text-zinc-400 leading-relaxed">
            High-fidelity work used the iOS / iPadOS UI Kit as a baseline—native
            components, predictable spacing, and patterns that engineering could map
            quickly to production constraints.
          </p>
        </div>
      </CaseStudyInViewSection>

      <CaseStudyInViewSection
        id="testing"
        className="scroll-mt-28 space-y-6 sm:scroll-mt-32"
      >
        <div className="max-w-3xl space-y-6">
          <p className="max-w-3xl cs-body">
            Twelve moderated sessions—including low-vision users—produced a clear
            fix list for login, invoice management, and prize flows.
          </p>
          <p className="max-w-3xl cs-body-sm">
            One-on-one observation on core tasks; errors and satisfaction tracked so
            VoiceOver paths, visual hierarchy, and plain-language fixes could ship
            before launch—not relegated to a late &quot;a11y pass.&quot;
          </p>
          <div className="overflow-hidden p-6">
            <h3 className={CS_H3}>Results summary (prototype)</h3>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 text-sm">
              <div className="flex justify-between gap-4 border-b border-zinc-800 py-2">
                <span className="text-zinc-400">Login &amp; registration</span>
                <span className={M_TXT}>75%</span>
              </div>
              <div className="flex justify-between gap-4 border-b border-zinc-800 py-2">
                <span className="text-zinc-400">Carrier binding</span>
                <span className={M_TXT}>67%</span>
              </div>
              <div className="flex justify-between gap-4 border-b border-zinc-800 py-2">
                <span className="text-zinc-400">
                  Invoice wallet &amp; donation
                </span>
                <span className={M_TXT}>83%</span>
              </div>
              <div className="flex justify-between gap-4 border-b border-zinc-800 py-2">
                <span className="text-zinc-400">Scan &amp; prize redemption</span>
                <span className={M_TXT}>92%</span>
              </div>
              <div className="flex justify-between gap-4 border-b border-zinc-800 py-2">
                <span className="text-zinc-400">Spending analysis</span>
                <span className={M_TXT}>100%</span>
              </div>
            </div>
            <p className="mt-4 text-sm text-zinc-400">
              Errors: average{" "}
              <span className={M_TIME}>1.3</span> errors per participant—mostly form
              entry and unclear prompts. Shortest task: scan &amp; prize redemption (
              <span className={M_TIME}>~40s</span> avg.). Longest: carrier binding (
              <span className={M_TIME}>~2m 20s</span> avg.).
            </p>
            <p className="mt-3 text-sm text-zinc-400">
              <span className={E_INVOICE_ACCENT_LABEL}>What worked:</span> scan &amp;
              prize check with visual/audio feedback; homepage layout (especially for
              elderly); spending charts valued by younger users.
            </p>
            <p className="mt-2 text-sm text-zinc-400">
              <span className={E_INVOICE_ACCENT_LABEL}>What didn&apos;t:</span>{" "}
              first-run length still a tension for some (optional steps skipped);
              multi-language prompts unclear; prize redemption steps confusing.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 max-w-4xl">
            <WideFigure
              borderless
              src={ASSET("prototype-matrix.png")}
              alt="Figma prototype flow used for usability testing"
              caption="Prototype for usability testing."
            />
            <WideFigure
              borderless
              src={ASSET("prototype-task-notes.png")}
              alt="Task matrix / pass-fail by participant (export)"
              caption="Task matrix / pass-fail by participant (export)."
            />
          </div>
        </div>
      </CaseStudyInViewSection>
    </div>
  );
}
