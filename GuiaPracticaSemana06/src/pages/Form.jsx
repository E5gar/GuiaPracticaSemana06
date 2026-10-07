import { useLocation } from 'react-router-dom';
import ReservaForm from '../components/ReservaForm.jsx';
import Imagen from '../components/Imagen.jsx';
import { imagenReserva } from '../data/destinos.js';
import './Form.css';
import { Check } from 'lucide-react';

const incluye = [
  'Guía local certificado',
  'Seguro de viaje',
  'Transporte durante el recorrido',
  'Cancelación gratuita hasta 48 h antes',
];

function Form() {
  const location = useLocation();
  const { guia = '', destino = '' } = location.state ?? {};

  return (
    <div className="contenedor reserva-layout">
      <section className="reserva-pagina">
        <h2>Reserva tu tour</h2>
        <p>Completa tus datos y te confirmaremos la reserva por correo.</p>
        <ReservaForm guia={guia} destino={destino} />
      </section>

      <aside className="reserva-lateral">
        <Imagen src={imagenReserva} alt="Machu Picchu" className="reserva-lateral-img" />
        <div className="reserva-lateral-cuerpo">
          <h3>Tu reserva incluye</h3>
          <ul>
            {incluye.map((item) => (
              <li key={item}>
                <Check size={16} strokeWidth={3} /> {item}
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </div>
  );
}

export default Form;
