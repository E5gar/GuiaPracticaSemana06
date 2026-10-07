import { useState } from 'react';
import useFetch from '../hooks/useFetch.js';
import { obtenerGuias } from '../services/guiasService.js';
import Loader from '../components/Loader.jsx';
import ErrorMessage from '../components/ErrorMessage.jsx';
import GuiaCard from '../components/GuiaCard.jsx';
import './List.css';

function List() {
  const { data, loading, error, reintentar } = useFetch(obtenerGuias);
  const [busqueda, setBusqueda] = useState('');

  if (loading) return <Loader mensaje="Cargando guías..." />;
  if (error) return <ErrorMessage mensaje={error} onReintentar={reintentar} />;

  const termino = busqueda.trim().toLowerCase();
  const guiasFiltrados = data.filter((guia) => guia.address.city.toLowerCase().includes(termino));

  return (
    <section className="lista">
      <h2>Guías turísticos</h2>
      <p className="lista-subtitulo">Elige a tu guía y reserva tu próxima aventura.</p>

      <div className="lista-buscador">
        <input
          type="text"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          placeholder="Buscar por ciudad"
          aria-label="Buscar guías por ciudad"
        />
        {busqueda && (
          <button type="button" onClick={() => setBusqueda('')}>
            Limpiar
          </button>
        )}
      </div>

      <p className="lista-contador">
        Mostrando {guiasFiltrados.length} de {data.length} guías
      </p>

      {guiasFiltrados.length > 0 ? (
        <div className="lista-grid">
          {guiasFiltrados.map((guia) => (
            <GuiaCard key={guia.id} guia={guia} />
          ))}
        </div>
      ) : (
        <div className="lista-vacia">
          <p>No hay guías en esa ciudad.</p>
        </div>
      )}
    </section>
  );
}

export default List;
