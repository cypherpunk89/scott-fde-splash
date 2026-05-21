import { useEffect, type MouseEvent } from "react";

import { alexAvatarUrl, alexUrl } from "../alexConfig";
import { trackEvent, trackPageView } from "../analytics";
import AlexVideoIntro from "./AlexVideoIntro";
import ScottVideoIntro from "./ScottVideoIntro";

const alexThanksUrl = "/alex/thanks";

export default function AlexLanding() {
  useEffect(() => {
    const nextTitle = "Ask Alex | Scott Jewett";
    const previousTitle = document.title;

    document.title = nextTitle;
    trackPageView("/alex", nextTitle);

    return () => {
      document.title = previousTitle;
    };
  }, []);

  function handleLaunchClick(event: MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();

    trackEvent("launch_alex_click", {
      source: "alex_landing",
      destination: alexUrl,
      next_step: alexThanksUrl,
    });

    const alexWindow = window.open(alexUrl, "_blank", "noopener,noreferrer");

    if (!alexWindow) {
      trackEvent("launch_alex_popup_blocked", {
        source: "alex_landing",
      });
    }

    window.location.assign(alexThanksUrl);
  }

  return (
    <main className="alexPage">
      <section className="alexHero">
        <a className="alexBackLink" href="/">
          Back to Scott's profile
        </a>

        <div className="alexOrb" aria-hidden="true" />

        <div className="alexHeader">
          <img
            className="alexPortrait"
            src={alexAvatarUrl}
            alt="Alex AI Assistant"
          />

          <div>
            <p className="alexEyebrow">Scott Jewett's FDE guide</p>
            <h1>Ask Alex before you book the call.</h1>
          </div>
        </div>

        <p className="alexIntro">
          Alex is a custom assistant built to answer questions about Scott's
          field engineering background, deployment history, technical strengths,
          and the kind of client-facing work he handles in the field.
        </p>

        <AlexVideoIntro />
        <ScottVideoIntro />

        <div className="alexActions" id="alex-launch">
          <a
            href={alexUrl}
            target="_blank"
            rel="noreferrer"
            onClick={handleLaunchClick}
          >
            Launch Alex
          </a>
          <a className="alexSecondaryAction" href="mailto:scott.jewett@techsgt.com">
            Email Scott directly
          </a>
        </div>

        <div className="alexGrid">
          <article className="alexPanel">
            <h2>Copy/paste these good questions into your chat with Alex</h2>
            <ul>
              <li>What field deployment work has Scott handled recently?</li>
              <li>Which environments fit his networking and cabling background?</li>
              <li>How does he communicate with clients under pressure?</li>
            </ul>
          </article>

          <article className="alexPanel">
            <h2>What Alex can help with</h2>
            <ul>
              <li>Summarize Scott's experience by industry or role.</li>
              <li>Highlight deployment, troubleshooting, and documentation skills.</li>
              <li>Point visitors to the fastest next step for a conversation.</li>
            </ul>
          </article>
        </div>
      </section>
    </main>
  );
}