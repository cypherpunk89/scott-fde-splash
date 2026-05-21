export default function AlexAssistant() {
  return (
    <a
      className="alexButton"
      href="https://chatgpt.com/g/g-6a0e9d5bb5208191ae06038065b25845-alex"
      target="_blank"
      rel="noreferrer"
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