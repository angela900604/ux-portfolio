"use client";

import {
  createContext,
  Suspense,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  type ReactNode,
} from "react";
import {
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import type { MarketingWorkItem } from "@/lib/marketing-work";

export type PortfolioWorkFocusFilter = "all" | "product" | "marketing";

type PortfolioWorkFocusContextValue = {
  focus: PortfolioWorkFocusFilter;
  setFocus: (next: PortfolioWorkFocusFilter) => void;
  toggleFocus: (line: "product" | "marketing") => void;
  itemsForCurrentFocus: (
    items: readonly MarketingWorkItem[],
  ) => readonly MarketingWorkItem[];
};

const PortfolioWorkFocusContext =
  createContext<PortfolioWorkFocusContextValue | null>(null);

function parseFocusParam(raw: string | null): PortfolioWorkFocusFilter {
  if (raw === "product") return "product";
  if (raw === "marketing") return "marketing";
  return "all";
}

/**
 * Pre-hydration / Suspense fallback: URL-driven navigation only; grid shows all
 * until search params are ready (usually immediate).
 */
function PortfolioWorkFocusStaticBridge({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname() ?? "";

  const value = useMemo<PortfolioWorkFocusContextValue>(
    () => ({
      focus: "all",
      setFocus: (next) => {
        if (pathname !== "/") return;
        if (next === "all") router.replace("/", { scroll: false });
        else router.replace(`/?focus=${next}`, { scroll: false });
      },
      toggleFocus: (line) => {
        if (pathname !== "/") return;
        const target = line === "product" ? "product" : "marketing";
        router.replace(`/?focus=${target}`, { scroll: false });
      },
      itemsForCurrentFocus: (items) => items,
    }),
    [router, pathname],
  );

  return (
    <PortfolioWorkFocusContext.Provider value={value}>
      {children}
    </PortfolioWorkFocusContext.Provider>
  );
}

function PortfolioWorkFocusProviderBody({ children }: { children: ReactNode }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname() ?? "";

  const focus = useMemo(
    () => parseFocusParam(searchParams.get("focus")),
    [searchParams],
  );

  useEffect(() => {
    const raw = searchParams.get("focus");
    if (raw && raw !== "product" && raw !== "marketing") {
      router.replace("/", { scroll: false });
    }
  }, [searchParams, router]);

  const setFocus = useCallback(
    (next: PortfolioWorkFocusFilter) => {
      if (pathname !== "/") return;
      if (next === "all") router.replace("/", { scroll: false });
      else router.replace(`/?focus=${next}`, { scroll: false });
    },
    [pathname, router],
  );

  const toggleFocus = useCallback(
    (line: "product" | "marketing") => {
      if (pathname !== "/") return;
      const target = line === "product" ? "product" : "marketing";
      if (focus === target) setFocus("all");
      else setFocus(target);
    },
    [pathname, focus, setFocus],
  );

  const itemsForCurrentFocus = useCallback(
    (items: readonly MarketingWorkItem[]) => {
      if (focus === "all") return items;
      return items.filter((w) => w.portfolioFocus === focus);
    },
    [focus],
  );

  const value = useMemo(
    () => ({
      focus,
      setFocus,
      toggleFocus,
      itemsForCurrentFocus,
    }),
    [focus, setFocus, toggleFocus, itemsForCurrentFocus],
  );

  return (
    <PortfolioWorkFocusContext.Provider value={value}>
      {children}
    </PortfolioWorkFocusContext.Provider>
  );
}

export function PortfolioWorkFocusProvider({ children }: { children: ReactNode }) {
  return (
    <Suspense
      fallback={
        <PortfolioWorkFocusStaticBridge>
          {children}
        </PortfolioWorkFocusStaticBridge>
      }
    >
      <PortfolioWorkFocusProviderBody>{children}</PortfolioWorkFocusProviderBody>
    </Suspense>
  );
}

export function usePortfolioWorkFocus(): PortfolioWorkFocusContextValue {
  const ctx = useContext(PortfolioWorkFocusContext);
  if (!ctx) {
    throw new Error(
      "usePortfolioWorkFocus must be used within PortfolioWorkFocusProvider",
    );
  }
  return ctx;
}
