export default function Home() {
  const words = [
    { text: "open source", x: -180, y: -140, size: "text-sm", opacity: "opacity-60" },
    { text: "modular", x: 160, y: -120, size: "text-base", opacity: "opacity-70" },
    { text: "configurable", x: -220, y: -40, size: "text-base", opacity: "opacity-50" },
    { text: "customisable", x: 200, y: -50, size: "text-sm", opacity: "opacity-65" },
    { text: "avoid worthless tasks", x: -160, y: 50, size: "text-xs", opacity: "opacity-55" },
    { text: "focus on what you do best", x: 140, y: 70, size: "text-xs", opacity: "opacity-50" },
    { text: "do what matters", x: -200, y: 130, size: "text-sm", opacity: "opacity-70" },
    { text: "tech built to help us", x: 180, y: 140, size: "text-xs", opacity: "opacity-60" },
    { text: "automation", x: -80, y: -160, size: "text-sm", opacity: "opacity-55" },
    { text: "simplicity", x: 80, y: -150, size: "text-base", opacity: "opacity-65" },
    { text: "efficiency", x: -250, y: 10, size: "text-xs", opacity: "opacity-50" },
    { text: "scalable", x: 240, y: 20, size: "text-sm", opacity: "opacity-55" },
    { text: "reliable", x: -100, y: 160, size: "text-xs", opacity: "opacity-60" },
    { text: "human-first", x: 100, y: 170, size: "text-sm", opacity: "opacity-50" },
    { text: "less noise", x: -240, y: -100, size: "text-xs", opacity: "opacity-45" },
    { text: "more impact", x: 220, y: -90, size: "text-xs", opacity: "opacity-55" },
  ]

  return (
    <main className="min-h-screen bg-background flex flex-col items-center justify-center">
      <div className="relative">
        {/* Word cloud */}
        {words.map((word, i) => (
          <span
            key={i}
            className={`absolute text-muted-foreground ${word.size} ${word.opacity} whitespace-nowrap select-none`}
            style={{
              left: `calc(50% + ${word.x}px)`,
              top: `calc(50% + ${word.y}px)`,
              transform: "translate(-50%, -50%)",
            }}
          >
            {word.text}
          </span>
        ))}

        {/* Center logo */}
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground relative z-10">TomOps</h1>
      </div>

      <a
        href="https://github.com/tomopswork"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-8 text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        github.com/tomopswork
      </a>
    </main>
  )
}
