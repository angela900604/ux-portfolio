"use client";

/**
 * Guided onboarding screen recordings — WebM + MP4, muted looping previews.
 * Shown as 1:1 crops (center) so paired clips match in size.
 */
const ONBOARDING_WEBM = "/case-studies/e-invoice/onboarding-demo.webm";
const ONBOARDING_MP4 = "/case-studies/e-invoice/onboarding-demo.mp4";

const ENGLISH_WEBM = "/case-studies/e-invoice/english.webm";
const ENGLISH_MP4 = "/case-studies/e-invoice/english.mp4";

type LoopingRecordingProps = {
  webmSrc: string;
  mp4Src: string;
  label: string;
  className?: string;
};

function LoopingScreenRecording({
  webmSrc,
  mp4Src,
  label,
  className = "",
}: LoopingRecordingProps) {
  return (
    <figure className={`min-w-0 ${className}`.trim()}>
      <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)]">
        <video
          className="absolute inset-0 z-10 h-full w-full object-cover object-center"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-label={label}
        >
          <source src={webmSrc} type="video/webm" />
          <source src={mp4Src} type="video/mp4" />
        </video>
      </div>
    </figure>
  );
}

type OnboardingDemoVideoProps = {
  label?: string;
  className?: string;
};

export function OnboardingDemoVideo({
  label = "Screen recording: guided first-time setup in the e-invoice app",
  className = "",
}: OnboardingDemoVideoProps) {
  return (
    <LoopingScreenRecording
      webmSrc={ONBOARDING_WEBM}
      mp4Src={ONBOARDING_MP4}
      label={label}
      className={`w-full ${className}`.trim()}
    />
  );
}

type EnglishGuidedOnboardingVideoProps = {
  className?: string;
};

export function EnglishGuidedOnboardingVideo({
  className = "",
}: EnglishGuidedOnboardingVideoProps) {
  return (
    <LoopingScreenRecording
      webmSrc={ENGLISH_WEBM}
      mp4Src={ENGLISH_MP4}
      label="Screen recording: guided first-time setup (English UI)"
      className={`w-full ${className}`.trim()}
    />
  );
}

/** Side-by-side default + English guided onboarding clips (stacked on small screens). */
export function GuidedOnboardingVideoPair({ className = "" }: { className?: string }) {
  return (
    <div
      className={`grid min-w-0 grid-cols-1 gap-6 sm:gap-7 lg:grid-cols-2 lg:gap-8 ${className}`.trim()}
    >
      <OnboardingDemoVideo />
      <EnglishGuidedOnboardingVideo />
    </div>
  );
}
