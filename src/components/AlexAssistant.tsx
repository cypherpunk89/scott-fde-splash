export default function AlexAssistant() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href="#"
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-3 rounded-2xl bg-black px-5 py-4 text-white shadow-xl hover:scale-105 transition"
      >
        <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center">
          AI
        </div>
        <div>
          <p className="text-sm font-semibold">Ask Alex</p>
          <p className="text-xs text-white/70">Scott’s FDE assistant</p>
        </div>
      </a>
    </div>
  )
}