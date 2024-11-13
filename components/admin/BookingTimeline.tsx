'use client'

import React, { useState } from 'react'
import { addDays, format, startOfMonth, endOfMonth, eachDayOfInterval, isSameDay, isWithinInterval } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Calendar } from 'lucide-react'
import { rooms } from '@/lib/rooms'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

// Type for a booking
type Booking = {
  id: string
  roomId: string
  checkIn: Date
  checkOut: Date
  guestName: string
}

// Sample bookings data (replace with real data later)
const sampleBookings: Booking[] = [
  {
    id: '1',
    roomId: 'vista-mar-4',
    checkIn: new Date(2024, 10, 1),
    checkOut: new Date(2024, 10, 5),
    guestName: 'João Silva'
  },
  {
    id: '2',
    roomId: 'esquina-4',
    checkIn: new Date(2024, 10, 3),
    checkOut: new Date(2024, 10, 8),
    guestName: 'Maria Santos'
  },
  {
    id: '3',
    roomId: 'vista-mar-3',
    checkIn: new Date(2024, 10, 5),
    checkOut: new Date(2024, 10, 10),
    guestName: 'Pedro Oliveira'
  },
  {
    id: '4',
    roomId: 'interno-4',
    checkIn: new Date(2024, 10, 2),
    checkOut: new Date(2024, 10, 4),
    guestName: 'Ana Costa'
  },
  {
    id: '5',
    roomId: 'vista-praca-4',
    checkIn: new Date(2024, 10, 15),
    checkOut: new Date(2024, 10, 20),
    guestName: 'Carlos Ferreira'
  },
  {
    id: '6',
    roomId: 'vista-mar-2',
    checkIn: new Date(2024, 10, 10),
    checkOut: new Date(2024, 10, 15),
    guestName: 'Lucia Mendes'
  },
  {
    id: '7',
    roomId: 'esquina-3',
    checkIn: new Date(2024, 10, 7),
    checkOut: new Date(2024, 10, 12),
    guestName: 'Roberto Santos'
  },
  {
    id: '8',
    roomId: 'vista-praca-3',
    checkIn: new Date(2024, 10, 20),
    checkOut: new Date(2024, 10, 25),
    guestName: 'Fernanda Lima'
  },
  {
    id: '9',
    roomId: 'interno-3',
    checkIn: new Date(2024, 10, 18),
    checkOut: new Date(2024, 10, 22),
    guestName: 'Gabriel Silva'
  },
  {
    id: '10',
    roomId: 'vista-mar-4',
    checkIn: new Date(2024, 10, 5),
    checkOut: new Date(2024, 10, 10),
    guestName: 'Mariana Costa'
  },
  {
    id: '11',
    roomId: 'terreo',
    checkIn: new Date(2024, 10, 1),
    checkOut: new Date(2024, 10, 7),
    guestName: 'Paulo Souza'
  },
  {
    id: '12',
    roomId: 'interno-2',
    checkIn: new Date(2024, 10, 12),
    checkOut: new Date(2024, 10, 17),
    guestName: 'Beatriz Santos'
  },
  {
    id: '13',
    roomId: 'vista-praca-2',
    checkIn: new Date(2024, 10, 8),
    checkOut: new Date(2024, 10, 13),
    guestName: 'Ricardo Oliveira'
  },
  {
    id: '14',
    roomId: 'esquina-2',
    checkIn: new Date(2024, 10, 15),
    checkOut: new Date(2024, 10, 20),
    guestName: 'Amanda Lima'
  },
  {
    id: '15',
    roomId: 'vista-mar-3',
    checkIn: new Date(2024, 10, 22),
    checkOut: new Date(2024, 10, 27),
    guestName: 'Thiago Ferreira'
  }
]

