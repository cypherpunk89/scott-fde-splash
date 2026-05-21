export default function AlexAssistant() {
  return (
    <a
      className="alexButton"
      href="/alex"
      aria-label="Ask Alex"
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