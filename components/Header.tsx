'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useRouter } from 'next/navigation'

const languages = [
  { code: 'pt', flag: '/flags/br.svg', label: 'Português' },
  { code: 'en', flag: '/flags/gb.svg', label: 'English' },
  { code: 'es', flag: '/flags/es.svg', label: 'Español' },
  { code: 'fr', flag: '/flags/fr.svg', label: 'Français' },
]

const navigationItems = [
  { name: 'Início', href: '/', icon: '🏠' },
  { name: 'Galeria', href: '/gallery', icon: '🖼️' },
  { name: 'Localização', href: '/location', icon: '📍' },
  { name: 'Sobre Nós', href: '/about', icon: '✨' },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [language, setLanguage] = useState('pt')
  const router = useRouter()

  const scrollToBooking = () => {
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

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white opacity-90 backdrop-blur-sm">
      <div className="max-w-[1920px] mx-auto px-8 md:px-12 py-2 flex justify-between items-center ">
        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="group -ml-6">
              <div className="flex flex-col justify-center items-center w-6 h-6">
                <span className="w-6 h-0.5 bg-blue-600 transition-all group-hover:w-5"></span>
                <span className="w-6 h-0.5 bg-blue-600 my-1.5 transition-all group-hover:w-4"></span>
                <span className="w-6 h-0.5 bg-blue-600 transition-all group-hover:w-5"></span>
              </div>
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] sm:w-[400px] p-0">
            {/* Logo section */}
            <Link href="/" className="block p-8 bg-[#004175] hover:bg-[#00325A] transition-colors"
            onClick={() => setIsMenuOpen(false)}>
              <div className="flex flex-col items-center text-white">
                <div className="text-4xl mb-2">🏨</div>
                <h1 className="text-2xl font-semibold">Hotel D'Italia</h1>
                <p className="text-sm opacity-80">Arroio do Sal, RS</p>
              </div>
            </Link>

            {/* Navigation */}
            <nav className="p-6">
              <div className="space-y-2">
                {navigationItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center gap-3 px-4 py-3 text-[#004175] hover:bg-blue-50 rounded-lg transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="text-xl">{item.icon}</span>
                    <span className="text-lg">{item.name}</span>
                  </Link>
                ))}
              </div>

              {/* Contact section */}
              <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                <h3 className="text-sm font-semibold text-[#004175] mb-2">Precisa de ajuda?</h3>
                <p className="text-sm text-gray-600 mb-3">Entre em contato conosco:</p>
                <div className="space-y-2">
                  <a 
                    href="tel:+55519XXXXXXXX" 
                    className="flex items-center gap-2 text-sm text-[#004175] hover:underline"
                  >
                    📞 +55 51 9XXXX-XXXX
                  </a>
                  <a 
                    href="mailto:contato@hotelditalia.com" 
                    className="flex items-center gap-2 text-sm text-[#004175] hover:underline"
                  >
                    ✉️ contato@hotelditalia.com
                  </a>
                </div>
              </div>
            </nav>
          </SheetContent>
        </Sheet>

        <Link href="/" className="absolute left-1/2 transform -translate-x-1/2 text-3xl">
          🏨
        </Link>

        <div className="flex items-center space-x-4">
          <Button 
            onClick={scrollToBooking}
            className="bg-[#004175] hover:bg-[#00325A] rounded text-white transition-colors"
          >
            Reservar Agora
          </Button>
          
          <Button 
            variant="ghost"
            onClick={() => router.push('/admin')}
            className="text-[#004175] hover:bg-blue-50"
          >
            Admin
          </Button>

          <Select value={language} onValueChange={setLanguage}>
            <SelectTrigger className="w-[64px] px-2 mr-[-1rem] rounded border-[#004175] focus:ring-[#004175]">
              <SelectValue>
                <div className="flex items-center justify-start w-full pr-1">
                  <Image 
                    src={languages.find(lang => lang.code === language)?.flag || '/flags/br.svg'}
                    alt=""
                    width={24}
                    height={16}
                    className="rounded"
                  />
                </div>
              </SelectValue>
            </SelectTrigger>
            <SelectContent className="bg-white opacity-90 rounded border-[#004175]">
              {languages.map((lang) => (
                <SelectItem 
                  key={lang.code} 
                  value={lang.code}
                  className="hover:bg-blue-100 cursor-pointer"
                >
                  <span className="flex rounded items-center gap-2">
                    <Image 
                      src={lang.flag}
                      alt=""
                      width={24}
                      height={16}
                      className="rounded"
                    />
                    <span className="text-sm text-gray-600">{lang.label}</span>
                  </span>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </header>
  )
} 