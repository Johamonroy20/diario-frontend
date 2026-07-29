import { useState } from 'react'
import { registrar } from '../services/authService'

export function useRegistroForm() {
  const [formData, setFormData] = useState({ nombreCompleto: '', email: '', password: '' })
  const [errores, setErrores] = useState({})
  const [mensajeExito, setMensajeExito] = useState('')
  const [enviando, setEnviando] = useState(false)

  function handleChange(e) {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  function validar() {
    const nuevosErrores = {}
    if (!formData.nombreCompleto.trim()) nuevosErrores.nombreCompleto = 'El nombre es obligatorio'
    if (!formData.email.trim()) nuevosErrores.email = 'El email es obligatorio'
    if (formData.password.length < 8) nuevosErrores.password = 'La contraseña debe tener al menos 8 caracteres'
    return nuevosErrores
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setMensajeExito('')

    const erroresValidacion = validar()
    if (Object.keys(erroresValidacion).length > 0) {
      setErrores(erroresValidacion)
      return
    }

    setErrores({})
    setEnviando(true)

    try {
      const resultado = await registrar(formData)
      setMensajeExito(resultado.mensaje)
      setFormData({ nombreCompleto: '', email: '', password: '' })
    } catch (error) {
      setErrores({ general: error.response?.data?.error || 'Ocurrió un error al registrar la cuenta' })
    } finally {
      setEnviando(false)
    }
  }

  return { formData, errores, mensajeExito, enviando, handleChange, handleSubmit }
}