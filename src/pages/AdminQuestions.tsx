import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { loadQuestions, storageKey, type Question } from '../data/quizData'

export default function AdminQuestions() {
  const navigate = useNavigate()
  const [questions, setQuestions] = useState<Question[]>(() => loadQuestions())
  const [newQuestion, setNewQuestion] = useState('')
  const [options, setOptions] = useState(['', '', '', ''])
  const [correctAnswer, setCorrectAnswer] = useState('')

  const handleSave = () => {
    if (!newQuestion.trim()) {
      alert('Digite uma pergunta antes de salvar.')
      return
    }

    const validOptions = options.map((option) => option.trim()).filter(Boolean)

    if (validOptions.length < 2) {
      alert('Preencha pelo menos duas opções.')
      return
    }

    if (!correctAnswer.trim()) {
      alert('Selecione a resposta correta.')
      return
    }

    const questionData: Question = {
      id: Date.now(),
      question: newQuestion.trim(),
      options: options.map((option) => option.trim()),
      answer: correctAnswer.trim(),
    }

    const updatedQuestions = [...questions, questionData]

    setQuestions(updatedQuestions)
    localStorage.setItem(storageKey, JSON.stringify(updatedQuestions))

    setNewQuestion('')
    setOptions(['', '', '', ''])
    setCorrectAnswer('')
    alert('Pergunta salva com sucesso!')
  }

  const handleReset = () => {
    localStorage.setItem(storageKey, JSON.stringify([]))
    setQuestions([])
    setNewQuestion('')
    setOptions(['', '', '', ''])
    setCorrectAnswer('')
    alert('Perguntas removidas. Cadastre novas questões para o quiz.')
  }

  return (
    <main className="min-h-screen px-6 py-10 text-white">
      <div className="mx-auto w-full max-w-2xl">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.35em] text-white/60">Admin</p>
            <h1 className="text-3xl font-black text-quiz-yellow md:text-4xl">Cadastrar Pergunta</h1>
          </div>

          <button
            type="button"
            onClick={() => navigate('/')}
            className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white/80 transition hover:bg-white/10"
          >
            Voltar
          </button>
        </div>

        <section className="space-y-4 rounded-quiz bg-quiz-purple p-6 shadow-2xl shadow-black/35 md:p-8">
          <input
            placeholder="Pergunta"
            className="w-full rounded-xl bg-white px-4 py-3 text-slate-950 outline-none ring-0 placeholder:text-slate-500 focus:ring-2 focus:ring-quiz-yellow"
            value={newQuestion}
            onChange={(event) => setNewQuestion(event.target.value)}
          />

          {options.map((option, index) => (
            <input
              key={index}
              placeholder={`Opção ${index + 1}`}
              className="w-full rounded-xl bg-white px-4 py-3 text-slate-950 outline-none ring-0 placeholder:text-slate-500 focus:ring-2 focus:ring-quiz-yellow"
              value={option}
              onChange={(event) => {
                const updatedOptions = [...options]
                updatedOptions[index] = event.target.value
                setOptions(updatedOptions)
              }}
            />
          ))}

          <select
            className="w-full rounded-xl bg-white px-4 py-3 text-slate-950 outline-none ring-0 focus:ring-2 focus:ring-quiz-yellow"
            value={correctAnswer}
            onChange={(event) => setCorrectAnswer(event.target.value)}
          >
            <option value="">Selecione a resposta correta</option>
            {options.map((option, index) => (
              <option key={index} value={option}>
                {option || `Opção ${index + 1}`}
              </option>
            ))}
          </select>

          <div className="flex flex-col gap-3 pt-2 sm:flex-row">
            <button
              type="button"
              onClick={handleSave}
              className="rounded-full bg-quiz-coral px-6 py-4 font-bold text-slate-950 shadow-lg shadow-black/30 transition hover:brightness-110"
            >
              Salvar pergunta
            </button>

            <button
              type="button"
              onClick={handleReset}
              className="rounded-full border border-white/15 bg-white/5 px-6 py-4 font-semibold text-white/80 transition hover:bg-white/10"
            >
              Limpar perguntas
            </button>
          </div>
        </section>

        <p className="mt-4 text-sm text-white/70">Perguntas salvas: {questions.length}</p>
      </div>
    </main>
  )
}
