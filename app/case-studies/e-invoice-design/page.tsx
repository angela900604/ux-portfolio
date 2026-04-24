import Image from "next/image";
import Link from "next/link";
import { SITE_SHELL_CONTAINER } from "@/lib/site-shell";

export const metadata = {
  title: "Case study | e-Invoice design showcase",
  description:
    "Visual-first e-Invoice case study page focused on UI and design exploration.",
};

const E_INVOICE_DESIGN_IMAGES = [
  {
    src: "/case-studies/e-invoice/hero-fullbleed.png",
    alt: "e-Invoice app redesign hero screens",
    className: "lg:col-span-3",
  },
  {
    src: "/case-studies/e-invoice/hero-store-barcode-carrier.png",
    alt: "Store barcode carrier experience screen",
    className: "lg:col-span-2",
  },
  {
    src: "/case-studies/e-invoice/hero-scan-paper-receipts.png",
    alt: "Paper receipt scan interface",
    className: "lg:col-span-1",
  },
  {
    src: "/case-studies/e-invoice/home-before-after-before.png",
    alt: "Homepage before redesign",
    className: "lg:col-span-1",
  },
  {
    src: "/case-studies/e-invoice/home-before-after-after.png",
    alt: "Homepage after redesign",
    className: "lg:col-span-1",
  },
  {
    src: "/case-studies/e-invoice/login-before-after-before.png",
    alt: "Login flow before redesign",
    className: "lg:col-span-1",
  },
  {
    src: "/case-studies/e-invoice/login-before-after-after.png",
    alt: "Login flow after redesign",
    className: "lg:col-span-1",
  },
  {
    src: "/case-studies/e-invoice/case-assets/guided-onboarding.png",
    alt: "Guided onboarding UI sequence",
    className: "lg:col-span-2",
  },
  {
    src: "/case-studies/e-invoice/case-assets/settings-homepage-display.png",
    alt: "Settings and homepage display configuration screens",
    className: "lg:col-span-2",
  },
  {
    src: "/case-studies/e-invoice/case-assets/login-after-biometric-pattern.png",
    alt: "Biometric pattern login state",
    className: "lg:col-span-2",
  },
  {
    src: "/case-studies/e-invoice/case-assets/face-id-quick-verification.png",
    alt: "Face ID quick verification flow",
    className: "lg:col-span-1",
  },
] as const;

export default function EInvoiceDesignPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <section className="border-b border-zinc-800">
        <div className={`${SITE_SHELL_CONTAINER} py-16 sm:py-20`}>
          <p className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            Case study
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            e-Invoice design showcase
          </h1>
          <p className="mt-4 max-w-3xl text-zinc-400 sm:text-lg">
            A visual-first page focused on the UI craft and key redesign screens.
          </p>
        </div>
      </section>

      <section>
        <div className={`${SITE_SHELL_CONTAINER} py-12 sm:py-16`}>
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {E_INVOICE_DESIGN_IMAGES.map((item) => (
              <li key={item.src} className={item.className}>
                <div className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={1600}
                    height={1000}
                    className="h-auto w-full object-cover"
                    sizes="(max-width: 1024px) 100vw, (max-width: 1480px) 50vw, 960px"
                  />
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-12">
            <Link
              href="/case-studies/e-invoice-app"
              className="inline-flex items-center rounded-full border border-cursor-accent/50 bg-zinc-900/60 px-5 py-2.5 text-sm font-medium text-zinc-100 transition hover:border-cursor-accent-bright hover:bg-zinc-900"
            >
              View full case study
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
