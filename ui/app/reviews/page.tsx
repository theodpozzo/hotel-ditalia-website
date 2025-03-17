'use client'

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { StarIcon } from "lucide-react"
import { Header } from '@radix-ui/react-accordion'
import { Button } from '@/components/ui/button'
import { useLanguageContext } from '@/context/LanguageContext';
import { Footer } from '@/components/Footer'

export default function ReviewsPage() {
  const { t } = useLanguageContext()
  return (
    <div className="min-h-screen flex flex-col bg-blue-50">
      <Header />
      <main className="flex-grow pt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-bold text-blue-800">{t('reviews.title')}</h1>
            <Button className="bg-gold text-white hover:bg-gold-600">
              {t('reviews.leaveReview')}
            </Button>
          </div>
          
          <div className="grid gap-6">
            {/* Sample reviews - replace with actual data */}
            {[1, 2, 3].map((review) => (
              <Card key={review} className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-blue-200"></div>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-bold text-blue-800">{t('reviews.guestName')}</h3>
                    <div className="flex text-gold">
                      {Array(5).fill(null).map((_, i) => (
                        <StarIcon key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                  <Button variant="ghost" className="ml-auto">
                    {t('reviews.translate')}
                  </Button>
                </div>
                <p className="text-blue-600">
                  {t('reviews.sampleText')}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
} 