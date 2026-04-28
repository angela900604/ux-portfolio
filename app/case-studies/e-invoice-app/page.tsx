import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  CaseStudyAtAGlance,
  CASE_STUDY_AT_A_GLANCE_DARK_HERO_PROPS,
} from "../_components/CaseStudyAtAGlance";
import { CaseStudyContentLayout } from "../_components/CaseStudyContentLayout";
import { CaseStudyExpandable } from "../_components/CaseStudyExpandable";
import { CaseStudyHeroFullBleed } from "../_components/CaseStudyHeroFullBleed";
import { CaseStudyInViewSection } from "../_components/CaseStudyInViewSection";
import { CaseStudyPrevNext } from "../_components/CaseStudyPrevNext";
import { DesignJourneyCollapsible } from "../_components/DesignJourneyCollapsible";
import { CompetitorLandscapeTable } from "./CompetitorLandscapeTable";
import { EInvoiceHeroTldr } from "./EInvoiceHeroTldr";
import { FinalScreensMarquee } from "./FinalScreensMarquee";
import { PortraitTile, WideFigure } from "./EInvoiceFigures";
import { HomeBeforeAfterSlider } from "./HomeBeforeAfterSlider";
import { GuidedOnboardingVideoPair } from "./OnboardingDemoVideo";
import { SettingHomeModulesVideo } from "./SettingHomeModulesVideo";
import { LoginBeforeAfterSlider } from "./LoginBeforeAfterSlider";

export const metadata = {
  title:
    "Redesigning Taiwan Ministry of Finance's Uniform Invoice Award Redemption App | Angela Yang",
  description:
    "Government mobile app used by ~20 million people: trust & inclusion at national scale—multi-segment research (age, language, accessibility), competitive benchmarking, IA, ~88% prototype task success, measurable lifts in activation (onboarding) and retention (login success).",
};

const FIGMA_MOCKUP_PAGE =
  "https://www.figma.com/design/xvssk9Yfmx51aiSpwWE8sv/APP-Mockup?node-id=2103-5106&t=Ynz1CgBhJkN04Gfz-1";
const FIGMA_WIREFRAME_FLOW =
  "https://www.figma.com/design/ixS4TwNUz1pu0Riv7peXRA/APP-Wireframe?node-id=2120-5665&t=j3rbIoMCpkpNcAY2-1";

const ASSET = (name: string) => `/case-studies/e-invoice/case-assets/${name}`;

const STORY_SECTION_TITLE_CLASS =
  "text-2xl font-semibold leading-snug tracking-tight text-zinc-100 sm:text-3xl md:text-4xl md:leading-snug";

function StoryBeat({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="max-w-3xl rounded-xl border border-zinc-800/90 bg-zinc-900/35 px-4 py-4 sm:px-5 sm:py-5">
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-emerald-200/90">
        {label}
      </p>
      <div className="mt-3 space-y-2 text-sm leading-[1.6] text-zinc-400 [&_p]:text-sm [&_p]:leading-[1.6] [&_span.font-semibold]:text-base [&_span.font-semibold]:leading-snug [&_span.font-semibold]:text-zinc-50">
        {children}
      </div>
    </div>
  );
}

/** Full-bleed hero behind the project title (café context, scan / invoice UI). */
const HERO_FULL_BLEED = {
  src: "/case-studies/e-invoice/hero-fullbleed.png",
  alt: "Hand holding a phone in a bright café: e-invoice app shows paper receipt scanning with QR codes and tab navigation",
} as const;

/** First image below the title block — paper receipts + phone. */
const HERO_BELOW_01 = {
  src: "/case-studies/e-invoice/hero-below-01.png",
  alt: "Hands holding Taiwan uniform paper invoices beside a phone displaying the scanned digital receipt in the e-invoice app",
} as const;

/** Second image below the title block — lifestyle product context. */
const HERO_BELOW_02 = {
  src: "/case-studies/e-invoice/hero-below-02.png",
  alt: "Person using the e-invoice mobile app: lottery and carrier barcode screen in a warm indoor setting",
} as const;

