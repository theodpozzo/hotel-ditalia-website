import type { Metadata } from "next";
import "./globals.css";
import { Josefin_Sans, Josefin_Slab } from 'next/font/google'
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

// Configure fonts for the website
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
};

// Add segment config to exclude admin route
export const dynamic = 'force-dynamic'
export const revalidate = 0

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Check if we're on the admin page by looking at the pathname
  const isAdminPage = children?.toString().includes('/admin')

  return (
    <html lang="pt" className={`${josefinSans.variable} ${josefinSlab.variable}`}>
      <body>
        <div className="min-h-screen flex flex-col">
          {!isAdminPage && <Header />}
          <main className="flex-grow">
            {children}
          </main>
          {!isAdminPage && <Footer />}
        </div>
      </body>
    </html>
  );
}