export function BookingTimeline() {
  const [currentMonth, setCurrentMonth] = useState(new Date())
  
  // Get days for the current month
  const monthStart = startOfMonth(currentMonth)
  const monthEnd = endOfMonth(currentMonth)
  const days = eachDayOfInterval({ start: monthStart, end: monthEnd })

  // Navigation handlers
  const previousMonth = () => setCurrentMonth(addDays(monthStart, -1))
  const nextMonth = () => setCurrentMonth(addDays(monthEnd, 1))
  const goToCurrentMonth = () => setCurrentMonth(new Date())

  // Modified to handle overlapping bookings
  const getBookingsForDay = (roomId: string, date: Date): Booking[] => {
    return sampleBookings.filter(booking => 
      booking.roomId === roomId &&
      isWithinInterval(date, { 
        start: booking.checkIn, 
        end: booking.checkOut 
      })
    )
  }

  // Modified to always show half-day for check-in and check-out
  const getBookingSegmentClass = (booking: Booking, date: Date) => {
    const isStart = isSameDay(date, booking.checkIn)
    const isEnd = isSameDay(date, booking.checkOut)
    const otherBookingOnSameDay = sampleBookings.find(b => 
      b.id !== booking.id && 
      b.roomId === booking.roomId && 
      (isSameDay(b.checkOut, date) || isSameDay(b.checkIn, date))
    )

    if (isStart && isEnd) {
      // If check-in and check-out are on the same day
      return 'absolute inset-0 bg-[#004175] rounded-lg'
    }
    if (isStart) {
      // Always show right half for check-in
      return 'absolute right-0 w-[45%] h-full bg-[#004175] rounded-l-lg'
    }
    if (isEnd) {
      // Always show left half for check-out
      return 'absolute left-0 w-[45%] h-full bg-[#004175] rounded-r-lg'
    }
    // Middle days
    return 'absolute inset-0 bg-[#004175]/20'
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 overflow-x-auto">
      {/* Header with month navigation */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-[#004175]">
          {format(currentMonth, 'MMMM yyyy', { locale: ptBR })}
        </h2>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={previousMonth}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={goToCurrentMonth}
            className="flex items-center gap-2"
          >
            <Calendar className="h-4 w-4" />
            <span>Hoje</span>
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={nextMonth}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Timeline grid */}
      <div className="relative min-w-[1200px]">
        {/* Days header */}
        <div className="grid grid-cols-[250px_repeat(31,minmax(30px,1fr))] gap-px mb-2">
          <div className="font-semibold text-[#004175]">Room</div>
          {days.map((day) => (
            <div
              key={day.toISOString()}
              className={`text-center text-sm font-medium ${
                isSameDay(day, new Date()) ? 'text-[#004175] font-bold' : 'text-gray-600'
              }`}
            >
              {format(day, 'd')}
            </div>
          ))}
        </div>

        {/* Rooms and bookings */}
        <div className="space-y-0">
          {Object.values(rooms).map((room, index) => (
            <div
              key={room.id}
              className={`grid grid-cols-[250px_repeat(31,minmax(30px,1fr))] ${
                index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
              }`}
            >
              {/* Room name */}
              <div className="text-sm font-medium text-gray-700 p-2 truncate">
                {room.name}
              </div>

              {/* Days cells */}
              {days.map((day) => {
                const bookings = getBookingsForDay(room.id, day)
                return (
                  <div
                    key={day.toISOString()}
                    className="relative h-6 border-r border-gray-100"
                  >
                    {bookings.map((booking) => (
                      <TooltipProvider key={booking.id} delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <div
                              className={`${getBookingSegmentClass(booking, day)} transition-opacity duration-150 hover:opacity-90`}
                            />
                          </TooltipTrigger>
                          <TooltipContent 
                            sideOffset={5}
                            className="bg-white p-3 shadow-lg border border-gray-200 rounded-lg animate-in fade-in-0 zoom-in-95 duration-100"
                          >
                            <div className="text-sm space-y-1">
                              <p className="font-bold text-[#004175]">{booking.guestName}</p>
                              <div className="text-gray-600">
                                <p>Check-in: {format(booking.checkIn, 'dd/MM/yyyy')}</p>
                                <p>Check-out: {format(booking.checkOut, 'dd/MM/yyyy')}</p>
                                <p>Duração: {
                                  Math.ceil((booking.checkOut.getTime() - booking.checkIn.getTime()) / (1000 * 60 * 60 * 24))
                                } dias</p>
                              </div>
                            </div>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    ))}
                  </div>
                )
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 