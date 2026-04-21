import type { ReactNode } from "react";
import Link from "next/link";
import { CaseStudyAtAGlance } from "../_components/CaseStudyAtAGlance";
import { CaseStudyContentLayout } from "../_components/CaseStudyContentLayout";
import { CaseStudyHeroFullBleed } from "../_components/CaseStudyHeroFullBleed";
import { CaseStudyInViewSection } from "../_components/CaseStudyInViewSection";
import { CaseStudyPrevNext } from "../_components/CaseStudyPrevNext";
import { CaseStudyScanSummary } from "../_components/CaseStudyScanSummary";
import { DesignJourneyCollapsible } from "../_components/DesignJourneyCollapsible";
import VisualPlaceholder from "../_components/VisualPlaceholder";

const ASSET = (name: string) => `/case-studies/moi-mock-interview/${name}`;

const MOI_HERO = ASSET("hero-cover.png");

const AT_A_GLANCE_ITEMS = [
  { label: "Timeline", value: "April – June 2023" },
  { label: "Role", value: "Sole UX/UI Designer" },
  {
    label: "Project type",
    value: "End-to-end product design · Prototyping · Usability testing",
  },
  {
    label: "Platform",
    value: "iOS mock interview concept (AI + avatar practice)",
  },
] as const;

const MOI_SCAN_SUMMARY = [
  "MoI is an AI-powered iOS mock interview app for young adults—practice with an avatar, get scored across formats, and generate personalized questions from job posting URLs.",
  "Research showed a gap not in resources but in personalized, low-stress practice: 55% of students felt underprepared for interviews (2023 Symplicity), and graduates struggled with feedback and confidence.",
  "I ran 10 discovery interviews, defined a persona and journey, mapped epics and flows, iterated through 2 rounds of usability testing (5/5 task success), and shipped a high-fidelity prototype with a supportive brand and atomic UI system.",
  "Key iterations: job-URL-driven questions (vs. rigid role chips), text → audio → video formats for introverts (behavior nudging), and clearer score explanations via contextual help.",
] as const;

const MOI_JOURNEY_IDS = [
  "task-flow",
  "sketching",
  "wireframes",
  "usability-testing",
  "iterations",
] as const;

const MOI_TOC = [
  { id: "problem-research", label: "Problem & research" },
  { id: "define-persona", label: "Define" },
  { id: "design-journey", label: "Develop" },
  { id: "brand-system", label: "Brand & UI system" },
  { id: "delivery", label: "Delivery" },
  { id: "expansion", label: "Desktop & marketing" },
  { id: "next-steps", label: "Next steps" },
  { id: "reflection", label: "Reflection" },
] as const;

export const metadata = {
  title: "MoI — Mock Interview AI App | Angela Yang",
  description:
    "End-to-end UX/UI for MoI, an AI-powered iOS mock interview app: research, persona, flows, usability testing, and a high-fidelity prototype with accessible UI and iterative improvements for introverted job seekers.",
};

function Metric({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-md bg-emerald-500/15 px-1.5 py-0.5 font-semibold text-emerald-200/95 tabular-nums">
      {children}
    </span>
  );
}

