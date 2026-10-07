import useFetch from '../hooks/useFetch.js'
import { obtenerGuias } from '../services/guiasService.js'
import Loader from '../components/Loader.jsx'
import ErrorMessage from '../components/ErrorMessage.jsx'

function List() {
  const { data, loading, error, reintentar } = useFetch(obtenerGuias)

  if (loading) return <Loader mensaje="Cargando guías..." />
  if (error) return <ErrorMessage mensaje={error} onReintentar={reintentar} />

  return (
    <section className="pagina-centro">
      <h2>Guías turísticos</h2>
      <p>Se cargaron {data.length} guías correctamente.</p>
    </section>
  )
}

export default List