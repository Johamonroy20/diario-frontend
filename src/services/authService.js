import api from './api'

export async function registrar(datos) {
  const response = await api.post('/api/auth/registro', datos);
  return response.data;
}

export async function login(datos) {
  const response = await api.post('/api/auth/login', datos);
  return response.data;
}
