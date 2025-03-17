'use client'

import React from 'react'
import { PlaceholderImage } from '@/components/ui/placeholder-image'
import { useLanguageContext } from '@/context/LanguageContext';

export default function AboutPage() {
  const { language, setLanguage, t, tArray} = useLanguageContext();

  const values = tArray('about.values.valuesList') as unknown as { icon: string; title: string; description: string }[];
  const team = tArray('about.team.members') as unknown as { name: string; role: string }[];
  const awards = tArray('about.awards.awardsList') as unknown as { year: string; award: string }[];

  
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
          <h1 className="text-5xl font-bold text-white text-center">{t('about.title') as string}</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* History Section */}
        <div className="max-w-4xl mx-auto mb-24">
          <h2 className="text-3xl font-bold text-[#004175] mb-8">{t('about.history.title') as string}</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-600 mb-4">
                {t('about.history.description1') as string}
              </p>
              <p className="text-gray-600">
                {t('about.history.description2') as string}
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
          {values.map((value, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
              <span className="text-4xl mb-4 block">{value.icon}</span>
              <h3 className="text-xl font-bold text-[#004175] mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>

        {/* Team Section */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-[#004175] mb-12 text-center">{t('about.team.title') as string}</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="h-64 relative rounded-lg overflow-hidden mb-4">
                  <PlaceholderImage 
                    index={index + 4}
                    className="rounded-lg"
                  />
                </div>
                <h3 className="font-bold text-[#004175]">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Awards Section */}
        {/* <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-[#004175] mb-8 text-center">{t('about.awards.title') as string}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {awards.map((award, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold text-[#F3B72B] mb-2">{award.year}</div>
                <p className="text-gray-600">{award.award}</p>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </main>
  )
} 