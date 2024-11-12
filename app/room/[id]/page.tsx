'use client'

import React, { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { PlaceholderImage } from '@/components/ui/placeholder-image'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { rooms } from '@/lib/rooms'

export default function RoomPage({ params }: { params: { id: string } }) {
    const [selectedImage, setSelectedImage] = useState<number | null>(null)

    const router = useRouter()
    const searchParams = useSearchParams()

    // Get room details
    const room = rooms[params.id]

    // If room doesn't exist, show error state
    if (!room) {
        return (
            <div className="min-h-screen bg-gray-50 pt-28">
                <div className="container mx-auto px-4 py-8">
                    <h1 className="text-2xl text-red-600">Quarto não encontrado</h1>
                    <Button
                        onClick={() => router.back()}
                        className="mt-4"
                    >
                        Voltar
                    </Button>
                </div>
            </div>
        )
    }

    // Get booking details from URL
    const checkIn = searchParams.get('checkIn') ? new Date(searchParams.get('checkIn')!) : null
    const checkOut = searchParams.get('checkOut') ? new Date(searchParams.get('checkOut')!) : null
    const adults = searchParams.get('adults')
    const children = searchParams.get('children')

    // Format dates in Brazilian Portuguese
    const formatDate = (date: Date | null) => {
        if (!date) return ''
        return format(date, "dd 'de' MMMM", { locale: ptBR })
    }

    // Calculate number of nights
    const nights = checkIn && checkOut
        ? Math.ceil((checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24))
        : 0

    // Calculate total price
    const totalPrice = room.price * nights

    // Handle booking confirmation
    const handleBooking = () => {
        const queryParams = new URLSearchParams({
            roomId: params.id,
            checkIn: checkIn?.toISOString() || '',
            checkOut: checkOut?.toISOString() || '',
            adults: adults || '1',
            children: children || '0',
            price: totalPrice.toString()
        }).toString()

        router.push(`/payment?${queryParams}`)
    }

    const images = Array(12).fill(null).map((_, index) => ({
        id: index,
        alt: `Gallery image ${index + 1}`
    }))

    const handlePrevious = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation()
        setSelectedImage(prev => prev !== null ? (prev - 1 + images.length) % images.length : null)
    }

    const handleNext = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation()
        setSelectedImage(prev => prev !== null ? (prev + 1) % images.length : null)
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (selectedImage === null) return

        switch (e.key) {
            case 'ArrowLeft':
                handlePrevious(e as unknown as React.MouseEvent<HTMLButtonElement>)
                break
            case 'ArrowRight':
                handleNext(e as unknown as React.MouseEvent<HTMLButtonElement>)
                break
            case 'Escape':
                setSelectedImage(null)
                break
        }
    }

    return (
        <main className="min-h-screen bg-gray-50 pt-28">
            <div className="container mx-auto px-4 py-8">
                {/* Back button */}
                <button
                    onClick={() => router.back()}
                    className="flex items-center gap-2 text-[#004175] hover:underline mb-6"
                >
                    <ChevronLeft size={20} />
                    Voltar para seleção de quartos
                </button>

                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    {/* Image Gallery */}
                    <div className="relative h-[60vh] bg-gray-100">
                    {images.map((image, index) => (
                        <Card
                        key={image.id}
                        className=" grid grid-cols-4 h-full gap-2 p-2 cursor-pointer hover:shadow-lg transition-shadow duration-300"
                        onClick={() => setSelectedImage(index)}>
                            <div className="col-span-3 relative rounded-lg overflow-hidden">
                                <PlaceholderImage index={index} className="rounded-lg" />
                            </div>
                            <div className="space-y-2">
                                {[1, 2, 3].map((index) => (
                                    <div key={index} className="relative h-1/3 rounded-lg overflow-hidden">
                                        <PlaceholderImage index={index} className="rounded-lg" />
                                    </div>
                                ))}
                            </div>
                        </Card>
                        ))}
                    </div>

                    {/* Modal for expanded view */}
                    <Dialog
                        open={selectedImage !== null}
                        onOpenChange={() => setSelectedImage(null)}
                    >
                        <DialogContent
                            className="max-w-[90vw] h-[90vh] p-0 bg-transparent border-none"
                            onKeyDown={handleKeyDown}
                        >
                            <div className="w-full h-full flex items-center justify-center relative">
                                {selectedImage !== null && (
                                    <>
                                        <div className="w-[80vw] h-[60vh] relative">
                                            <button
                                                onClick={() => setSelectedImage(null)}
                                                className="absolute right-4 top-4 z-50 text-white bg-black/50 p-1 rounded-full hover:bg-black/70 transition-colors"
                                            >
                                                <X size={24} />
                                            </button>

                                            <div className="w-full h-full">
                                                <PlaceholderImage
                                                    index={selectedImage}
                                                    className="rounded w-full h-full shadow-2xl ring-4 ring-white/10 ring-offset-2 ring-offset-black/10"
                                                    preserveRatio
                                                />
                                            </div>
                                        </div>

                                        <button
                                            onClick={handlePrevious}
                                            className="absolute left-[-4.5rem] top-1/2 -translate-y-1/2 text-white bg-black/50 p-2 rounded-full hover:bg-black/70 transition-colors"
                                        >
                                            <ChevronLeft size={32} />
                                        </button>

                                        <button
                                            onClick={handleNext}
                                            className="absolute right-[-4.5rem] top-1/2 -translate-y-1/2 text-white bg-black/50 p-2 rounded-full hover:bg-black/70 transition-colors"
                                        >
                                            <ChevronRight size={32} />
                                        </button>
                                    </>
                                )}
                            </div>
                        </DialogContent>
                    </Dialog>
                </div>


                {/* Room Details */}
                <div className="p-8">
                    <div className="flex justify-between items-start mb-6">
                        <div>
                            <h1 className="text-3xl font-bold text-[#004175] mb-2">{room.name}</h1>
                            <p className="text-gray-600">{room.description}</p>
                        </div>
                        <div className="text-right">
                            <p className="text-3xl font-bold text-[#004175]">R${room.price}</p>
                            <p className="text-gray-600">por noite</p>
                        </div>
                    </div>

                    {/* Room Features */}
                    <div className="mb-8">
                        <h2 className="text-xl font-semibold text-[#004175] mb-4">Comodidades</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {room.amenities.map((amenity, index) => (
                                <div key={index} className="flex items-center gap-2">
                                    <span className="text-2xl">{amenity.icon}</span>
                                    <span className="text-gray-600">{amenity.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Detailed Description */}
                    <div className="mb-8">
                        <h2 className="text-xl font-semibold text-[#004175] mb-4">Sobre o Quarto</h2>
                        <p className="text-gray-600 whitespace-pre-line">{room.longDescription}</p>
                        <div className="mt-4 flex gap-8">
                            <div>
                                <span className="text-gray-600">Tamanho:</span>
                                <span className="ml-2 font-semibold">{room.size}</span>
                            </div>
                            <div>
                                <span className="text-gray-600">Capacidade:</span>
                                <span className="ml-2 font-semibold">até {room.maxGuests} pessoas</span>
                            </div>
                        </div>
                    </div>

                    {/* Booking Summary */}
                    <div className="bg-gray-50 rounded-lg p-6 mb-8">
                        <h2 className="text-xl font-semibold text-[#004175] mb-4">Resumo da Reserva</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
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
                            <div>
                                <p className="text-gray-600">Total ({nights} {nights === 1 ? 'noite' : 'noites'})</p>
                                <p className="font-semibold text-[#004175]">R${totalPrice}</p>
                            </div>
                        </div>

                        <Button
                            onClick={handleBooking}
                            className="w-full bg-[#004175] hover:bg-[#00325A] text-white py-6 text-lg"
                        >
                            Confirmar Reserva
                        </Button>
                    </div>
                </div>
            </div>
        </main>
    )
} 