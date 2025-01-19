'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useRouter } from 'next/navigation';
import { useLanguageContext } from '@/context/LanguageContext';
import { Sheet } from './ui/sheet';
import { Button } from 'react-day-picker';
import { SheetTrigger, SheetContent } from './ui/sheet';

const languages = [
  { code: 'en', label: 'English', flag: '/flags/gb.svg' },
  { code: 'pt', label: 'Português', flag: '/flags/br.svg' },
  { code: 'es', label: 'Español', flag: '/flags/es.svg' },
  { code: 'fr', label: 'Français', flag: '/flags/fr.svg' },
  { code: 'it', label: 'Italiano', flag: '/flags/it.svg' },
];

export function Header() {
  const { language, setLanguage, t, tArray} = useLanguageContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const navigationItems = tArray('header.navigation_items') as unknown as { name: string; href: string; icon: string }[];

  // Scroll to booking section logic
  const scrollToBooking = () => {
    const bookingSection = document.getElementById('booking-section');
    if (bookingSection) {
      const offset = 0;
      const elementPosition = bookingSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white opacity-90 backdrop-blur-sm">
      <div className="max-w-[1920px] mx-auto px-8 md:px-12 py-2 flex justify-between items-center">

        {/* Hamburger Menu with Sidebar */}
        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <SheetTrigger asChild>
            <button className="group -ml-6">
              <div className="flex flex-col justify-center items-center w-6 h-6">
                <span className="w-6 h-0.5 bg-blue-600 transition-all group-hover:w-5"></span>
                <span className="w-6 h-0.5 bg-blue-600 my-1.5 transition-all group-hover:w-4"></span>
                <span className="w-6 h-0.5 bg-blue-600 transition-all group-hover:w-5"></span>
              </div>
              <span className="sr-only"></span>
            </button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] sm:w-[400px] p-0">
            {/* Logo section */}
            <Link
              href="/"
              className="block p-8 bg-[#004175] hover:bg-[#00325A] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <div className="flex flex-col items-center text-white">
                <div className="text-4xl mb-2"></div>
                <Image
                  src="/logo/Hotel D'Italia Only Logo.jpg"
                  alt="Hotel D'Italia Logo"
                  width={90}
                  height={90}
                  className="rounded-full mb-2"
                />
                <h1 className="text-2xl font-semibold">{t('hotel.name') as string}</h1>
                <p className="text-sm opacity-80">{t('hotel.town') as string}</p>
              </div>
            </Link>


            {/* Navigation */}
            <nav className="p-6">
              <div className="space-y-2">
                {navigationItems.map((item, index) => (
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
                <h3 className="text-sm font-semibold text-[#004175] mb-2">{('')}</h3>
                <p className="text-sm text-gray-600 mb-3">{t('contact.contactUs') as string}:</p>
                <div className="space-y-2">
                  <a 
                    href={t('hotel.whatsapp') as string}
                    className="flex items-center gap-2 text-sm text-[#004175] hover:underline"
                  >
                    📞 {t('hotel.phone') as string} 
                  </a>
                  <a 
                    href="mailto:contato@hotelditalia.com" 
                    className="flex items-center gap-2 text-sm text-[#004175] hover:underline"
                  >
                    ✉️ {t('hotel.email') as string} 
                  </a>
                </div>
              </div>
            </nav>
          </SheetContent>
        </Sheet>


        {/* Language Selector */}
        <Select value={language} onValueChange={setLanguage}>
          <SelectTrigger className="w-[64px] px-2 rounded border-[#004175] focus:ring-[#004175]">
            <SelectValue>
              <div className="flex items-center justify-center">
                <Image
                  src={languages.find((lang) => lang.code === language)?.flag || '/flags/br.svg'}
                  alt={language}
                  width={24}
                  height={16}
                  className="rounded"
                />
              </div>
            </SelectValue>
          </SelectTrigger>

          <SelectContent className="bg-white opacity-90 rounded border-[#004175]">
            {languages.map((lang) => (
              <SelectItem key={lang.code} value={lang.code} className="hover:bg-blue-100 cursor-pointer">
                <span className="flex items-center gap-2">
                  <Image src={lang.flag} alt={lang.label} width={24} height={16} className="rounded" />
                  <span className="text-sm text-gray-600">{lang.label}</span>
                </span>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Logo Section */}
        <Link href="/" className="absolute left-1/2 transform -translate-x-1/2 text-3xl">
          <div className="relative w-[100px] h-[100px] mt-10">
            <div className="absolute inset-0 rounded-full border-20 border-white bg-white"></div>
            <Image
              src="/logo/Hotel D'Italia Only Logo.jpg"
              alt='logo'
              width={90}
              height={90}
              className="relative inset-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full"
            />
          </div>
        </Link>
      </div>
    </header>
  );
}
