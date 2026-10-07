import { useState, useEffect, useCallback } from 'react'
import axios from 'axios'

function mensajeDeError(err) {
  if (err.response) {
    return `El servidor respondió con error ${err.response.status}.`
  }
  if (err.code === 'ECONNABORTED') {
    return 'La solicitud tardó demasiado. Inténtalo nuevamente.'
  }
  if (err.request) {
    return 'No se pudo conectar con el servidor. Revisa tu conexión a internet.'
  }
  return 'Ocurrió un error inesperado.'
}

function useFetch(servicio) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [intento, setIntento] = useState(0)

  useEffect(() => {
    const controller = new AbortController()

    async function cargar() {
      try {
        const resultado = await servicio(controller.signal)
        setData(resultado)
      } catch (err) {
        if (axios.isCancel(err)) return
        setError(mensajeDeError(err))
      } finally {
        if (!controller.signal.aborted) setLoading(false)
      }
    }

    cargar()

    return () => controller.abort()
  }, [servicio, intento])

  const reintentar = useCallback(() => {
    setLoading(true)
    setError(null)
    setIntento((n) => n + 1)
  }, [])

  return { data, loading, error, reintentar }
}

export default useFetch