// InformationSection.tsx
'use client'

import React from "react"
import { motion } from "framer-motion"
import { useLanguageContext } from "@/context/LanguageContext"
import { InformationBox } from "@/components/ui/InformationBox"

export function InformationSection() {
  const { t, tObject } = useLanguageContext()

  type InfoBox = {
    title: string
    description: string
    highlights?: string[]
  }

  const infoBoxes = tObject<InfoBox[]>("information_section.info_boxes")

  const images = [
    "/images/42_sunset.jpg",
    "/images/breakfast_fruit.jpg",
    "/images/42_beachview.jpg"
  ]

  return (
    <section className="py-16 md:py-24 bg-none">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-blue-900 mb-4"
          >
            {t("information_section.title").toString()}
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-24 h-1 bg-yellow-400 mx-auto mb-6"
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-blue-700 max-w-2xl mx-auto"
          >
            {t("information_section.subtitle").toString()}
          </motion.p>
        </div>

        <div className="space-y-24 md:space-y-32">
          {infoBoxes.map((box, index) => (
              <div key={index}>
                <InformationBox
                  box={box}
                  imageSrc={images[index]}
                  isReversed={index % 2 !== 0}
                />
              </div>
          ))}
        </div>
      </div>
    </section>
  )
}
