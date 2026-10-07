import './Estados.css'

function ErrorMessage({ mensaje, onReintentar }) {
  return (
    <div className="estado estado-error" role="alert">
      <h3>Algo salió mal</h3>
      <p>{mensaje}</p>
      {onReintentar && (
        <button type="button" onClick={onReintentar}>
          Reintentar
        </button>
      )}
    </div>
  )
}

export default ErrorMessage