import './Estados.css'

function Loader({ mensaje = 'Cargando...' }) {
  return (
    <div className="estado estado-loader" role="status">
      <div className="estado-spinner"></div>
      <p>{mensaje}</p>
    </div>
  )
}

export default Loader