import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import RegistroPage from './pages/RegistroPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/registro" element={<RegistroPage />} />
    </Routes>
  )
}

export default App
