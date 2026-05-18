import { useNavigate } from 'react-router-dom'
import heroImage from '../assets/hero.png'

export default function Home() {
  const navigate = useNavigate()

  return (
    <main className="min-h-screen bg-black text-center flex flex-col items-center justify-center font-serif">
      <div className="flex flex-col items-center gap-6 mb-16">
        <img src={heroImage} alt="Logo do quiz" className="h-[240px] w-auto object-contain" />

        <p className="max-w-[280px] text-center text-[19px] font-bold text-quiz-yellow leading-tight">
          Está na hora de ser o especialista oficial em... nada específico!
        </p>
      </div>

      <div className="flex flex-col items-center justify-center gap-6 relative">
        <button
          type="button"
          onClick={() => navigate('/quiz')}
          className="rounded-full bg-[#8B5CF6] px-24 py-[14px] text-[20px] font-bold text-quiz-yellow shadow-md transition-transform hover:scale-105 active:scale-95"
        >
          Começar
        </button>

        <button
          type="button"
          onClick={() => navigate('/admin')}
          className="absolute -bottom-20 rounded-full border border-white/10 bg-transparent px-4 py-2 text-xs font-sans text-white/40 transition hover:bg-white/5"
        >
          Cadastrar perguntas
        </button>
      </div>
    </main>
  )
}
