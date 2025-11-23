"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
    setIsOpen(false)
  }

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-accent/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-white text-lg font-bold">🐢</span>
              </div>
              <span className="font-bold text-foreground text-lg hidden sm:inline">TurtleWorld</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            <button
              onClick={() => scrollToSection("introduccion")}
              className="text-foreground/70 hover:text-primary transition-colors font-medium"
            >
              Introducción
            </button>
            <button
              onClick={() => scrollToSection("tipos")}
              className="text-foreground/70 hover:text-primary transition-colors font-medium"
            >
              Tipos
            </button>
            <button
              onClick={() => scrollToSection("geografia")}
              className="text-foreground/70 hover:text-primary transition-colors font-medium"
            >
              Geografía
            </button>
            <button
              onClick={() => scrollToSection("conservacion")}
              className="text-foreground/70 hover:text-primary transition-colors font-medium"
            >
              Conservación
            </button>
            <button
              onClick={() => scrollToSection("quiz")}
              className="text-foreground/70 hover:text-primary transition-colors font-medium"
            >
              Quiz
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-accent/10 rounded-lg transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 border-t border-accent/10 pt-4">
            <button
              onClick={() => scrollToSection("introduccion")}
              className="block w-full text-left px-4 py-2 text-foreground/70 hover:text-primary hover:bg-accent/5 rounded transition-colors"
            >
              Introducción
            </button>
            <button
              onClick={() => scrollToSection("tipos")}
              className="block w-full text-left px-4 py-2 text-foreground/70 hover:text-primary hover:bg-accent/5 rounded transition-colors"
            >
              Tipos
            </button>
            <button
              onClick={() => scrollToSection("geografia")}
              className="block w-full text-left px-4 py-2 text-foreground/70 hover:text-primary hover:bg-accent/5 rounded transition-colors"
            >
              Geografía
            </button>
            <button
              onClick={() => scrollToSection("conservacion")}
              className="block w-full text-left px-4 py-2 text-foreground/70 hover:text-primary hover:bg-accent/5 rounded transition-colors"
            >
              Conservación
            </button>
            <button
              onClick={() => scrollToSection("quiz")}
              className="block w-full text-left px-4 py-2 text-foreground/70 hover:text-primary hover:bg-accent/5 rounded transition-colors"
            >
              Quiz
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}
