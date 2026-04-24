"use client";

/**
 * Homepage modules / settings screen capture — WebM (VP9) + MP4 (H.264) for coverage.
 * Source ProRes: public/case-studies/e-invoice/setting einvoice.mov
 */
const WEBM = "/case-studies/e-invoice/setting-einvoice.webm";
const MP4 = "/case-studies/e-invoice/setting-einvoice.mp4";

type Props = {
  /** Short description for assistive tech */
  label?: string;
  className?: string;
};

export function SettingHomeModulesVideo({
  label = "Screen recording: customizing home modules in the e-invoice app settings",
  className = "",
}: Props) {
  return (
    <div
      className={`overflow-hidden rounded-xl border border-zinc-800/90 bg-zinc-900/40 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)] ${className}`.trim()}
    >
      <video
        className="block h-auto w-full object-contain"
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
  );
}
