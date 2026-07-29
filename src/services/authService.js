import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL

export async function registrar(datos) {
  const response = await axios.post(`${API_URL}/api/auth/registro`, datos)
  return response.data
}