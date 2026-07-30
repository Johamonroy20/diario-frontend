import { useState } from 'react'
import { crearEntrada } from '../services/entradaService'

const ESTADOS_ANIMO = ['FELIZ', 'CALMADO', 'NEUTRAL', 'ANSIOSO', 'TRISTE', 'ENOJO']

export function useNuevaEntradaForm() {
  const [formData, setFormData] = useState({ titulo: '', contenido: '', estadoAnimo: '' })
  const [errores, setErrores] = useState({})
  const [mensajeExito, setMensajeExito] = useState('')
  const [enviando, setEnviando] = useState(false)

  function handleChange(e) {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  function seleccionarEstadoAnimo(estado) {
    setFormData((prev) => ({ ...prev, estadoAnimo: estado }))
  }

  function validar() {
    const nuevosErrores = {}
    if (!formData.contenido.trim()) {
      nuevosErrores.contenido = 'El contenido no puede estar vacío'
    }
    if (!formData.estadoAnimo) {
      nuevosErrores.estadoAnimo = 'Selecciona cómo te sientes hoy'
    }
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
      await crearEntrada(formData)
      setMensajeExito('Entrada guardada exitosamente')
      setFormData({ titulo: '', contenido: '', estadoAnimo: '' })
    } catch (err) {
      setErrores({ general: err.response?.data?.error || 'Ocurrió un error al guardar la entrada' })
    } finally {
      setEnviando(false)
    }
  }

  return {
    formData,
    errores,
    mensajeExito,
    enviando,
    estadosAnimo: ESTADOS_ANIMO,
    handleChange,
    seleccionarEstadoAnimo,
    handleSubmit,
  }
}