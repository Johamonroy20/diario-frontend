import api from './api'

export async function crearEntrada(datos) {
  const response = await api.post('/api/entradas', datos)
  return response.data
}