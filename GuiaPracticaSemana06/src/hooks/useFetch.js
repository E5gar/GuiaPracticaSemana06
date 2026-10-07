import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

function mensajeDeError(err) {
  if (err.response) {
    return `El servidor respondió con error ${err.response.status}.`;
  }
  if (err.code === 'ECONNABORTED') {
    return 'La solicitud tardó demasiado. Inténtalo nuevamente.';
  }
  if (err.request) {
    return 'No se pudo conectar con el servidor. Revisa tu conexión a internet.';
  }
  return 'Ocurrió un error inesperado.';
}

function useFetch(servicio) {
  // Los tres estados se declaran juntos: loading, data y error describen
  // en qué fase está la petición y la UI solo necesita leerlos.
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [intento, setIntento] = useState(0);

  // Evita renderizado innecesario, las dependencias son [servicio, intento].
  // servicio es una función definida a nivel de módulo,
  // así que el efecto corre una sola vez al montar y no en cada render.
  // Solo se vuelve a ejecutar cuando intento cambia.
  useEffect(() => {
    const controller = new AbortController();

    async function cargar() {
      try {
        const resultado = await servicio(controller.signal);
        setData(resultado);
      } catch (err) {
        // Una petición cancelada a propósito no es un error de la app
        // se sale sin tocar el estado para no provocar renders de más.
        if (axios.isCancel(err)) return;
        setError(mensajeDeError(err));
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    }

    cargar();

    // Al desmontar o antes de re-ejecutar el efecto se cancela la
    // petición en curso. Así no llegan respuestas anteriores.
    return () => controller.abort();
  }, [servicio, intento]);

  // useCallback mantiene la misma referencia de reintentar entre renders,
  // por lo que no cambia las props de los componentes que la reciben.
  const reintentar = useCallback(() => {
    setLoading(true);
    setError(null);
    setIntento((n) => n + 1);
  }, []);

  return { data, loading, error, reintentar };
}

export default useFetch;
