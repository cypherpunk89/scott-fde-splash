import { trackEvent } from "../analytics";

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
      <img
        className="alexAvatar"
        src="https://techsgt.com/wp-content/uploads/2026/05/Alex-Avatar.png"
        alt="Alex AI Assistant"
      />
      <div>
        <strong>Ask Alex</strong>
        <small>Scott’s FDE assistant</small>
      </div>
    </a>
  )
}