import Image from "next/image";
import { ImageLightbox } from "@/app/components/ImageLightbox";
import { CASE_STUDY_SECTION_TITLE_CLASS } from "@/lib/site-shell";

export function EInvoiceReflectionBody() {
  return (
    <div className="space-y-5">
      <p className="max-w-3xl cs-body">
        The hardest part was to balance all the various and conflicting needs
        from all age groups.
      </p>
      <div className="max-w-3xl space-y-4 text-zinc-400 leading-relaxed">
        <p>
          Interviews were unambiguous: one group needed the sparsest possible
          home and loud visual anchors; another wanted a richer dashboard with
          shortcuts and status surfacing immediately. A single static default
          would always read as &quot;wrong&quot; to half the base. I chose{" "}
          <span className="text-zinc-100">
            configurability—optional home modules with fixed rails
          </span>{" "}
          over picking one designed default and accepting that we&apos;d quietly
          fail a major segment.
        </p>
        <p>
          The cost showed up in testing:{" "}
          <span className="text-zinc-100">
            first launch picked up cognitive overhead
          </span>{" "}
          because people encountered density choices before they had finished a
          single high-confidence task. If I were redesigning today, I&apos;d
          validate a{" "}
          <span className="text-zinc-100">
            tiered onboarding sequence in production
          </span>
          —complete one core job (e.g. scan or passbook) with a sane default,
          then surface module toggles with clearer presets. Same principle as
          progressive disclosure in trust-heavy products:{" "}
          <span className="text-zinc-100">
            earn comprehension before preference complexity
          </span>
          , and A/B test when that handoff happens.
        </p>
        <p>
          A second lesson sat in the data tail: the weakest tasks were rarely
          about motor skill—they were about{" "}
          <span className="text-zinc-100">
            whether people understood why a step existed
          </span>
          . Inclusive design here meant scenario language and mental models, not
          only bigger type.
        </p>
        <p>
          On the engineering side, one of the hardest stretches while shaping each
          screen and flow was staying in lockstep with{" "}
          <span className="text-zinc-100">backend engineers</span> and with{" "}
          <span className="text-zinc-100">
            engineers who maintained the legacy system
          </span>
          . We had to walk through{" "}
          <span className="text-zinc-100">every API</span> and{" "}
          <span className="text-zinc-100">each system judgment path</span>{" "}
          together—clarifying what would be sent back at which stage, and exactly
          what data each page needed to display and to hand off to the next step.
          Without that shared map, the experience looked complete in design but
          could not line up with what we could ship with confidence.
        </p>
      </div>

      <div
        id="business-constraints"
        className="scroll-mt-28 space-y-5 border-t border-zinc-800 pt-10 sm:scroll-mt-32 sm:pt-12"
      >
        <span className="cs-section-eyebrow">Business constraints</span>
        <h3 className={CASE_STUDY_SECTION_TITLE_CLASS}>
          Sprint timelines, MoF policy, and backend limits meant every surface had
          to survive legal review and what engineering could actually ship.
        </h3>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-4">
            <p className="text-xs font-semibold text-violet-400">Timeline</p>
            <p className="mt-2 text-sm text-zinc-400">
              Tight deadlines for research, design, and testing—solutions needed
              to ship in sprints without delaying release schedules.
            </p>
          </div>
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-4">
            <p className="text-xs font-semibold text-violet-400">Stakeholders</p>
            <p className="mt-2 text-sm text-zinc-400">
              As a Ministry of Finance government service, features must follow
              official regulations and public-sector standards—no commercial
              partnerships or private-business campaigns.
            </p>
          </div>
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-4">
            <p className="text-xs font-semibold text-violet-400">Technical</p>
            <p className="mt-2 text-sm text-zinc-400">
              Existing backends limit real-time integration for spending analysis
              and multi-language support. Performance must stay smooth despite
              biometric login, push notifications, and donation batch processing.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-3xl space-y-3 border-t border-zinc-800 pt-8">
        <h3 className={CASE_STUDY_SECTION_TITLE_CLASS}>
          What I&apos;d validate next
        </h3>
        <ul className="list-disc space-y-2 pl-5 text-zinc-400 leading-relaxed marker:text-zinc-500">
          <li>
            Production experiment on{" "}
            <span className="text-zinc-400">when</span> optional home modules
            are introduced (after first successful task vs. first session).
          </li>
          <li>
            Deeper pairing with policy/legal on{" "}
            <span className="text-zinc-400">how much scenario copy</span> we
            can show in technical setup flows without over-promising merchant
            coverage.
          </li>
          <li>
            Longitudinal study on{" "}
            <span className="text-zinc-400">VoiceOver task time</span> after
            IA stabilization—not just pass/fail in one lab cycle.
          </li>
        </ul>
      </div>
      <div className="overflow-hidden">
        <ImageLightbox
          src="/case-studies/e-invoice/photo-stakeholder-meeting.png"
          alt="Stakeholder meeting during the e-Invoice redesign project"
          className="block w-full"
          disableHoverScale
        >
          <Image
            src="/case-studies/e-invoice/photo-stakeholder-meeting.png"
            alt="Stakeholder meeting during the e-Invoice redesign project"
            width={1600}
            height={900}
            className="h-auto w-full object-cover"
          />
        </ImageLightbox>
      </div>
    </div>
  );
}
