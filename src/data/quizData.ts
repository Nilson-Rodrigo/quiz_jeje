export interface Question {
  id: number
  question: string
  options: string[]
  answer: string
}

export const storageKey = '@quiz_questions'

export const loadQuestions = (): Question[] => {
  const savedQuestions = localStorage.getItem(storageKey)

  if (!savedQuestions) {
    return []
  }

  try {
    const parsedQuestions = JSON.parse(savedQuestions) as Question[]

    if (!Array.isArray(parsedQuestions) || parsedQuestions.length === 0) {
      return []
    }

    return parsedQuestions
  } catch {
    return []
  }
}
