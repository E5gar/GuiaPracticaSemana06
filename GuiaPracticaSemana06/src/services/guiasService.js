import api from './api.js'

export async function obtenerGuias(signal) {
  const respuesta = await api.get('/users', { signal })
  return respuesta.data
}

export async function crearReserva(datos) {
  const respuesta = await api.post('/posts', datos)
  return respuesta.data
}