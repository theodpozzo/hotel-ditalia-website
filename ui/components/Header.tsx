"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { useLanguageContext } from "@/context/LanguageContext"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Menu, Mail, MapPin, ChevronRight } from "lucide-react"

const languages = [
  { code: "en", label: "English", flag: "/flags/gb.svg" },
  { code: "pt", label: "Português", flag: "/flags/br.svg" },
  { code: "es", label: "Español", flag: "/flags/es.svg" },
  { code: "fr", label: "Français", flag: "/flags/fr.svg" },
  { code: "it", label: "Italiano", flag: "/flags/it.svg" },
]

export function Header() {
  const { language, setLanguage, t, tArray } = useLanguageContext()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const navigationItems = tArray("header.navigation_items") as unknown as { name: string; href: string; icon: string }[]

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [scrolled])

  // Scroll to booking section logic
  // const scrollToBooking = () => {
  //   const bookingSection = document.getElementById("booking-section")
  //   if (bookingSection) {
  //     const offset = 80 // Account for header height
  //     const elementPosition = bookingSection.getBoundingClientRect().top
  //     const offsetPosition = elementPosition + window.pageYOffset - offset
  //     window.scrollTo({
  //       top: offsetPosition,
  //       behavior: "smooth",
  //     })
  //   }
  // }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 shadow-md backdrop-blur-sm py-2" : "bg-white/80 backdrop-blur-sm py-4"
        }`}
    >
      <div className="max-w-[1920px] mx-auto px-4 md:px-8 lg:px-12 flex justify-between items-center">
        <div className="flex items-center gap-4">
          {/* Mobile Menu Trigger */}
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <button
                className="flex md:hidden items-center justify-center w-10 h-10 rounded-full bg-blue-50 text-[#004175] hover:bg-blue-100 transition-all duration-300 hover:shadow-md"
                aria-label="Open menu"
              >
                <Menu className="w-5 h-5 transition-transform duration-300 hover:rotate-90" />
              </button>
            </SheetTrigger>

            <SheetContent side="left" className="w-[300px] sm:w-[400px] p-0 border-r-[#004175] overflow-hidden">
              <div className="flex flex-col h-full relative">
                {/* Logo section */}
                <div className="relative">
                  <Link
                    href="/"
                    className="block p-8 bg-[#004175] transition-all duration-500"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className="flex flex-col items-center text-white relative z-10">
                      <div className="relative">
                        <div
                          className="absolute inset-0 rounded-full"
                          style={{ animationDuration: "3s" }}
                        ></div>
                        <Image
                          src="/logo/hotel-ditalia-logo.jpg"
                          alt="Hotel D'Italia Logo"
                          width={80}
                          height={80}
                          className="rounded-full mb-3"
                        />
                      </div>
                      <h1 className="text-xl font-semibold">{t("hotel.name") as string}</h1>
                      <p className="text-sm opacity-80">{t("hotel.town") as string}</p>
                    </div>
                  </Link>

                  {/* Top wave decoration */}
                  <div className="w-full overflow-hidden">
                    <svg
                      viewBox="0 0 1200 120"
                      preserveAspectRatio="none"
                      className="w-full h-12 fill-current text-[#004175]"
                    >
                      <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
                    </svg>
                  </div>
                </div>

                {/* Navigation */}
                <nav className="flex-1 p-6 overflow-auto bg-gradient-to-b from-white to-blue-50/30">
                  <div className="space-y-1">
                    {navigationItems.map((item, index) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="group flex items-center gap-3 px-4 py-3 text-[#004175] hover:bg-blue-50 rounded-lg transition-all duration-300"
                        onClick={() => setIsMenuOpen(false)}
                        style={{ transitionDelay: `${index * 50}ms` }}
                      >
                        <Image
                          src={item.icon}
                          alt={item.name}
                          width={24}
                          height={24}
                          className="inline-block mr-2"
                        />
                        <span className="text-base font-medium relative">
                          {item.name}
                          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                        </span>
                        <ChevronRight className="ml-auto w-4 h-4 text-blue-400 transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                    ))}

                    { /* For future booking functionality.
                    /* <button
                      onClick={() => {
                        scrollToBooking()
                        setIsMenuOpen(false)
                      }}
                      className="group flex w-full items-center gap-3 px-4 py-3 text-[#004175] hover:bg-blue-50 rounded-lg transition-all duration-300"
                    >
                      <span className="text-xl flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                        🏨
                      </span>
                      <span className="text-base font-medium relative">
                        {t("header.title") as string}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                      </span>
                      <ChevronRight className="ml-auto w-4 h-4 text-blue-400 transition-transform duration-300 group-hover:translate-x-1" />
                    </button> */}
                  </div>
                </nav>

                {/* Contact section */}
                <div className="p-6 bg-blue-50 border-t border-blue-100 relative overflow-hidden">
                  {/* Decorative line art */}
                  <div className="absolute inset-0 pointer-events-none opacity-5">
                    <svg
                      width="100%"
                      height="100%"
                      viewBox="0 0 100 100"
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="none" stroke="#004175" strokeWidth="0.5"></path>
                      <path d="M0,20 L100,20" stroke="#004175" strokeWidth="0.5" strokeDasharray="1,3"></path>
                      <path d="M0,40 L100,40" stroke="#004175" strokeWidth="0.5" strokeDasharray="1,3"></path>
                      <path d="M0,60 L100,60" stroke="#004175" strokeWidth="0.5" strokeDasharray="1,3"></path>
                      <path d="M0,80 L100,80" stroke="#004175" strokeWidth="0.5" strokeDasharray="1,3"></path>
                      <path d="M20,0 L20,100" stroke="#004175" strokeWidth="0.5" strokeDasharray="1,3"></path>
                      <path d="M40,0 L40,100" stroke="#004175" strokeWidth="0.5" strokeDasharray="1,3"></path>
                      <path d="M60,0 L60,100" stroke="#004175" strokeWidth="0.5" strokeDasharray="1,3"></path>
                      <path d="M80,0 L80,100" stroke="#004175" strokeWidth="0.5" strokeDasharray="1,3"></path>
                    </svg>
                  </div>

                  <h3 className="text-sm font-semibold text-[#004175] mb-3 relative">
                    {t("contact.contactUs") as string}
                  </h3>
                  <div className="space-y-3 relative">
                    <a
                      href={t("hotel.whatsapp") as string}
                      className="group flex items-center gap-2 text-sm text-[#004175] transition-all duration-300 hover:translate-x-1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-600 transition-all duration-300 group-hover:bg-green-200 group-hover:shadow-md">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                      </div>
                      <span className="relative">
                        {t("hotel.phone") as string}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full opacity-70"></span>
                      </span>
                    </a>
                    <a
                      href={`mailto:${t("hotel.email") as string}`}
                      className="group flex items-center gap-2 text-sm text-[#004175] transition-all duration-300 hover:translate-x-1"
                    >
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 transition-all duration-300 group-hover:bg-blue-200 group-hover:shadow-md">
                        <Mail className="w-4 h-4" />
                      </div>
                      <span className="relative">
                        {t("hotel.email") as string}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full opacity-70"></span>
                      </span>
                    </a>
                    <div className="group flex items-center gap-2 text-sm text-[#004175] transition-all duration-300">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 transition-all duration-300 group-hover:bg-blue-200 group-hover:shadow-md">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <span>
                        {t("hotel.address") as string}, {t("hotel.town") as string}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Footer with minimalistic line art */}
                <div className="py-3 px-6 text-center text-xs text-gray-500 border-t border-gray-100 relative overflow-hidden">
                  <div className="absolute inset-0 pointer-events-none opacity-10">
                    <svg width="100%" height="100%" viewBox="0 0 100 20" preserveAspectRatio="none">
                      <path
                        d="M0,10 C30,15 70,5 100,10"
                        stroke="#004175"
                        fill="none"
                        strokeWidth="0.5"
                        className="wave-animation"
                        style={{ animationDuration: "15s" }}
                      ></path>
                      <path
                        d="M0,10 C30,5 70,15 100,10"
                        stroke="#004175"
                        fill="none"
                        strokeWidth="0.5"
                        className="wave-animation"
                        style={{ animationDuration: "12s", animationDelay: "1s" }}
                      ></path>
                    </svg>
                  </div>
                  <p>© {new Date().getFullYear()} {t('hotel.name').toString()}</p>
                </div>
              </div>
            </SheetContent>
          </Sheet>

          {/* Desktop Logo (left side) */}
          <Link href="/" className="hidden md:flex items-center gap-3">
            <div className="relative w-12 h-12 overflow-hidden rounded-full border-2 border-[#004175] shadow-sm">
              <Image
                src="/logo/hotel-ditalia-logo.jpg"
                alt={t("hotel.name") as string}
                fill
                className="object-cover"
              />
            </div>
            <div className="lg:block">
              <h1 className="text-lg font-semibold text-[#004175] leading-tight">{t("hotel.name") as string}</h1>
              <p className="text-xs text-blue-500">{t("hotel.town") as string}</p>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center justify-center space-x-1 lg:space-x-2">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-3 py-2 text-sm font-medium text-[#004175] hover:bg-blue-50 rounded-md transition-colors"
            >
              <span className="hidden lg:inline">{item.name}</span>
              <span className="lg:hidden">{item.name}</span>
            </Link>
          ))}
        </nav>

        {/* Right side actions */}
        <div className="flex items-center gap-2 md:gap-4">
          {/* Language Selector */}
          <Select value={language} onValueChange={setLanguage}>
            <SelectTrigger
              className={`w-[64px] px-2 rounded border-[#004175] focus:ring-[#004175] transition-all ${scrolled ? "h-8" : "h-9"
                }`}
            >
              <SelectValue>
                <div className="flex items-center justify-center">
                  <Image
                    src={languages.find((lang) => lang.code === language)?.flag || "/flags/br.svg"}
                    alt={language}
                    width={24}
                    height={16}
                    className="rounded shadow-sm"
                  />
                </div>
              </SelectValue>
            </SelectTrigger>

            <SelectContent className="bg-white rounded border-[#004175]">
              {languages.map((lang) => (
                <SelectItem key={lang.code} value={lang.code} className="hover:bg-blue-50 cursor-pointer">
                  <span className="flex items-center gap-2">
                    <Image
                      src={lang.flag || "/placeholder.svg"}
                      alt={lang.label}
                      width={24}
                      height={16}
                      className="rounded shadow-sm"
                    />
                    <span className="text-sm text-gray-600">{lang.label}</span>
                  </span>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Book Now Button */}
          {/* <Button
            onClick={scrollToBooking}
            className={`hidden md:flex items-center gap-2 bg-[#004175] hover:bg-[#00325A] text-white transition-all ${
              scrolled ? "h-8 text-sm px-3" : "h-9 px-4"
            }`}
          >
            <Calendar className={`${scrolled ? "w-3.5 h-3.5" : "w-4 h-4"}`} />
            <span>{t("header.title") as string}</span>
          </Button> */}
        </div>

        {/* Center Logo (for mobile) */}
        <Link
          href="/"
          className={`absolute left-1/2 transform -translate-x-1/2 md:hidden transition-all duration-300 ${scrolled ? "top-1" : "top-2"
            }`}
        >
          <div
            className={`relative rounded-full border-4 border-white bg-white shadow-md transition-all duration-300 ${scrolled ? "w-[70px] h-[70px]" : "w-[90px] h-[90px]"
              }`}
          >
            <Image
              src="/logo/hotel-ditalia-logo.jpg"
              alt={t("hotel.name") as string}
              fill
              className="rounded-full object-cover p-1"
            />
          </div>
        </Link>
      </div>
    </header>
  )
}

