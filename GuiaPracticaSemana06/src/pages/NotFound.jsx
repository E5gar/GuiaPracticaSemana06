import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <section className="pagina-centro">
      <h1>404</h1>
      <p>La página que buscas no existe.</p>
      <Link to="/" className="boton-volver">Volver al inicio</Link>
    </section>
  )
}

export default NotFound