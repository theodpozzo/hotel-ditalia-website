'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import { MainPage } from "@/components/MainPage"
import { LanguageProvider } from '@/context/LanguageContext'

export default function Home() {
  const searchParams = useSearchParams()

  useEffect(() => {
    if (searchParams.get('scroll') === 'booking') {
      const bookingSection = document.getElementById('booking-section')
      if (bookingSection) {
        const offset = 100
        const elementPosition = bookingSection.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - offset
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        })
      }
    }
  }, [searchParams])

  return (
    <LanguageProvider>
      <MainPage />
    </LanguageProvider>
  );
}