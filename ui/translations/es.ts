import { TranslationsType } from "./index";

export const es: TranslationsType['es'] = {
  hotel: {
    name: "Hotel D'Itália",
    description: "Tu refugio junto al mar en Arroio do Sal",
    address: "Av. Assis Brasil, 12",
    town: "Arroio do Sal - RS",
    country: "Brasil",
    phone: "+55 (51) 9684-4479",
    email: "contato@hotelditalia.com.br",
    whatsapp: "https://wa.me/555196844479",
    instagram: "https://instagram.com/ditaliahotel",
    facebook: "https://www.facebook.com/DitaliaHotel"
  },
  about: {
    title: "Nuestra Historia",
    history: {
      title: "Tradición Italiana Frente al Mar",
      description1: "Fundado en 1979 por el Sr. Tarcísio Dal Pozzo, el Hotel D'Itália nació del sueño de traer el encanto y la hospitalidad italiana al litoral gaúcho. Durante tres generaciones hemos sido el destino preferido de familias que buscan confort y calidad en sus vacaciones.",
      description2: "Disfruta de una combinación única de tradición, comodidad y tranquilidad frente al mar en el Hotel D'Itália."
    },
    values: {
      title: "Nuestros Valores",
      description: "Descubre qué nos inspira",
      valuesList: [
        {
          icon: "🤝",
          title: "Hospitalidad",
          description: "Recibimos a cada huésped como parte de nuestra familia, brindando una atención cálida y personalizada."
        },
        {
          icon: "⭐",
          title: "Excelencia",
          description: "Buscamos la perfección en cada detalle, desde el desayuno hasta la limpieza de los espacios."
        },
        {
          icon: "🌊",
          title: "Sostenibilidad",
          description: "Comprometidos con la energía solar y prácticas sostenibles para preservar nuestra hermosa costa para futuras generaciones."
        }
      ]
    },
    team: {
      title: "Nuestro Equipo",
      members: [
        { name: "Tilda Dal Pozzo", role: "Directora General" },
        { name: "Theo Dal Pozzo", role: "Gerente de Hospitalidad" },
        { name: "Rejane Lima", role: "Chef Ejecutiva" },
        { name: "Fernanda Camargo Almeida", role: "Empleada del mes - Mar 25" }
      ]
    },
    awards: {
      title: "Premios y Reconocimientos",
      awardsList: [
        { year: '2023', award: 'Mejor Hotel de Playa - RS Tourism Awards' },
        { year: '2022', award: 'Certificado de Excelencia - TripAdvisor' },
        { year: '2021', award: 'Premio Sostenibilidad - Asociación Hotelera' }
      ]
    }
  },
  admin: {

  },
  bookingConfirm: {

  },
  gallery: {
    title: "Nuestra Galería",
    description: "Explora nuestras instalaciones",
  },
  location: {
    title: "Nuestra Ubicación",
    description: "Encuéntranos en la costa gaúcha",
    hotel: {
      title: "Información del Hotel",
      address: "Dirección: Av. Assis Brasil, 12, Arroio do Sal, RS",
      reference: "Referencia del hotel",
      beach: "A pie de playa",
      centre: "En el centro de Arroio do Sal",
      torres: "A 30 min de Torres",
      poa: "A 2 hrs de Porto Alegre",
    },
    map_section: {
      timeline: {
        big_picture: "Brasil",
        normal: "Rio Grande do Sul",
        zoomed_in: "Costa Gaúcha",
      },
    },
    locations_nearby: [
      { name: "A pie de playa", icon: "🏖️" },
      { name: "En el centro de Arroio do Sal", icon: "🏙️" },
      { name: "A 30 min de Torres", icon: "🏰" },
      { name: "A 2 hrs de Porto Alegre", icon: "🌆" }
    ],
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
        description: 'Hasta 12 cuotas sin interés'
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

  },
  room: {

  },
  updates: {

  },
  booking_timeline: {

  },
  booking_section: {

  },
  hero_section: {
    book_now: "Reservar Ahora",
    scroll_down: "Desplazar hacia abajo"
  },
  sidebar: {
    quick_links: "Enlaces Rápidos",
    photo_gallery: "Galería de Fotos",
    amenities: "Servicios",
    faq: "Preguntas Frecuentes"
  },
  information_section: {
    title: "Descubre el Hotel D'Itália",
    subtitle: "Vive la mezcla perfecta de confort, lujo y hospitalidad italiana",
    learn_more: "Saber más",
    info_boxes: [
      {
        title: "Alojamientos de Lujo",
        description: "Nuestras habitaciones combinan un elegante diseño italiano con comodidades modernas para asegurar una estancia inolvidable.",
        highlights: [
          "Suites con vista al mar disponibles",
          "Ropa de cama premium",
          "Comodidades modernas en cada habitación"
        ]
      },
      {
        title: "Auténtica Cocina Italiana",
        description: "Disfruta de platos auténticos preparados por nuestros chefs expertos con ingredientes seleccionados.",
        highlights: [
          "Pescado fresco local",
          "Pasta y pizza caseras",
          "Amplia selección de vinos"
        ]
      },
      {
        title: "Ubicación Frente al Mar",
        description: "Situado directamente en la hermosa playa de Arroio do Sal, con impresionantes vistas al mar y acceso fácil a la playa.",
        highlights: [
          "Acceso privado a la playa",
          "Opciones gastronómicas frente al mar",
          "Actividades acuáticas disponibles"
        ]
      }
    ]
  },
  newsletter_section: {
    title: "Suscríbete al Boletín",
    subscribe: "Suscríbete para mantenerte actualizado con nuestras últimas noticias.",
  },
  footer: {
    contact: {
      title: "¡Contacta con el Hotel D'Itália!"
    },
  },
  header: {
    title: "Reservar Ahora",
    navigation_items: [
      { name: 'Inicio', href: '/', icon: '/svgs/home.svg' },
      { name: 'Galería', href: '/gallery', icon: '/svgs/gallery.svg' },
      { name: 'Ubicación', href: '/location', icon: '/svgs/location.svg' },
      { name: 'Sobre Nosotros', href: '/about', icon: '/svgs/stars.svg' },
    ],
  },
  contact: {
    needHelp: "¿Necesitas ayuda?",
    contactUs: "Contáctanos:",
  },
  home: {
    welcome: "Bienvenido al Hotel D'Itália",
    description: "Tu hogar lejos de casa en Arroio do Sal",
  },
  room_comparison: {
    features: [
      {
        name: 'Comodidades',
        features: [
          { id: 'safe', label: 'Caja fuerte', icon: '🔒' },
          { id: 'hairdryer', label: 'Secador de pelo', icon: '💨' },
        ]
      },
      {
        name: 'Servicios',
        features: [
          { id: 'roomService', label: 'Servicio a la habitación', icon: '🍽️' },
          { id: 'cleaning', label: 'Limpieza diaria', icon: '🧹' },
          { id: 'laundry', label: 'Lavandería', icon: '👕' },
        ]
      }
    ]
  }
};
