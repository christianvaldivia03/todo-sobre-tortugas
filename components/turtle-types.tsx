"use client"

import { useState } from "react"

const turtleTypes = [
  {
    id: "marina",
    name: "Tortuga Marina",
    icon: "🌊",
    description: "Habitan en océanos y son excelentes nadadoras",
    characteristics: [
      "Aletas en lugar de patas",
      "Pueden migrar miles de kilómetros",
      "Regresan a tierra para poner huevos",
      "Excelentes buceadoras",
    ],
    curiosities: [
      "La tortuga marina verde puede bucear hasta 1,200 metros",
      "Pueden retener la respiración hasta 7 horas",
      "Algunas especies migran 10,000 km anualmente",
      "Usan el campo magnético terrestre para navegar",
    ],
  },
  {
    id: "terrestre",
    name: "Tortuga Terrestre",
    icon: "🏜️",
    description: "Viven en tierra firme en diversos hábitats",
    characteristics: [
      "Patas cortas y robustas",
      "Caparazón pesado",
      "Movimiento lento y deliberado",
      "Preferencia por clima seco",
    ],
    curiosities: [
      "La tortuga gigante de Galápagos puede pesar 400 kg",
      "Algunas nunca entran en agua",
      "Su dieta es principalmente herbívora",
      "Pueden vivir más de 150 años",
    ],
  },
  {
    id: "dulce",
    name: "Tortuga de Agua Dulce",
    icon: "💧",
    description: "Viven en ríos, lagos y humedales",
    characteristics: [
      "Adaptadas a ambientes dulceacuícolas",
      "Nadadoras muy ágiles",
      "Frecuentemente salen del agua",
      "Caparazón más plano",
    ],
    curiosities: [
      "La tortuga asiática de caparazón blando puede respirar bajo el agua",
      "Muchas tienen cuellos extremadamente largos",
      "Pueden hibernar durante meses",
      "Son omnívoras en su mayoría",
    ],
  },
]

export default function TurtleTypes() {
  const [selectedType, setSelectedType] = useState("marina")
  const current = turtleTypes.find((t) => t.id === selectedType)

  return (
    <section id="tipos" className="py-20 px-4 sm:px-6 lg:px-8 bg-accent/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            Diversidad
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Tipos de Tortugas</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Explora las tres principales categorías de tortugas y sus características únicas
          </p>
        </div>

        {/* Type Selector */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {turtleTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => setSelectedType(type.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                selectedType === type.id
                  ? "bg-primary text-white shadow-lg"
                  : "bg-card border border-accent/10 text-foreground hover:border-accent/30"
              }`}
            >
              <span className="mr-2">{type.icon}</span>
              {type.name}
            </button>
          ))}
        </div>

        {/* Type Details */}
        {current && (
          <div className="space-y-8 animate-fadeIn">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl p-12 flex items-center justify-center min-h-96">
                  <div className="text-center">
                    <div className="text-9xl mb-4 animate-bounce">{current.icon}</div>
                    <p className="text-foreground/70 font-semibold">{current.name}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-card rounded-2xl p-6 border border-accent/10">
                  <h3 className="text-2xl font-bold text-primary mb-3">Descripción</h3>
                  <p className="text-foreground/70 leading-relaxed">{current.description}</p>
                </div>

                <div className="bg-card rounded-2xl p-6 border border-accent/10">
                  <h3 className="text-2xl font-bold text-primary mb-4">Características</h3>
                  <ul className="space-y-2">
                    {current.characteristics.map((char, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-foreground/70">
                        <span className="text-primary font-bold mt-1">✓</span>
                        <span>{char}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-8 border border-accent/10">
              <h3 className="text-2xl font-bold text-primary mb-6">Datos Curiosos</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {current.curiosities.map((curiosity, idx) => (
                  <div
                    key={idx}
                    className="bg-background rounded-lg p-4 border-l-4 border-primary hover:shadow-md transition-shadow"
                  >
                    <p className="text-foreground/80 text-sm">{curiosity}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
