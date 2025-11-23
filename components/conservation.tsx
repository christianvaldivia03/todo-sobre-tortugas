export default function Conservation() {
  const threats = [
    {
      icon: "🌊",
      title: "Cambio Climático",
      description: "El aumento de la temperatura afecta la determinación del sexo en las crías",
    },
    {
      icon: "🏭",
      title: "Contaminación",
      description: "Plástico, pesticidas y otros contaminantes dañan los hábitats",
    },
    {
      icon: "⚔️",
      title: "Caza Ilegal",
      description: "Captura para mascotas o productos derivados",
    },
    {
      icon: "🏗️",
      title: "Pérdida de Hábitat",
      description: "Desarrollo urbano y destrucción de playas y ríos",
    },
    {
      icon: "🎣",
      title: "Redes de Pesca",
      description: "Captura accidental en redes comerciales",
    },
    {
      icon: "💊",
      title: "Enfermedades",
      description: "Virus, bacterias y parásitos afectan las poblaciones",
    },
  ]

  const protectionTips = [
    "Reduce tu huella de carbono para combatir el cambio climático",
    "Evita usar productos derivados de tortugas",
    "Apoya organizaciones de conservación",
    "Protege las playas y ríos donde desovan",
    "Reduce el uso de plástico",
    "Educa a otros sobre la importancia de las tortugas",
    "Apoya leyes de protección ambiental",
    "Participa en limpiezas de playas",
  ]

  return (
    <section id="conservacion" className="py-20 px-4 sm:px-6 lg:px-8 bg-accent/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            Protección
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Conservación y Protección</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Las tortugas enfrentan amenazas significativas. Descubre cómo podemos ayudar a protegerlas
          </p>
        </div>

        {/* Threats Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-foreground mb-8 text-center">Amenazas Principales</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {threats.map((threat, idx) => (
              <div
                key={idx}
                className="bg-card rounded-2xl p-6 border border-accent/10 hover:border-accent/30 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {threat.icon}
                </div>
                <h4 className="text-xl font-bold text-foreground mb-2">{threat.title}</h4>
                <p className="text-foreground/70">{threat.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Status Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="bg-card rounded-2xl p-8 border border-accent/10">
            <h3 className="text-2xl font-bold text-primary mb-6">Estado de Conservación</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-foreground">Especies en Peligro Crítico</span>
                  <span className="text-primary font-bold">15+</span>
                </div>
                <div className="w-full bg-background rounded-full h-2 overflow-hidden">
                  <div className="bg-red-500 h-full w-3/4" />
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-foreground">Especies en Peligro</span>
                  <span className="text-primary font-bold">25+</span>
                </div>
                <div className="w-full bg-background rounded-full h-2 overflow-hidden">
                  <div className="bg-orange-500 h-full w-2/3" />
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-foreground">Especies Vulnerables</span>
                  <span className="text-primary font-bold">30+</span>
                </div>
                <div className="w-full bg-background rounded-full h-2 overflow-hidden">
                  <div className="bg-yellow-500 h-full w-1/2" />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 border border-accent/20">
            <h3 className="text-2xl font-bold text-foreground mb-4">🌍 Dato Importante</h3>
            <p className="text-foreground/80 text-lg leading-relaxed mb-6">
              Se estima que el 50% de todas las especies de tortugas están amenazadas de extinción. Sin acción
              inmediata, muchas especies podría desaparecer en los próximos 50 años.
            </p>
            <div className="bg-primary/20 rounded-lg p-4 border border-primary/30">
              <p className="text-primary font-semibold">Cada acción cuenta. Juntos podemos marcar la diferencia.</p>
            </div>
          </div>
        </div>

        {/* Protection Tips */}
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Cómo Puedes Ayudar</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {protectionTips.map((tip, idx) => (
              <div
                key={idx}
                className="bg-card rounded-xl p-4 border border-accent/10 hover:border-primary/50 hover:shadow-md transition-all duration-300 flex items-start gap-3"
              >
                <span className="text-primary font-bold text-lg flex-shrink-0">✓</span>
                <p className="text-foreground/80 text-sm leading-relaxed">{tip}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
