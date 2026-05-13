"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
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

export function PortfolioWorkFocusProvider({ children }: { children: ReactNode }) {
  const [focus, setFocus] = useState<PortfolioWorkFocusFilter>("all");

  const toggleFocus = useCallback((line: "product" | "marketing") => {
    setFocus((prev) => {
      const target = line === "product" ? "product" : "marketing";
      return prev === target ? "all" : target;
    });
  }, []);

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
    [focus, toggleFocus, itemsForCurrentFocus],
  );

  return (
    <PortfolioWorkFocusContext.Provider value={value}>
      {children}
    </PortfolioWorkFocusContext.Provider>
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
