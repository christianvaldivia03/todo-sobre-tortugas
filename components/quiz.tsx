"use client"

import { useState } from "react"

const quizQuestions = [
  {
    question: "¿Cuánto tiempo llevan las tortugas en el planeta?",
    options: ["50 millones de años", "200 millones de años", "20 millones de años", "500 millones de años"],
    correct: 1,
    explanation:
      "Las tortugas han existido durante aproximadamente 200 millones de años, desde la era de los dinosaurios.",
  },
  {
    question: "¿Cuál es la característica más distintiva de una tortuga?",
    options: ["Sus garras", "Su caparazón", "Su cola larga", "Sus ojos grandes"],
    correct: 1,
    explanation:
      "El caparazón es la característica más distintiva de las tortugas, proporcionándoles protección única.",
  },
  {
    question: "¿Cuánto tiempo puede retener la respiración una tortuga marina?",
    options: ["1 hora", "3 horas", "7 horas", "12 horas"],
    correct: 2,
    explanation: "Las tortugas marinas pueden retener la respiración hasta 7 horas durante sus inmersiones profundas.",
  },
  {
    question: "¿Cuántos kilómetros puede migrar una tortuga marina anualmente?",
    options: ["1,000 km", "5,000 km", "10,000 km", "20,000 km"],
    correct: 2,
    explanation: "Algunas especies de tortugas marinas migran hasta 10,000 kilómetros anualmente para desovar.",
  },
  {
    question: "¿Cuál es la mayor amenaza para las tortugas en la actualidad?",
    options: ["Los depredadores naturales", "El cambio climático", "La falta de comida", "Las enfermedades"],
    correct: 1,
    explanation:
      "El cambio climático es una de las mayores amenazas, afectando los hábitats y la determinación del sexo en las crías.",
  },
]

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [showScore, setShowScore] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [answered, setAnswered] = useState(false)

  const handleAnswerClick = (index: number) => {
    setSelectedAnswer(index)
    setAnswered(true)
    if (index === quizQuestions[currentQuestion].correct) {
      setScore(score + 1)
    }
  }

  const handleNext = () => {
    const nextQuestion = currentQuestion + 1
    if (nextQuestion < quizQuestions.length) {
      setCurrentQuestion(nextQuestion)
      setSelectedAnswer(null)
      setAnswered(false)
    } else {
      setShowScore(true)
    }
  }

  const handleReset = () => {
    setCurrentQuestion(0)
    setScore(0)
    setShowScore(false)
    setSelectedAnswer(null)
    setAnswered(false)
  }

  return (
    <section id="quiz" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            Prueba tus conocimientos
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Quiz sobre Tortugas</h2>
          <p className="text-lg text-foreground/70">
            ¿Cuánto sabes sobre las tortugas? Responde nuestro quiz interactivo
          </p>
        </div>

        <div className="bg-card rounded-3xl p-8 border border-accent/10">
          {showScore ? (
            <div className="text-center space-y-6">
              <div className="text-7xl mb-4">{score === quizQuestions.length ? "🎉" : score >= 3 ? "😊" : "📚"}</div>
              <div>
                <h3 className="text-3xl font-bold text-foreground mb-2">¡Quiz Completado!</h3>
                <p className="text-2xl text-primary font-bold">
                  Puntuación: {score}/{quizQuestions.length}
                </p>
              </div>
              <p className="text-foreground/70 text-lg">
                {score === quizQuestions.length && "¡Eres un experto en tortugas! 🏆"}
                {score >= 3 && score < quizQuestions.length && "¡Muy bien! Sabes bastante sobre tortugas."}
                {score < 3 && "Sigue aprendiendo sobre estas fascinantes criaturas."}
              </p>
              <button
                onClick={handleReset}
                className="inline-block px-8 py-3 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transform hover:scale-105 transition-all duration-300"
              >
                Reintentar
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm font-semibold text-primary">
                    Pregunta {currentQuestion + 1}/{quizQuestions.length}
                  </span>
                  <div className="flex gap-1">
                    {Array.from({ length: quizQuestions.length }).map((_, i) => (
                      <div
                        key={i}
                        className={`h-2 w-8 rounded-full transition-colors ${
                          i <= currentQuestion ? "bg-primary" : "bg-background"
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-foreground">{quizQuestions[currentQuestion].question}</h3>
              </div>

              <div className="space-y-3">
                {quizQuestions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerClick(index)}
                    disabled={answered}
                    className={`w-full p-4 text-left rounded-xl border-2 transition-all duration-300 font-semibold ${
                      !answered
                        ? "border-accent/10 hover:border-primary/50 hover:bg-primary/5 cursor-pointer"
                        : index === quizQuestions[currentQuestion].correct
                          ? "border-green-500 bg-green-500/10 text-green-700"
                          : index === selectedAnswer
                            ? "border-red-500 bg-red-500/10 text-red-700"
                            : "border-accent/10 opacity-50"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-lg">
                        {answered
                          ? index === quizQuestions[currentQuestion].correct
                            ? "✓"
                            : index === selectedAnswer
                              ? "✗"
                              : "○"
                          : "○"}
                      </span>
                      {option}
                    </div>
                  </button>
                ))}
              </div>

              {answered && (
                <div className="bg-background p-4 rounded-lg border border-accent/10">
                  <p className="text-foreground/80 leading-relaxed">
                    <span className="font-semibold text-primary">Explicación: </span>
                    {quizQuestions[currentQuestion].explanation}
                  </p>
                </div>
              )}

              {answered && (
                <button
                  onClick={handleNext}
                  className="w-full px-6 py-3 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transform hover:scale-105 transition-all duration-300"
                >
                  {currentQuestion === quizQuestions.length - 1 ? "Ver Resultados" : "Siguiente"}
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
