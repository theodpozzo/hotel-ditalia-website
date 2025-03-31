"use client"

import type React from "react"
import { useState, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { PlaceholderImage } from "@/components/ui/placeholder-image"
import { useLanguageContext } from "@/context/LanguageContext"
import { motion } from "framer-motion"

export default function GalleryPage() {
  const { t } = useLanguageContext()
  const [selectedImage, setSelectedImage] = useState<{ categoryId: string; imageIndex: number } | null>(null)

  // References to each section for navigation
  const sectionRefs = {
    rooms: useRef<HTMLDivElement>(null),
    breakfast: useRef<HTMLDivElement>(null),
    social: useRef<HTMLDivElement>(null),
    views: useRef<HTMLDivElement>(null),
    attractions: useRef<HTMLDivElement>(null),
  }

  // Gallery categories with their respective images
  const galleryCategories = [
    {
      id: "rooms",
      title: t("gallery.categories.rooms").toString(),
      ref: sectionRefs.rooms,
      images: Array(6)
        .fill(null)
        .map((_, index) => ({
          id: `rooms-${index}`,
          alt: `${t("gallery.categories.rooms").toString()} ${index + 1}`,
          imageIndex: index,
        })),
    },
    {
      id: "breakfast",
      title: t("gallery.categories.breakfast").toString(),
      ref: sectionRefs.breakfast,
      images: Array(4)
        .fill(null)
        .map((_, index) => ({
          id: `breakfast-${index}`,
          alt: `${t("gallery.categories.breakfast").toString()} ${index + 1}`,
          imageIndex: index + 20, // Using different index ranges for different categories
        })),
    },
    {
      id: "social",
      title: t("gallery.categories.socialAreas").toString(),
      ref: sectionRefs.social,
      images: Array(5)
        .fill(null)
        .map((_, index) => ({
          id: `social-${index}`,
          alt: `${t("gallery.categories.socialAreas").toString()} ${index + 1}`,
          imageIndex: index + 30,
        })),
    },
    {
      id: "views",
      title: t("gallery.categories.views").toString(),
      ref: sectionRefs.views,
      images: Array(4)
        .fill(null)
        .map((_, index) => ({
          id: `views-${index}`,
          alt: `${t("gallery.categories.views").toString()} ${index + 1}`,
          imageIndex: index + 40,
        })),
    },
    {
      id: "attractions",
      title: t("gallery.categories.nearbyAttractions").toString(),
      ref: sectionRefs.attractions,
      images: Array(5)
        .fill(null)
        .map((_, index) => ({
          id: `attractions-${index}`,
          alt: `${t("gallery.categories.nearbyAttractions").toString()} ${index + 1}`,
          imageIndex: index + 50,
        })),
    },
  ]

  // Quick navigation to sections
  const scrollToSection = (sectionId: string) => {
    const category = galleryCategories.find((cat) => cat.id === sectionId)
    if (category && category.ref.current) {
      category.ref.current.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleImageClick = (categoryId: string, imageIndex: number) => {
    setSelectedImage({ categoryId, imageIndex })
  }

  const getCurrentCategory = () => {
    return selectedImage ? galleryCategories.find((cat) => cat.id === selectedImage.categoryId) : null
  }

  const getCurrentCategoryImages = () => {
    const category = getCurrentCategory()
    return category ? category.images : []
  }

  const handlePrevious = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    if (!selectedImage) return

    const currentCategory = getCurrentCategory()
    if (!currentCategory) return

    const currentIndex = currentCategory.images.findIndex((img) => img.imageIndex === selectedImage.imageIndex)

    const newIndex = (currentIndex - 1 + currentCategory.images.length) % currentCategory.images.length
    setSelectedImage({
      categoryId: selectedImage.categoryId,
      imageIndex: currentCategory.images[newIndex].imageIndex,
    })
  }

  const handleNext = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    if (!selectedImage) return

    const currentCategory = getCurrentCategory()
    if (!currentCategory) return

    const currentIndex = currentCategory.images.findIndex((img) => img.imageIndex === selectedImage.imageIndex)

    const newIndex = (currentIndex + 1) % currentCategory.images.length
    setSelectedImage({
      categoryId: selectedImage.categoryId,
      imageIndex: currentCategory.images[newIndex].imageIndex,
    })
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (selectedImage === null) return

    switch (e.key) {
      case "ArrowLeft":
        handlePrevious(e as unknown as React.MouseEvent<HTMLButtonElement>)
        break
      case "ArrowRight":
        handleNext(e as unknown as React.MouseEvent<HTMLButtonElement>)
        break
      case "Escape":
        setSelectedImage(null)
        break
    }
  }

  return (
    <div className="container mx-auto px-4 py-16 pt-28">
      <h1 className="text-4xl font-bold mb-8 text-blue-800">{t("gallery.title").toString()}</h1>

      {/* Quick navigation */}
      <div className="flex flex-wrap gap-4 mb-12">
        {galleryCategories.map((category) => (
          <button
            key={category.id}
            onClick={() => scrollToSection(category.id)}
            className="px-4 py-2 rounded-full bg-gray-100 hover:bg-blue-100 transition-colors text-blue-800 font-medium"
          >
            {category.title}
          </button>
        ))}
      </div>

      {/* Gallery sections */}
      {galleryCategories.map((category, categoryIndex) => (
        <div key={category.id} ref={category.ref} className={`mb-16 ${categoryIndex > 0 ? "pt-4" : ""}`}>
          <div className="flex items-center mb-6">
            <h2 className="text-2xl font-semibold text-blue-700 mr-4">{category.title}</h2>
            <div className="h-px bg-gray-200 flex-grow"></div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {category.images.map((image) => (
              <Card
                key={image.id}
                className="cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
                onClick={() => handleImageClick(category.id, image.imageIndex)}
              >
                <CardContent className="p-2">
                  <div className="relative aspect-[4/3] overflow-hidden rounded">
                    <div className="absolute inset-0">
                      <PlaceholderImage index={image.imageIndex} className="w-full h-full object-cover" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
      ))}

      {/* Modal for expanded view */}
      <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-[90vw] h-[90vh] p-0 bg-transparent border-none" onKeyDown={handleKeyDown}>
          <div className="w-full h-full flex items-center justify-center relative">
            {selectedImage !== null && (
              <>
                <div className="w-[80vw] h-[60vh] relative">
                  <button
                    onClick={() => setSelectedImage(null)}
                    className="absolute right-4 top-4 z-50 text-white bg-black/50 p-1 rounded-full hover:bg-black/70 transition-colors"
                    aria-label={t("gallery.close").toString()}
                  >
                    <X size={24} />
                  </button>

                  <div className="w-full h-full">
                    <PlaceholderImage
                      index={selectedImage.imageIndex}
                      className="rounded w-full h-full shadow-2xl ring-4 ring-white/10 ring-offset-2 ring-offset-black/10 object-contain bg-black/90"
                      preserveRatio
                    />
                  </div>

                  <div className="absolute bottom-4 left-0 right-0 text-center text-white bg-black/50 py-2 px-4 rounded-md mx-auto max-w-max">
                    {getCurrentCategory()?.title} -{" "}
                    {getCurrentCategoryImages().findIndex((img) => img.imageIndex === selectedImage.imageIndex) + 1}/
                    {getCurrentCategoryImages().length}
                  </div>
                </div>

                <button
                  onClick={handlePrevious}
                  className="absolute left-4 md:left-[-4.5rem] top-1/2 -translate-y-1/2 text-white bg-black/50 p-2 rounded-full hover:bg-black/70 transition-colors"
                  aria-label={t("gallery.previous").toString()}
                >
                  <ChevronLeft size={32} />
                </button>

                <button
                  onClick={handleNext}
                  className="absolute right-4 md:right-[-4.5rem] top-1/2 -translate-y-1/2 text-white bg-black/50 p-2 rounded-full hover:bg-black/70 transition-colors"
                  aria-label={t("gallery.next").toString()}
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

