import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';
import { Mountain } from 'lucide-react';

const enlaces = [
  { to: '/', etiqueta: 'Inicio', end: true },
  { to: '/guias', etiqueta: 'Guías turísticos' },
  { to: '/reservar', etiqueta: 'Reservar tour', cta: true },
];

function claseDe(enlace, isActive) {
  if (enlace.cta) return isActive ? 'nav-cta nav-cta-activo' : 'nav-cta';
  return isActive ? 'nav-link nav-link-activo' : 'nav-link';
}

function Navbar() {
  return (
    <>
      <div className="topbar">Cancelación gratis hasta en 48 h</div>

      <header className="nav">
        <div className="nav-interior">
          <Link to="/" className="nav-logo">
            <span className="nav-logo-icono">
              <Mountain size={20} />
            </span>
            Andes Tour
          </Link>

          <nav className="nav-enlaces">
            {enlaces.map((enlace) => (
              <NavLink
                key={enlace.to}
                to={enlace.to}
                end={enlace.end}
                className={({ isActive }) => claseDe(enlace, isActive)}
              >
                {enlace.etiqueta}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>
    </>
  );
}

export default Navbar;
