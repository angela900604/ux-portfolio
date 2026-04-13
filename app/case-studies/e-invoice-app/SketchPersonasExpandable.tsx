"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { PortraitTile } from "./EInvoiceFigures";

const ASSET = (name: string) => `/case-studies/e-invoice/case-assets/${name}`;

const CARD =
  "flex w-full cursor-pointer gap-3 rounded-xl border border-zinc-800/90 bg-zinc-900/30 p-3 text-left transition hover:border-emerald-500/35 hover:bg-zinc-900/45 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/70 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950";

type SketchId = "yiting" | "david" | "chen";

export function SketchPersonasExpandable() {
  const [open, setOpen] = useState<SketchId | null>(null);

  const close = useCallback(() => setOpen(null), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close]);

  return (
    <div className="space-y-5 pt-2">
      <div className="space-y-3 max-w-3xl">
        <h3 className="text-lg font-semibold tracking-tight text-zinc-100">
          Personas · two extremes, three sketches
        </h3>
        <p className="text-sm leading-relaxed text-zinc-400">
          Full cards for{" "}
          <span className="text-zinc-200">Mei-Ling</span> (silver) and{" "}
          <span className="text-zinc-200">Alex</span> (foreign resident)—the two
          ends of literacy, language, and tolerance for complexity. Tap a sketch
          below to open the full persona for{" "}
          <span className="text-zinc-200">Yi-Ting</span>,{" "}
          <span className="text-zinc-200">David</span>, or{" "}
          <span className="text-zinc-200">Teacher Chen</span>.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-3 max-w-4xl">
        <button
          type="button"
          className={CARD}
          onClick={() => setOpen("yiting")}
          aria-haspopup="dialog"
          aria-expanded={open === "yiting"}
          aria-label="Open full persona: Yi-Ting, 18–30"
        >
          <div className="relative h-[4.5rem] w-14 shrink-0 overflow-hidden rounded-lg bg-zinc-800">
            <Image
              src={ASSET("persona-portrait-01.png")}
              alt=""
              fill
              className="object-cover object-center"
              sizes="56px"
            />
          </div>
          <div className="min-w-0 text-xs leading-snug">
            <p className="font-medium text-zinc-100">Yi-Ting · 18–30</p>
            <p className="mt-1 text-zinc-500">
              Wants speed, aesthetics, dense shortcuts—barcode first, ads never.
            </p>
            <p className="mt-2 text-[10px] font-medium uppercase tracking-wider text-emerald-400/80">
              Open full persona →
            </p>
          </div>
        </button>

        <button
          type="button"
          className={CARD}
          onClick={() => setOpen("david")}
          aria-haspopup="dialog"
          aria-expanded={open === "david"}
          aria-label="Open full persona: David, 31–50"
        >
          <div className="relative h-[4.5rem] w-14 shrink-0 overflow-hidden rounded-lg bg-zinc-800">
            <Image
              src={ASSET("persona-portrait-02.png")}
              alt=""
              fill
              className="object-cover object-center"
              sizes="56px"
            />
          </div>
          <div className="min-w-0 text-xs leading-snug">
            <p className="font-medium text-zinc-100">David · 31–50</p>
            <p className="mt-1 text-zinc-500">
              Balanced power user—biometrics, reminders, reliable at checkout.
            </p>
            <p className="mt-2 text-[10px] font-medium uppercase tracking-wider text-emerald-400/80">
              Open full persona →
            </p>
          </div>
        </button>

        <button
          type="button"
          className={CARD}
          onClick={() => setOpen("chen")}
          aria-haspopup="dialog"
          aria-expanded={open === "chen"}
          aria-label="Open full persona: Teacher Chen, low vision"
        >
          <div className="relative h-[4.5rem] w-14 shrink-0 overflow-hidden rounded-lg bg-zinc-800">
            <Image
              src={ASSET("persona-portrait-vi-session.png")}
              alt=""
              fill
              className="object-cover object-center"
              sizes="56px"
            />
          </div>
          <div className="min-w-0 text-xs leading-snug">
            <p className="font-medium text-zinc-100">Teacher Chen · low vision</p>
            <p className="mt-1 text-zinc-500">
              Needs predictable layout, VoiceOver that doesn&apos;t shout, family
              assist today.
            </p>
            <p className="mt-2 text-[10px] font-medium uppercase tracking-wider text-emerald-400/80">
              Open full persona →
            </p>
          </div>
        </button>
      </div>

      {open ? (
        <div
          className="fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto bg-black/88 px-4 py-10 sm:py-14"
          role="presentation"
          onClick={(e) => e.target === e.currentTarget && close()}
        >
          <div
            className="relative w-full max-w-4xl rounded-2xl border border-zinc-700/80 bg-zinc-950 shadow-2xl"
            role="dialog"
            aria-modal="true"
            aria-label="Full persona"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={close}
              className="absolute right-3 top-3 z-10 rounded-full border border-zinc-600 bg-zinc-900/90 px-3 py-1.5 text-xs font-medium text-zinc-200 hover:border-zinc-500 hover:text-zinc-50"
            >
              Close
            </button>
            <div className="max-h-[min(90vh,1200px)] overflow-y-auto p-4 sm:p-6">
              {open === "yiting" ? <FullPersonaYiTing /> : null}
              {open === "david" ? <FullPersonaDavid /> : null}
              {open === "chen" ? <FullPersonaChen /> : null}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

function FullPersonaYiTing() {
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-zinc-800/90 bg-zinc-900/35 sm:flex-row">
      <div className="shrink-0 sm:w-[42%]">
        <PortraitTile
          borderless
          src={ASSET("persona-portrait-01.png")}
          alt="Portrait for Persona Yi-Ting, 18–30 young professional"
          className="sm:rounded-l-2xl sm:rounded-r-none rounded-t-2xl sm:rounded-t-none"
        />
      </div>
      <div className="flex min-w-0 flex-1 flex-col justify-center gap-3 p-5 text-sm">
        <p className="text-xs font-semibold uppercase tracking-wider text-violet-400/95">
          Persona 01 · 18–30 · Young professionals
        </p>
        <p className="font-medium text-zinc-100">
          Yi-Ting · 26 · Taiwan · Planner / creative
        </p>
        <p className="text-zinc-400">
          <span className="text-zinc-300">Tech:</span> High digital fluency—iOS,
          wearables, widgets &amp; Wallet for carrier barcodes; tracks spending and
          promos; uses third-party invoice tools for draws.
        </p>
        <div>
          <p className="text-xs font-semibold text-zinc-500">Pain points</p>
          <ul className="mt-1 list-disc pl-4 text-zinc-400 marker:text-zinc-600">
            <li>Busy UI; slow cold start and intrusive ads before the barcode</li>
            <li>Carrier binding still feels “browser-heavy” and fragmented</li>
            <li>Merchant names inconsistent in history—hard to search wins</li>
            <li>Forgets the MoF verification code; weak win / remittance alerts</li>
            <li>Paper invoice scanning fails often</li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold text-zinc-500">Goals</p>
          <ul className="mt-1 list-disc pl-4 text-zinc-400 marker:text-zinc-600">
            <li>Cleaner visual style; barcode-first home</li>
            <li>Accurate spending search &amp; categories</li>
            <li>Stronger win &amp; payout notifications</li>
            <li>Biometrics / pattern login; stable scan</li>
          </ul>
        </div>
        <p className="border-l-2 border-violet-500/50 pl-3 italic text-zinc-300">
          &ldquo;I move fast—I need the carrier barcode immediately. I care how the
          UI looks, track spend for habits and deals, but waiting on a slow app or
          closing ads just to copy a barcode drives me nuts.&rdquo;
        </p>
      </div>
    </article>
  );
}

function FullPersonaDavid() {
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-zinc-800/90 bg-zinc-900/35 sm:flex-row">
      <div className="shrink-0 sm:w-[42%]">
        <PortraitTile
          borderless
          src={ASSET("persona-portrait-02.png")}
          alt="Portrait for Persona David, 31–50 middle-aged professional"
          className="sm:rounded-l-2xl sm:rounded-r-none rounded-t-2xl sm:rounded-t-none"
        />
      </div>
      <div className="flex min-w-0 flex-1 flex-col justify-center gap-3 p-5 text-sm">
        <p className="text-xs font-semibold uppercase tracking-wider text-violet-400/95">
          Persona 02 · 31–50 · Established professionals
        </p>
        <p className="font-medium text-zinc-100">
          David · 41 · Taiwan · Service PM
        </p>
        <p className="text-zinc-400">
          <span className="text-zinc-300">Tech:</span> High digital usage—mobile
          payment apps (e.g. LINE Pay, JKOPAY, Taiwan Pay), widgets, Apple Wallet /
          printed barcodes; shops online &amp; offline; checks promos and rough
          monthly spend.
        </p>
        <div>
          <p className="text-xs font-semibold text-zinc-500">Pain points</p>
          <ul className="mt-1 list-disc pl-4 text-zinc-400 marker:text-zinc-600">
            <li>Often forgets the MoF app password / verification code</li>
            <li>Win emails feel wordy; wants clearer push when numbers drop</li>
            <li>Needs rock-solid stability—can&apos;t wait on checkout load</li>
            <li>Wants better consumption breakdown (categories feel wrong)</li>
            <li>Skips opening the app at the register if it feels slow</li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold text-zinc-500">Goals</p>
          <ul className="mt-1 list-disc pl-4 text-zinc-400 marker:text-zinc-600">
            <li>Biometrics &amp; quick login; stronger win reminders</li>
            <li>Smoother performance &amp; reward / streak mechanics</li>
            <li>
              Real <span className="text-zinc-300">consumption analysis</span> tied
              to invoices
            </li>
            <li>Faster barcode surface at payment</li>
          </ul>
        </div>
        <p className="border-l-2 border-violet-500/50 pl-3 italic text-zinc-300">
          &ldquo;My phone is my second wallet—I want payments, invoices, and
          membership in one flow. At the counter I can&apos;t afford a sluggish app;
          I also want to see where my money goes, not fight the UI.&rdquo;
        </p>
      </div>
    </article>
  );
}

function FullPersonaChen() {
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-zinc-800/90 bg-zinc-900/35 sm:flex-row">
      <div className="shrink-0 sm:w-[42%]">
        <PortraitTile
          borderless
          src={ASSET("persona-portrait-vi-session.png")}
          alt="Portrait for Teacher Chen, visually impaired participant"
          className="sm:rounded-l-2xl sm:rounded-r-none rounded-t-2xl sm:rounded-t-none"
        />
      </div>
      <div className="flex min-w-0 flex-1 flex-col justify-center gap-3 p-5 text-sm">
        <p className="text-xs font-semibold uppercase tracking-wider text-violet-400/95">
          Persona · Visually impaired user
        </p>
        <p className="font-medium text-zinc-100">
          Teacher Chen · Retired elementary teacher · Severe low vision
        </p>
        <p className="text-zinc-400">
          <span className="text-zinc-300">Tech:</span> Macular degeneration—mostly
          light and shadow; uses Android with family help; avoids payment barcodes
          when she can&apos;t confirm what will be scanned.
        </p>
        <div>
          <p className="text-xs font-semibold text-zinc-500">Pain points</p>
          <ul className="mt-1 list-disc pl-4 text-zinc-400 marker:text-zinc-600">
            <li>Cannot operate most apps independently—feels helpless</li>
            <li>Fear of scams and wrong barcode scans</li>
            <li>Screen reader prompts feel overwhelming</li>
            <li>Needs very large, high-contrast targets to see anything</li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold text-zinc-500">Goals</p>
          <ul className="mt-1 list-disc pl-4 text-zinc-400 marker:text-zinc-600">
            <li>Fixed button positions and predictable layout</li>
            <li>High contrast, large type, minimal noise</li>
            <li>Clear voice guidance and calmer screen-reader behavior</li>
            <li>Distinct success sounds; caregiver-friendly setup flows</li>
          </ul>
        </div>
        <p className="border-l-2 border-violet-500/50 pl-3 italic text-zinc-300">
          &ldquo;The words and buttons are unclear. I have to ask my daughter every
          time for e-invoice—I&apos;m afraid the clerk will scan the wrong barcode. I
          hope the app can be voice-controlled so I can do more myself.&rdquo;
        </p>
      </div>
    </article>
  );
}
