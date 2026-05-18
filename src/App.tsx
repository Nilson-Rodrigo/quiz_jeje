import { Navigate, Route, Routes } from 'react-router-dom'
import AdminQuestions from './pages/AdminQuestions.tsx'
import Home from './pages/home.tsx'
import Quiz from './pages/Quiz.tsx'
import Result from './pages/Result.tsx'

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/quiz" element={<Quiz />} />
			<Route path="/resultado" element={<Result />} />
			<Route path="/admin" element={<AdminQuestions />} />
			<Route path="*" element={<Navigate to="/" replace />} />
		</Routes>
	)
}

export default App