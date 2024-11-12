'use client'

import React from 'react'

interface PlaceholderImageProps {
  index: number
  className?: string
  preserveRatio?: boolean
}

export function PlaceholderImage({ index, className = '', preserveRatio = false }: PlaceholderImageProps) {
  const hue = (index * 137.508) % 360
  const saturation = 25 + (index * 7) % 20
  const lightness = 85 + (index * 5) % 10
  const backgroundColor = `hsl(${hue}deg ${saturation}% ${lightness}%)`

  const aspectRatios = [
    'aspect-square',          // 1:1
    'aspect-video',           // 16:9
    'aspect-[4/5]',          // Portrait
    'aspect-[3/2]',          // Landscape
    'aspect-[2/3]',          // Tall portrait
    'aspect-[21/9]',         // Ultra-wide
    'aspect-[1/1.618]',      // Golden ratio portrait
    'aspect-[1.618/1]',      // Golden ratio landscape
    'aspect-[3/4]',          // Classic photo
    'aspect-[5/4]',          // Large format
    'aspect-[16/10]',        // Widescreen
    'aspect-[9/16]'          // Mobile
  ]

  const aspectRatio = aspectRatios[index % aspectRatios.length]

  return (
    <div 
      className={`
        w-full h-full flex items-center justify-center relative
        ${preserveRatio ? aspectRatio : ''} 
        ${className}
      `}
      style={{ backgroundColor }}
    >
      <span className="text-4xl select-none">
        {[
          '🛏️', '🏨', '🌅', '🏖️', '🌊', '🏊‍♂️', 
          '🍽️', '🎭', '🎨', '🎪', '🎯', '🎲'
        ][index % 12]}
      </span>
      <span className="absolute bottom-2 right-2 text-xs bg-black/50 text-white px-2 py-1 rounded">
        {aspectRatio.replace('aspect-', '').replace('[', '').replace(']', '')}
      </span>
    </div>
  )
} 