import { useLocation } from 'react-router-dom';
import ReservaForm from '../components/ReservaForm.jsx';
import './Form.css';

function Form() {
  const location = useLocation();
  const guia = location.state?.guia ?? '';

  return (
    <section className="reserva-pagina">
      <h2>Reservar tour</h2>
      <p>Completa tus datos y te confirmaremos la reserva.</p>
      <ReservaForm guia={guia} />
    </section>
  );
}

export default Form;
