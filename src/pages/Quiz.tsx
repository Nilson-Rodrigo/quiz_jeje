import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import heroImage from '../assets/hero.png'
import { loadQuestions, type Question } from '../data/quizData'

export default function Quiz() {
  const navigate = useNavigate()
  const [questions, setQuestions] = useState<Question[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [currentStep, setCurrentStep] = useState(0)
  const [score, setScore] = useState(0)

  useEffect(() => {
    const timerId = window.setTimeout(() => {
      setQuestions(loadQuestions())
      setIsLoading(false)
    }, 0)

    return () => window.clearTimeout(timerId)
  }, [])

  const currentQuiz = questions[currentStep]

  const handleAnswer = (option: string) => {
    const newScore = option === currentQuiz.answer ? score + 1 : score
    const nextStep = currentStep + 1

    if (nextStep < questions.length) {
      if (option === currentQuiz.answer) {
        setScore(newScore)
      }

      setCurrentStep(nextStep)
      return
    }

    const totalCorrect = newScore
    const totalWrong = questions.length - totalCorrect

    navigate('/resultado', {
      state: {
        totalCorrect,
        totalWrong,
        totalQuestions: questions.length,
      },
    })
  }

  if (isLoading) {
    return (
      <main className="min-h-screen bg-quiz-dark px-6 py-10 text-white">
        <div className="mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-xl items-center justify-center">
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-quiz-yellow">Carregando perguntas...</p>
        </div>
      </main>
    )
  }

  if (!currentQuiz) {
    return (
      <main className="min-h-screen bg-quiz-dark px-6 py-10 text-white">
        <div className="mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-xl flex-col items-center justify-center gap-4 text-center">
          <h1 className="text-3xl font-black text-quiz-yellow">Nenhuma pergunta disponível</h1>
          <p className="text-white/75">
            Cadastre perguntas na área administrativa para começar o quiz com dados dinâmicos.
          </p>
          <button
            type="button"
            onClick={() => navigate('/')}
            className="rounded-full bg-quiz-yellow px-6 py-3 font-bold text-slate-950"
          >
            Voltar para a home
          </button>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen flex flex-col font-serif">
      <section className="bg-black pt-10 pb-8 flex justify-center items-center">
        <img src={heroImage} alt="Logo quiz" className="h-[120px] w-auto object-contain cursor-pointer" onClick={() => navigate('/')} />
      </section>

      <section className="bg-quiz-purple flex-grow px-6 pt-12 pb-6 flex flex-col items-center w-full">
        <div className="relative w-full max-w-[360px] mb-[45px] rounded-full bg-white px-12 py-[18px] text-center">
          <div className="absolute -left-5 top-1/2 -translate-y-1/2 text-[55px] drop-shadow-md">
            💡
          </div>
          <h2 className="text-[19px] font-medium leading-snug text-slate-900">
            {currentQuiz.question}
          </h2>
        </div>

        <div className="w-full max-w-[320px] space-y-5 flex flex-col items-center">
          {currentQuiz.options.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => handleAnswer(option)}
              className="w-full rounded-full bg-white px-6 py-3.5 text-center text-[18px] font-medium text-slate-900 transition hover:bg-gray-100 active:scale-[0.98]"
            >
              {option}
            </button>
          ))}
        </div>
      </section>
    </main>
  )
}
