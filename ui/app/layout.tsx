// layout.tsx
import type { Metadata } from "next"
import "./globals.css"
import { Josefin_Sans, Josefin_Slab } from 'next/font/google'
import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import { LanguageProvider } from '@/context/LanguageContext'

// Fonts
const josefinSans = Josefin_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-josefin-sans',
})

const josefinSlab = Josefin_Slab({
  subsets: ['latin'],
  weight: ['600'],
  variable: '--font-josefin-slab',
})

export const metadata: Metadata = {
  title: "Hotel D'Italia",
  description: "Luxury beachfront hotel in Arroio do Sal, Brazil",
}

export const revalidate = 0

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt" className={`${josefinSans.variable} ${josefinSlab.variable}`}>
      <body>
        <LanguageProvider>
          <div className="min-h-screen flex flex-col">
            <main className="flex-grow">
              <Header />
              {children}
              <Footer />
            </main>
          </div>
        </LanguageProvider>
      </body>
    </html>
  )
}
