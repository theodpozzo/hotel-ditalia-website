'use client'

// Import all the main section components that make up the homepage
import { HeroSection } from './sections/HeroSection'
import { BookingSection } from './sections/BookingSection'
import { InformationSection } from './sections/InformationSection'
import { NewsletterSection } from './sections/NewsletterSection'

// MainPage component: The primary layout component that combines all main sections
export function MainPage() {
  return (
    <>
      {/* Hero Section: Full-screen landing section with video background */}
      <HeroSection />
      
      {/* Booking Section: Where users can select dates and room preferences */}
      <BookingSection />
      
      {/* Information Section: Hotel details and room descriptions */}
      <InformationSection />
      
      {/* Newsletter Section: Email signup for updates */}
      <NewsletterSection />
    </>
  )
} 