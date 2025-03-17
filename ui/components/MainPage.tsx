'use client'

// Import all the main section components that make up the homepage
import { HeroSection } from './sections/HeroSection'
import { MapSection } from './sections/MapSection'
import { BookingSection } from './sections/BookingSection'
import { InformationSection } from './sections/InformationSection'
import { NewsletterSection } from './sections/NewsletterSection'

// MainPage component: The primary layout component that combines all main sections
export function MainPage() {
  return (
    <>

      {/* Hero Section: Full-screen landing section with video background */}
      <HeroSection />

      {/* Map Section: Where the user can scroll down to zoom into where the hotel is */}
      {/* <MapSection /> */}

      {/* Booking Section: Where users can select dates and room preferences */}
      {/* <BookingSection /> */}

      {/* Information Section: Hotel details and room descriptions */}
      <InformationSection />

    </>
  )
} 