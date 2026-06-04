type EventName =
  | "chat_widget_opened"
  | "chat_lead_qualified"
  | "chat_send_to_ruthvik_clicked"
  | "contact_form_submitted";

/**
 * Lightweight analytics helper.
 * Dispatches to:
 * 1. window.gtag (Google Analytics 4) if available
 * 2. window.dataLayer (GTM) if available
 * 3. Custom event on window for in-app listeners
 */
export function trackEvent(
  event: EventName,
  params?: Record<string, string | number | boolean | undefined>
) {
  const payload = { event, ...params };

  // Google Analytics 4
  if (typeof window !== "undefined" && "gtag" in window && typeof (window as any).gtag === "function") {
    (window as any).gtag("event", event, params);
  }

  // Google Tag Manager
  if (typeof window !== "undefined" && "dataLayer" in window && Array.isArray((window as any).dataLayer)) {
    (window as any).dataLayer.push(payload);
  }

  // Generic custom event for in-app analytics or Segment/PostHog/etc wrappers
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("ruthvik:analytics", { detail: payload }));
  }
}
