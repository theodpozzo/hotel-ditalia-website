import { TranslationsType } from "./index";

export const pt: TranslationsType['pt'] = {
  hotel: {
    name: "Hotel D'Itália",
    description: "Seu refúgio à beira-mar em Arroio do Sal",
    address: "Av. Assis Brasil, 12",
    town: "Arroio do Sal - RS",
    country: "Brasil",
    phone: "(51) 9684-4479",
    email: "contato@hotelditalia.com.br",
    whatsapp: "https://wa.me/555196844479",
    instagram: "https://instagram.com/ditaliahotel",
    facebook: "https://www.facebook.com/DitaliaHotel"
  },
  about: {
    title: "Nossa História",
    history: {
      title: "Tradição Italiana à Beira-mar",
      description1: "Fundado em 1979 pelo Sr. Tarcísio Dal Pozzo, o Hotel D'Itália nasceu do sonho de trazer o charme e a hospitalidade italiana para o litoral gaúcho. Por três gerações, temos sido o destino preferido de famílias que buscam conforto e qualidade em suas férias.",
      description2: "Desfrute de uma combinação única de tradição, conforto e tranquilidade à beira-mar no Hotel D'Itália."
    },
    values: {
      title: "Nossos Valores",
      description: "Conheça o que nos move",
      valuesList: [
        {
          icon: "🤝",
          title: "Hospitalidade",
          description: "Acolhemos cada hóspede como parte da nossa família, oferecendo atendimento personalizado e caloroso."
        },
        {
          icon: "⭐",
          title: "Excelência",
          description: "Buscamos a perfeição em cada detalhe, desde o café da manhã até a limpeza que oferecemos."
        },
        {
          icon: "🌊",
          title: "Sustentabilidade",
          description: "Comprometidos com o uso de energia solar e práticas sustentáveis para preservar nossa bela costa para futuras gerações."
        }
      ]
    },
    team: {
      title: "Nossa Equipe",
      members: [
        { name: "Tilda Dal Pozzo", role: "Diretora Geral" },
        { name: "Theo Dal Pozzo", role: "Gerente de Hospitalidade" },
        { name: "Rejane Lima", role: "Chef Executiva" },
        { name: "Fernanda Camargo Almeida", role: "Funcionária do mês - Mar 25" }
      ]
    },
    awards: {
      title: "Reconhecimentos",
      awardsList: [
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
      beach: "Na beira da praia",
      centre: "No centro de Arroio do Sal",
      torres: "30 min de Torres",
      poa: "2h de Porto Alegre",
    },
    map_section: {
      timeline: {
        big_picture: "Brasil",
        normal: "Rio Grande do Sul",
        zoomed_in: "Litoral Gaúcho",
      },
    },
    locations_nearby: [
      { name: "Na beira da praia", icon: "🏖️" },
      { name: "No centro de Arroio do Sal", icon: "🏙️" },
      { name: "30 min de Torres", icon: "🏰" },
      { name: "2h de Porto Alegre", icon: "🌆" }
    ],
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
    book_now: "Reservar Agora",
    scroll_down: "Rolar para Baixo"
  },
  sidebar: {
    quick_links: "Links Rápidos",
    photo_gallery: "Galeria de Fotos",
    amenities: "Comodidades",
    faq: "Perguntas Frequentes"
  },
  information_section: {
    title: "Descubra o Hotel D'Itália",
    subtitle: "Vivencie a combinação perfeita entre conforto, luxo e hospitalidade italiana",
    learn_more: "Saiba mais",
    info_boxes: [
      {
        title: "Acomodações Luxuosas",
        description: "Nossos quartos combinam design italiano elegante com comodidades modernas para garantir uma estadia confortável e inesquecível.",
        highlights: [
          "Suítes com vista para o mar disponíveis",
          "Roupas de cama premium",
          "Amenidades modernas em todos os quartos"
        ]
      },
      {
        title: "Culinária Italiana Autêntica",
        description: "Desfrute de deliciosos pratos italianos preparados por nossos chefs com ingredientes cuidadosamente selecionados.",
        highlights: [
          "Frutos do mar frescos e locais",
          "Massas e pizzas feitas artesanalmente",
          "Ampla seleção de vinhos"
        ]
      },
      {
        title: "Localização à Beira-mar",
        description: "Localizado diretamente nas belas praias de Arroio do Sal, oferecendo vistas deslumbrantes e fácil acesso ao mar.",
        highlights: [
          "Acesso privativo à praia",
          "Opções gastronômicas à beira-mar",
          "Atividades aquáticas disponíveis"
        ]
      }
    ]
  },
  newsletter_section: {
    title: "Inscrição no Boletim",
    subscribe: "Inscreva-se em nosso boletim para se manter atualizado sobre as últimas novidades.",
  },
  footer: {
    contact: {
      title: "Entre em contato com o D'Itália!"
    },
  },
  header: {
    title: "Reservar Agora",
    navigation_items: [
      { name: 'Início', href: '/', icon: '/svgs/home.svg' },
      { name: 'Galeria', href: '/gallery', icon: '/svgs/gallery.svg' },
      { name: 'Localização', href: '/location', icon: '/svgs/location.svg' },
      { name: 'Nossa História', href: '/about', icon: '/svgs/stars.svg' },
    ],
  },
  contact: {
    needHelp: "Precisa de ajuda?",
    contactUs: "Entre em contato conosco:",
  },
  home: {
    welcome: "Bem-vindo ao Hotel D'Itália",
    description: "Sua casa longe de casa em Arroio do Sal",
  },
  room_comparison: {
    features: [
      {
        name: 'Comodidades',
        features: [
          { id: 'safe', label: 'Cofre', icon: '🔒' },
          { id: 'hairdryer', label: 'Secador de cabelo', icon: '💨' },
        ]
      },
      {
        name: 'Serviços',
        features: [
          { id: 'roomService', label: 'Serviço de quarto', icon: '🍽️' },
          { id: 'cleaning', label: 'Limpeza Diária', icon: '🧹' },
          { id: 'laundry', label: 'Lavanderia', icon: '👕' },
        ]
      }
    ]
  }
};
