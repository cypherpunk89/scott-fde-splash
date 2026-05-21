import { useEffect } from "react";

import { bookingThanksUrl, scottEmailUrl } from "../alexConfig";
import { analyticsEnabled, trackPageView } from "../analytics";

export default function BookingPage() {
  useEffect(() => {
    const nextTitle = "Book Scott | Scott Jewett";
    const previousTitle = document.title;

    document.title = nextTitle;
    trackPageView("/book", nextTitle);

    return () => {
      document.title = previousTitle;
    };
  }, []);

  return (
    <main className="alexPage">
      <section className="alexHero bookingHero">
        <a className="alexBackLink" href="/alex/thanks">
          Back to Alex next step
        </a>

        <div className="alexOrb" aria-hidden="true" />

        <p className="alexStatusChip">Booking intake</p>
        <p className="alexEyebrow">Direct next step for Scott Jewett</p>
        <h1>Send the project details Scott needs to respond fast.</h1>

        <p className="alexIntro">
          This form goes straight into the site funnel so Scott can review the
          opportunity, understand the scope, and reply with the right next step.
        </p>

        <div className="bookingGrid">
          <form
            className="bookingForm"
            name="scott-booking"
            method="POST"
            action={bookingThanksUrl}
            data-netlify="true"
          >
            <input type="hidden" name="form-name" value="scott-booking" />
            <p className="bookingHoneypot">
              <label>
                Do not fill this out if you're human:
                <input name="bot-field" />
              </label>
            </p>

            <div className="bookingFields">
              <label className="bookingField">
                Full name
                <input name="name" type="text" autoComplete="name" required />
              </label>

              <label className="bookingField">
                Email
                <input name="email" type="email" autoComplete="email" required />
              </label>

              <label className="bookingField">
                Company
                <input name="company" type="text" autoComplete="organization" />
              </label>

              <label className="bookingField">
                Phone
                <input name="phone" type="tel" autoComplete="tel" />
              </label>

              <label className="bookingField">
                Work type
                <select name="work_type" defaultValue="">
                  <option value="" disabled>
                    Select one
                  </option>
                  <option value="field-deployment">Field deployment</option>
                  <option value="network-troubleshooting">Network troubleshooting</option>
                  <option value="low-voltage-cabling">Low-voltage cabling</option>
                  <option value="wireless-survey">Wireless survey</option>
                  <option value="data-center">Data center work</option>
                  <option value="other">Other</option>
                </select>
              </label>

              <label className="bookingField">
                Timeline
                <select name="timeline" defaultValue="">
                  <option value="" disabled>
                    Select one
                  </option>
                  <option value="urgent">Urgent</option>
                  <option value="this-week">This week</option>
                  <option value="this-month">This month</option>
                  <option value="planning">Planning phase</option>
                </select>
              </label>

              <label className="bookingField bookingFieldFull">
                Project details
                <textarea
                  name="project_details"
                  rows={6}
                  placeholder="Describe the site, scope, urgency, and what kind of help you need from Scott."
                  required
                />
              </label>
            </div>

            <button className="bookingSubmit" type="submit">
              Send booking request
            </button>
          </form>

          <aside className="bookingSidebar alexPanel">
            <h2>What to include</h2>
            <ul>
              <li>Site count, location, or travel needs.</li>
              <li>Whether this is cabling, network, wireless, or field service work.</li>
              <li>Your deadline and who Scott should coordinate with.</li>
            </ul>

            <p className="alexPanelCopy">
              If you prefer not to use the form, email Scott directly and include
              the same scope details in the message.
            </p>

            <div className="alexInlineActions">
              <a href={scottEmailUrl}>Email Scott</a>
            </div>

            <p className="alexAnalyticsNote bookingNote">
              {analyticsEnabled()
                ? "GA4 tracks this booking-form page separately from the Alex thank-you step."
                : "GA4 page tracking for this booking step activates automatically when VITE_GA_MEASUREMENT_ID is set."}
            </p>
          </aside>
        </div>
      </section>
    </main>
  );
}