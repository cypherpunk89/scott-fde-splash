declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;

let analyticsReady = false;

function ensureAnalytics() {
  if (!measurementId || analyticsReady || typeof window === "undefined") {
    return;
  }

  window.dataLayer = window.dataLayer ?? [];
  window.gtag =
    window.gtag ??
    function gtag(...args: unknown[]) {
      window.dataLayer?.push(args);
    };

  const existingScript = document.querySelector(
    `script[src="https://www.googletagmanager.com/gtag/js?id=${measurementId}"]`,
  );

  if (!existingScript) {
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.append(script);
  }

  window.gtag("js", new Date());
  window.gtag("config", measurementId, {
    send_page_view: false,
  });

  analyticsReady = true;
}

export function trackPageView(path: string, title: string) {
  ensureAnalytics();

  if (!measurementId || !window.gtag) {
    return;
  }

  window.gtag("event", "page_view", {
    page_title: title,
    page_path: path,
    page_location: window.location.href,
  });
}

export function trackEvent(eventName: string, params: Record<string, unknown>) {
  ensureAnalytics();

  if (!measurementId || !window.gtag) {
    return;
  }

  window.gtag("event", eventName, params);
}

export function analyticsEnabled() {
  return Boolean(measurementId);
}