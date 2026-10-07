import { useState } from 'react';
import { crearReserva } from '../services/guiasService.js';
import './ReservaForm.css';

const destinos = [
  'Valle del Mantaro',
  'Machu Picchu',
  'Lago Titicaca',
  'Cañón del Colca',
  'Laguna 69',
];

const valoresIniciales = {
  nombre: '',
  correo: '',
  destino: '',
  fecha: '',
  personas: 1,
  mensaje: '',
};

function fechaHoy() {
  const hoy = new Date();
  const mes = String(hoy.getMonth() + 1).padStart(2, '0');
  const dia = String(hoy.getDate()).padStart(2, '0');
  return `${hoy.getFullYear()}-${mes}-${dia}`;
}

function validar(valores) {
  const errores = {};

  if (valores.nombre.trim().length < 3) {
    errores.nombre = 'Ingresa al menos 3 caracteres.';
  }

  if (!/^\S+@\S+\.\S+$/.test(valores.correo)) {
    errores.correo = 'Ingresa un correo válido.';
  }

  if (!valores.destino) {
    errores.destino = 'Elige un destino.';
  }

  if (!valores.fecha) {
    errores.fecha = 'Elige una fecha.';
  } else if (valores.fecha < fechaHoy()) {
    errores.fecha = 'La fecha no puede ser pasada.';
  }

  const personas = Number(valores.personas);
  if (!Number.isInteger(personas) || personas < 1 || personas > 20) {
    errores.personas = 'Ingresa entre 1 y 20 personas.';
  }

  return errores;
}

function ReservaForm({ guia = '' }) {
  const [valores, setValores] = useState(valoresIniciales);
  const [errores, setErrores] = useState({});
  const [estado, setEstado] = useState('inactivo');
  const [confirmacion, setConfirmacion] = useState(null);

  const manejarCambio = (e) => {
    const { name, value } = e.target;
    setValores((previos) => ({ ...previos, [name]: value }));
    if (errores[name]) {
      setErrores((previos) => ({ ...previos, [name]: '' }));
    }
  };

  const manejarEnvio = async (e) => {
    e.preventDefault();

    const nuevosErrores = validar(valores);
    setErrores(nuevosErrores);
    if (Object.keys(nuevosErrores).length > 0) return;

    const datos = {
      ...valores,
      nombre: valores.nombre.trim(),
      personas: Number(valores.personas),
      guia,
      userId: 1,
    };

    setEstado('enviando');

    try {
      const respuesta = await crearReserva(datos);
      setConfirmacion({ ...datos, id: respuesta.id });
      setValores(valoresIniciales);
      setEstado('exito');
    } catch {
      setEstado('error');
    }
  };

  const nuevaReserva = () => {
    setConfirmacion(null);
    setEstado('inactivo');
  };

  return estado === 'exito' && confirmacion ? (
    <div className="reserva-exito" role="status">
      <h3>¡Reserva enviada!</h3>
      <p>
        Código de reserva: <strong>#{confirmacion.id}</strong>
      </p>

      <div className="reserva-resumen">
        <p>
          <strong>Nombre:</strong> {confirmacion.nombre}
        </p>
        <p>
          <strong>Correo:</strong> {confirmacion.correo}
        </p>
        <p>
          <strong>Destino:</strong> {confirmacion.destino}
        </p>
        <p>
          <strong>Fecha:</strong> {confirmacion.fecha}
        </p>
        <p>
          <strong>Personas:</strong> {confirmacion.personas}
        </p>
        {confirmacion.guia && (
          <p>
            <strong>Guía:</strong> {confirmacion.guia}
          </p>
        )}
      </div>

      <button type="button" onClick={nuevaReserva}>
        Hacer otra reserva
      </button>
    </div>
  ) : (
    <form className="reserva-form" onSubmit={manejarEnvio} noValidate>
      {guia && (
        <div className="reserva-guia">
          Guía elegido: <strong>{guia}</strong>
        </div>
      )}

      <div className="reserva-campo">
        <label htmlFor="nombre">Nombre completo</label>
        <input
          id="nombre"
          name="nombre"
          type="text"
          value={valores.nombre}
          onChange={manejarCambio}
          className={errores.nombre ? 'reserva-invalido' : ''}
        />
        {errores.nombre && <span className="reserva-error">{errores.nombre}</span>}
      </div>

      <div className="reserva-campo">
        <label htmlFor="correo">Correo electrónico</label>
        <input
          id="correo"
          name="correo"
          type="email"
          value={valores.correo}
          onChange={manejarCambio}
          className={errores.correo ? 'reserva-invalido' : ''}
        />
        {errores.correo && <span className="reserva-error">{errores.correo}</span>}
      </div>

      <div className="reserva-campo">
        <label htmlFor="destino">Destino</label>
        <select
          id="destino"
          name="destino"
          value={valores.destino}
          onChange={manejarCambio}
          className={errores.destino ? 'reserva-invalido' : ''}
        >
          <option value="">Selecciona un destino</option>
          {destinos.map((destino) => (
            <option key={destino} value={destino}>
              {destino}
            </option>
          ))}
        </select>
        {errores.destino && <span className="reserva-error">{errores.destino}</span>}
      </div>

      <div className="reserva-fila">
        <div className="reserva-campo">
          <label htmlFor="fecha">Fecha del tour</label>
          <input
            id="fecha"
            name="fecha"
            type="date"
            min={fechaHoy()}
            value={valores.fecha}
            onChange={manejarCambio}
            className={errores.fecha ? 'reserva-invalido' : ''}
          />
          {errores.fecha && <span className="reserva-error">{errores.fecha}</span>}
        </div>

        <div className="reserva-campo">
          <label htmlFor="personas">Personas</label>
          <input
            id="personas"
            name="personas"
            type="number"
            min="1"
            max="20"
            value={valores.personas}
            onChange={manejarCambio}
            className={errores.personas ? 'reserva-invalido' : ''}
          />
          {errores.personas && <span className="reserva-error">{errores.personas}</span>}
        </div>
      </div>

      <div className="reserva-campo">
        <label htmlFor="mensaje">Mensaje (opcional)</label>
        <textarea
          id="mensaje"
          name="mensaje"
          rows="3"
          value={valores.mensaje}
          onChange={manejarCambio}
        />
      </div>

      {estado === 'error' && (
        <div className="reserva-fallo" role="alert">
          No se pudo enviar la reserva. Inténtalo nuevamente.
        </div>
      )}

      <button type="submit" disabled={estado === 'enviando'}>
        {estado === 'enviando' ? 'Enviando...' : 'Enviar reserva'}
      </button>
    </form>
  );
}

export default ReservaForm;
