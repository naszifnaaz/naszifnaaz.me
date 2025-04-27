
import React, { useState, useEffect } from "react"
import { Gamepad2, X, Maximize2, Minimize2 } from "lucide-react"
import { cn } from "@/lib/utils"

type Game = {
  name: string
  url: string
  description: string
}

const games: Game[] = [
  {
    name: "Tapman",
    url: "https://cdn.htmlgames.com/Tapman/index.html",
    description: "The classic arcade Pac-Man clone—eat dots, dodge ghosts.",
  },
  {
    name: "Space Invaders",
    url: "https://cdn.htmlgames.com/AlienInvaders2/index.html",
    description: "Defend Earth from waves of alien invaders in this retro classic.",
  },
  {
    name: "Frog Jumper",
    url: "https://cdn.htmlgames.com/FrogJumper/index.html",
    description: "Help the frog cross the road and reach its home in this fun arcade game.",
  },
]

const EasterEggButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [game, setGame] = useState<Game>(
    games[Math.floor(Math.random() * games.length)]
  )
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [terminalText, setTerminalText] = useState<string[]>([])

  useEffect(() => {
    if (!isOpen) return
    const lines = [
      "$ connecting to arcade server...",
      "$ establishing secure connection...",
      `$ loading ${game.name}...`,
      "$ initializing game environment...",
      `$ ready! enjoy ${game.name}!`,
    ]
    let idx = 0
    const iv = setInterval(() => {
      if (idx < lines.length) {
        setTerminalText((p) => [...p, lines[idx]])
        idx++
      } else {
        clearInterval(iv)
        setTimeout(() => setIsLoading(false), 500)
      }
    }, 300)
    return () => clearInterval(iv)
  }, [isOpen, game.name])

  const handleOpen = () => {
    setGame(games[Math.floor(Math.random() * games.length)])
    setIsLoading(true)
    setTerminalText([])
    setIsOpen(true)
    // reset fullscreen
    setIsFullscreen(false)
  }

  const handleClose = () => {
    setIsOpen(false)
    setIsFullscreen(false)
  }

  const toggleFullscreen = () => setIsFullscreen((f) => !f)

  return (
    <>
      <button
        onClick={handleOpen}
        className="fixed bottom-4 left-4 w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center border border-white/10 hover:border-primary/30 transition-all z-40"
        aria-label="Easter egg"
      >
        <Gamepad2 size={16} className="text-primary animate-pulse" />
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
            onClick={handleClose}
          />

          <div
            className={cn(
              "fixed z-50 bg-black border border-primary/30 rounded-lg shadow-xl overflow-hidden transition-all flex flex-col",
              isFullscreen
                ? "inset-0"
                : "w-[90vw] max-w-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            )}
          >
            {/* Header */}
            <div className="bg-gray-900 px-4 py-2 flex justify-between items-center border-b border-primary/20">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div
                    className="w-3 h-3 bg-red-500 rounded-full cursor-pointer"
                    onClick={handleClose}
                  />
                  <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                  <div
                    className="w-3 h-3 bg-green-500 rounded-full cursor-pointer"
                    onClick={toggleFullscreen}
                  />
                </div>
                <span className="text-white/70 text-sm ml-2">
                  arcade@portfolio ~ {game.name}
                </span>
              </div>
              <div className="flex gap-2">
                <button onClick={toggleFullscreen} className="text-white/50 hover:text-white">
                  {isFullscreen ? <Minimize2 size={14} /> : <Maximize2 size={14} />}
                </button>
                <button onClick={handleClose} className="text-white/50 hover:text-white">
                  <X size={14} />
                </button>
              </div>
            </div>

            {/* Loading vs. Game */}
            {isLoading ? (
              <div className="p-4 font-mono text-sm text-green-400 bg-black h-[60vh] overflow-auto">
                {terminalText.map((line, i) => (
                  <div key={i} className="mb-1">
                    {line}
                    {i === terminalText.length - 1 && <span className="animate-pulse">_</span>}
                  </div>
                ))}
              </div>
            ) : (
              <div className={cn("w-full overflow-hidden", isFullscreen && "flex-1")}>  
                <iframe
                  src={game.url}
                  className={cn(
                    "w-full border-none",
                    isFullscreen ? "h-full" : "h-[550px]"
                  )}
                  scrolling="no"
                  title={game.name}
                  loading="lazy"
                />
              </div>
            )}

            {/* Footer */}
            <div className="bg-gray-900 p-2 border-t border-primary/20 text-xs text-white/50">
              <p>{game.description}</p>
              <p className="mt-1">Press ESC or click the red button to exit.</p>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default EasterEggButton
