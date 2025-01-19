import { TranslationsType } from "./index";

export const es: TranslationsType['es'] = {
  hotel: {
    name: "Hotel D'Italia",
    description: "Su refugio frente al mar en Arroio do Sal",
    address: "Av. Assis Brasil, 12",
    town: "Arroio do Sal, RS",
    phone: "(51) 9684-4479",
    email: "contacto@hotelditalia.com.br",
  },
  about: {
    title: "Nuestra Historia",
    history: {
      title: "Tradición Italiana junto al Mar",
      description: "Fundado en 1978 por la familia Dal Pozzo, el Hotel D'Italia nació del sueño de traer el encanto y la hospitalidad italiana a la costa sur de Brasil. Durante tres generaciones, hemos sido el destino preferido de familias que buscan comodidad y calidad en sus vacaciones."
    },
    values: {
      title: "Nuestros Valores",
      description: "Descubre qué nos impulsa",
      items: [
        {
          icon: "🤝",
          title: "Hospitalidad",
          description: "Recibimos a cada huésped como parte de nuestra familia, ofreciendo un servicio personalizado y cálido."
        },
        {
          icon: "⭐",
          title: "Excelencia",
          description: "Buscamos la perfección en cada detalle, desde el desayuno hasta el servicio a la habitación."
        },
        {
          icon: "🌊",
          title: "Sostenibilidad",
          description: "Comprometidos con prácticas sostenibles para preservar nuestra hermosa costa para las generaciones futuras."
        }
      ]
    },
    team: {
      title: "Nuestro Equipo",
      members: [
        { name: "Tilda Dal Pozzo", role: "Directora General" },
        { name: "Theo Dal Pozzo", role: "Gerente de Hospitalidad" },
        { name: "X X", role: "Chef Ejecutivo" },
        { name: "Nombre y Apellido Muy Largo", role: "Gerente de Eventos" }
      ]
    },
    awards: {
      title: "Reconocimientos",
      awards: [
        { year: '2023', award: 'Mejor Hotel de Playa - Premios de Turismo de RS' },
        { year: '2022', award: 'Certificado de Excelencia - TripAdvisor' },
        { year: '2021', award: 'Premio Sostenibilidad - Asociación Hotelera' }
      ]
    }
  },
  admin: {
    // Add any necessary fields for the admin section
  },
  bookingConfirm: {
    // Add any necessary fields for booking confirmation
  },
  gallery: {
    title: "Nuestra Galería",
    description: "Explora nuestras instalaciones",
  },
  location: {
    title: "Nuestra Ubicación",
    description: "Encuéntranos en la costa sur de Brasil",
    hotel: {
      title: "Información del Hotel",
      address: "Dirección: Av. Assis Brasil, 12, Arroio do Sal, RS",
      reference: "Referencia del Hotel",
      beach: "Cerca de la playa",
      centre: "Cerca del centro de la ciudad",
      torres: "Cerca de Torres",
      poa: "Cerca de Porto Alegre",
    },
  },
  payment: {
    paymentMethods: [
      {
        id: 'pix',
        name: 'PIX',
        icon: '/payment-icons/pix.svg',
        description: 'Pago instantáneo'
      },
      {
        id: 'credit',
        name: 'Tarjeta de Crédito',
        icon: '/payment-icons/credit-card.svg',
        description: 'Hasta 12x sin intereses'
      },
      {
        id: 'googlepay',
        name: 'Google Pay',
        icon: '/payment-icons/google-pay.svg',
        description: 'Pago rápido y seguro'
      },
      {
        id: 'paypal',
        name: 'PayPal',
        icon: '/payment-icons/paypal.svg',
        description: 'Pago internacional'
      }
    ]
  },
  reviews: {
    // Add any necessary fields for reviews
  },
  room: {
    // Add any necessary fields for room details
  },
  updates: {
    // Add any necessary fields for updates
  },
  booking_timeline: {
    // Add any necessary fields for booking timeline
  },
  booking_section: {
    title: "Título de la Sección de Reservas", // Placeholder for booking section title
  },
  hero_section: {
    // Add any necessary fields for hero section
  },
  information_section: {
    title: "Título de la Sección de Información", // Placeholder for information section title
    description: "Descripción de la Sección de Información", // Placeholder for information section description
  },
  map_section: {
    timeline: {
      brazil: "Brasil",
      rs: "Río Grande del Sur",
      litoral: "Región Costera",
    },
  },
  newsletter_section: {
    title: "Suscripción al Boletín",
    subscribe: "Suscríbete a nuestro boletín para actualizaciones",
  },
  footer: {
    // Add any necessary fields for footer
  },
  header: {
    title: "Abierto Ahora",
    navigation_items: [
      { name: 'Início', href: '/', icon: '🏠' },
      { name: 'Galeria', href: '/gallery', icon: '🖼️' },
      { name: 'Localização', href: '/location', icon: '📍' },
      { name: 'Sobre Nós', href: '/about', icon: '✨' },    ],
  },
  contact: {
    needHelp: "¿Necesitas ayuda?",
    contactUs: "Contáctanos:",
  },
  home: {
    welcome: "Bienvenido al Hotel D'Italia",
    description: "Tu hogar lejos de casa en Arroio do Sal",
  },
  room_comparison: {
    features: [
      {
        name: 'Comodidades',
        features: [
          { id: 'safe', label: 'Caja de Seguridad', icon: '🔒' },
          { id: 'hairdryer', label: 'Secador de Pelo', icon: '💨' },
        ]
      },
      {
        name: 'Servicios',
        features: [
          { id: 'roomService', label: 'Servicio a la Habitación', icon: '🍽️' },
          { id: 'cleaning', label: 'Limpieza Diaria', icon: '🧹' },
          { id: 'laundry', label: 'Lavandería', icon: '👕' },
        ]
      }
    ]
  }
}