const HERO_TABLET_01 = {
  src: "/case-studies/e-invoice/hero-tablet-01.png",
  alt: "iPad mockup showing the e-invoice home interface on a textured cushion shelf",
} as const;

const HERO_TABLET_02 = {
  src: "/case-studies/e-invoice/hero-tablet-02.png",
  alt: "iPad mockup showing the e-invoice home interface on fabric near a wooden surface",
} as const;

/** Friendly lifestyle palette (style direction 01) */
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

const E_INVOICE_JOURNEY_IDS = [
  "functional-map",
  "competitive-landscape",
  "page-flow-design",
  "testing",
] as const;

const AT_A_GLANCE_ITEMS = [
  { label: "Timeline", value: "Feb 2025 – Nov 2025 (10 months)" },
  { label: "Role", value: "UX/UI Designer" },
  {
    label: "Project type",
    value: "End-to-end mobile app redesign · Government service app",
  },
  {
    label: "Focus",
    value: "Research, IA, accessibility, ship-ready UI",
  },
] as const;

const FINAL_SOLUTION_SCREENS: {
  id: string;
  title: string;
  assetFile?: string;
  assetFiles?: string[];
}[] = [
  { id: "01", title: "Spending insights" },
  { id: "02", title: "Membership cards" },
  {
    id: "03",
    title: "Settings overview",
    assetFiles: [
      "settings-homepage-display.png",
      "settings-membership-card.png",
    ],
  },
  { id: "05", title: "Prize claim info" },
  { id: "06", title: "Donation" },
  { id: "07", title: "Carbon passbook share" },
  {
    id: "08",
    title: "Guided setup (biometrics, bank, notifications, cloud backup)",
    assetFiles: [
      "onboarding-notifications.png",
      "onboarding-quick-login.png",
      "onboarding-google-drive.png",
      "onboarding-auto-remittance.png",
    ],
  },
  { id: "09", title: "Redeem security check" },
  { id: "10", title: "Invoice passbook" },
  { id: "11", title: "Receipt detail" },
  { id: "12", title: "Homepage", assetFile: "homepage-hub.png" },
  {
    id: "13",
    title: "Face ID / quick verification",
    assetFile: "face-id-quick-verification.png",
  },
  { id: "14", title: "Last-three-digit match" },
  { id: "15", title: "Events & promos" },
  { id: "16", title: "Winning invoices" },
  { id: "17", title: "Paper receipt scan" },
  { id: "18", title: "Notifications" },
];

const FINAL_SOLUTION_MARQUEE_SLIDES = FINAL_SOLUTION_SCREENS.flatMap((item) => {
  const files =
    item.assetFiles ?? [item.assetFile ?? `solution-final-${item.id}.png`];
  return files.map((file, i) => ({
    src: ASSET(file),
    alt:
      files.length > 1
        ? `${item.title} (${i + 1}/${files.length})`
        : item.title,
  }));
});

