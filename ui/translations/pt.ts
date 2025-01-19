import { TranslationsType } from "./index";

export const pt: TranslationsType['pt'] = {
  hotel: {
    name: "Hotel D'Itália",
    description: "Seu refúgio à beira-mar em Arroio do Sal",
    address: "Av. Assis Brasil, 12",
    town: "Arroio do Sal - RS",
    phone: "(51) 9684-4479",
    email: "contato@hotelditalia.com.br",
    whatsapp: "https://wa.me/555196844479",
  },
  about: {
    title: "Nóssa História",
    history: {
      title: "Tradição Italiana à Beira-mar",
      description: "Fundado em 1978 pela família Dal Pozzo, o Hotel D'Italia nasceu do sonho de trazer o charme e a hospitalidade italiana para o litoral gaúcho. Por três gerações, temos sido o destino preferido de famílias que buscam conforto e qualidade em suas férias."
    },
    values: {
      title: "Nossos Valores",
      description: "Conheça o que nos move",
      items: [
        {
          icon: "🤝",
          title: "Hospitalidade",
          description: "Acolhemos cada hóspede como parte da nossa família, oferecendo atendimento personalizado e caloroso."
        },
        {
          icon: "⭐",
          title: "Excelência",
          description: "Buscamos a perfeição em cada detalhe, desde o café da manhã até o serviço de quarto."
        },
        {
          icon: "🌊",
          title: "Sustentabilidade",
          description: "Comprometidos com práticas sustentáveis para preservar nossa bela costa para futuras gerações."
        }
      ]
    },
    team: {
      title: "Nossa Equipe",
      members: [
        { name: "Tilda Dal Pozzo", role: "Diretor Geral" },
        { name: "Theo Dal Pozzo", role: "Gerente de Hospitalidade" },
        { name: "X X", role: "Chef Executivo" },
        { name: "Very Long Name and Surname", role: "Gerente de Eventos" }
      ]
    },
    awards: {
      title: "Reconhecimentos",
      awards: [
        { year: '2023', award: 'Melhor Hotel de Praia - RS Tourism Awards' },
        { year: '2022', award: 'Certificado de Excelência - TripAdvisor' },
        { year: '2021', award: 'Prêmio Sustentabilidade - Associação Hoteleira' }
      ]
    }
  },
  admin: {
    
  },
  bookingConfirm: {
    
  },
  gallery: {
    title: "Nossa Galeria",
    description: "Conheça nossas instalações",
  },
  location: {
    title: "Nossa Localização",
    description: "Encontre-nos no litoral gaúcho",
    hotel: {
      title: "Informações do Hotel",
      address: "Endereço: Av. Assis Brasil, 12, Arroio do Sal, RS",
      reference: "Referência do Hotel",
      beach: "Perto da praia",
      centre: "Perto do centro da cidade",
      torres: "Perto de Torres",
      poa: "Perto de Porto Alegre",
    },
  },
  payment: {
    paymentMethods: [
      {
        id: 'pix',
        name: 'PIX',
        icon: '/payment-icons/pix.svg',
        description: 'Pagamento instantâneo'
      },
      {
        id: 'credit',
        name: 'Cartão de Crédito',
        icon: '/payment-icons/credit-card.svg',
        description: 'Até 12x sem juros'
      },
      {
        id: 'googlepay',
        name: 'Google Pay',
        icon: '/payment-icons/google-pay.svg',
        description: 'Pagamento rápido e seguro'
      },
      {
        id: 'paypal',
        name: 'PayPal',
        icon: '/payment-icons/paypal.svg',
        description: 'Pagamento internacional'
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

  },
  information_section: {
    info_boxes: [
      {
        title: "Quartos Confortáveis",
        description: "Escolha entre nossas suítes de luxo ou quartos familiares espaçosos.",
        imagePath: "🛏️"
      },
      {
        title: "Beira do Mar",
        description: "Aproveite a vista panorâmica do oceano a partir de sua varanda privativa.",
        imagePath: "🌊"
      },
      {
        title: "Café da Manhã Luxuoso",
        description: "Desfrute de um café da manhã gourmet com vista para o oceano todas as manhãs.",
        imagePath: "🥐"
      },
    ]
  },
  map_section: {
    timeline: {
      brazil: "Brasil",
      rs: "Rio Grande do Sul",
      litoral: "Litoral Gaúcho",
    },
  },
  newsletter_section: {
    title: "Inscrição no Boletim",
    subscribe: "Inscreva-se em nosso boletim para atualizações",
  },
  footer: {
    contact: {
      title: "Entre em Contato"
    },
  },
  header: {
    title: "Abra Agora",
    navigation_items: [
      { name: 'Início', href: '/', icon: '🏠' },
      { name: 'Galeria', href: '/gallery', icon: '🖼️' },
      { name: 'Localização', href: '/location', icon: '📍' },
      { name: 'Sobre Nós', href: '/about', icon: '✨' },
    ],
  },
  contact: {
    needHelp: "Precisa de ajuda?",
    contactUs: "Entre em contato conosco:",
  },
  home: {
    welcome: "Bem-vindo ao Hotel D'Itália",
    description: "Sua casa longe de casa em Arroio do Sal",
    // Add all text from home page
  },
  room_comparison: {
    features: [
      {
        name: 'Comodidades',
        features: [
          { id: 'safe', label: 'Cofre', icon: '🔒' },
          { id: 'hairdryer', label: 'Secador', icon: '💨' },
        ]
      },
      {
        name: 'Serviços',
        features: [
          { id: 'roomService', label: 'Serviço de Quarto', icon: '🍽️' },
          { id: 'cleaning', label: 'Limpeza Diária', icon: '🧹' },
          { id: 'laundry', label: 'Lavanderia', icon: '👕' },
        ]
      }
    ]
  }
}
