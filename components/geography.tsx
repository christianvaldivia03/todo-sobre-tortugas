"use client"

import { useState } from "react"

const regions = [
  {
    name: "América del Sur",
    icon: "🌴",
    species: ["Tortuga del Amazonas", "Tortuga Terecay", "Tortuga Cabezuda"],
    countries: ["Brasil", "Perú", "Colombia", "Venezuela"],
  },
  {
    name: "Africa",
    icon: "🦁",
    species: ["Tortuga del Desierto", "Tortuga Radiata", "Tortuga de Espolones"],
    countries: ["Madagascar", "Sudáfrica", "Kenia", "Tanzania"],
  },
  {
    name: "Asia",
    icon: "🏔️",
    species: ["Tortuga asiática de caparazón blando", "Tortuga del Indo", "Tortuga Malaya"],
    countries: ["India", "China", "Vietnam", "Tailandia"],
  },
  {
    name: "Océano Atlántico",
    icon: "🌊",
    species: ["Tortuga Laúd", "Tortuga Boba", "Tortuga Verde"],
    countries: ["Caribe", "Brasil", "España", "Senegal"],
  },
  {
    name: "Océano Pacífico",
    icon: "🌅",
    species: ["Tortuga Marina Verde", "Tortuga Lora", "Tortuga de Galápagos"],
    countries: ["Galápagos", "Costa Rica", "México", "Indonesia"],
  },
  {
    name: "Islas Oceánicas",
    icon: "🏝️",
    species: ["Tortuga Gigante de Galápagos", "Tortuga de Aldabra", "Tortuga Radiata de Madagascar"],
    countries: ["Galápagos", "Aldabra", "Madagascar", "Mauricio"],
  },
]

export default function Geography() {
  const [selectedRegion, setSelectedRegion] = useState(0)
  const current = regions[selectedRegion]

  return (
    <section id="geografia" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            Distribución
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Tortugas por Región</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Descubre dónde viven las diferentes especies de tortugas en el mundo
          </p>
        </div>

        {/* Region Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {regions.map((region, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedRegion(idx)}
              className={`p-6 rounded-2xl transition-all duration-300 transform hover:scale-105 text-left ${
                selectedRegion === idx
                  ? "bg-primary text-white shadow-lg ring-2 ring-primary/50"
                  : "bg-card border border-accent/10 text-foreground hover:border-accent/30"
              }`}
            >
              <div className="text-4xl mb-2">{region.icon}</div>
              <h3 className="font-bold text-lg">{region.name}</h3>
            </button>
          ))}
        </div>

        {/* Region Details */}
        <div className="grid md:grid-cols-2 gap-8 animate-fadeIn">
          <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-12 flex items-center justify-center min-h-80">
            <div className="text-center">
              <div className="text-9xl mb-4">{current.icon}</div>
              <p className="text-foreground font-bold text-2xl">{current.name}</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-card rounded-2xl p-6 border border-accent/10">
              <h3 className="text-2xl font-bold text-primary mb-4">Especies Presentes</h3>
              <ul className="space-y-3">
                {current.species.map((species, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 text-foreground/80 p-3 bg-background rounded-lg hover:bg-background/80 transition-colors"
                  >
                    <span className="text-primary font-bold">🐢</span>
                    {species}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-card rounded-2xl p-6 border border-accent/10">
              <h3 className="text-2xl font-bold text-primary mb-4">Países y Territorios</h3>
              <div className="flex flex-wrap gap-2">
                {current.countries.map((country, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold hover:bg-primary/20 transition-colors"
                  >
                    {country}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
