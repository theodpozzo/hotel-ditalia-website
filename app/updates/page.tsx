'use client'

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function UpdatesPage() {
  const updates = [
    {
      title: 'Promoção de Verão',
      date: '2024-01-15',
      content: 'Aproveite nossa promoção especial de verão com 20% de desconto em estadias de 5 dias ou mais.'
    },
    {
      title: 'Novo Restaurante',
      date: '2023-12-01',
      content: 'Temos o prazer de anunciar a abertura do nosso novo restaurante com culinária italiana autêntica.'
    },
    {
      title: 'Festival de Jazz',
      date: '2023-11-10',
      content: 'Não perca o Festival de Jazz de Arroio do Sal, acontecendo próximo ao nosso hotel de 15 a 17 de dezembro.'
    },
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-blue-800">Atualizações</h1>
      <div className="grid gap-6">
        {updates.map((update, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-blue-800">{update.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-blue-600 mb-2">
                {new Date(update.date).toLocaleDateString('pt-BR')}
              </p>
              <p className="text-gray-700">{update.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
} 