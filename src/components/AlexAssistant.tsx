import { trackEvent } from "../analytics";
import { alexAvatarUrl, alexIntroVideoUrl } from "../alexConfig";

export default function AlexAssistant() {
  function handleClick() {
    trackEvent("ask_alex_cta_click", {
      source: "floating_button",
      destination: "/alex",
    });
  }

  return (
    <a
      className="alexButton"
      href="/alex"
      aria-label="Ask Alex"
      onClick={handleClick}
    >
      <div className="alexAvatarWrap" aria-hidden="true">
        <video
          className="alexAvatarVideo"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster={alexAvatarUrl}
        >
          <source src={alexIntroVideoUrl} type="video/mp4" />
        </video>
      </div>
      <div>
        <strong>Ask Alex</strong>
        <small>Scott’s FDE assistant</small>
      </div>
    </a>
  );
}