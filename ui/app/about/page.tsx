'use client'

import React from 'react'
import { PlaceholderImage } from '@/components/ui/placeholder-image'
import { useLanguageContext } from '@/context/LanguageContext';

export default function AboutPage() {
  const { t } = useLanguageContext();
  
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-28">
      {/* Hero Section */}
      <div className="relative h-[40vh] overflow-hidden">
        <div className="absolute inset-0">
          <PlaceholderImage 
            index={0}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white text-center">{t('about.title')}</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* History Section */}
        <div className="max-w-4xl mx-auto mb-24">
          <h2 className="text-3xl font-bold text-[#004175] mb-8">{t('about.history.title')}</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-600 mb-4">
                {t('about.history.description')}
              </p>
              <p className="text-gray-600">
                {t('about.history.description')}
              </p>
            </div>
            <div className="h-64 relative rounded-lg overflow-hidden">
              <PlaceholderImage 
                index={1}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {[
            t('about.values.1'),
            t('about.values.2'),
            t('about.values.3')
          ].map((value, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
              <span className="text-4xl mb-4 block">{t('about.values.icon')}</span>
              <h3 className="text-xl font-bold text-[#004175] mb-2">{t('about.values.title')}</h3>
              <p className="text-gray-600">{t('about.values.description')}</p>
            </div>
          ))}
        </div>

        {/* Team Section */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-[#004175] mb-12 text-center">{t('about.team.title')}</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {
              [
                t('about.team.1'),
                t('about.team.2'),
                t('about.team.3'),
                t('about.team.4')
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="h-64 relative rounded-lg overflow-hidden mb-4">
                  <PlaceholderImage 
                    index={index + 4}
                    className="rounded-lg"
                  />
                </div>
                <h3 className="font-bold text-[#004175]">{t('about.team.name')}</h3>
                <p className="text-gray-600">{t('about.team.role')}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Awards Section */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-[#004175] mb-8 text-center">{t('awards.title')}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              t('about.awards.1'),
              t('about.awards.2'),
              t('about.awards.3')
            ].map((award, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold text-[#F3B72B] mb-2">{t('about.awards.year')}</div>
                <p className="text-gray-600">{t('about.awards.award')}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
} 