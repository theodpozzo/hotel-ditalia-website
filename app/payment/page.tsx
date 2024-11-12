'use client'

import React from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import Image from 'next/image'

// Mapping of room IDs to their display names in Portuguese
const roomTypes = {
  'vista-mar-4': 'Vista Mar 4° Piso',
  'esquina-4' : 'Esquina Mar e Praça 4° Piso',
  'vista-praca-4': 'Vista Praça 4° Piso',
  'interno-4': 'Interno 4° Piso',
  'vista-mar-3': 'Vista Mar 3° Piso',
  'esquina-3' : 'Esquina Mar e Praça 3° Piso',
  'vista-praca-3': 'Vista Praça 3° Piso',
  'interno-3': 'Interno 3° Piso',
  'vista-mar-2': 'Vista Mar 2° Piso',
  'esquina-2' : 'Esquina Mar e Praça 2° Piso',
  'vista-praca-2': 'Vista Praça 2° Piso',
  'interno-2': 'Interno 2° Piso',
  'terreo': 'Terreo Interno'
}

export default function PaymentPage() {
  // Initialize hooks for navigation and URL parameters
  const searchParams = useSearchParams()
  const router = useRouter()
  
  // Extract all booking details from URL parameters
  const roomId = searchParams.get('roomId')
  const checkIn = searchParams.get('checkIn') ? new Date(searchParams.get('checkIn')!) : null
  const checkOut = searchParams.get('checkOut') ? new Date(searchParams.get('checkOut')!) : null
  const adults = searchParams.get('adults')
  const children = searchParams.get('children')
  const price = searchParams.get('price')

  // Get room type name from roomId, fallback to default text if not found
  const roomType = roomId ? roomTypes[roomId as keyof typeof roomTypes] : 'Quarto não especificado'

  // Helper function to format dates in Brazilian Portuguese
  const formatDate = (date: Date | null) => {
    if (!date) return ''
    return format(date, "dd 'de' MMMM 'de' yyyy", { locale: ptBR })
  }

  // Available payment methods configuration
  const paymentMethods = [
    {
      id: 'pix',
      name: 'PIX',
      icon: '/payment-icons/pix.svg',
      description: 'Pagamento instantâneo'
    },
    {
      id: 'credit',
      name: 'Cartão de Crédito',
      icon: '/payment-icons/credit-card.svg',
      description: 'Até 12x sem juros'
    },
    {
      id: 'googlepay',
      name: 'Google Pay',
      icon: '/payment-icons/google-pay.svg',
      description: 'Pagamento rápido e seguro'
    },
    {
      id: 'paypal',
      name: 'PayPal',
      icon: '/payment-icons/paypal.svg',
      description: 'Pagamento internacional'
    }
  ]

  // Handler for back button navigation
  const handleBack = () => {
    router.back()
  }

  return (
    <main className="min-h-screen bg-gray-50 pt-28">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto relative">
          {/* Back button - subtle positioning to the left */}
          <button 
            onClick={handleBack}
            className="absolute -left-16 top-[8.5rem] flex items-center gap-1 text-sm text-gray-500 hover:text-[#004175] transition-colors"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="m15 18-6-6 6-6"/>
            </svg>
            Voltar
          </button>

          <h1 className="text-3xl font-bold text-[#004175] mb-8">Finalizar Reserva</h1>
          
          {/* Booking Summary Card */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">Resumo da Reserva</h2>
            <div className="grid grid-cols-2 gap-4 text-sm">
              {/* Display selected room type */}
              <div>
                <p className="text-gray-600">Tipo de Quarto</p>
                <p className="font-semibold">{roomType}</p>
              </div>
              {/* Display dates and guest information */}
              <div>
                <p className="text-gray-600">Check-in</p>
                <p className="font-semibold">{formatDate(checkIn)}</p>
              </div>
              <div>
                <p className="text-gray-600">Check-out</p>
                <p className="font-semibold">{formatDate(checkOut)}</p>
              </div>
              <div>
                <p className="text-gray-600">Hóspedes</p>
                <p className="font-semibold">
                  {adults} {parseInt(adults!) > 1 ? 'adultos' : 'adulto'}
                  {children && parseInt(children) > 0 ? `, ${children} ${parseInt(children) > 1 ? 'crianças' : 'criança'}` : ''}
                </p>
              </div>
              {/* Display total price */}
              <div>
                <p className="text-gray-600">Valor Total</p>
                <p className="font-semibold text-lg text-[#004175]">R${price}</p>
              </div>
            </div>
          </div>

          {/* Payment Methods Section */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-6">Escolha a forma de pagamento</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Map through payment methods and create buttons */}
              {paymentMethods.map((method) => (
                <button
                  key={method.id}
                  className="flex items-center gap-4 p-4 border rounded-lg hover:border-[#004175] hover:bg-blue-50 transition-colors"
                  onClick={() => {/* TODO: Add payment processing logic */}}
                >
                  <div className="w-12 h-12 relative flex-shrink-0">
                    <Image
                      src={method.icon}
                      alt={method.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold">{method.name}</h3>
                    <p className="text-sm text-gray-600">{method.description}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 