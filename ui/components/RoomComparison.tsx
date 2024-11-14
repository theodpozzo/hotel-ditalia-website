'use client'

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { PlaceholderImage } from "@/components/ui/placeholder-image"
import { X } from 'lucide-react'

type ComparisonCategory = {
  name: string
  features: {
    id: string
    label: string
    icon?: string
  }[]
}

const comparisonCategories: ComparisonCategory[] = [
  {
    name: 'Quarto',
    features: [
      { id: 'size', label: 'Tamanho', icon: '📏' },
      { id: 'maxGuests', label: 'Capacidade', icon: '👥' },
      { id: 'view', label: 'Vista', icon: '🌅' },
      { id: 'bed', label: 'Cama', icon: '🛏️' },
    ]
  },
  {
    name: 'Comodidades',
    features: [
      { id: 'ac', label: 'Ar Condicionado', icon: '❄️' },
      { id: 'tv', label: 'TV', icon: '📺' },
      { id: 'wifi', label: 'Wi-Fi', icon: '📶' },
      { id: 'minibar', label: 'Minibar', icon: '🍷' },
      { id: 'safe', label: 'Cofre', icon: '🔒' },
      { id: 'hairdryer', label: 'Secador', icon: '💨' },
    ]
  },
  {
    name: 'Serviços',
    features: [
      { id: 'roomService', label: 'Serviço de Quarto', icon: '🍽️' },
      { id: 'cleaning', label: 'Limpeza Diária', icon: '🧹' },
      { id: 'laundry', label: 'Lavanderia', icon: '👕' },
    ]
  }
]

export function RoomComparison({ 
  selectedRooms,
  onRemoveRoom,
  onClose 
}: { 
  selectedRooms: any[]
  onRemoveRoom: (roomId: string) => void
  onClose: () => void
}) {
  // Calculate grid columns based on number of rooms
  const gridCols = selectedRooms.length === 2 
    ? 'grid-cols-[200px_minmax(250px,1fr)_minmax(250px,1fr)]'
    : 'grid-cols-[200px_repeat(auto-fill,minmax(250px,1fr))]'

  return (
    <div className="fixed inset-0 bg-black/50 z-50 overflow-y-auto">
      <div className="min-h-screen px-4 py-8">
        <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-2xl">
          {/* Header */}
          <div className="p-6 border-b flex items-center justify-between">
            <h2 className="text-2xl font-bold text-[#004175]">Comparar Quartos</h2>
            <Button 
              variant="ghost" 
              size="sm"
              onClick={onClose}
              className="hover:bg-gray-100"
            >
              <X className="h-6 w-6" />
            </Button>
          </div>

          {/* Comparison Grid */}
          <div className="p-6">
            <div className={`grid ${gridCols} gap-4`}>
              {/* Room Images and Names */}
              <div className="h-48"></div> {/* Empty space for alignment */}
              {selectedRooms.map((room, index) => (
                <div key={room.id} className="relative">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute -top-2 -right-2 z-10 bg-white rounded-full shadow-md hover:bg-gray-100 p-1 h-8 w-8"
                    onClick={() => onRemoveRoom(room.id)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                  <div className="h-48 relative rounded-lg overflow-hidden mb-2">
                    <PlaceholderImage 
                      index={index}
                      className="rounded-lg"
                    />
                  </div>
                  <h3 className="font-semibold text-lg text-[#004175]">{room.name}</h3>
                  <p className="text-2xl font-bold text-[#004175] mt-1">
                    R${room.price}
                    <span className="text-sm font-normal text-gray-600 ml-1">/ noite</span>
                  </p>
                </div>
              ))}
            </div>

            {/* Feature Comparison */}
            {comparisonCategories.map((category) => (
              <div key={category.name} className="mt-8">
                <h3 className="text-xl font-semibold text-[#004175] mb-4">{category.name}</h3>
                <div className={`grid ${gridCols} gap-4`}>
                  {category.features.map((feature) => (
                    <React.Fragment key={feature.id}>
                      <div className="flex items-center gap-2 text-gray-600">
                        {feature.icon && <span className="text-xl">{feature.icon}</span>}
                        {feature.label}
                      </div>
                      {selectedRooms.map((room) => (
                        <div key={`${room.id}-${feature.id}`} className="flex items-center">
                          {room.features[feature.id] ? (
                            <span className="text-green-500">✓</span>
                          ) : (
                            <span className="text-red-500">×</span>
                          )}
                          <span className="ml-2 text-gray-600">
                            {typeof room.features[feature.id] === 'string' 
                              ? room.features[feature.id] 
                              : ''}
                          </span>
                        </div>
                      ))}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 