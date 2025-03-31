'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import { MainPage } from "@/components/MainPage"

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
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-blue-50">
        <MainPage />
    </section>
  );
}