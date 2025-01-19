import { TranslationsType } from "./index";

export const fr: TranslationsType['fr'] = {
  hotel: {
    name: "Hôtel D'Italia",
    description: "Votre refuge en bord de mer à Arroio do Sal",
    address: "Av. Assis Brasil, 12",
    town: "Arroio do Sal, RS",
    phone: "(51) 9684-4479",
    email: "contact@hotelditalia.com.br",
  },
  about: {
    title: "Notre Histoire",
    history: {
      title: "Tradition Italienne au Bord de la Mer",
      description: "Fondé en 1978 par la famille Dal Pozzo, l'Hôtel D'Italia est né du rêve d'apporter le charme et l'hospitalité italienne à la côte sud du Brésil. Pendant trois générations, nous avons été la destination préférée des familles à la recherche de confort et de qualité pendant leurs vacances."
    },
    values: {
      title: "Nos Valeurs",
      description: "Découvrez ce qui nous motive",
      items: [
        {
          icon: "🤝",
          title: "Hospitalité",
          description: "Nous accueillons chaque invité comme un membre de notre famille, offrant un service personnalisé et chaleureux."
        },
        {
          icon: "⭐",
          title: "Excellence",
          description: "Nous visons la perfection dans chaque détail, du petit-déjeuner au service en chambre."
        },
        {
          icon: "🌊",
          title: "Durabilité",
          description: "Engagés dans des pratiques durables pour préserver notre belle côte pour les générations futures."
        }
      ]
    },
    team: {
      title: "Notre Équipe",
      members: [
        { name: "Tilda Dal Pozzo", role: "Directrice Générale" },
        { name: "Theo Dal Pozzo", role: "Responsable de l'Hospitalité" },
        { name: "X X", role: "Chef Exécutif" },
        { name: "Nom et Prénom Très Long", role: "Responsable des Événements" }
      ]
    },
    awards: {
      title: "Reconnaissances",
      awards: [
        { year: '2023', award: 'Meilleur Hôtel de Plage - Prix du Tourisme de RS' },
        { year: '2022', award: 'Certificat d’Excellence - TripAdvisor' },
        { year: '2021', award: 'Prix de la Durabilité - Association Hôtelière' }
      ]
    }
  },
  admin: {
    // Ajoutez tous les champs nécessaires pour la section admin
  },
  bookingConfirm: {
    // Ajoutez tous les champs nécessaires pour la confirmation de réservation
  },
  gallery: {
    title: "Notre Galerie",
    description: "Découvrez nos installations",
  },
  location: {
    title: "Notre Emplacement",
    description: "Trouvez-nous sur la côte sud du Brésil",
    hotel: {
      title: "Informations sur l'Hôtel",
      address: "Adresse: Av. Assis Brasil, 12, Arroio do Sal, RS",
      reference: "Référence de l'Hôtel",
      beach: "Près de la plage",
      centre: "Près du centre-ville",
      torres: "Près de Torres",
      poa: "Près de Porto Alegre",
    },
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
        description: 'Jusqu’à 12x sans intérêt'
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
    // Ajoutez tous les champs nécessaires pour les avis
  },
  room: {
    // Ajoutez tous les champs nécessaires pour les détails
  },
  updates: {
    // Ajoutez tous les champs nécessaires pour les mises à jour
  },
  booking_timeline: {
    // Ajoutez tous les champs nécessaires pour la chronologie des réservations
  },
  booking_section: {
    title: "Titre de la Section de Réservation", // Placeholder pour le titre de la section de réservation
  },
  hero_section: {
    // Ajoutez tous les champs nécessaires pour la section hero
  },
  information_section: {
    title: "Titre de la Section d'Information", // Placeholder pour le titre de la section d'information
    description: "Description de la Section d'Information", // Placeholder pour la description de la section d'information
  },
  map_section: {
    timeline: {
      brazil: "Brésil",
      rs: "Rio Grande do Sul",
      litoral: "Région Côtière",
    },
  },
  newsletter_section: {
    title: "Inscription à la Newsletter",
    subscribe: "Inscrivez-vous à notre newsletter pour des mises à jour",
  },
  footer: {
    // Ajoutez tous les champs nécessaires pour le pied de page
  },
  header: {
    title: "Ouvert Maintenant",
    navigation_items: [
      { name: 'FRENCH', href: '/', icon: '🏠' },
      { name: 'FRENCH', href: '/gallery', icon: '🖼️' },
      { name: 'FRENCH', href: '/location', icon: '📍' },
      { name: 'FRENCH', href: '/about', icon: '✨' },    ],
  },
  contact: {
    needHelp: "Besoin d'aide?",
    contactUs: "Contactez-nous:",
  },
  home: {
    welcome: "Bienvenue à l'Hôtel D'Italia",
    description: "Votre maison loin de chez vous à Arroio do Sal",
  },
  room_comparison: {
    features: [
      {
        name: 'Commodités',
        features: [
          { id: 'safe', label: 'Coffre-fort', icon: '🔒' },
          { id: 'hairdryer', label: 'Sèche-cheveux', icon: '💨' },
        ]
      },
      {
        name: 'Services',
        features: [
          { id: 'roomService', label: 'Service d\'étage', icon: '🍽️' },
          { id: 'cleaning', label: 'Nettoyage Quotidien', icon: '🧹' },
          { id: 'laundry', label: 'Blanchisserie', icon: '👕' },
        ]
      }
    ]
  }
}