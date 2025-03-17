import { TranslationsType } from "./index";

export const it: TranslationsType['it'] = {
  hotel: {
    name: "Hotel D'Itália",
    description: "Il tuo rifugio sul mare ad Arroio do Sal",
    address: "Av. Assis Brasil, 12",
    town: "Arroio do Sal - RS",
    country: "Brasile",
    phone: "+55 (51) 9684-4479",
    email: "contato@hotelditalia.com.br",
    whatsapp: "https://wa.me/555196844479",
    instagram: "https://instagram.com/ditaliahotel",
    facebook: "https://www.facebook.com/DitaliaHotel"
  },
  about: {
    title: "La nostra storia",
    history: {
      title: "Tradizione italiana sul mare",
      description1: "Fondato nel 1979 dal Sig. Tarcísio Dal Pozzo, l'Hotel D'Itália è nato dal sogno di portare il fascino e l'ospitalità italiana sulla costa del Rio Grande do Sul. Da tre generazioni, siamo la destinazione preferita delle famiglie che cercano comfort e qualità nelle loro vacanze.",
      description2: "Goditi una combinazione unica di tradizione, comfort e tranquillità in riva al mare all'Hotel D'Itália."
    },
    values: {
      title: "I nostri valori",
      description: "Scopri ciò che ci ispira",
      valuesList: [
        {
          icon: "🤝",
          title: "Ospitalità",
          description: "Accogliamo ogni ospite come parte della nostra famiglia, offrendo un servizio caldo e personalizzato."
        },
        {
          icon: "⭐",
          title: "Eccellenza",
          description: "Cerchiamo la perfezione in ogni dettaglio, dalla colazione alla pulizia degli ambienti."
        },
        {
          icon: "🌊",
          title: "Sostenibilità",
          description: "Siamo impegnati nell'uso di energia solare e pratiche sostenibili per preservare la nostra splendida costa per le generazioni future."
        }
      ]
    },
    team: {
      title: "Il nostro team",
      members: [
        { name: "Tilda Dal Pozzo", role: "Direttrice Generale" },
        { name: "Theo Dal Pozzo", role: "Responsabile dell'Ospitalità" },
        { name: "Rejane Lima", role: "Chef Esecutivo" },
        { name: "Fernanda Camargo Almeida", role: "Dipendente del mese - Mar 25" }
      ]
    },
    awards: {
      title: "Premi e riconoscimenti",
      awardsList: [
        { year: '2023', award: 'Miglior Hotel sul Mare - RS Tourism Awards' },
        { year: '2022', award: 'Certificato di Eccellenza - TripAdvisor' },
        { year: '2021', award: 'Premio Sostenibilità - Associazione Albergatori' }
      ]
    }
  },
  admin: {

  },
  bookingConfirm: {

  },
  gallery: {
    title: "La nostra galleria",
    description: "Scopri le nostre strutture",
  },
  location: {
    title: "La nostra posizione",
    description: "Trovaci sulla costa del Rio Grande do Sul",
    hotel: {
      title: "Informazioni sull'hotel",
      address: "Indirizzo: Av. Assis Brasil, 12, Arroio do Sal, RS",
      reference: "Punto di riferimento dell'hotel",
      beach: "Direttamente sulla spiaggia",
      centre: "Nel centro di Arroio do Sal",
      torres: "A 30 minuti da Torres",
      poa: "A 2 ore da Porto Alegre",
    },
    map_section: {
      timeline: {
        big_picture: "Brasile",
        normal: "Rio Grande do Sul",
        zoomed_in: "Costa Gaúcha",
      },
    },
    locations_nearby: [
      { name: "Direttamente sulla spiaggia", icon: "🏖️" },
      { name: "Nel centro di Arroio do Sal", icon: "🏙️" },
      { name: "A 30 minuti da Torres", icon: "🏰" },
      { name: "A 2 ore da Porto Alegre", icon: "🌆" }
    ],
  },
  payment: {
    paymentMethods: [
      {
        id: 'pix',
        name: 'PIX',
        icon: '/payment-icons/pix.svg',
        description: 'Pagamento immediato'
      },
      {
        id: 'credit',
        name: 'Carta di Credito',
        icon: '/payment-icons/credit-card.svg',
        description: 'Fino a 12 rate senza interessi'
      },
      {
        id: 'googlepay',
        name: 'Google Pay',
        icon: '/payment-icons/google-pay.svg',
        description: 'Pagamento veloce e sicuro'
      },
      {
        id: 'paypal',
        name: 'PayPal',
        icon: '/payment-icons/paypal.svg',
        description: 'Pagamento internazionale'
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
    book_now: "Prenota Ora",
    scroll_down: "Scorri Giù"
  },
  sidebar: {
    quick_links: "Link Veloci",
    photo_gallery: "Galleria Fotografica",
    amenities: "Servizi",
    faq: "Domande Frequenti"
  },
  information_section: {
    title: "Scopri l'Hotel D'Itália",
    subtitle: "Vivi il perfetto mix di comfort, lusso e ospitalità italiana",
    learn_more: "Scopri di più",
    info_boxes: [
      {
        title: "Alloggi di lusso",
        description: "Le nostre camere combinano l'elegante design italiano con servizi moderni per garantirti un soggiorno indimenticabile.",
        highlights: [
          "Suite vista mare disponibili",
          "Biancheria e letti premium",
          "Servizi moderni in ogni camera"
        ]
      },
      {
        title: "Autentica Cucina Italiana",
        description: "Goditi piatti autentici preparati dai nostri chef esperti con ingredienti selezionati.",
        highlights: [
          "Pesce locale fresco",
          "Pasta e pizza fatte in casa",
          "Ampia selezione di vini"
        ]
      },
      {
        title: "Posizione fronte spiaggia",
        description: "Situato direttamente sulla bellissima spiaggia di Arroio do Sal, con splendida vista e facile accesso.",
        highlights: [
          "Accesso privato alla spiaggia",
          "Ristoranti fronte mare",
          "Attività acquatiche disponibili"
        ]
      }
    ]
  },
  newsletter_section: {
    title: "Iscriviti alla Newsletter",
    subscribe: "Iscriviti per restare aggiornato sulle ultime novità.",
  },
  footer: {
    contact: {
      title: "Contatta Hotel D'Itália!"
    },
  },
  header: {
    title: "Prenota Ora",
    navigation_items: [
      { name: 'Home', href: '/', icon: '/svgs/home.svg' },
      { name: 'Galleria', href: '/gallery', icon: '/svgs/gallery.svg' },
      { name: 'Posizione', href: '/location', icon: '/svgs/location.svg' },
      { name: 'Chi Siamo', href: '/about', icon: '/svgs/stars.svg' },
    ],
  },
  contact: {
    needHelp: "Serve aiuto?",
    contactUs: "Contattaci:",
  },
  home: {
    welcome: "Benvenuto all'Hotel D'Itália",
    description: "La tua casa lontano da casa ad Arroio do Sal",
  },
  room_comparison: {
    features: [
      {
        name: 'Comfort',
        features: [
          { id: 'safe', label: 'Cassaforte', icon: '🔒' },
          { id: 'hairdryer', label: 'Asciugacapelli', icon: '💨' },
        ]
      },
      {
        name: 'Servizi',
        features: [
          { id: 'roomService', label: 'Servizio in camera', icon: '🍽️' },
          { id: 'cleaning', label: 'Pulizia quotidiana', icon: '🧹' },
          { id: 'laundry', label: 'Lavanderia', icon: '👕' },
        ]
      }
    ]
  }
};
