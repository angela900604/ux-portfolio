import Image from "next/image";
import { ImageLightbox } from "@/app/components/ImageLightbox";

const HANDOFF_MODULE_SETTINGS_SPEC = {
  src: "/case-studies/e-invoice/Handoff.png",
  alt: "E-invoice design handoff: Figma flows, API state mapping, screen reader annotations, and component specs for engineering alignment",
} as const;

export function EInvoiceHandoffBody() {
  return (
    <div className="max-w-4xl space-y-4">
      <div className="cs-body">
        <ul className="list-none space-y-3.5">
          <li className="flex gap-3">
            <span
              className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400/85"
              aria-hidden
            />
            <span>
              <span className="font-semibold text-zinc-400">
                API state matrix
              </span>
              {" — "}
              Each flow mapped against account states and timing windows, so
              engineering knew which endpoint to hit per scenario.
            </span>
          </li>
          <li className="flex gap-3">
            <span
              className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400/85"
              aria-hidden
            />
            <span>
              <span className="font-semibold text-zinc-400">
                Screen reader annotation
              </span>
              {" — "}
              VoiceOver focus order marked directly on screens.
            </span>
          </li>
          <li className="flex gap-3">
            <span
              className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400/85"
              aria-hidden
            />
            <span>
              <span className="font-semibold text-zinc-400">
                Component specs
              </span>
              {" — "}
              States, empty copy, and error strings per component in the Figma
              library.
            </span>
          </li>
        </ul>
      </div>
      <figure className="mt-6 overflow-hidden">
        <ImageLightbox
          src={HANDOFF_MODULE_SETTINGS_SPEC.src}
          alt={HANDOFF_MODULE_SETTINGS_SPEC.alt}
          className="block w-full"
          disableHoverScale
        >
          <Image
            src={HANDOFF_MODULE_SETTINGS_SPEC.src}
            alt={HANDOFF_MODULE_SETTINGS_SPEC.alt}
            width={2414}
            height={1450}
            className="h-auto w-full object-contain object-top"
            sizes="(max-width: 1024px) 100vw, 1024px"
            unoptimized
          />
        </ImageLightbox>
      </figure>
    </div>
  );
}
