"use client";

/**
 * Homepage modules / settings screen capture — WebM (VP9) + MP4 (H.264) for coverage.
 * Frame matches {@link HomeBeforeAfterSlider} (1024×576). Lavender mat keeps phone UI centered.
 * Source ProRes: public/case-studies/e-invoice/setting einvoice.mov
 */
const WEBM = "/case-studies/e-invoice/setting-einvoice.webm";
const MP4 = "/case-studies/e-invoice/setting-einvoice.mp4";

/** Same aspect as home before/after comparison frames. */
const FRAME_ASPECT = 1024 / 576;

const MAT_BG = "#D8D5FF";

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
    <figure className={`w-full min-w-0 ${className}`.trim()}>
      <div
        className="relative w-full overflow-hidden rounded-2xl border border-zinc-800 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)]"
        style={{ aspectRatio: FRAME_ASPECT }}
      >
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ backgroundColor: MAT_BG }}
          aria-hidden
        />
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
