"use client";

/**
 * Guided onboarding screen recordings — WebM + MP4, muted looping previews.
 * Primary: public/case-studies/e-invoice/onboarding-demo.{webm,mp4}
 * English: public/case-studies/e-invoice/english.{webm,mp4} (from english.mov)
 */
const ONBOARDING_WEBM = "/case-studies/e-invoice/onboarding-demo.webm";
const ONBOARDING_MP4 = "/case-studies/e-invoice/onboarding-demo.mp4";
const ONBOARDING_FRAME_ASPECT = 2962 / 1730;

const ENGLISH_WEBM = "/case-studies/e-invoice/english.webm";
const ENGLISH_MP4 = "/case-studies/e-invoice/english.mp4";
const ENGLISH_FRAME_ASPECT = 3024 / 1582;

type LoopingRecordingProps = {
  webmSrc: string;
  mp4Src: string;
  frameAspect: number;
  label: string;
  caption?: string;
  className?: string;
};

function LoopingScreenRecording({
  webmSrc,
  mp4Src,
  frameAspect,
  label,
  caption,
  className = "",
}: LoopingRecordingProps) {
  return (
    <figure className={`min-w-0 ${className}`.trim()}>
      <div
        className="relative w-full overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)]"
        style={{ aspectRatio: frameAspect }}
      >
        <video
          className="relative z-10 h-full w-full object-contain"
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
      {caption ? (
        <figcaption className="mt-2 text-center text-xs text-zinc-500">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

type OnboardingDemoVideoProps = {
  label?: string;
  caption?: string;
  className?: string;
};

export function OnboardingDemoVideo({
  label = "Screen recording: guided first-time setup in the e-invoice app",
  caption,
  className = "",
}: OnboardingDemoVideoProps) {
  return (
    <LoopingScreenRecording
      webmSrc={ONBOARDING_WEBM}
      mp4Src={ONBOARDING_MP4}
      frameAspect={ONBOARDING_FRAME_ASPECT}
      label={label}
      caption={caption}
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
      frameAspect={ENGLISH_FRAME_ASPECT}
      label="Screen recording: guided first-time setup (English UI)"
      caption="English"
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
      <OnboardingDemoVideo caption="Chinese UI" />
      <EnglishGuidedOnboardingVideo />
    </div>
  );
}
