import Image from "next/image";
import type { ReactNode } from "react";

type Props = {
  imageSrc: string;
  imageAlt: string;
  /** Tailwind classes for object-fit / position (default center cover). */
  imageClassName?: string;
  priority?: boolean;
  /**
   * `overlay` — title on the image with dark scrim (default).
   * `below-meta` — title on light band, then children (e.g. Role / Location / Timeline), then hero image.
   */
  imagePlacement?: "overlay" | "below-meta";
  /**
   * When `imagePlacement` is `below-meta`: `fullBleedCover` fills ~80–90vh (may crop).
   * `contain` keeps aspect ratio inside a max width/height (no stretch / crop).
   */
  belowMetaImageMode?: "fullBleedCover" | "contain";
  /** Intrinsic size for `contain` mode (used by next/image width/height). */
  belowMetaIntrinsicWidth?: number;
  belowMetaIntrinsicHeight?: number;
  /** Small caps line(s) above the title — e.g. Case Study · tags */
  eyebrow: ReactNode;
  /** Main project title — use <h1 className="...">…</h1> with white text classes. */
  title: ReactNode;
  /** Optional lead line under the title. */
  subtitle?: ReactNode;
  /** Everything below the fold: meta, at-a-glance, etc. */
  children?: ReactNode;
};

function FullBleedImageOnly({
  imageSrc,
  imageAlt,
  imageClassName,
  priority,
}: Pick<Props, "imageSrc" | "imageAlt" | "imageClassName" | "priority">) {
  return (
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
      </div>
    </div>
  );
}

function BelowMetaImageContained({
  imageSrc,
  imageAlt,
  priority,
  width,
  height,
}: {
  imageSrc: string;
  imageAlt: string;
  priority: boolean;
  width: number;
  height: number;
}) {
  return (
    <div className="relative left-1/2 w-screen max-w-[100vw] -translate-x-1/2 bg-[#F5F3EF]">
      <div className="mx-auto flex max-w-[1440px] justify-center px-6 py-10 sm:px-[100px] sm:py-12">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={width}
          height={height}
          priority={priority}
          className="h-auto max-h-[min(85vh,48rem)] w-auto max-w-full object-contain"
          sizes="(max-width: 1200px) 100vw, 1200px"
        />
      </div>
    </div>
  );
}

/**
 * 100vw full-bleed first screen (~80–90vh) with title in large white type on a dark gradient,
 * or (below-meta) title on a light band, meta, then image only.
 */
export function CaseStudyHeroFullBleed({
  imageSrc,
  imageAlt,
  imageClassName = "object-cover object-center",
  priority = true,
  imagePlacement = "overlay",
  belowMetaImageMode = "fullBleedCover",
  belowMetaIntrinsicWidth = 1024,
  belowMetaIntrinsicHeight = 768,
  eyebrow,
  title,
  subtitle,
  children,
}: Props) {
  if (imagePlacement === "below-meta") {
    return (
      <>
        <div className="mx-auto max-w-[1440px] px-6 sm:px-[100px] pt-14 pb-6 sm:pt-20 sm:pb-8">
          {eyebrow}
          {title}
          {subtitle ? <div className="mt-5 max-w-3xl">{subtitle}</div> : null}
        </div>
        {children ? (
          <div className="mx-auto max-w-[1440px] px-6 sm:px-[100px] pb-10 sm:pb-12">
            {children}
          </div>
        ) : null}
        {belowMetaImageMode === "contain" ? (
          <BelowMetaImageContained
            imageSrc={imageSrc}
            imageAlt={imageAlt}
            priority={priority}
            width={belowMetaIntrinsicWidth}
            height={belowMetaIntrinsicHeight}
          />
        ) : (
          <FullBleedImageOnly
            imageSrc={imageSrc}
            imageAlt={imageAlt}
            imageClassName={imageClassName}
            priority={priority}
          />
        )}
      </>
    );
  }

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
          {/* Base dim + bottom-heavy gradient so titles stay readable on bright photos */}
          <div className="absolute inset-0 bg-black/35" aria-hidden />
          <div
            className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/82 to-zinc-950/55"
            aria-hidden
          />
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
