"use client";

/**
 * Guided onboarding screen recording — WebM + MP4.
 * Source: public/case-studies/e-invoice/onboarding demo.mov (ReplayKit, 2962×1730).
 */
const WEBM = "/case-studies/e-invoice/onboarding-demo.webm";
const MP4 = "/case-studies/e-invoice/onboarding-demo.mp4";

const FRAME_ASPECT = 2962 / 1730;

type Props = {
  label?: string;
  className?: string;
};

export function OnboardingDemoVideo({
  label = "Screen recording: guided first-time setup in the e-invoice app",
  className = "",
}: Props) {
  return (
    <figure className={`w-full min-w-0 ${className}`.trim()}>
      <div
        className="relative w-full overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)]"
        style={{ aspectRatio: FRAME_ASPECT }}
      >
        <video
          className="relative z-10 h-full w-full object-contain"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label={label}
        >
          <source src={WEBM} type="video/webm" />
          <source src={MP4} type="video/mp4" />
        </video>
      </div>
    </figure>
  );
}
