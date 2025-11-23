"use client"
import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import Introduction from "@/components/introduction"
import TurtleTypes from "@/components/turtle-types"
import Geography from "@/components/geography"
import Conservation from "@/components/conservation"
import Quiz from "@/components/quiz"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-background/95">
      <Navigation />
      <Hero />
      <Introduction />
      <TurtleTypes />
      <Geography />
      <Conservation />
      <Quiz />
      <Footer />
    </main>
  )
}
