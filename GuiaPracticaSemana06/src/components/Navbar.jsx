import { NavLink } from 'react-router-dom'
import './Navbar.css'

const enlaces = [
  { to: '/', etiqueta: 'Inicio', end: true },
  { to: '/guias', etiqueta: 'Guías turísticos' },
  { to: '/reservar', etiqueta: 'Reservar tour' },
]

function Navbar() {
  return (
    <header className="nav">
      <div className="nav-interior">
        <span className="nav-logo">Andes Tour</span>

        <nav className="nav-enlaces">
          {enlaces.map((enlace) => (
            <NavLink
              key={enlace.to}
              to={enlace.to}
              end={enlace.end}
              className={({ isActive }) =>
                isActive ? 'nav-link nav-link-activo' : 'nav-link'
              }
            >
              {enlace.etiqueta}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Navbar