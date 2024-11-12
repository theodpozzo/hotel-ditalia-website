export const FEATURES = {
  ROOM_COMPARISON: false,    // Set to true to enable room comparison
  VIRTUAL_TOUR: false,       // Future feature
  LOYALTY_PROGRAM: false,    // Future feature
  WEATHER_WIDGET: true,      // Currently active
  GALLERY_CATEGORIES: false, // Gallery filtering by category
  SPECIAL_REQUESTS: false,   // Special requests during booking
  REVIEWS: false,           // Guest reviews section
  NEWSLETTER: true,         // Newsletter subscription
} as const

export const HOTEL_INFO = {
  NAME: "Hotel D'Italia",
  LOCATION: {
    ADDRESS: "Av. Assis Brasil, 12",
    CITY: "Arroio do Sal",
    STATE: "RS",
    ZIP: "95585-000",
    COUNTRY: "Brasil",
    COORDS: {
      LAT: -29.550914788484867,
      LNG: -49.8857531028526
    }
  },
  CONTACT: {
    PHONE: "+55 51 9XXXX-XXXX",
    WHATSAPP: "+55 51 9XXXX-XXXX",
    EMAIL: "contato@hotelditalia.com",
    SOCIAL: {
      FACEBOOK: "https://facebook.com/hotelditalia",
      INSTAGRAM: "https://instagram.com/hotelditalia",
      WHATSAPP: "https://wa.me/5551912345678"
    }
  }
} as const

export const API_CONFIG = {
  WEATHER_API_KEY: process.env.NEXT_PUBLIC_WEATHER_API_KEY,
  MAPS_API_KEY: process.env.NEXT_PUBLIC_MAPS_API_KEY,
  BASE_URL: process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000',
} as const 