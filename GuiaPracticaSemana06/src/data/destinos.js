const foto = (id, ancho = 900) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${ancho}&q=80`;

export const imagenHero = foto('1526392060635-9d6019884377', 1800);
export const imagenCta = foto('1506905925346-21bda4d32df4', 1600);
export const imagenReserva = foto('1587595431973-160d0d94add1', 900);

export const destinos = [
  {
    id: 1,
    nombre: 'Valle del Mantaro',
    region: 'Junín',
    imagen: foto('1464822759023-fed622ff2c3b'),
    precio: 180,
    duracion: '1 día',
    etiqueta: 'Cultura viva',
    descripcion: 'Artesanía, gastronomía y paisajes andinos para disfrutar en un día.',
  },
  {
    id: 2,
    nombre: 'Machu Picchu',
    region: 'Cusco',
    imagen: foto('1587595431973-160d0d94add1'),
    precio: 890,
    duracion: '2 días',
    etiqueta: 'Más visitado',
    descripcion: 'La ciudadela inca con tren panorámico, entradas y guía incluidos.',
  },
  {
    id: 3,
    nombre: 'Lago Titicaca',
    region: 'Puno',
    imagen: foto('1439066615861-d1af74d74000'),
    precio: 420,
    duracion: '2 días',
    etiqueta: 'Islas flotantes',
    descripcion: 'Navega entre las islas de los Uros y convive con comunidades locales.',
  },
  {
    id: 4,
    nombre: 'Cañón del Colca',
    region: 'Arequipa',
    imagen: foto('1500530855697-b586d89ba3ee'),
    precio: 520,
    duracion: '2 días',
    etiqueta: 'Vuelo de cóndores',
    descripcion: 'Uno de los cañones más profundos del mundo y aguas termales.',
  },
  {
    id: 5,
    nombre: 'Laguna 69',
    region: 'Áncash',
    imagen: foto('1506905925346-21bda4d32df4'),
    precio: 260,
    duracion: '1 día',
    etiqueta: 'Aventura',
    descripcion: 'Caminata hasta una laguna turquesa al pie de la cordillera.',
  },
];
