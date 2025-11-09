import type { Event } from '@/lib/types';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const getImage = (id: string) => PlaceHolderImages.find(img => img.id === id)?.imageUrl || '';

export const events: Event[] = [
  {
    id: '1',
    title: 'Concierto de Jazz en Vivo',
    category: 'Conciertos',
    date: '25 de Agosto, 2024',
    location: 'Iradier Arena',
    city: 'Vitoria-Gasteiz',
    price: 25,
    description: 'Disfruta de una noche mágica con los mejores talentos del jazz contemporáneo. Un evento íntimo para los verdaderos amantes de la música.',
    organizer: 'Jazz Nights Vitoria',
    images: [getImage('jazz-club'), getImage('gallery-detail-1'), getImage('gallery-detail-2'), getImage('gallery-detail-3'), getImage('gallery-detail-4')],
    coordinates: { lat: 42.8428, lng: -2.673 }, // Centro
  },
  {
    id: '2',
    title: 'Exposición de Arte Moderno',
    category: 'Exposiciones',
    date: '10-30 de Septiembre, 2024',
    location: 'ARTIUM Museoa',
    city: 'Vitoria-Gasteiz',
    price: 'Gratis',
    description: 'Explora las últimas tendencias del arte moderno en una exposición que desafía la percepción y celebra la creatividad en su forma más pura.',
    organizer: 'Arte Contemporáneo Gasteiz',
    images: [getImage('art-gallery'), getImage('gallery-detail-1'), getImage('gallery-detail-2'), getImage('gallery-detail-3'), getImage('gallery-detail-4')],
    coordinates: { lat: 42.8475, lng: -2.6685 }, // El Anglo
  },
  {
    id: '3',
    title: 'Noche de Ópera: "La Traviata"',
    category: 'Teatro',
    date: '5 de Septiembre, 2024',
    location: 'Teatro Principal Antzokia',
    city: 'Vitoria-Gasteiz',
    price: 80,
    description: 'Una producción espectacular de la obra maestra de Verdi. Déjate llevar por la pasión y el drama de una de las óperas más queridas del mundo.',
    organizer: 'Amigos de la Ópera Vitoria',
    images: [getImage('opera-house'), getImage('gallery-detail-1'), getImage('gallery-detail-2'), getImage('gallery-detail-3'), getImage('gallery-detail-4')],
    coordinates: { lat: 42.8482, lng: -2.6721 }, // Ensanche
  },
  {
    id: '4',
    title: 'Festival de Teatro Callejero',
    category: 'Festivales',
    date: '1-3 de Septiembre, 2024',
    location: 'Plaza de los Fueros',
    city: 'Vitoria-Gasteiz',
    price: 'Gratis',
    description: 'El histórico Casco Viejo se transforma en un escenario gigante con actuaciones, mimos y espectáculos para toda la familia.',
    organizer: 'Kaldearte Gasteiz',
    images: [getImage('street-art'), getImage('gallery-detail-1'), getImage('gallery-detail-2'), getImage('gallery-detail-3'), getImage('gallery-detail-4')],
    coordinates: { lat: 42.8446, lng: -2.6750 }, // Casco Viejo
  },
  {
    id: '5',
    title: 'Ballet Clásico: "El Lago de los Cisnes"',
    category: 'Danza',
    date: '12 de Octubre, 2024',
    location: 'Buesa Arena',
    city: 'Vitoria-Gasteiz',
    price: 55,
    description: 'La elegancia y la belleza del ballet clásico en su máxima expresión. Una noche inolvidable con una de las compañías de danza más prestigiosas.',
    organizer: 'Ballet Nacional',
    images: [getImage('ballet-performance'), getImage('gallery-detail-1'), getImage('gallery-detail-2'), getImage('gallery-detail-3'), getImage('gallery-detail-4')],
    coordinates: { lat: 42.8640, lng: -2.6580 }, // Zurbano
  },
  {
    id: '6',
    title: 'Visita Guiada al Museo de Bellas Artes',
    category: 'Museos',
    date: 'Todos los días',
    location: 'Museo de Bellas Artes',
    city: 'Vitoria-Gasteiz',
    price: 15,
    description: 'Descubre las obras maestras del arte vasco con un guía experto que te revelará los secretos de cada pieza.',
    organizer: 'Guías de Arte Vitoria',
    images: [getImage('museum-interior'), getImage('gallery-detail-1'), getImage('gallery-detail-2'), getImage('gallery-detail-3'), getImage('gallery-detail-4')],
    coordinates: { lat: 42.8415, lng: -2.6845 }, // Lovaina
  },
  {
    id: '7',
    title: 'Festival de Música Azkena Rock',
    category: 'Conciertos',
    date: '20-22 de Junio, 2024',
    location: 'Mendizabala',
    city: 'Vitoria-Gasteiz',
    price: 90,
    description: 'Tres días del mejor rock nacional e internacional. No te pierdas a tus bandas favoritas y descubre nuevos talentos.',
    organizer: 'Azkena Rock Festival',
    images: [getImage('outdoor-festival'), getImage('gallery-detail-1'), getImage('gallery-detail-2'), getImage('gallery-detail-3'), getImage('gallery-detail-4')],
    coordinates: { lat: 42.8353, lng: -2.6831 }, // Mendizabala
  },
  {
    id: '8',
    title: 'Encuentro con Autor',
    category: 'Literatura',
    date: '18 de Noviembre, 2024',
    location: 'Casa de Cultura Ignacio Aldecoa',
    city: 'Vitoria-Gasteiz',
    price: 'Gratis',
    description: 'La aclamada autora Toti Martínez de Lezea hablará sobre su última novela y firmará ejemplares. Una oportunidad única para conocerla en persona.',
    organizer: 'Club de Lectura Vitoria',
    images: [getImage('book-reading'), getImage('gallery-detail-1'), getImage('gallery-detail-2'), getImage('gallery-detail-3'), getImage('gallery-detail-4')],
    coordinates: { lat: 42.8468, lng: -2.6762 }, // Sur del centro
  },
];
