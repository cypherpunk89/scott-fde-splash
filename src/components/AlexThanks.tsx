import { useEffect } from "react";

import {
  alexUrl,
  bookingUrl,
  scottEmailUrl,
  scottWebsiteUrl,
} from "../alexConfig";
import { analyticsEnabled, trackEvent, trackPageView } from "../analytics";

export default function AlexThanks() {
  useEffect(() => {
    const nextTitle = "Alex Next Step | Scott Jewett";
    const previousTitle = document.title;

    document.title = nextTitle;
    trackPageView("/alex/thanks", nextTitle);

    return () => {
      document.title = previousTitle;
    };
  }, []);

  function handleBookClick() {
    trackEvent("book_scott_click", {
      source: "alex_thanks",
      destination: bookingUrl,
    });
  }

  function handleEmailClick() {
    trackEvent("email_scott_click", {
      source: "alex_thanks",
      destination: scottEmailUrl,
    });
  }

  function handleReopenClick() {
    trackEvent("reopen_alex_click", {
      source: "alex_thanks",
      destination: alexUrl,
    });
  }

  function handleWebsiteClick() {
    trackEvent("visit_techsgt_click", {
      source: "alex_thanks",
      destination: scottWebsiteUrl,
    });
  }

  return (
    <main className="alexPage">
      <section className="alexHero alexThanksHero">
        <a className="alexBackLink" href="/alex">
          Back to Alex landing page
        </a>

        <div className="alexOrb" aria-hidden="true" />

        <p className="alexStatusChip">Alex launched</p>

        <p className="alexEyebrow">Thank you for taking the next step</p>
        <h1>Alex should already be open in a new tab.</h1>

        <p className="alexIntro">
          Keep this page open as the next step in the funnel. If the assistant
          did not open, use the backup link below. If the conversation looks
          promising, open Scott's intake form while the interest is still fresh.
        </p>

        <div className="alexActions">
          <a href={bookingUrl} onClick={handleBookClick}>
            Open Scott's booking form
          </a>
          <a
            className="alexSecondaryAction"
            href={alexUrl}
            target="_blank"
            rel="noreferrer"
            onClick={handleReopenClick}
          >
            Open Alex again
          </a>
        </div>

        <p className="alexSupportLinks">
          <a href={scottEmailUrl} onClick={handleEmailClick}>
            Email Scott directly
          </a>
          <span>or</span>
          <a href={scottWebsiteUrl} target="_blank" rel="noreferrer" onClick={handleWebsiteClick}>
            visit TechSGT.com
          </a>
        </p>

        <p className="alexAnalyticsNote">
          {analyticsEnabled()
            ? "GA4 now sees this thank-you step separately from the Launch Alex click, plus booking and reopen clicks from this page."
            : "Set VITE_GA_MEASUREMENT_ID to track this thank-you step and the booking flow from it."}
        </p>

        <div className="alexGrid">
          <article className="alexPanel">
            <h2>What to do in Alex</h2>
            <ul>
              <li>Ask how Scott handles unclear field environments.</li>
              <li>Ask which client-facing roles match his deployment background.</li>
              <li>Ask for examples of troubleshooting, cabling, or network work.</li>
            </ul>
          </article>

          <article className="alexPanel">
            <h2>What to do next with Scott</h2>
            <p className="alexPanelCopy">
              If Alex confirms the fit, move straight into Scott's booking form
              or direct email while the conversation is still active.
            </p>
            <div className="alexInlineActions">
              <a href={bookingUrl} onClick={handleBookClick}>
                Open booking form
              </a>
              <a href={scottEmailUrl} onClick={handleEmailClick}>
                Email Scott
              </a>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}