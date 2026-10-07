import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <section className="home">
      <h1>Descubre los Andes</h1>
      <p>Conoce a nuestros guías turísticos y reserva tu próxima aventura.</p>

      <div className="home-botones">
        <Link to="/guias" className="home-boton home-boton-1">
          Guías turísticos
          <span>Conoce a quienes te acompañarán</span>
        </Link>

        <Link to="/reservar" className="home-boton home-boton-2">
          Reservar tour
          <span>Completa el formulario de reserva</span>
        </Link>
      </div>
    </section>
  );
}

export default Home;