export default function EInvoiceCaseStudy() {
  return (
    <article className="min-h-screen bg-zinc-950 text-zinc-100">
      <header className="border-b border-zinc-800">
        <CaseStudyHeroFullBleed
          imageSrc={HERO_FULL_BLEED.src}
          imageAlt={HERO_FULL_BLEED.alt}
          imageClassName="object-cover object-center sm:object-[center_45%]"
          eyebrow={
            <div className="flex flex-wrap gap-2 text-xs uppercase tracking-widest text-white/75">
              <span>Public Service</span>
              <span className="text-white/45">·</span>
              <span>Mobile App</span>
            </div>
          }
          title={
            <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Redesigning a government service used by 20 million people
            </h1>
          }
          subtitle={
            <p className="text-lg leading-relaxed text-zinc-200 sm:text-xl">
              Designing for radical user diversity across age, language, and
              accessibility at national scale.
            </p>
          }
          leadBelowSubtitle={
            <CaseStudyAtAGlance
              items={AT_A_GLANCE_ITEMS}
              {...CASE_STUDY_AT_A_GLANCE_DARK_HERO_PROPS}
            />
          }
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
            <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40">
              <Image
                src={HERO_BELOW_01.src}
                alt={HERO_BELOW_01.alt}
                width={1024}
                height={571}
                className="h-auto w-full object-cover"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
            <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40">
              <Image
                src={HERO_BELOW_02.src}
                alt={HERO_BELOW_02.alt}
                width={1024}
                height={552}
                className="h-auto w-full object-cover"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
          </div>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
            <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={HERO_TABLET_01.src}
                  alt={HERO_TABLET_01.alt}
                  fill
                  className="object-cover object-center scale-[1.08]"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={HERO_TABLET_02.src}
                  alt={HERO_TABLET_02.alt}
                  fill
                  className="object-cover object-center scale-[1.08]"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>

          <div className="mt-10">
            <EInvoiceHeroTldr />
          </div>
        </CaseStudyHeroFullBleed>
      </header>

      <CaseStudyContentLayout>
        <CaseStudyInViewSection
          id="key-outcomes"
          className="scroll-mt-28 space-y-14 sm:scroll-mt-32"
        >
          <FinalScreensMarquee slides={FINAL_SOLUTION_MARQUEE_SLIDES} />

          <p className="max-w-2xl text-sm leading-relaxed text-zinc-500">
            <Link
              href="/user-research-journey"
              className="font-medium text-emerald-200/90 underline-offset-4 hover:text-emerald-100 hover:underline"
            >
              User research journey
            </Link>
            —methods, segments, and artifacts behind these decisions.
          </p>

          <div className="space-y-16 border-t border-zinc-800/90 pt-14 sm:space-y-20 sm:pt-16">
            <section
              id="e-invoice-story-1-homepage"
              className="scroll-mt-28 space-y-6 sm:scroll-mt-32"
            >
              <header className="space-y-2">
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-400">
                  Section 1
                </span>
                <h2 className={STORY_SECTION_TITLE_CLASS}>The Homepage</h2>
              </header>
              <div className="space-y-4">
                <StoryBeat label="Problem">
                  <p>
                    <span className="font-semibold text-zinc-100">
                      Users opened the app and couldn&apos;t find what they
                      needed.
                    </span>{" "}
                    Five very different user segments, all frustrated for
                    different reasons.
                  </p>
                </StoryBeat>
                <StoryBeat label="Key insight">
                  <p>
                    <span className="font-semibold text-zinc-100">
                      Every group shared one first action: scan a paper invoice.
                    </span>{" "}
                    Seniors especially—at checkout, cashiers assumed they
                    couldn&apos;t use the app and handed them paper receipts
                    instead.
                  </p>
                </StoryBeat>
                <StoryBeat label="Decision">
                  <p>
                    <span className="font-semibold text-zinc-100">
                      Scan became the primary, large, labeled CTA—the first
                      thing on open.
                    </span>{" "}
                    Before: small QR icon, top-right. After: unmissable.
                  </p>
                </StoryBeat>
                <StoryBeat label="Conflict">
                  <p>
                    <span className="font-semibold text-zinc-100">
                      Stakeholders wanted sustainability promotion to lead the
                      homepage.
                    </span>{" "}
                    Research showed it didn&apos;t rank in the top four priorities
                    for any segment.
                  </p>
                </StoryBeat>
                <StoryBeat label="Resolution">
                  <p>
                    <span className="font-semibold text-zinc-100">
                      Customizable home: users toggle sections in Settings.
                    </span>{" "}
                    Sustainability stays in-product for people who want it.
                    Stakeholders approved.
                  </p>
                </StoryBeat>
                <StoryBeat label="Outcome">
                  <p>
                    <span className="font-semibold text-zinc-100">
                      Prototype testing with the same participants validated the
                      direction.
                    </span>{" "}
                    Strong positive responses across ages—especially seniors.
                  </p>
                </StoryBeat>
              </div>
              <HomeBeforeAfterSlider />
            </section>

            <section
              id="e-invoice-story-2-accessibility"
              className="scroll-mt-28 space-y-6 border-t border-zinc-800/90 pt-14 sm:scroll-mt-32 sm:pt-16"
            >
              <header className="space-y-2">
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-400">
                  Section 2
                </span>
                <h2 className={STORY_SECTION_TITLE_CLASS}>
                  Accessibility &amp; foreign residents
                </h2>
              </header>
              <div className="space-y-4">
                <StoryBeat label="Problem">
                  <p>
                    <span className="font-semibold text-zinc-100">
                      Low-vision users and foreign residents couldn&apos;t finish
                      core tasks alone.
                    </span>{" "}
                    Icons were unreadable, labels assumed civic vocabulary, and
                    there was no audio confirmation after scan.
                  </p>
                </StoryBeat>
                <StoryBeat label="Key insight">
                  <p>
                    <span className="font-semibold text-zinc-100">
                      Foreign residents needed text to decode the control—not
                      icon-only cues.
                    </span>{" "}
                    Low-vision users relied on a fixed position they could
                    memorize more than on fine visuals.
                  </p>
                </StoryBeat>
                <StoryBeat label="Decision">
                  <p>
                    <span className="font-semibold text-zinc-100">
                      Large tap target + readable text label + fixed placement.
                    </span>{" "}
                    One pattern served both groups—including labels that don&apos;t
                    assume Chinese literacy.
                  </p>
                </StoryBeat>
                <StoryBeat label="Conflict">
                  <p>
                    <span className="font-semibold text-zinc-100">
                      Younger users wanted a denser, cooler layout.
                    </span>{" "}
                    Older and low-vision users needed fewer modules, more
                    whitespace, and vivid color—one layout, two incompatible
                    defaults.
                  </p>
                </StoryBeat>
                <StoryBeat label="Resolution">
                  <p>
                    <span className="font-semibold text-zinc-100">
                      The same Settings-based home toggles (Section 1) let each
                      person choose density.
                    </span>{" "}
                    No single compromised default for everyone.
                  </p>
                </StoryBeat>
                <StoryBeat label="Outcome">
                  <p>
                    <span className="font-semibold text-zinc-100">
                      88% task success in moderated tests
                    </span>{" "}
                    on scan, donate, and redemption—including visually impaired
                    participants, across ages.
                  </p>
                </StoryBeat>
              </div>
              <SettingHomeModulesVideo className="w-full" />
            </section>

            <section
              id="e-invoice-story-3-login"
              className="scroll-mt-28 space-y-6 border-t border-zinc-800/90 pt-14 sm:scroll-mt-32 sm:pt-16"
            >
              <header className="space-y-2">
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-400">
                  Section 3
                </span>
                <h2 className={STORY_SECTION_TITLE_CLASS}>
                  Login &amp; authentication
                </h2>
              </header>
              <div className="space-y-4">
                <StoryBeat label="Problem">
                  <p>
                    <span className="font-semibold text-zinc-100">
                      Login success hovered around ~68%.
                    </span>{" "}
                    Middle-aged users were hit hardest—forgotten passwords and
                    MoF verification codes blocked them before any core task.
                  </p>
                </StoryBeat>
                <StoryBeat label="Key insight">
                  <p>
                    <span className="font-semibold text-zinc-100">
                      Authentication was secure but became a wall.
                    </span>{" "}
                    The gap wasn&apos;t security—it was recovery.
                  </p>
                </StoryBeat>
                <StoryBeat label="Decision">
                  <p>
                    <span className="font-semibold text-zinc-100">
                      Ship biometric login and in-app password recovery.
                    </span>{" "}
                    People could get back in without memorizing credentials or
                    hunting a one-time code.
                  </p>
                </StoryBeat>
                <StoryBeat label="Outcome">
                  <p>
                    <span className="font-semibold text-zinc-100">
                      After launch, the client reported materially higher login
                      success in internal analytics.
                    </span>{" "}
                    Support volume tied to account access fell compared with
                    baseline.
                  </p>
                </StoryBeat>
              </div>
              <LoginBeforeAfterSlider />
            </section>

            <section
              id="e-invoice-story-4-onboarding"
              className="scroll-mt-28 space-y-6 border-t border-zinc-800/90 pt-14 sm:scroll-mt-32 sm:pt-16"
            >
              <header className="space-y-2">
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-400">
                  Section 4
                </span>
                <h2 className={STORY_SECTION_TITLE_CLASS}>Onboarding</h2>
              </header>
              <p className="max-w-3xl text-sm text-zinc-400">
                I also shipped an English-language experience for foreign
                residents.
              </p>
              <div className="space-y-4">
                <StoryBeat label="Problem">
                  <p>
                    <span className="font-semibold text-zinc-100">
                      Many users—especially seniors and foreign residents—never
                      finished auto prize transfer or biometric setup.
                    </span>{" "}
                    They missed redemptions because they didn&apos;t know the
                    feature existed or how to turn it on.
                  </p>
                </StoryBeat>
                <StoryBeat label="Key insight">
                  <p>
                    <span className="font-semibold text-zinc-100">
                      These steps don&apos;t surface through casual browsing.
                    </span>{" "}
                    They needed introduction at first launch—when people are
                    most willing to configure.
                  </p>
                </StoryBeat>
                <StoryBeat label="Decision">
                  <p>
                    <span className="font-semibold text-zinc-100">
                      Guided onboarding: one job per screen.
                    </span>{" "}
                    Biometric setup → bank account for auto-transfer →
                    notifications → cloud backup—each step explained why it
                    mattered, not only what to tap.
                  </p>
                </StoryBeat>
                <StoryBeat label="Outcome">
                  <p>
                    <span className="font-semibold text-zinc-100">
                      First-launch completion rose ~30%.
                    </span>{" "}
                    Post-launch, the team saw fewer missed prize redemptions tied
                    to setup gaps.
                  </p>
                </StoryBeat>
              </div>
              <GuidedOnboardingVideoPair className="w-full" />
            </section>
          </div>
        </CaseStudyInViewSection>

        <div className="flex min-w-0 flex-col gap-10 sm:gap-12">
          <DesignJourneyCollapsible
          journeySectionIds={E_INVOICE_JOURNEY_IDS}
          panelId="e-invoice-design-journey-panel"
          title="Design journey"
          subtitle="Functional map, competitive landscape, page flows, and moderated testing"
          className="!border-t-0 !pt-0 sm:!pt-0"
        >
        <CaseStudyInViewSection
          id="functional-map"
          className="scroll-mt-28 space-y-5 sm:scroll-mt-32"
        >
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            Functional map
          </span>
          <h2 className="max-w-3xl text-zinc-100">
            We mapped actors and touchpoints—login, home, notifications,
            scan-and-win, redemptions—before hi-fi so scope stayed technically
            plausible.
          </h2>
          <WideFigure
            borderless
            src={ASSET("functional-map-v0.png")}
            alt="Functional map v0.0 — information architecture of the e-invoice app"
            caption="Functional map v0.0 · Functional_map_v0.0 (export)."
          />
        </CaseStudyInViewSection>

        <CaseStudyInViewSection
          id="competitive-landscape"
          className="scroll-mt-28 space-y-6 sm:scroll-mt-32"
        >
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            03 · Competitive landscape
          </span>
          <div className="max-w-3xl space-y-3">
            <h2 className="text-zinc-100">
              Market read before locking IA—not competitor slides after the
              solution
            </h2>
            <p className="text-sm leading-relaxed text-zinc-400 sm:text-base">
              Based on the visual strategy report, we benchmarked references
              against three filters before finalizing direction: whether the
              product felt{" "}
              <span className="text-zinc-200">
                intuitive, simple, clean, and modern
              </span>
              ; whether its interaction patterns aligned with usability
              heuristics; and whether design elements (whitespace, contrast,
              card hierarchy, button shape) could directly address real pain in
              this project.
            </p>
            <p className="text-sm leading-relaxed text-zinc-400 sm:text-base">
              That benchmark informed what &quot;good&quot; meant for this MoF app:
              policy-trust as a baseline, but with faster recognition, clearer
              hierarchy, and accessibility-friendly density. The same source work
              also clarified three candidate visual routes for the next phase—{" "}
              <span className="text-zinc-200">Friendly lifestyle</span>,{" "}
              <span className="text-zinc-200">Modern minimal</span>, and{" "}
              <span className="text-zinc-200">Professional practical</span>.
            </p>
          </div>
          <CompetitorLandscapeTable />
        </CaseStudyInViewSection>

        <CaseStudyInViewSection
          id="page-flow-design"
          className="scroll-mt-28 space-y-12 sm:scroll-mt-32"
        >
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
              04 · Page flow, UI direction &amp; design system
            </span>
            <h2 className="max-w-3xl text-zinc-100">
              Figma page flows caught navigation gaps early;{" "}
              <span className="text-zinc-200">Friendly lifestyle</span> became the
              approved route after comparing three style proposals.
            </h2>
            <p className="max-w-3xl text-sm leading-relaxed text-zinc-400">
              We first translated research keywords into interface variables
              (color system, typography scale, button geometry, icon language,
              layout rhythm), then tested three directions from the report:
              multi-color function zoning (friendly lifestyle), black-led
              reduction (modern minimal), and trust-forward stability
              (professional practical). Login, invoice management, and redemption
              were mapped before polish so gaps showed up in logic—not only in
              pixels.
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-14">
            <div className="min-w-0 space-y-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-violet-400/90">
                Concept development
              </p>
                           <h3 className="text-zinc-100">
                Moodboard &amp; style directions · 01 Friendly lifestyle
              </h3>
              <p className="text-zinc-300 leading-relaxed">
                The approved route stayed closest to daily behavior: a
                multi-color system where{" "}
                <span className="text-zinc-200">hue signals function</span>, larger
                readable type, and rounded cards/buttons that lower intimidation
                for mixed-skill users. This matched interview keywords
                (intuitive, simple, clean) while keeping public-service trust.
              </p>
              <p className="text-zinc-300 leading-relaxed">
                Compared with modern minimal and professional practical, this
                direction best balanced recognition speed for silver users and
                visual clarity for younger users. It improved scan-findability,
                hierarchy legibility, and one-handed task completion in
                real-world contexts (checkout lines, transit, crowded retail).
              </p>
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
                        className="h-11 w-11 rounded-xl shadow-md ring-1 ring-white/10 sm:h-12 sm:w-12"
                        style={{ backgroundColor: s.hex }}
                        title={s.hex}
                      />
                      <span className="max-w-[5.5rem] text-[10px] leading-tight text-zinc-500">
                        {s.name}
                        <span className="block font-mono text-zinc-400">{s.hex}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-wrap gap-2 pt-1">
                {["Vibrant", "Life", "Fun"].map((word) => (
                  <span
                    key={word}
                    className="rounded-full border border-zinc-700/80 bg-zinc-900/60 px-3 py-1 text-xs font-medium text-zinc-300"
                  >
                    {word}
                  </span>
                ))}
              </div>
            </div>
            <div className="min-w-0 lg:sticky lg:top-24">
              <WideFigure
                borderless
                src={ASSET("moodboard-lifestyle-hero.png")}
                alt="Person using a phone outdoors in an urban setting, sunny lifestyle context"
              />
            </div>
          </div>

          <div className="max-w-3xl space-y-4 pt-2">
                         <h3 className="text-zinc-100">
              Mockups &amp; design system
            </h3>
            <p className="text-zinc-300 leading-relaxed">
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
            <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
              05 · Testing &amp; iterations · Accessibility in the protocol
            </span>
            <h2 className="max-w-3xl text-zinc-100">
              Twelve moderated sessions—including low-vision users—landed at{" "}
              <span className={M_TXT}>88%</span> success and a clear fix list for login,
              invoice management, and prize flows.
            </h2>
            <p className="max-w-3xl text-sm leading-relaxed text-zinc-400">
              One-on-one observation on core tasks; errors and satisfaction tracked so
              VoiceOver paths, visual hierarchy, and plain-language fixes could ship
              before launch—not relegated to a late &quot;a11y pass.&quot;
            </p>
            <h6 className="text-zinc-400">
              Five core test tasks
            </h6>
            <ul className="list-disc pl-5 space-y-2 text-zinc-300 marker:text-zinc-500">
              <li>Login &amp; registration — verify account creation and access.</li>
              <li>Carrier binding — link and manage invoice carriers.</li>
              <li>Invoice wallet &amp; donation — store invoices and test donation.</li>
              <li>
                Scan &amp; prize redemption — scan invoices, check results, claim
                prizes.
              </li>
              <li>Spending analysis — view and interpret expense breakdowns.</li>
            </ul>
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-6">
              <h4 className="text-zinc-100">
                Results summary (prototype)
              </h4>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 text-sm">
                <div className="flex justify-between gap-4 border-b border-zinc-800/80 py-2">
                  <span className="text-zinc-400">Overall</span>
                  <span className={M_TXT}>88%</span>
                </div>
                <div className="flex justify-between gap-4 border-b border-zinc-800/80 py-2">
                  <span className="text-zinc-400">Login &amp; registration</span>
                  <span className={M_TXT}>75%</span>
                </div>
                <div className="flex justify-between gap-4 border-b border-zinc-800/80 py-2">
                  <span className="text-zinc-400">Carrier binding</span>
                  <span className={M_TXT}>67%</span>
                </div>
                <div className="flex justify-between gap-4 border-b border-zinc-800/80 py-2">
                  <span className="text-zinc-400">Invoice wallet &amp; donation</span>
                  <span className={M_TXT}>83%</span>
                </div>
                <div className="flex justify-between gap-4 border-b border-zinc-800/80 py-2">
                  <span className="text-zinc-400">Scan &amp; prize redemption</span>
                  <span className={M_TXT}>92%</span>
                </div>
                <div className="flex justify-between gap-4 border-b border-zinc-800/80 py-2">
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
              <p className="mt-3 text-sm text-zinc-300">
                <span className="text-zinc-200">What worked:</span> scan &amp; prize check
                with visual/audio feedback; homepage layout (especially for elderly);
                spending charts valued by younger users.
              </p>
              <p className="mt-2 text-sm text-zinc-300">
                <span className="text-zinc-200">What didn&apos;t:</span> first-run
                length still a tension for some (optional steps skipped); multi-language
                prompts unclear; prize redemption steps confusing.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 max-w-4xl">
              <WideFigure
                borderless
                src={ASSET("prototype-matrix.png")}
                alt="Prototype task success matrix spreadsheet"
                caption="Task matrix / pass-fail by participant (export)."
              />
              <WideFigure
                borderless
                src={ASSET("prototype-task-notes.png")}
                alt="Session notes and task completion tracking"
                caption="Session notes &amp; completion log (export)."
              />
            </div>
          </div>
        </CaseStudyInViewSection>

        </DesignJourneyCollapsible>
        <DesignJourneyCollapsible
          journeySectionIds={["reflection", "business-constraints"]}
          navAnchorId="reflection"
          panelId="e-invoice-reflection-panel"
          title="Reflection"
          subtitle="Lessons, constraints, and what to validate next"
          className="!border-t-0 !pt-0 sm:!pt-0"
        >
          <div className="space-y-5">
            <h2 className="max-w-3xl text-zinc-100">
              The hardest decision was the home density conflict between younger and
              silver users
            </h2>
            <div className="max-w-3xl space-y-4 text-zinc-300 leading-relaxed">
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
            </div>

            <div
              id="business-constraints"
              className="scroll-mt-28 space-y-5 border-t border-zinc-800/90 pt-10 sm:scroll-mt-32 sm:pt-12"
            >
              <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
                Business constraints
              </span>
              <h3 className="max-w-3xl text-xl font-semibold tracking-tight text-zinc-100 sm:text-2xl">
                Sprint timelines, MoF policy, and backend limits meant every surface had
                to survive legal review and what engineering could actually ship.
              </h3>
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-xl border border-zinc-800 bg-zinc-900/35 p-4">
                  <p className="text-xs font-semibold text-violet-400">Timeline</p>
                  <p className="mt-2 text-sm text-zinc-300">
                    Tight deadlines for research, design, and testing—solutions needed
                    to ship in sprints without delaying release schedules.
                  </p>
                </div>
                <div className="rounded-xl border border-zinc-800 bg-zinc-900/35 p-4">
                  <p className="text-xs font-semibold text-violet-400">Stakeholders</p>
                  <p className="mt-2 text-sm text-zinc-300">
                    As a Ministry of Finance government service, features must follow
                    official regulations and public-sector standards—no commercial
                    partnerships or private-business campaigns.
                  </p>
                </div>
                <div className="rounded-xl border border-zinc-800 bg-zinc-900/35 p-4">
                  <p className="text-xs font-semibold text-violet-400">Technical</p>
                  <p className="mt-2 text-sm text-zinc-300">
                    Existing backends limit real-time integration for spending analysis
                    and multi-language support. Performance must stay smooth despite
                    biometric login, push notifications, and donation batch processing.
                  </p>
                </div>
              </div>
            </div>

            <CaseStudyExpandable label="What I&apos;d validate next">
              <ul className="list-disc space-y-2 pl-5 text-zinc-300 leading-relaxed marker:text-zinc-500">
                <li>
                  Production experiment on{" "}
                  <span className="text-zinc-200">when</span> optional home modules
                  are introduced (after first successful task vs. first session).
                </li>
                <li>
                  Deeper pairing with policy/legal on{" "}
                  <span className="text-zinc-200">how much scenario copy</span> we
                  can show in technical setup flows without over-promising merchant
                  coverage.
                </li>
                <li>
                  Longitudinal study on{" "}
                  <span className="text-zinc-200">VoiceOver task time</span> after
                  IA stabilization—not just pass/fail in one lab cycle.
                </li>
              </ul>
            </CaseStudyExpandable>
            <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40">
              <Image
                src="/case-studies/e-invoice/photo-stakeholder-meeting.png"
                alt="Stakeholder meeting during the e-Invoice redesign project"
                width={1600}
                height={900}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </DesignJourneyCollapsible>
        <CaseStudyInViewSection
          id="figma-resources"
          className="scroll-mt-28 space-y-4 rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 sm:scroll-mt-32 sm:space-y-5 sm:p-8"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-emerald-200/85">
            Figma files
          </span>
          <h2 className="max-w-2xl text-pretty text-lg font-semibold leading-snug tracking-tight text-zinc-100 sm:text-xl md:text-2xl">
            Open the source files for wireflows, page logic, and hi-fi mocks in one
            place.
          </h2>
          <p className="max-w-2xl text-sm text-zinc-400">
            Hi-fi mockups and page flow first; wireframes and wireflow for IA and
            early logic.
          </p>
          <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:flex-wrap sm:items-center">
            <a
              href={FIGMA_MOCKUP_PAGE}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500/90 px-5 py-2.5 text-sm font-semibold text-zinc-950 transition hover:bg-emerald-400"
            >
              Mockup &amp; page flow →
            </a>
            <a
              href={FIGMA_WIREFRAME_FLOW}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-zinc-600 bg-transparent px-5 py-2.5 text-sm font-medium text-zinc-200 transition hover:border-zinc-400 hover:text-zinc-50"
            >
              Wireframe &amp; wireflow →
            </a>
          </div>
        </CaseStudyInViewSection>
        </div>

        <CaseStudyInViewSection className="border-t border-zinc-800 pt-12 space-y-8">
          <CaseStudyPrevNext currentSlug="e-invoice-app" />
          <Link
            href="/"
            className="text-sm font-medium text-zinc-400 hover:text-zinc-100 transition"
          >
            ← Back to work
          </Link>
        </CaseStudyInViewSection>
      </CaseStudyContentLayout>
    </article>
  );
}
