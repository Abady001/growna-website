"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

type AnalyticsEvent = {
  name: string;
  params?: Record<string, string | number | boolean>;
};

export function trackEvent(_event: AnalyticsEvent) {
  // Placeholder for analytics event tracking
  // Replace with actual implementation (Google Analytics, Plausible, etc.)
  if (process.env.NODE_ENV === "development") {
    console.log("Analytics event:", _event);
  }
}

export function trackPageView(url: string) {
  // Placeholder for page view tracking
  if (process.env.NODE_ENV === "development") {
    console.log("Page view:", url);
  }
}

export function Analytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = pathname + (searchParams?.toString() ? `?${searchParams}` : "");
    trackPageView(url);
  }, [pathname, searchParams]);

  return null;
}

export function useTrackEvent() {
  return trackEvent;
}
