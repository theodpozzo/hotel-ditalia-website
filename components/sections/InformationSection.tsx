'use client'

import React from 'react'
import { PlaceholderImage } from '@/components/ui/placeholder-image'

export function InformationSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-8">
        <div className="flex flex-col md:flex-row items-center mb-24">
          <div className="w-full md:w-1/2 h-96 relative rounded-lg overflow-hidden mb-8 md:mb-0 md:mr-16">
            <PlaceholderImage 
              index={0}
              category="general"
              className="rounded-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6 text-blue-800">Bem-vindo ao Hotel D&apos;Italia</h2>
            <p className="text-lg text-blue-600 leading-relaxed">
              Desfrute de uma estadia luxuosa à beira-mar em Arroio do Sal. 
              Nosso hotel oferece conforto, elegância e uma localização privilegiada 
              para suas férias perfeitas. Com vistas deslumbrantes para o oceano e 
              serviços de primeira classe, garantimos uma experiência inesquecível.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row-reverse items-center">
          <div className="w-full md:w-1/2 h-96 relative rounded-lg overflow-hidden mb-8 md:mb-0 md:ml-16">
            <PlaceholderImage 
              index={1}
              category="room"
              className="rounded-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6 text-blue-800">Quartos Confortáveis</h2>
            <p className="text-lg text-blue-600 leading-relaxed">
              Relaxe em nossos quartos espaçosos e bem equipados, todos com vista 
              para o mar e comodidades modernas para garantir uma estadia agradável. 
              Cada detalhe foi cuidadosamente pensado para proporcionar o máximo 
              conforto e uma atmosfera acolhedora durante sua estadia.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 