export default function Introduction() {
  return (
    <section id="introduccion" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            Conocer
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">¿Qué son las Tortugas?</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Las tortugas son reptiles que han existido durante millones de años, adaptándose perfectamente a diversos
            entornos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
          <div className="space-y-6">
            <div className="bg-card p-6 rounded-2xl border border-accent/10 hover:border-accent/30 transition-all duration-300">
              <h3 className="text-2xl font-bold text-primary mb-3">¿Qué es una tortuga?</h3>
              <p className="text-foreground/70 leading-relaxed">
                Las tortugas son reptiles pertenecientes al orden Testudines. Su característica más distintiva es su
                caparazón, una estructura ósea que les proporciona protección contra los depredadores.
              </p>
            </div>

            <div className="bg-card p-6 rounded-2xl border border-accent/10 hover:border-accent/30 transition-all duration-300">
              <h3 className="text-2xl font-bold text-primary mb-3">Hábitat General</h3>
              <p className="text-foreground/70 leading-relaxed">
                Las tortugas habitan en océanos, ríos, lagos y tierra firme. Cada especie se ha adaptado a su ambiente
                específico, desarrollando características únicas que les permiten prosperar.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-8 flex items-center justify-center min-h-96">
            <div className="text-center">
              <div className="text-9xl mb-4 animate-bounce">🌍</div>
              <p className="text-foreground/70 font-semibold">Habitantes del planeta desde hace 200 millones de años</p>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-card p-6 rounded-xl border border-accent/10 text-center hover:transform hover:scale-105 transition-transform duration-300">
            <div className="text-4xl mb-3">🛡️</div>
            <h4 className="font-bold text-foreground mb-2">Caparazón</h4>
            <p className="text-sm text-foreground/70">Estructura ósea única que les protege</p>
          </div>

          <div className="bg-card p-6 rounded-xl border border-accent/10 text-center hover:transform hover:scale-105 transition-transform duration-300">
            <div className="text-4xl mb-3">🫀</div>
            <h4 className="font-bold text-foreground mb-2">Sangre Fría</h4>
            <p className="text-sm text-foreground/70">Reptiles ectotermos que regulan temperatura</p>
          </div>

          <div className="bg-card p-6 rounded-xl border border-accent/10 text-center hover:transform hover:scale-105 transition-transform duration-300">
            <div className="text-4xl mb-3">⏱️</div>
            <h4 className="font-bold text-foreground mb-2">Longevidad</h4>
            <p className="text-sm text-foreground/70">Pueden vivir más de 100 años</p>
          </div>

          <div className="bg-card p-6 rounded-xl border border-accent/10 text-center hover:transform hover:scale-105 transition-transform duration-300">
            <div className="text-4xl mb-3">🌱</div>
            <h4 className="font-bold text-foreground mb-2">Evolución</h4>
            <p className="text-sm text-foreground/70">Antiguas criaturas del Mesozoico</p>
          </div>
        </div>
      </div>
    </section>
  )
}
