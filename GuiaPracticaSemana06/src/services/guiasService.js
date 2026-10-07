import api from './api.js';

const esperar = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function errorSimulado(mensaje, extra) {
  return Object.assign(new Error(mensaje), extra);
}

export async function obtenerGuias(signal) {
  const respuesta = await api.get('/users', { signal });
  return respuesta.data;
}

export async function crearReserva(datos, simulacion = 'normal') {
  if (simulacion === 'red') {
    await esperar(800);
    throw errorSimulado('Network Error', { request: {} });
  }
  if (simulacion === 'timeout') {
    await esperar(1500);
    throw errorSimulado('timeout', { code: 'ECONNABORTED' });
  }
  if (simulacion === 'servidor') {
    await esperar(800);
    throw errorSimulado('Server Error', { response: { status: 500 } });
  }
  if (simulacion === 'rechazo') {
    await esperar(800);
    throw errorSimulado('Unprocessable', { response: { status: 422 } });
  }
  if (simulacion === 'lento') {
    await esperar(4000);
  }

  const respuesta = await api.post('/posts', datos);
  return respuesta.data;
}
