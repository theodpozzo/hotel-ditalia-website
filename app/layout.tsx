import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";
import { Josefin_Sans, Josefin_Slab } from 'next/font/google'

// Configure fonts for the website
const josefinSans = Josefin_Sans({
  subsets: ['latin'],
  weight: ['400', '700'], // Regular and Bold weights
  variable: '--font-josefin-sans', // CSS variable for the font
})

const josefinSlab = Josefin_Slab({
  subsets: ['latin'],
  weight: ['600'], // Semi-bold weight
  variable: '--font-josefin-slab',
})

// Metadata for SEO
export const metadata: Metadata = {
  title: "Hotel D'Italia",
  description: "Luxury beachfront hotel in Arroio do Sal, Brazil",
};

// Root layout component that wraps all pages
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt" className={`${josefinSans.variable} ${josefinSlab.variable}`}>
      <body>
        <div className="min-h-screen flex flex-col">
          {/* Header is fixed at the top of every page */}
          <Header />
          
          {/* Main content area that grows to fill available space */}
          <main className="flex-grow">
            {children}
          </main>
          
          {/* Footer is always at the bottom */}
          <Footer />
        </div>
      </body>
    </html>
  );
}
