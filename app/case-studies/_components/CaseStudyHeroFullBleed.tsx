import Image from "next/image";
import type { ReactNode } from "react";

type Props = {
  imageSrc: string;
  imageAlt: string;
  /** Tailwind classes for object-fit / position (default center cover). */
  imageClassName?: string;
  priority?: boolean;
  /**
   * `dark` — black/zinc scrim + white type (default).
   * `none` — no dark overlay; use dark typography in eyebrow/title/subtitle for light artwork.
   */
  overlay?: "dark" | "none";
  /** Small caps line(s) above the title — e.g. Case Study · tags */
  eyebrow: ReactNode;
  /** Main project title — use <h1 className="...">…</h1> with white text classes. */
  title: ReactNode;
  /** Optional lead line under the title. */
  subtitle?: ReactNode;
  /** Everything below the fold: meta, at-a-glance, etc. */
  children?: ReactNode;
};

/**
 * 100vw full-bleed first screen (~80–90vh) with title over the image.
 * Default: dark scrim for white type. `overlay="none"` for marketing-style covers with no black wash.
 */
export function CaseStudyHeroFullBleed({
  imageSrc,
  imageAlt,
  imageClassName = "object-cover object-center",
  priority = true,
  overlay = "dark",
  eyebrow,
  title,
  subtitle,
  children,
}: Props) {
  return (
    <>
      <div className="relative left-1/2 w-screen max-w-[100vw] -translate-x-1/2">
        <div className="relative h-[min(90vh,56rem)] min-h-[80vh] w-full">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            priority={priority}
            className={imageClassName}
            sizes="100vw"
          />
          {overlay === "dark" ? (
            <>
              <div className="absolute inset-0 bg-black/35" aria-hidden />
              <div
                className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/82 to-zinc-950/55"
                aria-hidden
              />
            </>
          ) : null}
          <div className="absolute inset-0 flex flex-col justify-end px-6 pb-14 pt-28 sm:px-[100px] sm:pb-20 sm:pt-36">
            <div className="mx-auto w-full max-w-[1440px]">
              {eyebrow}
              {title}
              {subtitle ? <div className="mt-5 max-w-3xl">{subtitle}</div> : null}
            </div>
          </div>
        </div>
      </div>
      {children ? (
        <div className="mx-auto max-w-[1440px] px-6 sm:px-[100px] py-12 sm:py-16">
          {children}
        </div>
      ) : null}
    </>
  );
}
