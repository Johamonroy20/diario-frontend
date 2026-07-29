import { createContext, useState, useEffect } from 'react'
import { login as loginService } from '../services/authService'

export const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [usuario, setUsuario] = useState(null)
  const [cargando, setCargando] = useState(true)

  useEffect(() => {
    const token = localStorage.getItem('token')
    const email = localStorage.getItem('email')
    const nombreCompleto = localStorage.getItem('nombreCompleto')

    if (token && email) {
      setUsuario({ token, email, nombreCompleto })
    }

    setCargando(false)
  }, [])

  async function iniciarSesion(datos) {
    const resultado = await loginService(datos)

    localStorage.setItem('token', resultado.token)
    localStorage.setItem('email', resultado.email)
    localStorage.setItem('nombreCompleto', resultado.nombreCompleto)

    setUsuario({
      token: resultado.token,
      email: resultado.email,
      nombreCompleto: resultado.nombreCompleto,
    })
  }

  function cerrarSesion() {
    localStorage.removeItem('token')
    localStorage.removeItem('email')
    localStorage.removeItem('nombreCompleto')
    setUsuario(null)
  }

  const estaAutenticado = !!usuario

  return (
    <AuthContext.Provider value={{ usuario, estaAutenticado, cargando, iniciarSesion, cerrarSesion }}>
      {children}
    </AuthContext.Provider>
  )
}