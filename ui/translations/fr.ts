import { TranslationsType } from "./index";

export const fr: TranslationsType['fr'] = {
  hotel: {
    name: "Hôtel D'Itália",
    description: "Votre refuge au bord de la mer à Arroio do Sal",
    address: "Av. Assis Brasil, 12",
    town: "Arroio do Sal - RS",
    country: "Brésil",
    phone: "+55 (51) 9684-4479",
    email: "contato@hotelditalia.com.br",
    whatsapp: "https://wa.me/555196844479",
    instagram: "https://instagram.com/ditaliahotel",
    facebook: "https://www.facebook.com/DitaliaHotel"
  },
  about: {
    title: "Notre Histoire",
    history: {
      title: "Tradition Italienne au Bord de la Mer",
      description1: "Fondé en 1979 par M. Tarcísio Dal Pozzo, l'Hôtel D'Itália est né du rêve d'apporter le charme et l'hospitalité italienne sur la côte du Rio Grande do Sul. Depuis trois générations, nous sommes la destination favorite des familles en quête de confort et d'excellence pour leurs vacances.",
      description2: "Profitez d'une combinaison unique de tradition, de confort et de sérénité face à l'océan à l'Hôtel D'Itália."
    },
    values: {
      title: "Nos Valeurs",
      description: "Découvrez ce qui nous inspire",
      valuesList: [
        {
          icon: "🤝",
          title: "Hospitalité",
          description: "Nous accueillons chaque client comme un membre de notre famille, avec chaleur et attention personnalisée."
        },
        {
          icon: "⭐",
          title: "Excellence",
          description: "Nous visons la perfection dans chaque détail, du petit-déjeuner à la propreté impeccable des espaces."
        },
        {
          icon: "🌊",
          title: "Durabilité",
          description: "Engagés à utiliser l'énergie solaire et adopter des pratiques durables pour préserver notre belle côte pour les générations futures."
        }
      ]
    },
    team: {
      title: "Notre Équipe",
      members: [
        { name: "Tilda Dal Pozzo", role: "Directrice Générale" },
        { name: "Theo Dal Pozzo", role: "Responsable de l'Hospitalité" },
        { name: "Rejane Lima", role: "Chef Exécutif" },
        { name: "Fernanda Camargo Almeida", role: "Employée du mois - Mars 25" }
      ]
    },
    awards: {
      title: "Prix et Distinctions",
      awardsList: [
        { year: '2023', award: 'Meilleur Hôtel de Plage - RS Tourism Awards' },
        { year: '2022', award: "Certificat d'Excellence - TripAdvisor" },
        { year: '2021', award: 'Prix de la Durabilité - Association Hôtelière' }
      ]
    }
  },
  admin: {

  },
  bookingConfirm: {

  },
  gallery: {
    title: "Notre Galerie",
    description: "Découvrez nos installations",
  },
  location: {
    title: "Notre Emplacement",
    description: "Retrouvez-nous sur la côte du Rio Grande do Sul",
    hotel: {
      title: "Informations sur l'Hôtel",
      address: "Adresse : Av. Assis Brasil, 12, Arroio do Sal, RS",
      reference: "Référence de l'hôtel",
      beach: "En bord de plage",
      centre: "Au centre d'Arroio do Sal",
      torres: "À 30 min de Torres",
      poa: "À 2h de Porto Alegre",
    },
    map_section: {
      timeline: {
        big_picture: "Brésil",
        normal: "Rio Grande do Sul",
        zoomed_in: "Litoral Gaúcho",
      },
    },
    locations_nearby: [
      { name: "En bord de plage", icon: "🏖️" },
      { name: "Au centre d'Arroio do Sal", icon: "🏙️" },
      { name: "À 30 min de Torres", icon: "🏰" },
      { name: "À 2h de Porto Alegre", icon: "🌆" }
    ],
  },
  payment: {
    paymentMethods: [
      {
        id: 'pix',
        name: 'PIX',
        icon: '/payment-icons/pix.svg',
        description: 'Paiement instantané'
      },
      {
        id: 'credit',
        name: 'Carte de Crédit',
        icon: '/payment-icons/credit-card.svg',
        description: 'Jusqu’à 12 fois sans frais'
      },
      {
        id: 'googlepay',
        name: 'Google Pay',
        icon: '/payment-icons/google-pay.svg',
        description: 'Paiement rapide et sécurisé'
      },
      {
        id: 'paypal',
        name: 'PayPal',
        icon: '/payment-icons/paypal.svg',
        description: 'Paiement international'
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
    book_now: "Réserver Maintenant",
    scroll_down: "Faire défiler vers le bas"
  },
  sidebar: {
    quick_links: "Liens Rapides",
    photo_gallery: "Galerie de Photos",
    amenities: "Équipements",
    faq: "Questions Fréquentes"
  },
  information_section: {
    title: "Découvrez l'Hôtel D'Itália",
    subtitle: "Vivez l’alliance parfaite du confort, du luxe et de l’hospitalité italienne",
    learn_more: "En savoir plus",
    info_boxes: [
      {
        title: "Chambres de Luxe",
        description: "Nos chambres conjuguent élégance italienne et équipements modernes pour un séjour mémorable.",
        highlights: [
          "Suites avec vue sur la mer disponibles",
          "Literie haut de gamme",
          "Équipements modernes dans chaque chambre"
        ]
      },
      {
        title: "Cuisine Italienne Authentique",
        description: "Savourez des plats authentiques préparés par nos chefs avec des ingrédients soigneusement sélectionnés.",
        highlights: [
          "Fruits de mer frais et locaux",
          "Pâtes et pizzas maison",
          "Large sélection de vins"
        ]
      },
      {
        title: "Situation en Bord de Mer",
        description: "Situé directement sur la magnifique plage d’Arroio do Sal, offrant une vue imprenable et un accès facile à la mer.",
        highlights: [
          "Accès privé à la plage",
          "Restauration face à la mer",
          "Activités nautiques disponibles"
        ]
      }
    ]
  },
  newsletter_section: {
    title: "Inscription à la Newsletter",
    subscribe: "Abonnez-vous pour recevoir nos dernières actualités.",
  },
  footer: {
    contact: {
      title: "Contactez l'Hôtel D'Itália !"
    },
  },
  header: {
    title: "Réserver Maintenant",
    navigation_items: [
      { name: 'Accueil', href: '/', icon: '/svgs/home.svg' },
      { name: 'Galerie', href: '/gallery', icon: '/svgs/gallery.svg' },
      { name: 'Emplacement', href: '/location', icon: '/svgs/location.svg' },
      { name: 'À Propos', href: '/about', icon: '/svgs/stars.svg' },
    ],
  },
  contact: {
    needHelp: "Besoin d'aide ?",
    contactUs: "Contactez-nous :",
  },
  home: {
    welcome: "Bienvenue à l'Hôtel D'Itália",
    description: "Votre chez-vous loin de chez vous à Arroio do Sal",
  },
  room_comparison: {
    features: [
      {
        name: 'Équipements',
        features: [
          { id: 'safe', label: 'Coffre-fort', icon: '🔒' },
          { id: 'hairdryer', label: 'Sèche-cheveux', icon: '💨' },
        ]
      },
      {
        name: 'Services',
        features: [
          { id: 'roomService', label: 'Service en chambre', icon: '🍽️' },
          { id: 'cleaning', label: 'Nettoyage quotidien', icon: '🧹' },
          { id: 'laundry', label: 'Blanchisserie', icon: '👕' },
        ]
      }
    ]
  }
};
