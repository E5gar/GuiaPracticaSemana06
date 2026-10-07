import { Link } from 'react-router-dom';
import './Footer.css';
import { Mountain } from 'lucide-react';

function Footer() {
  return (
    <footer className="pie">
      <div className="contenedor pie-grid">
        <div>
          <p className="pie-logo">
            <Mountain size={20} /> Andes Tour
          </p>
          <p className="pie-texto">
            Tours por los Andes con guías locales certificados, grupos reducidos y reservas seguras.
          </p>
        </div>

        <div>
          <h4>Navegación</h4>
          <Link to="/">Inicio</Link>
          <Link to="/guias">Guías turísticos</Link>
          <Link to="/reservar">Reservar tour</Link>
        </div>

        <div>
          <h4>Contacto</h4>
          <span>hola@andestour.pe</span>
          <span>Lunes a sábado, 8:00 a 20:00</span>
        </div>
      </div>

      <p className="pie-copy">
        2026 Andes Tour. Desarrollo de aplicaciones web - IX Semestre - Gago Uribe Edgar Robert
      </p>
    </footer>
  );
}

export default Footer;