export default function MoiMockInterviewCaseStudy() {
  return (
    <article className="min-h-screen bg-zinc-950 text-zinc-100">
      <header className="border-b border-zinc-800">
        <CaseStudyHeroFullBleed
          imageSrc={MOI_HERO}
          imageAlt="MoI mock interview AI app — hero visual"
          imageClassName="object-cover object-[center_40%]"
          eyebrow={
            <div className="flex flex-wrap gap-2 text-xs uppercase tracking-widest text-white/75">
              <span>Case Study</span>
              <span className="text-white/45">·</span>
              <span>Mobile · AI</span>
              <span className="text-white/45">·</span>
              <span>Zero to one</span>
            </div>
          }
          title={
            <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-6xl">
              MoI — mock interview AI for calmer, smarter practice
            </h1>
          }
          subtitle={
            <p className="text-lg leading-relaxed text-zinc-200 sm:text-xl">
              An iOS concept where users rehearse with an avatar, get structured
              feedback, and pull tailored questions from real job posts—built for
              grads who need practice without the pressure.
            </p>
          }
        >
          <div className="mt-8">
            <CaseStudyAtAGlance items={AT_A_GLANCE_ITEMS} />
          </div>

          <div className="mt-8 space-y-3">
            <p className="text-xs font-medium uppercase tracking-widest text-zinc-500">
              Research &amp; testing snapshot
            </p>
            <div className="grid gap-3 sm:grid-cols-2 sm:max-w-2xl">
              <div className="rounded-xl border border-zinc-800/90 bg-zinc-900/50 px-4 py-3">
                <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                  Discovery
                </p>
                <p className="mt-1 text-sm font-medium text-zinc-100">
                  <Metric>10</Metric> user interviews · North America grads
                </p>
              </div>
              <div className="rounded-xl border border-zinc-800/90 bg-zinc-900/50 px-4 py-3">
                <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                  Usability
                </p>
                <p className="mt-1 text-sm font-medium text-zinc-100">
                  <Metric>2</Metric> rounds · <Metric>5</Metric> participants · tasks
                  completed
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <CaseStudyScanSummary items={MOI_SCAN_SUMMARY} />
          </div>
        </CaseStudyHeroFullBleed>
      </header>

      <CaseStudyContentLayout toc={MOI_TOC}>
        <CaseStudyInViewSection
          id="problem-research"
          className="scroll-mt-28 space-y-6 sm:scroll-mt-32"
        >
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            Discover
          </span>
          <h2 className="text-zinc-100">Why interviews break down for new grads</h2>
          <p className="text-zinc-300 leading-relaxed max-w-3xl">
            I started with a simple question: why do so many young adults struggle
            in interviews despite years of education? The jump from school to work
            is abrupt—universities emphasize technical depth, while employers also
            judge{" "}
            <span className="text-zinc-100">
              soft skills, confidence, and composure
            </span>
            .
          </p>
          <p className="text-zinc-300 leading-relaxed max-w-3xl">
            In North America, roughly <Metric>60%</Metric> of candidates don&apos;t
            hear back after an interview, and <Metric>70%</Metric> of new graduates
            report frustration with the interview process. The issue wasn&apos;t only
            job scarcity—it was{" "}
            <span className="text-zinc-100">
              weak preparation and scarce, honest feedback
            </span>
            , especially for high-stakes conversations.
          </p>
          <h3 className="text-lg font-medium text-zinc-100 pt-2">
            Secondary research
          </h3>
          <p className="text-zinc-300 leading-relaxed max-w-3xl">
            Gen Z graduates face a crowded, noisy job market. A 2023 Symplicity
            survey found <Metric>55%</Metric> of students felt underprepared for
            interviews—even with mentorship, online tips, and ad hoc practice. The
            gap wasn&apos;t missing content; it was{" "}
            <span className="text-zinc-100">
              personalized, relevant, low-stress rehearsal
            </span>
            .
          </p>
          <h3 className="text-lg font-medium text-zinc-100 pt-2">User interviews</h3>
          <p className="text-zinc-300 leading-relaxed max-w-3xl">
            I spoke with <Metric>10</Metric> recent graduates in North America. They
            described:
          </p>
          <ul className="list-disc space-y-2 pl-5 text-zinc-300 max-w-3xl leading-relaxed">
            <li>
              Uncertainty about whether they had practiced &quot;the right
              things&quot; or with the right partner.
            </li>
            <li>
              Nerves from feeling under-prepared, which eroded confidence in real
              interviews.
            </li>
            <li>
              Wanting feedback on past interviews, while hiring managers rarely had
              time to share it.
            </li>
          </ul>
          <p className="text-zinc-300 leading-relaxed max-w-3xl">
            MoI had to work for{" "}
            <span className="text-zinc-100">introverted, feedback-hungry users</span>
            —the people who needed practice most but found live mock interviews
            draining.
          </p>
          <VisualPlaceholder
            label="Research artifacts"
            hint="Affinity notes, interview snapshots, or survey highlights from the case deck—drop in when exporting from the PDF."
            aspect="video"
          />
        </CaseStudyInViewSection>

        <CaseStudyInViewSection
          id="define-persona"
          className="scroll-mt-28 space-y-6 sm:scroll-mt-32"
        >
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            Define
          </span>
          <h2 className="text-zinc-100">Persona, journey, and design challenge</h2>
          <p className="text-zinc-300 leading-relaxed max-w-3xl">
            I synthesized patterns into a persona—<span className="text-zinc-100">Angelica</span>—who wants to feel prepared and confident but doesn&apos;t know where to improve, and who struggles to manage nervous energy during interviews.
          </p>
          <p className="text-zinc-300 leading-relaxed max-w-3xl">
            Her journey highlighted how anxious introverts feel during traditional
            mock practice, reinforcing the need for a gentler on-ramp and clearer
            guidance after each session.
          </p>
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-sky-300/90">
              How might we…
            </p>
            <p className="mt-3 text-zinc-100 leading-relaxed font-medium">
              How might we provide a supportive interview preparation experience for
              new graduates so they feel confident and well-prepared in real
              interviews?
            </p>
          </div>
          <h3 className="text-lg font-medium text-zinc-100 pt-2">
            User stories &amp; epics
          </h3>
          <p className="text-zinc-300 leading-relaxed max-w-3xl">
            From ~<Metric>30</Metric> user stories, I prioritized an epic focused on
            realistic practice, tangible feedback, flexible review, and spoken
            rehearsal:
          </p>
          <ul className="list-disc space-y-2 pl-5 text-zinc-300 max-w-3xl leading-relaxed">
            <li>
              Practice answers relevant to a target role to build confidence.
            </li>
            <li>
              Receive specific feedback on performance and content to improve future
              attempts.
            </li>
            <li>Review and replay practice on their own schedule.</li>
            <li>Practice out loud to strengthen verbal communication.</li>
          </ul>
          <VisualPlaceholder
            label="Persona & journey map"
            hint="Angelica persona poster and journey map from the PDF."
            aspect="wide"
          />
        </CaseStudyInViewSection>

        <DesignJourneyCollapsible
          journeySectionIds={MOI_JOURNEY_IDS}
          navAnchorId="design-journey"
          panelId="moi-design-journey-panel"
        >
          <CaseStudyInViewSection
            id="task-flow"
            className="scroll-mt-28 space-y-5 sm:scroll-mt-32"
          >
            <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
              Develop · Task flow
            </span>
            <h2 className="text-zinc-100">From preferences to feedback loop</h2>
            <p className="text-zinc-300 leading-relaxed max-w-3xl">
              The primary flow has three beats:{" "}
              <span className="text-zinc-100">
                input interview preferences → run the mock interview → review
                guidance
              </span>
              . A secondary path adds depth: saving questions, revisiting past
              sessions, and optional community sharing—balancing immediate value
              with long-term growth.
            </p>
          </CaseStudyInViewSection>

          <CaseStudyInViewSection
            id="sketching"
            className="scroll-mt-28 space-y-5 sm:scroll-mt-32"
          >
            <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
              Develop · Sketching
            </span>
            <h2 className="text-zinc-100">Exploring layouts before pixels</h2>
            <p className="text-zinc-300 leading-relaxed max-w-3xl">
              Hand sketches explored multiple layout directions informed by UI
              moodboards, letting me test tone and structure before investing in
              digital wireframes.
            </p>
            <VisualPlaceholder
              label="Sketch exploration"
              hint="Photo or scan of notebook sketches from MoI."
              aspect="video"
            />
          </CaseStudyInViewSection>

          <CaseStudyInViewSection
            id="wireframes"
            className="scroll-mt-28 space-y-5 sm:scroll-mt-32"
          >
            <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
              Develop · Wireframes
            </span>
            <h2 className="text-zinc-100">Low-fidelity screens for first tests</h2>
            <p className="text-zinc-300 leading-relaxed max-w-3xl">
              Promising sketches became low-fidelity wireframes aligned to
              Angelica&apos;s needs, setting up the first rounds of usability
              testing with a mid-fidelity prototype.
            </p>
            <VisualPlaceholder
              label="Wireframe set"
              hint="Mid-fi wireframes or Figma exports."
              aspect="wide"
            />
          </CaseStudyInViewSection>

          <CaseStudyInViewSection
            id="usability-testing"
            className="scroll-mt-28 space-y-5 sm:scroll-mt-32"
          >
            <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
              Develop · Usability testing
            </span>
            <h2 className="text-zinc-100">Two rounds, five participants, zero dead ends</h2>
            <p className="text-zinc-300 leading-relaxed max-w-3xl">
              I facilitated <Metric>2</Metric> rounds of testing on the mid-fidelity
              prototype. All <Metric>5</Metric> participants completed assigned
              tasks, but qualitative feedback surfaced friction that shaped the next
              iterations.
            </p>
          </CaseStudyInViewSection>

          <CaseStudyInViewSection
            id="iterations"
            className="scroll-mt-28 space-y-6 sm:scroll-mt-32"
          >
            <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
              Develop · Key iterations
            </span>
            <h2 className="text-zinc-100">Turning feedback into product clarity</h2>

            <div className="space-y-4 max-w-3xl">
              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5">
                <h3 className="text-zinc-100 font-medium">
                  Change 1 — Job URL input for precise questions
                </h3>
                <p className="mt-2 text-sm text-zinc-300 leading-relaxed">
                  Preset role chips failed to match real titles. Users can paste a
                  job post URL; MoI generates questions from the posting with filters
                  for behavioral, technical, and situational prompts—keeping
                  rehearsal specific instead of generic.
                </p>
              </div>
              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5">
                <h3 className="text-zinc-100 font-medium">
                  Change 2 — Formats that nudge introverts forward
                </h3>
                <p className="mt-2 text-sm text-zinc-300 leading-relaxed">
                  Text, audio, and video modes let users start small and level up.
                  This behavior nudging honors comfort while still encouraging
                  growth toward richer practice.
                </p>
              </div>
              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5">
                <h3 className="text-zinc-100 font-medium">
                  Change 3 — Demystified scores
                </h3>
                <p className="mt-2 text-sm text-zinc-300 leading-relaxed">
                  Information icons explain what each score means and how to
                  improve, turning abstract metrics into actionable guidance.
                </p>
              </div>
            </div>
            <VisualPlaceholder
              label="Before / after iteration screens"
              hint="Mid-fi vs hi-fi comparisons for URL flow, modes, and score tooltips."
              aspect="video"
            />
          </CaseStudyInViewSection>
        </DesignJourneyCollapsible>

        <CaseStudyInViewSection
          id="brand-system"
          className="scroll-mt-28 space-y-6 sm:scroll-mt-32"
        >
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            Brand &amp; system
          </span>
          <h2 className="text-zinc-100">Supportive, immersive, and legible</h2>
          <p className="text-zinc-300 leading-relaxed max-w-3xl">
            Brand keywords—<span className="text-zinc-100">supportive, immersive, relaxing, clear, friendly</span>—steered visual references and color exploration. After color-injection tests and feedback, I locked primary and secondary palettes that reinforce calm focus.
          </p>
          <h3 className="text-lg font-medium text-zinc-100 pt-2">Accessibility</h3>
          <p className="text-zinc-300 leading-relaxed max-w-3xl">
            Text and background pairings maintained strong contrast (notably{" "}
            <Metric>+60</Metric> / <Metric>-60</Metric> treatment referenced in the
            deck) so content stays readable across states.
          </p>
          <h3 className="text-lg font-medium text-zinc-100 pt-2">UI library</h3>
          <p className="text-zinc-300 leading-relaxed max-w-3xl">
            An atomic structure organized{" "}
            <span className="text-zinc-100">atoms</span> (buttons, icons, colors),{" "}
            <span className="text-zinc-100">molecules</span> (cards, inputs), and{" "}
            <span className="text-zinc-100">organisms</span> (navigation, feedback
            modules)—keeping MoI consistent and extensible beyond the MVP.
          </p>
          <VisualPlaceholder
            label="Style tile & components"
            hint="Color palette, type, and component sheet from the PDF."
            aspect="wide"
          />
        </CaseStudyInViewSection>

        <CaseStudyInViewSection
          id="delivery"
          className="scroll-mt-28 space-y-6 sm:scroll-mt-32"
        >
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            Delivery
          </span>
          <h2 className="text-zinc-100">High-fidelity prototype & value proposition</h2>
          <p className="text-zinc-300 leading-relaxed max-w-3xl">
            The final solution concentrated on four promises: stress-free practice,
            targeted questions, actionable feedback, and flexible formats—validated
            with another round of feedback from <Metric>10</Metric> users for
            intuitiveness and accessibility.
          </p>
          <ul className="list-disc space-y-2 pl-5 text-zinc-300 max-w-3xl leading-relaxed">
            <li>
              <span className="text-zinc-100">Stress-free practice</span> — safe
              space with an avatar; text/audio/video to graduate exposure gently.
            </li>
            <li>
              <span className="text-zinc-100">Build confidence with relevance</span>{" "}
              — paste a posting URL for tailored prompts and controlled question
              types.
            </li>
            <li>
              <span className="text-zinc-100">Improve verbal &amp; non-verbal cues</span>{" "}
              — AI feedback on answers plus cues like posture and eye contact, with
              guidance on what to improve next.
            </li>
          </ul>
          <VisualPlaceholder
            label="Hi-fi prototype highlights"
            hint="Key iOS screens: home, practice session, feedback, and profile."
            aspect="video"
          />
        </CaseStudyInViewSection>

        <CaseStudyInViewSection
          id="expansion"
          className="scroll-mt-28 space-y-6 sm:scroll-mt-32"
        >
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            Expansion concepts
          </span>
          <h2 className="text-zinc-100">Desktop practice & marketing site</h2>
          <p className="text-zinc-300 leading-relaxed max-w-3xl">
            Because many users search and apply on laptops, I explored a desktop
            experience for longer practice sessions alongside the mobile flow.
          </p>
          <p className="text-zinc-300 leading-relaxed max-w-3xl">
            A responsive marketing site communicates MoI&apos;s story—stress-free
            rehearsal, confidence building, and measurable skill growth—in a clear,
            inviting layout.
          </p>
          <VisualPlaceholder
            label="Desktop & marketing explorations"
            hint="Desktop dashboard mock and landing page hero from the deck."
            aspect="wide"
          />
        </CaseStudyInViewSection>

        <CaseStudyInViewSection
          id="next-steps"
          className="scroll-mt-28 space-y-5 sm:scroll-mt-32"
        >
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            Next steps
          </span>
          <h2 className="text-zinc-100">Open questions for future research</h2>
          <ul className="list-disc space-y-2 pl-5 text-zinc-300 max-w-3xl leading-relaxed">
            <li>Can learners benefit from each other&apos;s answers—not only their own?</li>
            <li>
              Should the scoring rubric be visible upfront so expectations are
              transparent?
            </li>
            <li>
              Would shareable scores motivate users—or create discouraging social
              comparison?
            </li>
          </ul>
          <p className="text-zinc-300 leading-relaxed max-w-3xl">
            Continuing research, iterative design, usability studies, and A/B tests
            would further validate MoI with the target demographic.
          </p>
        </CaseStudyInViewSection>

        <CaseStudyInViewSection
          id="reflection"
          className="scroll-mt-28 space-y-5 sm:scroll-mt-32"
        >
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            Reflection
          </span>
          <h2 className="text-zinc-100">Key takeaways</h2>
          <ol className="list-decimal space-y-3 pl-5 text-zinc-300 max-w-3xl leading-relaxed">
            <li>
              <span className="text-zinc-100">Prioritization kept the MVP shippable.</span>{" "}
              Breaking the experience into essential slices made tight deadlines
              manageable without losing narrative clarity.
            </li>
            <li>
              <span className="text-zinc-100">User research grounded every decision.</span>{" "}
              Neutral prompts and deep listening reduced my own bias and kept the
              solution tied to real graduate pain points.
            </li>
          </ol>
        </CaseStudyInViewSection>

        <CaseStudyInViewSection className="border-t border-zinc-800 pt-12 space-y-8">
          <CaseStudyPrevNext currentSlug="moi-mock-interview" />
          <Link
            href="/"
            className="text-sm font-medium text-zinc-400 transition hover:text-zinc-100"
          >
            ← Back to work
          </Link>
        </CaseStudyInViewSection>
      </CaseStudyContentLayout>
    </article>
  );
}
