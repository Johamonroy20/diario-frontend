import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import RegistroPage from './pages/RegistroPage'
import LoginPage from './pages/LoginPage'
import NuevaEntradaPage from './pages/NuevaEntradaPage'
import NotFoundPage from './pages/NotFoundPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/registro" element={<RegistroPage />} />
      <Route path="/login" element={<LoginPage />} />
       <Route path="/entradas/nueva" element={<NuevaEntradaPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default App
