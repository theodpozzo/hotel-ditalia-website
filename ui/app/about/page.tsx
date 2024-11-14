'use client'

import React from 'react'
import { PlaceholderImage } from '@/components/ui/placeholder-image'

export default function AboutPage() {
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
          <h1 className="text-5xl font-bold text-white text-center">Nossa História</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* History Section */}
        <div className="max-w-4xl mx-auto mb-24">
          <h2 className="text-3xl font-bold text-[#004175] mb-8">Tradição Italiana à Beira-mar</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-600 mb-4">
                Fundado em 1985 pela família Rossi, o Hotel D'Italia nasceu do sonho de trazer
                o charme e a hospitalidade italiana para o litoral gaúcho. Por três gerações,
                temos sido o destino preferido de famílias que buscam conforto e qualidade
                em suas férias.
              </p>
              <p className="text-gray-600">
                Nossa história começou quando Giuseppe Rossi, imigrante italiano e amante
                da hotelaria, descobriu o potencial turístico de Arroio do Sal. Com dedicação
                e visão, transformou uma pequena pousada no atual complexo hoteleiro que
                atende milhares de hóspedes anualmente.
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
            {
              icon: '🤝',
              title: 'Hospitalidade',
              description: 'Acolhemos cada hóspede como parte da nossa família, oferecendo atendimento personalizado e caloroso.'
            },
            {
              icon: '⭐',
              title: 'Excelência',
              description: 'Buscamos a perfeição em cada detalhe, desde o café da manhã até o serviço de quarto.'
            },
            {
              icon: '🌊',
              title: 'Sustentabilidade',
              description: 'Comprometidos com práticas sustentáveis para preservar nossa bela costa para futuras gerações.'
            }
          ].map((value, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
              <span className="text-4xl mb-4 block">{value.icon}</span>
              <h3 className="text-xl font-bold text-[#004175] mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>

        {/* Team Section */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-[#004175] mb-12 text-center">Nossa Equipe</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { name: 'Marco Rossi', role: 'Diretor Geral' },
              { name: 'Laura Santos', role: 'Gerente de Hospitalidade' },
              { name: 'Carlos Silva', role: 'Chef Executivo' },
              { name: 'Ana Oliveira', role: 'Gerente de Eventos' }
            ].map((member, index) => (
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
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-[#004175] mb-8 text-center">Reconhecimentos</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { year: '2023', award: 'Melhor Hotel de Praia - RS Tourism Awards' },
              { year: '2022', award: 'Certificado de Excelência - TripAdvisor' },
              { year: '2021', award: 'Prêmio Sustentabilidade - Associação Hoteleira' }
            ].map((award, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold text-[#F3B72B] mb-2">{award.year}</div>
                <p className="text-gray-600">{award.award}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
} 