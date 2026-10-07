import { Link } from 'react-router-dom';
import Imagen from '../components/Imagen.jsx';
import { destinos, imagenHero, imagenCta } from '../data/destinos.js';
import './Home.css';
import { Compass, Users, RefreshCw, MessageCircle } from 'lucide-react';

const estadisticas = [
  { valor: '120+', texto: 'Tours realizados' },
  { valor: '10', texto: 'Guías certificados' },
  { valor: '4.9', texto: 'Valoración promedio' },
];

const ventajas = [
  { icono: Compass, titulo: 'Guías locales', texto: 'Certificados y con años de experiencia' },
  { icono: Users, titulo: 'Grupos reducidos', texto: 'Máximo 20 personas por salida' },
  { icono: RefreshCw, titulo: 'Cancelación flexible', texto: 'Gratis hasta 48 horas antes' },
  { icono: MessageCircle, titulo: 'Soporte cercano', texto: 'Atención de lunes a sábado' },
];

const testimonios = [
  {
    id: 1,
    nombre: 'Lucía Paredes',
    texto: 'Nuestro guía conocía cada rincón. Una experiencia inolvidable.',
    foto: 5,
  },
  {
    id: 2,
    nombre: 'Marco Salinas',
    texto: 'Reservar fue rápido y todo salió tal como lo prometieron.',
    foto: 12,
  },
  {
    id: 3,
    nombre: 'Andrea Quispe',
    texto: 'Grupo pequeño, buen ritmo y paisajes increíbles. Volveré.',
    foto: 47,
  },
];

function Home() {
  return (
    <>
      <section className="hero" style={{ backgroundImage: `url(${imagenHero})` }}>
        <div className="hero-capa">
          <div className="contenedor">
            <span className="hero-insignia">Temporada 2026 · Cupos abiertos</span>
            <h1>Descubre el Perú con guías locales</h1>
            <p>
              Tours por los Andes con salidas todos los días. Elige tu destino, conoce a tu guía y
              reserva en minutos.
            </p>

            <div className="hero-botones">
              <Link to="/reservar" className="boton boton-primario">
                Reservar tour
              </Link>
              <Link to="/guias" className="boton boton-borde">
                Conocer guías
              </Link>
            </div>

            <div className="hero-estadisticas">
              {estadisticas.map((e) => (
                <div key={e.texto}>
                  <strong>{e.valor}</strong>
                  <span>{e.texto}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="ventajas">
        <div className="contenedor ventajas-grid">
          {ventajas.map(({ icono: Icono, titulo, texto }) => (
            <div key={titulo} className="ventaja">
              <span className="ventaja-icono">
                <Icono size={26} strokeWidth={1.8} />
              </span>
              <strong>{titulo}</strong>
              <span>{texto}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="seccion">
        <div className="contenedor">
          <h2 className="seccion-titulo">Destinos populares</h2>
          <p className="seccion-sub">Precios por persona. Incluyen guía y seguro de viaje.</p>

          <div className="destinos-grid">
            {destinos.map((d) => (
              <article key={d.id} className="destino">
                <div className="destino-foto">
                  <Imagen src={d.imagen} alt={d.nombre} className="destino-img" />
                  <span className="destino-etiqueta">{d.etiqueta}</span>
                </div>

                <div className="destino-cuerpo">
                  <p className="destino-region">
                    {d.region} · {d.duracion}
                  </p>
                  <h3>{d.nombre}</h3>
                  <p className="destino-desc">{d.descripcion}</p>

                  <div className="destino-pie">
                    <span className="destino-precio">
                      <small>Desde</small> S/ {d.precio}
                    </span>
                    <Link to="/reservar" state={{ destino: d.nombre }} className="destino-boton">
                      Reservar
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="seccion seccion-color">
        <div className="contenedor">
          <h2 className="seccion-titulo">Lo que dicen los viajeros</h2>
          <div className="testimonios-grid">
            {testimonios.map((t) => (
              <figure key={t.id} className={`testimonio testimonio-${t.id}`}>
                <blockquote>“{t.texto}”</blockquote>
                <figcaption>
                  <Imagen
                    src={`https://i.pravatar.cc/80?img=${t.foto}`}
                    alt={t.nombre}
                    className="testimonio-foto"
                    fallback={t.nombre[0]}
                  />
                  {t.nombre}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="cta" style={{ backgroundImage: `url(${imagenCta})` }}>
        <div className="cta-capa">
          <h2>¿Listo para tu próxima aventura?</h2>
          <p>Reserva hoy y asegura tu cupo en la fecha que prefieras.</p>
          <Link to="/reservar" className="boton boton-primario">
            Reservar ahora
          </Link>
        </div>
      </section>
    </>
  );
}

export default Home;
