import { WideFigure } from "./EInvoiceFigures";
import { SketchPersonasExpandable } from "./SketchPersonasExpandable";

const ASSET = (name: string) => `/case-studies/e-invoice/case-assets/${name}`;

const PULL =
  "border-l-2 border-amber-500/40 bg-amber-500/[0.06] pl-4 pr-4 py-3 text-sm leading-relaxed text-zinc-300";

export function ProblemPersonasBlock() {
  return (
    <section
      id="user-journey-map"
      className="max-w-6xl scroll-mt-28 space-y-12 sm:scroll-mt-32"
    >
      <div className="space-y-4 max-w-3xl">
        <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
          02 · The problem
        </span>
        <h2 className="text-xl font-semibold text-zinc-100">
          From public reviews to interviews—why the experience was breaking down
        </h2>
        <p className="text-zinc-300 leading-relaxed">
          This work started where users were already shouting: App Store reviews
          framed the quantitative pain, and interviews explained who was stuck and
          why. The sections below mirror that order—signal first, nuance second—then
          five persona cards in Layer 2—tap any to open the full detail in a modal.
        </p>
      </div>

      {/* Layer 1 — App Store */}
      <div className="space-y-5">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-amber-400/90">
            Layer 1 · Where the problem showed up first
          </p>
          <h3 className="mt-2 text-lg font-semibold text-zinc-100">
            App Store reviews (Taiwan · ~Mar 2024–Mar 2025)
          </h3>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-zinc-400">
            The official MoF app sat around{" "}
            <span className="font-medium text-zinc-200">2.8★</span>—not a vanity
            metric, but a backlog of frustration in plain language. Three themes
            drowned out everything else:{" "}
            <span className="text-zinc-200">speed</span>,{" "}
            <span className="text-zinc-200">findability</span>, and{" "}
            <span className="text-zinc-200">older adults losing the thread</span>.
          </p>
        </div>

        <div className="overflow-x-auto rounded-xl border border-zinc-800">
          <table className="min-w-[520px] w-full text-left text-sm">
            <thead className="bg-zinc-900/80 text-xs uppercase tracking-wider text-zinc-500">
              <tr>
                <th className="px-4 py-3 font-medium">Theme</th>
                <th className="px-4 py-3 font-medium">What reviewers kept saying</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800 text-zinc-300">
              <tr className="align-top">
                <td className="px-4 py-3.5 text-zinc-200 whitespace-nowrap">
                  Speed &amp; stability
                </td>
                <td className="px-4 py-3.5 text-zinc-400">
                  Slow launch, lag at checkout, freezes after updates—“I just want
                  the barcode and it spins.”
                </td>
              </tr>
              <tr className="align-top">
                <td className="px-4 py-3.5 text-zinc-200 whitespace-nowrap">
                  Findability
                </td>
                <td className="px-4 py-3.5 text-zinc-400">
                  Prize redemption, carrier binding, and settings buried under
                  labels that read like ministry jargon, not tasks.
                </td>
              </tr>
              <tr className="align-top">
                <td className="px-4 py-3.5 text-zinc-200 whitespace-nowrap">
                  Older adults
                </td>
                <td className="px-4 py-3.5 text-zinc-400">
                  Small type, dense screens, and no obvious “next step”—families
                  stepping in to finish flows on someone else&apos;s phone.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <blockquote className={PULL}>
            <p className="text-[11px] font-semibold uppercase tracking-wider text-amber-200/90">
              Review pull quote
            </p>
            <p className="mt-2 italic text-zinc-200">
              “Opens forever. By the time the barcode shows the clerk is already
              staring.”
            </p>
          </blockquote>
          <blockquote className={PULL}>
            <p className="text-[11px] font-semibold uppercase tracking-wider text-amber-200/90">
              Review pull quote
            </p>
            <p className="mt-2 italic text-zinc-200">
              “I know the feature exists—I saw it in a tutorial—but I can&apos;t find
              it again.”
            </p>
          </blockquote>
          <blockquote className={PULL}>
            <p className="text-[11px] font-semibold uppercase tracking-wider text-amber-200/90">
              Review pull quote
            </p>
            <p className="mt-2 italic text-zinc-200">
              “My mom gives up. Too many words, too small. She only trusts paper.”
            </p>
          </blockquote>
        </div>
      </div>

      {/* Layer 2 — Interviews + sketch personas */}
      <div
        id="personas"
        className="scroll-mt-28 space-y-10 sm:scroll-mt-32"
      >
        <div className="space-y-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-emerald-400/90">
              Layer 2 · What interviews layered on top
            </p>
            <h3 className="mt-2 text-lg font-semibold text-zinc-100">
              Same jobs, different constraints—one comparison table
            </h3>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-zinc-400">
              Five audience slices (including visually impaired participants) mapped
              to a single question: what happens the moment the app opens, and what
              breaks next?
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl border border-zinc-800">
          <table className="min-w-[800px] w-full text-left text-sm">
            <thead className="bg-zinc-900/80 text-xs uppercase tracking-wider text-zinc-500">
              <tr>
                <th className="px-3 py-3 font-medium"> </th>
                <th className="px-3 py-3 font-medium">Younger (18–30)</th>
                <th className="px-3 py-3 font-medium">Middle-aged (31–50)</th>
                <th className="px-3 py-3 font-medium">Silver (51+)</th>
                <th className="px-3 py-3 font-medium">Foreign resident</th>
                <th className="px-3 py-3 font-medium">Low vision</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800 text-zinc-300">
              <tr className="align-top">
                <th className="px-3 py-3.5 text-left text-xs font-medium uppercase tracking-wide text-zinc-400">
                  First action on open
                </th>
                <td className="px-3 py-3.5 text-zinc-200" colSpan={5}>
                  <span className="rounded bg-emerald-500/15 px-2 py-0.5 font-medium text-emerald-200/95">
                    Scan
                  </span>{" "}
                  — universal: paper receipt, QR on screen, or prize check—all roads
                  led to scan first.
                </td>
              </tr>
              <tr className="align-top">
                <th className="px-3 py-3.5 text-left text-xs font-medium uppercase tracking-wide text-zinc-400">
                  Sharpest pain
                </th>
                <td className="px-3 py-3.5 text-zinc-400">
                  Slow loads, noisy UI, hunt for wins
                </td>
                <td className="px-3 py-3.5 text-zinc-400">
                  Forgot passwords / MoF verification codes
                </td>
                <td className="px-3 py-3.5 text-zinc-400">
                  Don&apos;t know the next step; fear tapping wrong
                </td>
                <td className="px-3 py-3.5 text-zinc-400">
                  Chinese labels &amp; icons don&apos;t read at a glance
                </td>
                <td className="px-3 py-3.5 text-zinc-400">
                  Can&apos;t complete core tasks without a caregiver
                </td>
              </tr>
              <tr className="align-top">
                <th className="px-3 py-3.5 text-left text-xs font-medium uppercase tracking-wide text-zinc-400">
                  Info density preference
                </th>
                <td className="px-3 py-3.5 text-zinc-400">
                  <span className="text-zinc-200">More on home</span> — wins,
                  charts, shortcuts
                </td>
                <td className="px-3 py-3.5 text-zinc-400">
                  <span className="text-zinc-200">Balanced</span> — signal without
                  clutter
                </td>
                <td className="px-3 py-3.5 text-zinc-400">
                  <span className="text-zinc-200">As little as possible</span> — one
                  obvious job per screen
                </td>
                <td className="px-3 py-3.5 text-zinc-400">
                  <span className="text-zinc-200">Sparse</span> — language-friendly
                  hierarchy
                </td>
                <td className="px-3 py-3.5 text-zinc-400">
                  <span className="text-zinc-500">N/A</span> — predictability &amp;
                  VoiceOver clarity beat density
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="rounded-xl border border-emerald-500/25 bg-emerald-500/[0.06] px-5 py-4 text-sm leading-relaxed text-zinc-300">
          <p className="font-medium text-emerald-200/95">Shared truth</p>
          <p className="mt-2">
            Everyone converged on the same entry behavior:{" "}
            <span className="text-zinc-100">scanning is the front door</span>. The
            hardest product tension was the opposite:{" "}
            <span className="text-zinc-100">
              younger cohorts wanted density; silver and low-vision cohorts needed
              air
            </span>
            —same home screen, incompatible defaults.
          </p>
        </div>

        <SketchPersonasExpandable />

        <WideFigure
          borderless
          src={ASSET("interview-field-20250321-1330-copy.png")}
          alt="Field interview session with participants at a startup hub"
          caption="Field research · Mar 2025 · startup hub session"
        />

        <p className="max-w-3xl text-sm text-zinc-400 leading-relaxed">
          Convenience and trust pull in the same direction; density and accessibility
          pull in opposite ones. Mei-Ling and Alex made that tension unavoidable—so
          the later IA work had to be modular, not one static “winner” layout.
        </p>
        </div>
      </div>
    </section>
  );
}
