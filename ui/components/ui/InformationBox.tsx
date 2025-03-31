// components/InformationBox.tsx
'use client'

import React from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { useLanguageContext } from "@/context/LanguageContext"
import { ArrowRight, Star } from "lucide-react"

type InfoBox = {
  title: string
  description: string
  highlights?: string[]
}

type Props = {
  box: InfoBox
  imageSrc: string
  isReversed: boolean
}

export function InformationBox({ box, imageSrc, isReversed }: Props) {
  const { t } = useLanguageContext()
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.7, delay: 0.1 }}
      className={`flex flex-col ${isReversed ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-8 md:gap-16`}
    >
      {/* Image */}
      <div className="w-full md:w-1/2 relative">
        <div className="relative border-4 overflow-hidden rounded-lg shadow-xl aspect-[4/3]">
          <div className="absolute inset-0 bg-blue-900/10 z-10" />
          <Image
            src={imageSrc}
            alt={box.title}
            fill
            className="object-cover transform transition-transform duration-700 hover:scale-105"
          />
        </div>
        {/* Decorative elements */}
        <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-yellow-400 rounded-full opacity-20 hidden md:block" />
        <div className="absolute -top-6 -left-6 w-12 h-12 bg-blue-600 rounded-full opacity-10 hidden md:block" />
      </div>

      {/* Content */}
      <div className="w-full md:w-1/2 p-4">
        <div className="relative">
          {/* Yellow animated underline */}
          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: "3rem" } : { width: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="h-1 bg-yellow-400 mb-4"
          />
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-blue-900">
            {box.title}
          </h2>
          <p className="text-lg text-blue-700 leading-relaxed mb-8">
            {box.description}
          </p>
          {Array.isArray(box.highlights) && box.highlights.length > 0 && (
            <ul className="space-y-3 mb-8">
              {box.highlights.map((highlight, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                  className="flex items-start gap-2"
                >
                  <Star className="h-5 w-5 text-yellow-500 mt-1 flex-shrink-0" />
                  <span className="text-blue-700">{highlight}</span>
                </motion.li>
              ))}
            </ul>
          )}
          <motion.button
            whileHover={{ x: 5 }}
            className="flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
          >
            {t("information_section.learn_more").toString()}
            <ArrowRight className="ml-2 h-4 w-4" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}
