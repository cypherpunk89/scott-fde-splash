export default function AlexAssistant() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href="https://chatgpt.com/g/g-6a0e9d5bb5208191ae06038065b25845-alex"
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-3 rounded-2xl bg-black px-5 py-4 text-white shadow-xl hover:scale-105 transition"
      >
        <img
          src="https://techsgt.com/wp-content/uploads/2026/05/Alex-Avatar.png"
          alt="Alex avatar"
          className="h-10 w-10 shrink-0 rounded-full object-cover"
        />
        <div>
          <p className="text-sm font-semibold">Ask Alex</p>
          <p className="text-xs text-white/70">Scott’s FDE assistant</p>
        </div>
      </a>
    </div>
  )
}