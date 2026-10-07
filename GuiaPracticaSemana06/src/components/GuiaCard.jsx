import { Link } from 'react-router-dom';
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
  return (
    <article className="guia-card">
      <div className={`guia-card-avatar guia-card-color-${guia.id % 4}`}>
        {iniciales(guia.name)}
      </div>

      <h3>{guia.name}</h3>
      <p className="guia-card-usuario">@{guia.username}</p>

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

      <Link to="/reservar" state={{ guia: guia.name }} className="guia-card-boton">
        Reservar con este guía
      </Link>
    </article>
  );
}

export default GuiaCard;
