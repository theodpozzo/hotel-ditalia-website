"use client"

import type React from "react"
import Link from "next/link"
import Image from "next/image"
import { useLanguageContext } from "@/context/LanguageContext"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Mail, Phone, MapPin, ChevronRight } from "lucide-react"

export function Footer() {
  const { t, tArray } = useLanguageContext()

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription logic here
    console.log("Newsletter subscription submitted")
  }

  return (
    <footer className="bg-[#004175] text-white">
      {/* Top wave decoration with gradient */}
      <div className="w-full overflow-hidden">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 fill-current text-white">
          <defs>
            <linearGradient id="footerGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{ stopColor: "#f0f4f8", stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: "#ffffff", stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          <path fill="url(#footerGradient)" d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>

      <div className="max-w-[1920px] mx-auto px-8 md:px-12 pt-8 pb-12">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Hotel Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo/Hotel D'Italia Only Logo.jpg"
                alt={t("hotel.name") as string}
                width={60}
                height={60}
                className="rounded-full border-2 border-white"
              />
              <h3 className="text-xl font-semibold">{t("hotel.name") as string}</h3>
            </div>
            <p className="text-sm text-blue-100">{t("hotel.description") as string}</p>
            <div className="space-y-2 mt-4">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 text-blue-200" />
                <p className="text-sm">
                  {t("hotel.address") as string}
                  <br />
                  {t("hotel.town") as string}
                  <br />
                  {t("hotel.country") as string}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-200" />
                <a
                  href={`tel:${(t("hotel.phone") as string).replace(/[^0-9+]/g, "")}`}
                  className="text-sm hover:text-blue-200 transition-colors"
                >
                  {t("hotel.phone") as string}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-200" />
                <a
                  href={`mailto:${t("hotel.email") as string}`}
                  className="text-sm hover:text-blue-200 transition-colors"
                >
                  {t("hotel.email") as string}
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4 border-b border-blue-400 pb-2">{t("header.title") as string}</h3>
            <ul className="space-y-2">
              {(tArray('header.navigation_items') as unknown as { name: string; href: string; icon: string }[]).map(
                (item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="flex items-center gap-2 text-sm hover:text-blue-200 transition-colors group"
                    >
                      <ChevronRight className="w-4 h-4 text-blue-300 group-hover:translate-x-1 transition-transform" />
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ),
              )}
              <li>
                <Link
                  href="/contact"
                  className="flex items-center gap-2 text-sm hover:text-blue-200 transition-colors group"
                >
                  <ChevronRight className="w-4 h-4 text-blue-300 group-hover:translate-x-1 transition-transform" />
                  <span>{t("contact.contactUs") as string}</span>
                </Link>
              </li>
            </ul>

            <h3 className="text-lg font-semibold mt-6 mb-4 border-b border-blue-400 pb-2">
              {t("contact.needHelp") as string}
            </h3>
            <a
              href={t('hotel.whatsapp').toString()}
              className="flex items-center gap-2 text-sm bg-green-600 hover:bg-green-700 transition-colors rounded-full px-4 py-2 w-fit"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Phone className="w-4 h-4" />
              {t("hotel.phone") as string}
            </a>
          </div>

          {/* Column 3: Facilities */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mt-6 mb-4 border-b border-blue-400 pb-2">Facilidades</h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div className="flex items-center gap-1">
                <span>🏊</span>
                <span>Beira Mar</span>
              </div>
              <div className="flex items-center gap-1">
                <span>🅿️</span>
                <span>Estacionamento</span>
              </div>
              <div className="flex items-center gap-1">
                <span>🍳</span>
                <span>Café da manhã</span>
              </div>
              <div className="flex items-center gap-1">
                <span>📶</span>
                <span>Wi-Fi</span>
              </div>
              <div className="flex items-center gap-1">
                <span>♿</span>
                <span>Acessibilidade</span>
              </div>
              <div className="flex items-center gap-1">
                <span>🐕</span>
                <span>Pet friendly</span>
              </div>
            </div>
          </div>

          {/* Column 4: Newsletter & Social */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4 border-b border-blue-400 pb-2">
              {t("newsletter_section.title") as string}
            </h3>
            <p className="text-sm mb-4">{t("newsletter_section.subscribe") as string}</p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-2">
              <Input
                type="email"
                placeholder="Seu email"
                required
                className="bg-white/10 border-blue-400 text-white placeholder:text-blue-200"
              />
              <Button type="submit" className="w-full bg-white text-[#004175] hover:bg-blue-100">
                Inscrever-se
              </Button>
            </form>

            <h3 className="text-lg font-semibold mt-6 mb-4 border-b border-blue-400 pb-2">Redes Sociais</h3>
            <div className="flex gap-4">
              <a
                href={t('hotel.facebook').toString()}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={t('hotel.instagram').toString()}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-blue-400 text-center text-sm text-blue-200">
          <p>
            © {new Date().getFullYear()} {t("hotel.name") as string}. Todos os direitos reservados.
          </p>
          <div className="flex justify-center gap-4 mt-2">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Política de Privacidade
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Termos de Uso
            </Link>
            <Link href="/cookies" className="hover:text-white transition-colors">
              Política de Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

