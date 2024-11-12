'use client'

import React, { useState } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { PlaceholderImage } from '@/components/ui/placeholder-image'

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

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
    <div className="container mx-auto px-4 py-16 pt-28">
      <h1 className="text-4xl font-bold mb-8 text-blue-800">Galeria</h1>
      
      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <Card 
            key={image.id} 
            className="cursor-pointer hover:shadow-lg transition-shadow duration-300"
            onClick={() => setSelectedImage(index)}
          >
            <CardContent className="p-2">
              <div className="relative aspect-[4/3] overflow-hidden">
                <div className="absolute inset-0">
                  <PlaceholderImage 
                    index={index} 
                    className="rounded w-full h-full object-cover"
                  />
                </div>
              </div>
            </CardContent>
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
  )
} 