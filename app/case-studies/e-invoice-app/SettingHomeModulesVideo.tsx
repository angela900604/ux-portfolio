"use client";

/**
 * Home modules / settings demo — WebM (VP9) + MP4 (H.264 stream copy from source).
 * Source capture: public/case-studies/e-invoice/demo setting.mov (ReplayKit, 1896×972).
 */
const WEBM = "/case-studies/e-invoice/demo-setting.webm";
const MP4 = "/case-studies/e-invoice/demo-setting.mp4";

const FRAME_ASPECT = 1896 / 972;

type Props = {
  label?: string;
  className?: string;
};

export function SettingHomeModulesVideo({
  label = "Screen recording: configuring optional home modules in the e-invoice app",
  className = "",
}: Props) {
  return (
    <figure className={`w-full min-w-0 ${className}`.trim()}>
      <div
        className="relative w-full max-w-full overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/50 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)]"
        style={{ aspectRatio: FRAME_ASPECT }}
      >
        <video
          className="relative z-10 h-full w-full max-w-full object-contain"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-label={label}
        >
          <source src={WEBM} type="video/webm" />
          <source src={MP4} type="video/mp4" />
        </video>
      </div>
    </figure>
  );
}
