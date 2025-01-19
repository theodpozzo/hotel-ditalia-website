import { TranslationsType } from "./index";

export const it: TranslationsType['it'] = {
  hotel: {
    name: "Hotel D'Italia",
    description: "Il tuo rifugio sulla spiaggia ad Arroio do Sal",
    address: "Av. Assis Brasil, 12",
    town: "Arroio do Sal, RS",
    phone: "(51) 9684-4479",
    email: "contatto@hotelditalia.com.br",
  },
  about: {
    title: "La Nostra Storia",
    history: {
      title: "Tradizione Italiana sulla Spiaggia",
      description: "Fondato nel 1978 dalla famiglia Dal Pozzo, l'Hotel D'Italia è nato dal sogno di portare il fascino e l'ospitalità italiana sulla costa meridionale del Brasile. Per tre generazioni, siamo stati la destinazione preferita delle famiglie in cerca di comfort e qualità nelle loro vacanze."
    },
    values: {
      title: "I Nostri Valori",
      description: "Scopri cosa ci guida",
      items: [
        {
          icon: "🤝",
          title: "Ospitalità",
          description: "Accogliamo ogni ospite come un membro della nostra famiglia, offrendo un servizio personalizzato e caloroso."
        },
        {
          icon: "⭐",
          title: "Eccellenza",
          description: "Ci sforziamo di raggiungere la perfezione in ogni dettaglio, dalla colazione al servizio in camera."
        },
        {
          icon: "🌊",
          title: "Sostenibilità",
          description: "Impegnati in pratiche sostenibili per preservare la nostra bella costa per le generazioni future."
        }
      ]
    },
    team: {
      title: "Il Nostro Team",
      members: [
        { name: "Tilda Dal Pozzo", role: "Direttore Generale" },
        { name: "Theo Dal Pozzo", role: "Responsabile Ospitalità" },
        { name: "X X", role: "Chef Esecutivo" },
        { name: "Nome e Cognome Molto Lungo", role: "Responsabile Eventi" }
      ]
    },
    awards: {
      title: "Riconoscimenti",
      awards: [
        { year: '2023', award: 'Miglior Hotel di Spiaggia - RS Tourism Awards' },
        { year: '2022', award: 'Certificato di Eccellenza - TripAdvisor' },
        { year: '2021', award: 'Premio di Sostenibilità - Associazione Alberghiera' }
      ]
    }
  },
  admin: {
    // Aggiungi eventuali campi necessari per la sezione admin
  },
  bookingConfirm: {
    // Aggiungi eventuali campi necessari per la conferma della prenotazione
  },
  gallery: {
    title: "La Nostra Galleria",
    description: "Esplora le nostre strutture",
  },
  location: {
    title: "La Nostra Posizione",
    description: "Trova la nostra posizione sulla costa meridionale del Brasile",
    hotel: {
      title: "Informazioni sull'Hotel",
      address: "Indirizzo: Av. Assis Brasil, 12, Arroio do Sal, RS",
      reference: "Riferimento dell'Hotel",
      beach: "Vicino alla spiaggia",
      centre: "Vicino al centro città",
      torres: "Vicino a Torres",
      poa: "Vicino a Porto Alegre",
    },
  },
  payment: {
    paymentMethods: [
      {
        id: 'pix',
        name: 'PIX',
        icon: '/payment-icons/pix.svg',
        description: 'Pagamento istantaneo'
      },
      {
        id: 'credit',
        name: 'Carta di Credito',
        icon: '/payment-icons/credit-card.svg',
        description: 'Fino a 12x senza interessi'
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
    // Aggiungi eventuali campi necessari per le recensioni
  },
  room: {
    // Aggiungi eventuali campi necessari per i dettagli della camera
  },
  updates: {
    // Aggiungi eventuali campi necessari per gli aggiornamenti
  },
  booking_timeline: {
    // Aggiungi eventuali campi necessari per la timeline delle prenotazioni
  },
  booking_section: {
    title: "Titolo della Sezione Prenotazioni", // Placeholder per il titolo della sezione prenotazioni
  },
  hero_section: {
    // Aggiungi eventuali campi necessari per la sezione hero
  },
  information_section: {
    title: "Titolo della Sezione Informazioni", // Placeholder per il titolo della sezione informazioni
    description: "Descrizione della Sezione Informazioni", // Placeholder per la descrizione della sezione informazioni
  },
  map_section: {
    timeline: {
      brazil: "Brasile",
      rs: "Rio Grande do Sul",
      litoral: "Regione Costiera",
    },
  },
  newsletter_section: {
    title: "Iscrizione alla Newsletter",
    subscribe: "Iscriviti alla nostra newsletter per aggiornamenti",
  },
  footer: {
    // Aggiungi eventuali campi necessari per il footer
  },
  header: {
    title: "Aperto Ora",
    navigation_items: [
      { name: 'Início', href: '/', icon: '🏠' },
      { name: 'Galeria', href: '/gallery', icon: '🖼️' },
      { name: 'Localização', href: '/location', icon: '📍' },
      { name: 'Sobre Nós', href: '/about', icon: '✨' },
    ],
  },
  contact: {
    needHelp: "Hai bisogno di aiuto?",
    contactUs: "Contattaci:",
  },
  home: {
    welcome: "Benvenuto al Hotel D'Italia",
    description: "La tua casa lontano da casa ad Arroio do Sal",
  },
  room_comparison: {
    features: [
      {
        name: 'Comodità',
        features: [
          { id: 'safe', label: 'Cassetta di Sicurezza', icon: '🔒' },
          { id: 'hairdryer', label: 'Asciugacapelli', icon: '💨' },
        ]
      },
      {
        name: 'Servizi',
        features: [
          { id: 'roomService', label: 'Servizio in Camera', icon: '🍽️' },
          { id: 'cleaning', label: 'Pulizia Giornaliera', icon: '🧹' },
          { id: 'laundry', label: 'Lavanderia', icon: '👕' },
        ]
      }
    ]
  }
}