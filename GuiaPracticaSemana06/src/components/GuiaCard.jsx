import { Link } from 'react-router-dom';
import Imagen from './Imagen.jsx';
import { destinos } from '../data/destinos.js';
import './GuiaCard.css';

function iniciales(nombre) {
  return nombre
    .split(' ')
    .filter((parte) => parte && !parte.endsWith('.'))
    .slice(0, 2)
    .map((parte) => parte[0])
    .join('');
}

function GuiaCard({ guia }) {
  const especialidad = destinos[guia.id % destinos.length];
  const valoracion = (4.6 + (guia.id % 4) * 0.1).toFixed(1);

  return (
    <article className="guia-card">
      <Imagen
        src={`https://i.pravatar.cc/240?img=${guia.id + 10}`}
        alt={guia.name}
        className={`guia-card-foto guia-card-color-${guia.id % 4}`}
        fallback={iniciales(guia.name)}
      />

      <h3>{guia.name}</h3>
      <p className="guia-card-especialidad">Especialista en {especialidad.nombre}</p>
      <p className="guia-card-valoracion">⭐ {valoracion} · Guía certificado</p>

      <ul className="guia-card-datos">
        <li>
          <strong>Ciudad:</strong> {guia.address.city}
        </li>
        <li>
          <strong>Correo:</strong> {guia.email}
        </li>
        <li>
          <strong>Teléfono:</strong> {guia.phone}
        </li>
        <li>
          <strong>Agencia:</strong> {guia.company.name}
        </li>
        {guia.website && (
          <li>
            <strong>Web:</strong> {guia.website}
          </li>
        )}
      </ul>

      <Link
        to="/reservar"
        state={{ guia: guia.name, destino: especialidad.nombre }}
        className="guia-card-boton"
      >
        Reservar con este guía
      </Link>
    </article>
  );
}

export default GuiaCard;
