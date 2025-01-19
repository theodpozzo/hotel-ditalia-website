import { TranslationsType } from "./index";

export const en: TranslationsType['en'] = {
  hotel: {
    name: "Hotel D'Italia",
    description: "Your beachfront refuge in Arroio do Sal",
    address: "Av. Assis Brasil, 12",
    town: "Arroio do Sal, RS",
    phone: "+55 51 96844479",
    email: "contact@hotelditalia.com.br",
  },
  about: {
    title: "Our History",
    history: {
      title: "Italian Tradition by the Sea",
      description: "Founded in 1978 by the Dal Pozzo family, Hotel D'Italia was born from the dream of bringing Italian charm and hospitality to the southern coast of Brazil. For three generations, we have been the preferred destination for families seeking comfort and quality in their vacations."
    },
    values: {
      title: "Our Values",
      description: "Discover what drives us",
      items: [
        {
          icon: "🤝",
          title: "Hospitality",
          description: "We welcome each guest as part of our family, offering personalized and warm service."
        },
        {
          icon: "⭐",
          title: "Excellence",
          description: "We strive for perfection in every detail, from breakfast to room service."
        },
        {
          icon: "🌊",
          title: "Sustainability",
          description: "Committed to sustainable practices to preserve our beautiful coast for future generations."
        }
      ]
    },
    team: {
      title: "Our Team",
      members: [
        { name: "Tilda Dal Pozzo", role: "General Director" },
        { name: "Theo Dal Pozzo", role: "Hospitality Manager" },
        { name: "X X", role: "Executive Chef" },
        { name: "Very Long Name and Surname", role: "Events Manager" }
      ]
    },
    awards: {
      title: "Recognitions",
      awards: [
        { year: '2023', award: 'Best Beach Hotel - RS Tourism Awards' },
        { year: '2022', award: 'Certificate of Excellence - TripAdvisor' },
        { year: '2021', award: 'Sustainability Award - Hotel Association' }
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
    title: "Our Gallery",
    description: "Explore our facilities",
  },
  location: {
    title: "Our Location",
    description: "Find us on the southern coast of Brazil",
    hotel: {
      title: "Hotel Information",
      address: "Address: Av. Assis Brasil, 12, Arroio do Sal, RS",
      reference: "Hotel Reference",
      beach: "Close to the beach",
      centre: "Near the city center",
      torres: "Nearby Torres",
      poa: "Close to Porto Alegre",
    },
  },
  payment: {
    paymentMethods: [
      {
        id: 'pix',
        name: 'PIX',
        icon: '/payment-icons/pix.svg',
        description: 'Instant payment'
      },
      {
        id: 'credit',
        name: 'Credit Card',
        icon: '/payment-icons/credit-card.svg',
        description: 'Up to 12x interest-free'
      },
      {
        id: 'googlepay',
        name: 'Google Pay',
        icon: '/payment-icons/google-pay.svg',
        description: 'Fast and secure payment'
      },
      {
        id: 'paypal',
        name: 'PayPal',
        icon: '/payment-icons/paypal.svg',
        description: 'International payment'
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
    title: "Booking Section Title",
  },
  hero_section: {
    // Add any necessary fields for hero section
  },
  information_section: {
    title: "Information Section Title",
    description: "Information Section Description",
  },
  map: {
    timeline: {
      brazil: "Brazil",
      rs: "Rio Grande do Sul",
      litoral: "Coastal Region",
    },
  },
  newsletter_section: {
    title: "Newsletter Subscription",
    subscribe: "Subscribe to our newsletter for updates",
  },
  footer: {
    copyright: "© 2025 Hotel D'Italia. All rights reserved.",
    selectLanguage: "Select Language",
    languages: {
      en: "English",
      pt: "Português",
      es: "Español",
      fr: "Français",
      it: "Italiano",
    },
  },
  header: {
    title: "Open Now",
    navigation_items: [
      { name: 'Home', href: '/', icon: '🏠' },
      { name: 'Gallery', href: '/gallery', icon: '🖼️' },
      { name: 'Location', href: '/location', icon: '📍' },
      { name: 'About Us', href: '/about', icon: '✨' },    ],
  },
  contact: {
    needHelp: "Need help?",
    contactUs: "Contact us:",
  },
  home: {
    welcome: "Welcome to Hotel D'Italia",
    description: "Your home away from home in Arroio do Sal",
  },
  room_comparison: {
    features: [
      {
        name: 'Amenities',
        features: [
          { id: 'safe', label: 'Safe', icon: '🔒' },
          { id: 'hairdryer', label: 'Hairdryer', icon: '💨' },
        ]
      },
      {
        name: 'Services',
        features: [
          { id: 'roomService', label: 'Room Service', icon: '🍽️' },
          { id: 'cleaning', label: 'Daily Cleaning', icon: '🧹' },
          { id: 'laundry', label: 'Laundry', icon: '👕' },
        ]
      }
    ]
  }
}
