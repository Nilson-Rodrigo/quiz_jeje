import { useLocation, useNavigate } from 'react-router-dom'

type ResultLocationState = {
  totalCorrect?: number
  totalWrong?: number
  totalQuestions?: number
}

export default function Result() {
  const navigate = useNavigate()
  const location = useLocation()
  const state = (location.state as ResultLocationState | null) ?? null
  const totalCorrect = state?.totalCorrect ?? 0
  const totalWrong = state?.totalWrong ?? 0
  const totalQuestions = state?.totalQuestions ?? 0
  const accuracy = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0

  const motivationalMessage =
    accuracy >= 80
      ? 'Excelente desempenho! Você dominou o conteúdo.'
      : accuracy >= 50
        ? 'Bom trabalho! Continue praticando para subir ainda mais.'
        : 'Não desanime. Cada tentativa te deixa mais perto da excelência.'

  return (
    <main className="min-h-screen bg-quiz-dark px-6 py-10 text-white">
      <div className="mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-xl flex-col items-center justify-center text-center">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.35em] text-white/60">Resultado</p>
        <h1 className="text-4xl font-black uppercase italic tracking-tighter text-quiz-yellow md:text-5xl">
          Desempenho Final
        </h1>

        <div className="mt-8 w-full rounded-quiz bg-quiz-purple p-8 shadow-2xl shadow-black/30">
          <p className="text-lg font-semibold text-white/85">Taxa de acerto</p>
          <p className="mt-4 text-6xl font-black text-quiz-yellow">
            {accuracy}%
          </p>
          <p className="mt-4 text-base font-medium text-white/90">{motivationalMessage}</p>

          <div className="mt-6 grid grid-cols-2 gap-3 text-sm font-semibold sm:text-base">
            <div className="rounded-xl bg-quiz-dark/70 px-4 py-3">
              <p className="text-white/70">Acertos</p>
              <p className="mt-1 text-2xl font-black text-quiz-yellow">{totalCorrect}</p>
            </div>
            <div className="rounded-xl bg-quiz-dark/70 px-4 py-3">
              <p className="text-white/70">Erros</p>
              <p className="mt-1 text-2xl font-black text-quiz-yellow">{totalWrong}</p>
            </div>
          </div>

          <p className="mt-5 text-sm text-white/70">
            Total de questões respondidas: {totalQuestions}
          </p>
        </div>

        <div className="mt-8 flex w-full flex-col gap-3 sm:flex-row sm:justify-center">
          <button
            type="button"
            onClick={() => navigate('/quiz')}
            className="rounded-full bg-quiz-yellow px-6 py-4 font-bold text-slate-950 shadow-lg shadow-black/30 transition hover:-translate-y-0.5"
          >
            Jogar novamente
          </button>

          <button
            type="button"
            onClick={() => navigate('/')}
            className="rounded-full bg-quiz-coral px-6 py-4 font-bold text-slate-950 shadow-lg shadow-black/30 transition hover:-translate-y-0.5"
          >
            Voltar para a home
          </button>
        </div>
      </div>
    </main>
  )
}
