// Room type definition
export type Room = {
  id: string
  name: string
  description: string
  longDescription: string
  amenities: Array<{
    icon: string
    name: string
  }>
  features: string[]
  maxGuests: number
  size: string
  price: number
  images: string[]
}

// Room database
export const rooms: Record<string, Room> = {
  'vista-mar-4': {
    id: 'vista-mar-4',
    name: 'Vista Mar 4° Piso',
    description: 'Quarto aconchegante com vista parcial para o mar, ideal para casais.',
    longDescription: `Nossa Suíte Standard oferece todo o conforto que você precisa para uma estadia relaxante. 
    Com aproximadamente 25m², o quarto conta com uma cama queen-size, banheiro privativo com chuveiro de água quente,
    e uma pequena varanda com vista parcial para o mar.`,
    amenities: [
      { icon: '🛏️', name: 'Cama Queen-size' },
      { icon: '🌡️', name: 'Ar-condicionado' },
      { icon: '📺', name: 'TV 42"' },
      { icon: '🚿', name: 'Chuveiro quente' },
      { icon: '🧺', name: 'Secador de cabelo' },
      { icon: '☕', name: 'Cafeteira' },
      { icon: '🌊', name: 'Vista parcial mar' },
      { icon: '🅿️', name: 'Estacionamento' },
    ],
    features: ['Wi-Fi Grátis', 'Frigobar', 'Cofre', 'Roupa de Cama Premium'],
    maxGuests: 2,
    size: '25m²',
    price: 450,
    images: Array(4).fill(null).map((_, i) => `/rooms/standard-${i + 1}.jpg`)
  },
  'esquina-4': {
    id: 'esquina-4',
    name: 'Esquina Mar e Praça 4° Piso',
    description: 'Quarto aconchegante com vista parcial para o mar, ideal para casais.',
    longDescription: `Nossa Suíte Standard oferece todo o conforto que você precisa para uma estadia relaxante. 
    Com aproximadamente 25m², o quarto conta com uma cama queen-size, banheiro privativo com chuveiro de água quente,
    e uma pequena varanda com vista parcial para o mar.`,
    amenities: [
      { icon: '🛏️', name: 'Cama Queen-size' },
      { icon: '🌡️', name: 'Ar-condicionado' },
      { icon: '📺', name: 'TV 42"' },
      { icon: '🚿', name: 'Chuveiro quente' },
      { icon: '🧺', name: 'Secador de cabelo' },
      { icon: '☕', name: 'Cafeteira' },
      { icon: '🌊', name: 'Vista parcial mar' },
      { icon: '🅿️', name: 'Estacionamento' },
    ],
    features: ['Wi-Fi Grátis', 'Frigobar', 'Cofre', 'Roupa de Cama Premium'],
    maxGuests: 2,
    size: '25m²',
    price: 450,
    images: Array(4).fill(null).map((_, i) => `/rooms/standard-${i + 1}.jpg`)
  },
  'vista-praca-4': {
    id: 'vista-praca-4',
    name: 'Vista Praça 4° Piso',
    description: 'Quarto aconchegante com vista parcial para o mar, ideal para casais.',
    longDescription: `Nossa Suíte Standard oferece todo o conforto que você precisa para uma estadia relaxante. 
    Com aproximadamente 25m², o quarto conta com uma cama queen-size, banheiro privativo com chuveiro de água quente,
    e uma pequena varanda com vista parcial para o mar.`,
    amenities: [
      { icon: '🛏️', name: 'Cama Queen-size' },
      { icon: '🌡️', name: 'Ar-condicionado' },
      { icon: '📺', name: 'TV 42"' },
      { icon: '🚿', name: 'Chuveiro quente' },
      { icon: '🧺', name: 'Secador de cabelo' },
      { icon: '☕', name: 'Cafeteira' },
      { icon: '🌊', name: 'Vista parcial mar' },
      { icon: '🅿️', name: 'Estacionamento' },
    ],
    features: ['Wi-Fi Grátis', 'Frigobar', 'Cofre', 'Roupa de Cama Premium'],
    maxGuests: 2,
    size: '25m²',
    price: 450,
    images: Array(4).fill(null).map((_, i) => `/rooms/standard-${i + 1}.jpg`)
  },
  'interno-4': {
    id: 'interno-4',
    name: 'Interno 4° Piso',
    description: 'Quarto aconchegante com vista parcial para o mar, ideal para casais.',
    longDescription: `Nossa Suíte Standard oferece todo o conforto que você precisa para uma estadia relaxante. 
    Com aproximadamente 25m², o quarto conta com uma cama queen-size, banheiro privativo com chuveiro de água quente,
    e uma pequena varanda com vista parcial para o mar.`,
    amenities: [
      { icon: '🛏️', name: 'Cama Queen-size' },
      { icon: '🌡️', name: 'Ar-condicionado' },
      { icon: '📺', name: 'TV 42"' },
      { icon: '🚿', name: 'Chuveiro quente' },
      { icon: '🧺', name: 'Secador de cabelo' },
      { icon: '☕', name: 'Cafeteira' },
      { icon: '🌊', name: 'Vista parcial mar' },
      { icon: '🅿️', name: 'Estacionamento' },
    ],
    features: ['Wi-Fi Grátis', 'Frigobar', 'Cofre', 'Roupa de Cama Premium'],
    maxGuests: 2,
    size: '25m²',
    price: 450,
    images: Array(4).fill(null).map((_, i) => `/rooms/standard-${i + 1}.jpg`)
  },
  'vista-mar-3': {
    id: 'vista-mar-3',
    name: 'Vista Mar 3° Piso',
    description: 'Quarto aconchegante com vista parcial para o mar, ideal para casais.',
    longDescription: `Nossa Suíte Standard oferece todo o conforto que você precisa para uma estadia relaxante. 
    Com aproximadamente 25m², o quarto conta com uma cama queen-size, banheiro privativo com chuveiro de água quente,
    e uma pequena varanda com vista parcial para o mar.`,
    amenities: [
      { icon: '🛏️', name: 'Cama Queen-size' },
      { icon: '🌡️', name: 'Ar-condicionado' },
      { icon: '📺', name: 'TV 42"' },
      { icon: '🚿', name: 'Chuveiro quente' },
      { icon: '🧺', name: 'Secador de cabelo' },
      { icon: '☕', name: 'Cafeteira' },
      { icon: '🌊', name: 'Vista parcial mar' },
      { icon: '🅿️', name: 'Estacionamento' },
    ],
    features: ['Wi-Fi Grátis', 'Frigobar', 'Cofre', 'Roupa de Cama Premium'],
    maxGuests: 2,
    size: '25m²',
    price: 450,
    images: Array(4).fill(null).map((_, i) => `/rooms/standard-${i + 1}.jpg`)
  },
  'esquina-3': {
    id: 'esquina-3',
    name: 'Esquina Mar e Praça 3° Piso',
    description: 'Quarto aconchegante com vista parcial para o mar, ideal para casais.',
    longDescription: `Nossa Suíte Standard oferece todo o conforto que você precisa para uma estadia relaxante. 
    Com aproximadamente 25m², o quarto conta com uma cama queen-size, banheiro privativo com chuveiro de água quente,
    e uma pequena varanda com vista parcial para o mar.`,
    amenities: [
      { icon: '🛏️', name: 'Cama Queen-size' },
      { icon: '🌡️', name: 'Ar-condicionado' },
      { icon: '📺', name: 'TV 42"' },
      { icon: '🚿', name: 'Chuveiro quente' },
      { icon: '🧺', name: 'Secador de cabelo' },
      { icon: '☕', name: 'Cafeteira' },
      { icon: '🌊', name: 'Vista parcial mar' },
      { icon: '🅿️', name: 'Estacionamento' },
    ],
    features: ['Wi-Fi Grátis', 'Frigobar', 'Cofre', 'Roupa de Cama Premium'],
    maxGuests: 2,
    size: '25m²',
    price: 450,
    images: Array(4).fill(null).map((_, i) => `/rooms/standard-${i + 1}.jpg`)
  },
  'vista-praca-3': {
    id: 'vista-praca-3',
    name: 'Vista Praça 3° Piso',
    description: 'Quarto aconchegante com vista parcial para o mar, ideal para casais.',
    longDescription: `Nossa Suíte Standard oferece todo o conforto que você precisa para uma estadia relaxante. 
    Com aproximadamente 25m², o quarto conta com uma cama queen-size, banheiro privativo com chuveiro de água quente,
    e uma pequena varanda com vista parcial para o mar.`,
    amenities: [
      { icon: '🛏️', name: 'Cama Queen-size' },
      { icon: '🌡️', name: 'Ar-condicionado' },
      { icon: '📺', name: 'TV 42"' },
      { icon: '🚿', name: 'Chuveiro quente' },
      { icon: '🧺', name: 'Secador de cabelo' },
      { icon: '☕', name: 'Cafeteira' },
      { icon: '🌊', name: 'Vista parcial mar' },
      { icon: '🅿️', name: 'Estacionamento' },
    ],
    features: ['Wi-Fi Grátis', 'Frigobar', 'Cofre', 'Roupa de Cama Premium'],
    maxGuests: 2,
    size: '25m²',
    price: 450,
    images: Array(4).fill(null).map((_, i) => `/rooms/standard-${i + 1}.jpg`)
  },
  'interno-3': {
    id: 'interno-3',
    name: 'Interno 3° Piso',
    description: 'Quarto aconchegante com vista parcial para o mar, ideal para casais.',
    longDescription: `Nossa Suíte Standard oferece todo o conforto que você precisa para uma estadia relaxante. 
    Com aproximadamente 25m², o quarto conta com uma cama queen-size, banheiro privativo com chuveiro de água quente,
    e uma pequena varanda com vista parcial para o mar.`,
    amenities: [
      { icon: '🛏️', name: 'Cama Queen-size' },
      { icon: '🌡️', name: 'Ar-condicionado' },
      { icon: '📺', name: 'TV 42"' },
      { icon: '🚿', name: 'Chuveiro quente' },
      { icon: '🧺', name: 'Secador de cabelo' },
      { icon: '☕', name: 'Cafeteira' },
      { icon: '🌊', name: 'Vista parcial mar' },
      { icon: '🅿️', name: 'Estacionamento' },
    ],
    features: ['Wi-Fi Grátis', 'Frigobar', 'Cofre', 'Roupa de Cama Premium'],
    maxGuests: 2,
    size: '25m²',
    price: 450,
    images: Array(4).fill(null).map((_, i) => `/rooms/standard-${i + 1}.jpg`)
  },
  'vista-mar-2': {
    id: 'vista-mar-2',
    name: 'Vista Mar 2° Piso',
    description: 'Quarto aconchegante com vista parcial para o mar, ideal para casais.',
    longDescription: `Nossa Suíte Standard oferece todo o conforto que você precisa para uma estadia relaxante. 
    Com aproximadamente 25m², o quarto conta com uma cama queen-size, banheiro privativo com chuveiro de água quente,
    e uma pequena varanda com vista parcial para o mar.`,
    amenities: [
      { icon: '🛏️', name: 'Cama Queen-size' },
      { icon: '🌡️', name: 'Ar-condicionado' },
      { icon: '📺', name: 'TV 42"' },
      { icon: '🚿', name: 'Chuveiro quente' },
      { icon: '🧺', name: 'Secador de cabelo' },
      { icon: '☕', name: 'Cafeteira' },
      { icon: '🌊', name: 'Vista parcial mar' },
      { icon: '🅿️', name: 'Estacionamento' },
    ],
    features: ['Wi-Fi Grátis', 'Frigobar', 'Cofre', 'Roupa de Cama Premium'],
    maxGuests: 2,
    size: '25m²',
    price: 450,
    images: Array(4).fill(null).map((_, i) => `/rooms/standard-${i + 1}.jpg`)
  },
  'esquina-2': {
    id: 'esquina-2',
    name: 'Esquina Mar e Praça 2° Piso',
    description: 'Quarto aconchegante com vista parcial para o mar, ideal para casais.',
    longDescription: `Nossa Suíte Standard oferece todo o conforto que você precisa para uma estadia relaxante. 
    Com aproximadamente 25m², o quarto conta com uma cama queen-size, banheiro privativo com chuveiro de água quente,
    e uma pequena varanda com vista parcial para o mar.`,
    amenities: [
      { icon: '🛏️', name: 'Cama Queen-size' },
      { icon: '🌡️', name: 'Ar-condicionado' },
      { icon: '📺', name: 'TV 42"' },
      { icon: '🚿', name: 'Chuveiro quente' },
      { icon: '🧺', name: 'Secador de cabelo' },
      { icon: '☕', name: 'Cafeteira' },
      { icon: '🌊', name: 'Vista parcial mar' },
      { icon: '🅿️', name: 'Estacionamento' },
    ],
    features: ['Wi-Fi Grátis', 'Frigobar', 'Cofre', 'Roupa de Cama Premium'],
    maxGuests: 2,
    size: '25m²',
    price: 450,
    images: Array(4).fill(null).map((_, i) => `/rooms/standard-${i + 1}.jpg`)
  },
  'vista-praca-2': {
    id: 'vista-praca-2',
    name: 'Vista Praça 2° Piso',
    description: 'Quarto aconchegante com vista parcial para o mar, ideal para casais.',
    longDescription: `Nossa Suíte Standard oferece todo o conforto que você precisa para uma estadia relaxante. 
    Com aproximadamente 25m², o quarto conta com uma cama queen-size, banheiro privativo com chuveiro de água quente,
    e uma pequena varanda com vista parcial para o mar.`,
    amenities: [
      { icon: '🛏️', name: 'Cama Queen-size' },
      { icon: '🌡️', name: 'Ar-condicionado' },
      { icon: '📺', name: 'TV 42"' },
      { icon: '🚿', name: 'Chuveiro quente' },
      { icon: '🧺', name: 'Secador de cabelo' },
      { icon: '☕', name: 'Cafeteira' },
      { icon: '🌊', name: 'Vista parcial mar' },
      { icon: '🅿️', name: 'Estacionamento' },
    ],
    features: ['Wi-Fi Grátis', 'Frigobar', 'Cofre', 'Roupa de Cama Premium'],
    maxGuests: 2,
    size: '25m²',
    price: 450,
    images: Array(4).fill(null).map((_, i) => `/rooms/standard-${i + 1}.jpg`)
  },
  'interno-2': {
    id: 'interno-2',
    name: 'Interno 2° Piso',
    description: 'Quarto aconchegante com vista parcial para o mar, ideal para casais.',
    longDescription: `Nossa Suíte Standard oferece todo o conforto que você precisa para uma estadia relaxante. 
    Com aproximadamente 25m², o quarto conta com uma cama queen-size, banheiro privativo com chuveiro de água quente,
    e uma pequena varanda com vista parcial para o mar.`,
    amenities: [
      { icon: '🛏️', name: 'Cama Queen-size' },
      { icon: '🌡️', name: 'Ar-condicionado' },
      { icon: '📺', name: 'TV 42"' },
      { icon: '🚿', name: 'Chuveiro quente' },
      { icon: '🧺', name: 'Secador de cabelo' },
      { icon: '☕', name: 'Cafeteira' },
      { icon: '🌊', name: 'Vista parcial mar' },
      { icon: '🅿️', name: 'Estacionamento' },
    ],
    features: ['Wi-Fi Grátis', 'Frigobar', 'Cofre', 'Roupa de Cama Premium'],
    maxGuests: 2,
    size: '25m²',
    price: 450,
    images: Array(4).fill(null).map((_, i) => `/rooms/standard-${i + 1}.jpg`)
  },
  'terreo': {
    id: 'terreo',
    name: 'Terreo Interno',
    description: 'Quarto aconchegante com vista parcial para o mar, ideal para casais.',
    longDescription: `Nossa Suíte Standard oferece todo o conforto que você precisa para uma estadia relaxante. 
    Com aproximadamente 25m², o quarto conta com uma cama queen-size, banheiro privativo com chuveiro de água quente,
    e uma pequena varanda com vista parcial para o mar.`,
    amenities: [
      { icon: '🛏️', name: 'Cama Queen-size' },
      { icon: '🌡️', name: 'Ar-condicionado' },
      { icon: '📺', name: 'TV 42"' },
      { icon: '🚿', name: 'Chuveiro quente' },
      { icon: '🧺', name: 'Secador de cabelo' },
      { icon: '☕', name: 'Cafeteira' },
      { icon: '🌊', name: 'Vista parcial mar' },
      { icon: '🅿️', name: 'Estacionamento' },
    ],
    features: ['Wi-Fi Grátis', 'Frigobar', 'Cofre', 'Roupa de Cama Premium'],
    maxGuests: 2,
    size: '25m²',
    price: 450,
    images: Array(4).fill(null).map((_, i) => `/rooms/standard-${i + 1}.jpg`)
  }
} 