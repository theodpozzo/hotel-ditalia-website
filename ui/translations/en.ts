import { TranslationsType } from "./index";

export const en: TranslationsType['en'] = {
  hotel: {
    name: "Hotel D'Itália",
    description: "Your seaside retreat in Arroio do Sal",
    address: "Av. Assis Brasil, 12",
    town: "Arroio do Sal - RS",
    country: "Brazil",
    phone: "+55 (51) 9684-4479",
    email: "contact@hotelditalia.com.br",
    whatsapp: "https://wa.me/555196844479",
    instagram: "https://instagram.com/ditaliahotel",
    facebook: "https://www.facebook.com/DitaliaHotel"
  },
  about: {
    title: "Our Story",
    history: {
      title: "Italian Tradition by the Sea",
      description1: "Founded in 1979 by Mr. Tarcísio Dal Pozzo, Hotel D'Itália was born from the dream of bringing Italian charm and hospitality to the southern Brazilian coast. For three generations, we've been the preferred destination for families seeking comfort and quality during their vacations.",
      description2: "Enjoy a blend of tradition, comfort, and seaside tranquility at Hotel D'Itália."
    },
    values: {
      title: "Our Values",
      description: "Discover what drives us",
      valuesList: [
        {
          icon: "🤝",
          title: "Hospitality",
          description: "We welcome each guest as part of our family, offering personalized and warm service."
        },
        {
          icon: "⭐",
          title: "Excellence",
          description: "We strive for perfection in every detail, from breakfast to room cleanliness."
        },
        {
          icon: "🌊",
          title: "Sustainability",
          description: "Committed to solar energy and sustainability to preserve our beautiful coast for future generations."
        }
      ]
    },
    team: {
      title: "Our Team",
      members: [
        { name: "Tilda Dal Pozzo", role: "General Director" },
        { name: "Theo Dal Pozzo", role: "Hospitality Manager" },
        { name: "Rejane Lima", role: "Executive Chef" },
        { name: "Fernanda Camargo Almeida", role: "Employee of the Month - Mar 25" }
      ]
    },
    awards: {
      title: "Awards",
      awardsList: [
        { year: '2023', award: 'Best Beach Hotel - RS Tourism Awards' },
        { year: '2022', award: 'Certificate of Excellence - TripAdvisor' },
        { year: '2021', award: 'Sustainability Award - Hotel Association' }
      ]
    }
  },
  gallery: {
    title: "Gallery",
    img: "Image",
    close: "Close",
    previous: "Previous",
    next: "Next",
    categories: {
      rooms: "Rooms",
      breakfast: "Breakfast",
      socialAreas: "Social Areas",
      views: "Views",
      nearbyAttractions: "Nearby Attractions",
    },
  },
  location: {
    title: "Our Location",
    description: "Find us on the coast of Rio Grande do Sul",
    hotel: {
      title: "Hotel Information",
      address: "Av. Assis Brasil, 12, Arroio do Sal, RS",
      reference: "Hotel Reference",
      beach: "Beachfront location",
      centre: "Located in the center of Arroio do Sal",
      torres: "30min from Torres",
      poa: "2hrs from Porto Alegre",
    },
    map_section: {
      timeline: {
        brazil: "Brazil",
        rs: "Rio Grande do Sul",
        litoral: "Litoral Gaúcho",
      },
    },
    locations_nearby: [
      { name: "Beachfront", icon: "🏖️" },
      { name: "Central Arroio do Sal", icon: "🏙️" },
      { name: "30min from Torres", icon: "🏰" },
      { name: "2hrs from Porto Alegre", icon: "🌆" }
    ],
  },
  payment: {
    paymentMethods: [
      { id: 'pix', name: 'PIX', icon: '/payment-icons/pix.svg', description: 'Instant payment' },
      { id: 'credit', name: 'Credit Card', icon: '/payment-icons/credit-card.svg', description: 'Up to 12 installments, no interest' },
      { id: 'googlepay', name: 'Google Pay', icon: '/payment-icons/google-pay.svg', description: 'Fast and secure payment' },
      { id: 'paypal', name: 'PayPal', icon: '/payment-icons/paypal.svg', description: 'International payments' }
    ]
  },
  hero_section: {
    book_now: "BOOK NOW",
    scroll_down: "EXPLORE"
  },
  sidebar: {
    quick_links: "Quick Links",
    photo_gallery: "Photo Gallery",
    amenities: "Amenities",
    faq: "Frequently Asked Questions"
  },
  information_section: {
    title: "Discover Hotel D'Itália",
    subtitle: "Experience the perfect blend of comfort, luxury, and Italian hospitality",
    learn_more: "Learn more",
    info_boxes: [
      {
        title: "Luxurious Accommodations",
        description: "Elegant Italian design combined with modern amenities for a comfortable and memorable stay.",
        highlights: ["Ocean view suites", "Premium bedding", "Modern amenities"]
      },
      {
        title: "Authentic Italian Cuisine",
        description: "Savor delicious Italian dishes prepared by our expert chefs with fresh ingredients.",
        highlights: ["Fresh seafood", "Homemade pasta", "Extensive wine selection"]
      },
      {
        title: "Beachfront Location",
        description: "Directly on Arroio do Sal’s beautiful beaches with stunning views and easy access.",
        highlights: ["Private beach access", "Beach dining", "Water activities"]
      }
    ]
  },
  newsletter_section: {
    title: "Newsletter Subscription",
    subscribe: "Subscribe to our newsletter for the latest updates.",
  },
  footer: {
    contact: { title: "Contact Hotel D'Itália!" },
  },
  header: {
    title: "Book Now",
    navigation_items: [
      { name: 'Home', href: '/', icon: '/svgs/home.svg' },
      { name: 'Gallery', href: '/gallery', icon: '/svgs/gallery.svg' },
      { name: 'Location', href: '/location', icon: '/svgs/location.svg' },
      { name: 'About Us', href: '/about', icon: '/svgs/stars.svg' },
    ],
  },
  contact: {
    needHelp: "Need Help?",
    contactUs: "Contact us:",
  },
  home: {
    welcome: "Welcome to Hotel D'Itália",
    description: "Your home away from home in Arroio do Sal",
    galleryPreview: {
      title: "Explore Our Hotel",
      description: "Take a visual tour through our beautiful spaces and discover what makes Hotel D'Italia special.",
      viewAll: "View Full Gallery",
    },

  },
};
