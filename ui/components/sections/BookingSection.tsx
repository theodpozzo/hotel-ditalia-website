'use client'

import React, { useState } from 'react'
import { Calendar } from "@/components/ui/calendar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { DateRange } from "react-day-picker"
import { useRouter } from 'next/navigation'
import { addDays } from 'date-fns'
import { useTranslation } from '@/hooks/useTranslation';
// import { useLanguageContext } from '@/context/LanguageContext';

export function BookingSection() {
  const { t } = useTranslation();
  // const { setLanguage } = useLanguageContext();

  // Initialize router for navigation
  const router = useRouter()

  // State management for the booking form
  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: undefined,
    to: undefined,
  })
  const [adults, setAdults] = useState(2)      // Default: 2 adults
  const [children, setChildren] = useState(0)   // Default: 0 children
  const [rooms, setRooms] = useState(1)        // Default: 1 room
  const [babies, setBabies] = useState(0)      // Default: 0 babies

  // Prevent selection of past dates
  const disabledDays = { before: new Date() }

  // Handler for calendar date selection
  const handleDateSelect = (range: DateRange | undefined) => {
    setDateRange(range)
  }

  // Handler for the booking button
  const handleBooking = () => {
    // Validate that dates are selected
    if (!dateRange?.from || !dateRange?.to) {
      alert('Por favor, selecione as datas de check-in e check-out')
      return
    }

    // Create URL parameters with booking details
    const queryParams = new URLSearchParams({
      checkIn: dateRange.from.toISOString(),
      checkOut: dateRange.to.toISOString(),
      adults: adults.toString(),
      children: children.toString(),
      rooms: rooms.toString()
    }).toString()

    // Navigate to booking confirmation page with selected parameters
    router.push(`/booking-confirm?${queryParams}`)
  }

  return (
    <section id="booking-section" className="relative py-16">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <pattern id="wave-pattern" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M0 50 Q 25 0, 50 50 T 100 50" fill="none" stroke="currentColor" strokeWidth="2"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#wave-pattern)" />
        </svg>
      </div>

      {/* Main content container */}
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold mb-8 text-center text-blue-800">{t('booking.title')}</h2>
        
        {/* Booking form card */}
        <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Calendar section */}
            <div className="flex justify-center">
              <Calendar
                mode="range"
                selected={dateRange}
                onSelect={handleDateSelect}
                numberOfMonths={2}
                disabled={disabledDays}
                className="rounded-md border"
                defaultMonth={new Date()}
                fromDate={new Date()}
                toDate={addDays(new Date(), 365)}
                classNames={{
                  day_range_start: "day-range-start",
                  day_range_end: "day-range-end",
                  day_range_middle: "day-range-middle",
                  day_selected: "",
                  day_today: "bg-gray-100",
                }}
                modifiersClassNames={{
                  selected: "",
                  today: "bg-gray-100",
                }}
              />
            </div>

            {/* Guest information inputs */}
            <div className="space-y-6">
              {/* Adults input */}
              <div>
                <Label htmlFor="adults" className="text-lg mb-2 block text-blue-800">Adultos</Label>
                <Input 
                  type="number" 
                  id="adults" 
                  min="1" 
                  value={adults}
                  onChange={(e) => setAdults(parseInt(e.target.value))}
                  className="w-full" 
                />
              </div>

              {/* Children and Babies inputs side by side */}
              <div className="grid grid-cols-2 gap-4">
                {/* Children input */}
                <div>
                  <Label htmlFor="children" className="text-lg mb-2 block text-blue-800">Crianças (5-16 anos)</Label>
                  <Input 
                    type="number" 
                    id="children" 
                    min="0" 
                    value={children}
                    onChange={(e) => setChildren(parseInt(e.target.value))}
                    className="w-full" 
                  />
                </div>

                {/* Babies input */}
                <div>
                  <Label htmlFor="babies" className="text-lg mb-2 block text-blue-800">Bebes (0-4 anos)</Label>
                  <Input 
                    type="number" 
                    id="babies" 
                    min="0" 
                    value={babies}
                    onChange={(e) => setBabies(parseInt(e.target.value))}
                    className="w-full" 
                  />
                </div>
              </div>

              {/* Rooms input */}
              <div>
                <Label htmlFor="rooms" className="text-lg mb-2 block text-blue-800">Quartos</Label>
                <Input 
                  type="number" 
                  id="rooms" 
                  min="1" 
                  value={rooms}
                  onChange={(e) => setRooms(parseInt(e.target.value))}
                  className="w-full" 
                />
              </div>

              {/* Submit button */}
              <Button 
                onClick={handleBooking}
                className="w-full text-lg py-6 bg-[#004175] hover:bg-[#00325A] text-white transition-colors"
              >
                Verificar Disponibilidade
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 