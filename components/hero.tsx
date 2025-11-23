"use client"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background pointer-events-none" />

      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-pulse" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            Bienvenido al mundo de las tortugas
          </span>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight text-balance">
          Descubre la Magia de las <span className="text-primary">Tortugas</span>
        </h1>

        <p className="text-lg sm:text-xl text-foreground/70 mb-12 max-w-2xl mx-auto text-balance">
          Explora el fascinante mundo de estas antiguas criaturas, sus hábitats, características y cómo podemos ayudar a
          protegerlas.
        </p>

        {/* Hero Turtle Illustration */}
        <div className="relative mb-12">
          <div className="inline-block">
            <div className="w-48 h-48 sm:w-64 sm:h-64 mx-auto rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center animate-bounce">
              <span className="text-8xl sm:text-9xl">🐢</span>
            </div>
          </div>
        </div>

        <button
          onClick={() => document.getElementById("introduccion")?.scrollIntoView({ behavior: "smooth" })}
          className="inline-block px-8 py-3 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transform hover:scale-105 transition-all duration-300 shadow-lg"
        >
          Comenzar a Explorar
        </button>
      </div>

      {/* Floating shapes */}
      <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-primary rounded-full opacity-30 animate-pulse" />
      <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-accent rounded-full opacity-20 animate-pulse delay-1000" />
      <div className="absolute bottom-1/4 left-1/3 w-5 h-5 bg-primary/50 rounded-full opacity-25 animate-pulse delay-500" />
    </section>
  )
}
