'use client'

import React, { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { rooms } from '@/lib/rooms'
import { PlaceholderImage } from '@/components/ui/placeholder-image'
import { RoomComparison } from '@/components/RoomComparison'
import { Button } from '@/components/ui/button'
import { FEATURES } from '@/lib/config'
import { useLanguageContext } from '@/context/LanguageContext';

// Type definition for room data structure
type Room = {
  id: number
  name: string
  description: string
  price: number
  features: string[]
  maxGuests: number
}

function BookingConfirmPage() {
  const { t } = useLanguageContext();
  
  const [selectedRooms, setSelectedRooms] = useState<string[]>([])
  const [showComparison, setShowComparison] = useState(false)

  // Initialize hooks for navigation and URL parameters
  const searchParams = useSearchParams()
  const router = useRouter()
  
  // Extract booking details from URL parameters
  const checkIn = searchParams.get('checkIn') ? new Date(searchParams.get('checkIn')!) : null
  const checkOut = searchParams.get('checkOut') ? new Date(searchParams.get('checkOut')!) : null
  const adults = searchParams.get('adults')
  const children = searchParams.get('children')

  // Helper function to format dates in Brazilian Portuguese
  const formatDate = (date: Date | null) => {
    if (!date) return ''
    return format(date, "dd 'de' MMMM", { locale: ptBR })
  }

  // Database of available rooms (would typically come from a backend)
  const availableRooms = Object.values(rooms)

  const handleCompareClick = (roomId: string) => {
    if (selectedRooms.includes(roomId)) {
      setSelectedRooms(prev => prev.filter(id => id !== roomId))
    } else if (selectedRooms.length < 3) {
      setSelectedRooms(prev => [...prev, roomId])
    }
  }

  return (
    <main className="min-h-screen bg-gray-50 pt-28">
      {/* Search summary bar */}
      <div className="bg-white border-b shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap items-center gap-6">
            {/* Check-in date display */}
            <div>
              <p className="text-sm text-gray-600">{t('booking_confirm.checkin')}</p>
              <p className="font-semibold">{formatDate(checkIn)}</p>
            </div>
            <div className="h-8 w-px bg-gray-300"></div>
            
            {/* Check-out date display */}
            <div>
              <p className="text-sm text-gray-600">{t('booking_confirm.checkin')}</p>
              <p className="font-semibold">{formatDate(checkOut)}</p>
            </div>
            <div className="h-8 w-px bg-gray-300"></div>
            
            {/* Guest count display */}
            <div>
              <p className="text-sm text-gray-600">{t('guestcount.guests')}</p>
              <p className="font-semibold">
                {adults} {parseInt(adults!) > 1 ? `{t('booking_confirm.adults')}` : `{t('booking_confirm.adult')}`}
                {children && parseInt(children) > 0 ? `, ${children} ${parseInt(children) > 1 ? `{t('booking_confirm.children')}` : `{t('booking_confirm.child')}`}` : ''}
              </p>
            </div>
            
            {/* Modify search button */}
            <button 
              onClick={() => router.back()}
              className="ml-auto text-sm font-semibold text-[#004175] hover:underline"
            >
              {t('booking_confirm.modify_search')}
            </button>
          </div>
        </div>
      </div>

      {/* Room selection grid */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Quartos disponíveis</h2>
          {FEATURES.ROOM_COMPARISON && selectedRooms.length > 1 && (
            <Button
              onClick={() => setShowComparison(true)}
              variant="outline"
              className="border-[#004175] text-[#004175] hover:bg-[#004175] hover:text-white"
            >
              Comparar {selectedRooms.length} quartos
            </Button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {availableRooms.map((room, index) => (
            <div key={room.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow flex flex-col h-full relative">
              {/* Compare checkbox - only show if feature is enabled */}
              {FEATURES.ROOM_COMPARISON && (
                <div className="absolute top-2 right-2 z-10">
                  <input
                    type="checkbox"
                    checked={selectedRooms.includes(room.id)}
                    onChange={() => handleCompareClick(room.id)}
                    className="w-4 h-4 rounded border-gray-300 text-[#004175] focus:ring-[#004175]"
                  />
                </div>
              )}

              {/* Room image placeholder */}
              <div className="h-48 relative">
                <PlaceholderImage 
                  index={index} 
                  category="room"
                  className="rounded-t-lg"
                />
              </div>
              
              {/* Room details */}
              <div className="p-4 flex flex-col flex-grow">
                <div>
                  <h3 className="text-lg font-semibold text-[#004175]">{room.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">{room.description}</p>
                </div>
                
                {/* Room features/amenities */}
                <div className="flex flex-wrap gap-2 my-4">
                  {room.features.map((feature, index) => (
                    <span 
                      key={index}
                      className="inline-flex px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Price and booking button */}
                <div className="mt-auto pt-4 flex items-center justify-between">
                  <div>
                    <p className="text-xl font-bold text-[#004175]">R${room.price}</p>
                    <p className="text-sm text-gray-600">por noite</p>
                  </div>
                  <button 
                    className="bg-[#004175] text-white px-4 py-2 rounded-md hover:bg-[#00325A] transition-colors text-sm"
                    onClick={() => {
                      // Navigate to room details page with booking details
                      const queryParams = new URLSearchParams({
                        checkIn: checkIn?.toISOString() || '',
                        checkOut: checkOut?.toISOString() || '',
                        adults: adults || '1',
                        children: children || '0',
                      }).toString()
                      router.push(`/room/${room.id}?${queryParams}`)
                    }}
                  >
                    Reservar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Room Comparison Modal - only render if feature is enabled */}
      {FEATURES.ROOM_COMPARISON && showComparison && (
        <RoomComparison
          selectedRooms={selectedRooms.map(id => rooms[id])}
          onRemoveRoom={(roomId) => handleCompareClick(roomId)}
          onClose={() => setShowComparison(false)}
        />
      )}
    </main>
  )
} 