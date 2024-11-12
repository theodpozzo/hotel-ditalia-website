'use client'

import React from 'react'
import { Button } from "@/components/ui/button"

export function NewsletterSection() {
  return (
    <section className="bg-blue-200 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6 text-blue-800">
          Fique por dentro das nossas novidades
        </h2>
        <Button 
          variant="outline" 
          className="text-lg py-6 px-8 border-2 border-gold text-gold hover:bg-gold hover:text-white transition-colors"
        >
          Inscreva-se em nossa Newsletter
        </Button>
      </div>
    </section>
  )
} 