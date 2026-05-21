import { useEffect } from "react";

import { alexUrl, scottEmailUrl } from "../alexConfig";
import { trackEvent, trackPageView } from "../analytics";

export default function BookingThanks() {
  useEffect(() => {
    const nextTitle = "Booking Request Sent | Scott Jewett";
    const previousTitle = document.title;

    document.title = nextTitle;
    trackPageView("/book/thanks", nextTitle);
    trackEvent("booking_request_completed", {
      source: "booking_form",
      destination: "/book/thanks",
    });

    return () => {
      document.title = previousTitle;
    };
  }, []);

  function handleReopenAlexClick() {
    trackEvent("reopen_alex_click", {
      source: "booking_thanks",
      destination: alexUrl,
    });
  }

  return (
    <main className="alexPage">
      <section className="alexHero bookingThanksHero">
        <a className="alexBackLink" href="/">
          Back to Scott's profile
        </a>

        <div className="alexOrb" aria-hidden="true" />

        <p className="alexStatusChip">Request sent</p>
        <p className="alexEyebrow">Scott Jewett booking funnel</p>
        <h1>Thanks. Scott now has your booking request.</h1>

        <p className="alexIntro">
          If you submitted the form, Scott can review the scope and follow up
          with the right next step. If you also want to continue the discovery
          flow, you can reopen Alex or send a direct email now.
        </p>

        <div className="alexActions">
          <a href={scottEmailUrl}>Email Scott directly</a>
          <a
            className="alexSecondaryAction"
            href={alexUrl}
            target="_blank"
            rel="noreferrer"
            onClick={handleReopenAlexClick}
          >
            Open Alex again
          </a>
        </div>
      </section>
    </main>
  );
}