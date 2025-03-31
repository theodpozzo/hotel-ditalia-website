"use client"

import React, { useState, useRef } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { useLanguageContext } from "@/context/LanguageContext"
import { motion } from "framer-motion"

// Hide scrollbars and add gradient overlay
const scrollbarHideStyles = `
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  .scroll-fade-left {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 80px;
    background: linear-gradient(to right, white, transparent);
    pointer-events: none;
    z-index: 5;
  }
  .scroll-fade-right {
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    width: 80px;
    background: linear-gradient(to left, white, transparent);
    pointer-events: none;
    z-index: 5;
  }
`

export default function GalleryPage() {
  const { t } = useLanguageContext()
  const [selectedImage, setSelectedImage] = useState<{ categoryId: string; imageIndex: number } | null>(null)

  const sectionRefs = {
    rooms: useRef<HTMLDivElement>(null),
    breakfast: useRef<HTMLDivElement>(null),
    social: useRef<HTMLDivElement>(null),
    views: useRef<HTMLDivElement>(null),
    attractions: useRef<HTMLDivElement>(null),
  }

  const galleryCategories = [
    {
      id: "rooms",
      title: t("gallery.categories.rooms").toString(),
      ref: sectionRefs.rooms,
      images: [
        { id: "brick_1", alt: "Brick Room 1", imageIndex: 0, src: "/images/rooms/brick_1.jpg" },
        { id: "brick_2", alt: "Brick Room 2", imageIndex: 1, src: "/images/rooms/brick_2.jpg" },
        { id: "brick_3", alt: "Brick Room 3", imageIndex: 2, src: "/images/rooms/brick_3.jpg" },
        { id: "brick_room", alt: "Brick Room", imageIndex: 3, src: "/images/rooms/brick_room.jpg" },
        { id: "frente_mar_1", alt: "Frente Mar Room 1", imageIndex: 4, src: "/images/rooms/frente_mar_1.jpg" },
        { id: "frente_mar_inside", alt: "Frente Mar Inside", imageIndex: 5, src: "/images/rooms/frente_mar_inside.jpg" },
        { id: "in_31_1", alt: "In Room 31 1", imageIndex: 6, src: "/images/rooms/in_31_1.jpg" },
        { id: "in_31_2", alt: "In Room 31 2", imageIndex: 7, src: "/images/rooms/in_31_2.jpg" },
        { id: "in_31_3", alt: "In Room 31 3", imageIndex: 8, src: "/images/rooms/in_31_3.jpg" },
        { id: "in_40_1", alt: "In Room 40 1", imageIndex: 9, src: "/images/rooms/in_40_1.jpg" },
        { id: "in_40_2", alt: "In Room 40 2", imageIndex: 10, src: "/images/rooms/in_40_2.jpg" },
        { id: "in_41_1", alt: "In Room 41 1", imageIndex: 11, src: "/images/rooms/in_41_1.jpg" },
        { id: "in_41_2", alt: "In Room 41 2", imageIndex: 12, src: "/images/rooms/in_41_2.jpg" },
        { id: "in_41_3", alt: "In Room 41 3", imageIndex: 13, src: "/images/rooms/in_41_3.jpg" },
        { id: "in_42_1", alt: "In Room 42 1", imageIndex: 14, src: "/images/rooms/in_42_1.jpg" },
        { id: "in_42_zoom", alt: "In Room 42 Zoom", imageIndex: 15, src: "/images/rooms/in_42_zoom.jpg" },
        { id: "in_45_balc", alt: "In Room 45 Balcony", imageIndex: 16, src: "/images/rooms/in_45_balc.jpg" },
        { id: "in_45_room", alt: "In Room 45", imageIndex: 17, src: "/images/rooms/in_45_room.jpg" },
      ],
    },
    {
      id: "breakfast",
      title: t("gallery.categories.breakfast").toString(),
      ref: sectionRefs.breakfast,
      images: [
        { id: "breakfast_fruit", alt: "Breakfast Fruit", imageIndex: 0, src: "/images/breakfast/breakfast_fruit.jpg" },
        { id: "cafe_long", alt: "Cafe Long", imageIndex: 1, src: "/images/breakfast/cafe_long.jpg" },
        { id: "cake_close", alt: "Cake Close", imageIndex: 2, src: "/images/breakfast/cake_close.jpg" },
        { id: "cold_cuts_cake", alt: "Cold Cuts Cake", imageIndex: 3, src: "/images/breakfast/cold_cuts_cake.jpg" },
        { id: "fruit", alt: "Fruit", imageIndex: 4, src: "/images/breakfast/fruit.jpg" },
        { id: "fruit_long", alt: "Fruit Long", imageIndex: 5, src: "/images/breakfast/fruit_long.jpg" },
        { id: "rising_sun_breakfast", alt: "Rising Sun Breakfast", imageIndex: 6, src: "/images/breakfast/rising_sun_breakfast.jpg" },
      ],
    },
    {
      id: "social",
      title: t("gallery.categories.socialAreas").toString(),
      ref: sectionRefs.social,
      images: [
        { id: "bougainvillea", alt: "Bougainvillea", imageIndex: 0, src: "/images/social-areas/bougainvillea.jpg" },
        { id: "front_1", alt: "Front 1", imageIndex: 1, src: "/images/social-areas/front_1.jpg" },
        { id: "front_2", alt: "Front 2", imageIndex: 2, src: "/images/social-areas/front_2.jpg" },
        { id: "front_3", alt: "Front 3", imageIndex: 3, src: "/images/social-areas/front_3.jpg" },
        { id: "front_entrance_wide", alt: "Front Entrance Wide", imageIndex: 4, src: "/images/social-areas/front_entrance_wide.jpg" },
        { id: "front_sun", alt: "Front Sun", imageIndex: 5, src: "/images/social-areas/front_sun.jpg" },
        { id: "garage_to_front", alt: "Garage to Front", imageIndex: 6, src: "/images/social-areas/garage_to_front.jpg" },
        { id: "internal_tri_balcony", alt: "Internal Tri Balcony", imageIndex: 7, src: "/images/social-areas/internal_tri_balcony.jpg" },
        { id: "logo_wall", alt: "Logo Wall", imageIndex: 8, src: "/images/social-areas/logo_wall.jpg" },
        { id: "logo_wall_2", alt: "Logo Wall 2", imageIndex: 9, src: "/images/social-areas/logo_wall_2.jpg" },
      ],
    },
    {
      id: "views",
      title: t("gallery.categories.views").toString(),
      ref: sectionRefs.views,
      images: [
        { id: "outx_1", alt: "Outx 1", imageIndex: 0, src: "/images/views/outx_1.jpg" },
        { id: "outx_2", alt: "Outx 2", imageIndex: 1, src: "/images/views/outx_2.jpg" },
        { id: "outx_3", alt: "Outx 3", imageIndex: 2, src: "/images/views/outx_3.jpg" },
        { id: "outx_4", alt: "Outx 4", imageIndex: 3, src: "/images/views/outx_4.jpg" },
        { id: "outx_5", alt: "Outx 5", imageIndex: 4, src: "/images/views/outx_5.jpg" },
        { id: "outx_6", alt: "Outx 6", imageIndex: 5, src: "/images/views/outx_6.jpg" },
        { id: "outx_7", alt: "Outx 7", imageIndex: 6, src: "/images/views/outx_7.jpg" },
        { id: "view_40", alt: "View 40", imageIndex: 7, src: "/images/views/view_40.jpg" },
        { id: "view_42_1", alt: "View 42 1", imageIndex: 8, src: "/images/views/view_42_1.jpg" },
        { id: "view_42_2", alt: "View 42 2", imageIndex: 9, src: "/images/views/view_42_2.jpg" },
        { id: "view_42_3", alt: "View 42 3", imageIndex: 10, src: "/images/views/view_42_3.jpg" },
        { id: "view_42_4", alt: "View 42 4", imageIndex: 11, src: "/images/views/view_42_4.jpg" },
        { id: "view_45", alt: "View 45", imageIndex: 12, src: "/images/views/view_45.jpg" },
      ],
    },
    // {
    //   id: "attractions",
    //   title: t("gallery.categories.nearbyAttractions").toString(),
    //   ref: sectionRefs.attractions,
    //   images: Array(5).fill(null).map((_, index) => ({
    //     id: `attractions-${index}`,
    //     alt: `${t("gallery.categories.nearbyAttractions").toString()} ${index + 1}`,
    //     imageIndex: index + 50,
    //     src: `/images/nearby-attractions/${index + 1}.jpg`,
    //   })),
    // },
  ]

  const scrollToSection = (sectionId: string) => {
    const category = galleryCategories.find((cat) => cat.id === sectionId)
    category?.ref.current?.scrollIntoView({ behavior: "smooth" })
  }

  const handleImageClick = (categoryId: string, imageIndex: number) => {
    setSelectedImage({ categoryId, imageIndex })
  }

  const getCurrentCategory = () =>
    selectedImage ? galleryCategories.find((cat) => cat.id === selectedImage.categoryId) : null

  const getCurrentCategoryImages = () => getCurrentCategory()?.images ?? []

  const handlePrevious = () => {
    if (!selectedImage) return
    const category = getCurrentCategory()
    if (!category) return
    const currentIndex = category.images.findIndex(img => img.imageIndex === selectedImage.imageIndex)
    const newIndex = (currentIndex - 1 + category.images.length) % category.images.length
    setSelectedImage({ categoryId: selectedImage.categoryId, imageIndex: category.images[newIndex].imageIndex })
  }

  const handleNext = () => {
    if (!selectedImage) return
    const category = getCurrentCategory()
    if (!category) return
    const currentIndex = category.images.findIndex(img => img.imageIndex === selectedImage.imageIndex)
    const newIndex = (currentIndex + 1) % category.images.length
    setSelectedImage({ categoryId: selectedImage.categoryId, imageIndex: category.images[newIndex].imageIndex })
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (!selectedImage) return
    if (e.key === "ArrowLeft") handlePrevious()
    if (e.key === "ArrowRight") handleNext()
    if (e.key === "Escape") setSelectedImage(null)
  }

  return (
    <div className="container mx-auto px-4 py-16 pt-28">
      <style>{scrollbarHideStyles}</style>
      <h1 className="text-4xl font-bold mb-8 text-blue-800">{t("gallery.title").toString()}</h1>

      {/* Nav Buttons */}
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

      {/* Sections */}
      {galleryCategories.map((category, i) => {
        const scrollContainerId = `scroll-container-${category.id}`

        const scroll = (direction: "left" | "right") => {
          const container = document.getElementById(scrollContainerId)
          if (container) {
            container.scrollBy({ left: direction === "left" ? -350 : 350, behavior: "smooth" })
          }
        }

        return (
          <div key={category.id} ref={category.ref} className={`mb-16 ${i > 0 ? "pt-4" : ""}`}>
            <div className="flex items-center mb-6">
              <h2 className="text-2xl font-semibold text-blue-700 mr-4">{category.title}</h2>
              <div className="h-px bg-gray-200 flex-grow" />
            </div>

            <div className="relative group">
              <div className="scroll-fade-left opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="scroll-fade-right opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <button
                onClick={() => scroll("left")}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-blue-800 rounded-full p-3 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <ChevronLeft size={32} />
              </button>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: "-100px" }}
                id={scrollContainerId}
                className="flex overflow-x-auto pb-4 scrollbar-hide snap-x gap-4 px-10"
              >
                {category.images.map((image) => (
                  <Card
                    key={image.id}
                    className="cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-[1.02] flex-shrink-0 snap-center"
                    style={{ width: "calc(100% / 3.5)", minWidth: "280px" }}
                    onClick={() => handleImageClick(category.id, image.imageIndex)}
                  >
                    <CardContent className="p-2">
                      <div className="relative aspect-[4/3] overflow-hidden rounded">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </motion.div>

              <button
                onClick={() => scroll("right")}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-blue-800 rounded-full p-3 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <ChevronRight size={32} />
              </button>
            </div>
          </div>
        )
      })}

      {/* Dialog View */}
      <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-[90vw] h-[90vh] p-0 bg-transparent" onKeyDown={handleKeyDown}>
          <div className="w-full h-full flex items-center justify-center relative">
            {selectedImage && (
              <>
                <div className="w-[80vw] h-[60vh] relative">
                  <button
                    onClick={() => setSelectedImage(null)}
                    className="absolute right-4 top-4 z-50 text-white bg-black/50 p-1 rounded-full hover:bg-black/70 transition-colors"
                  >
                    <X size={24} />
                  </button>

                  <div className="w-full h-full">
                    {getCurrentCategoryImages().find(img => img.imageIndex === selectedImage.imageIndex) ? (
                      <Image
                        src={getCurrentCategoryImages().find(img => img.imageIndex === selectedImage.imageIndex)!.src!}
                        alt={getCurrentCategoryImages().find(img => img.imageIndex === selectedImage.imageIndex)!.alt!}
                        fill
                        className="object-contain rounded shadow-2xl ring-4 ring-white/10 ring-offset-2 ring-offset-black/10"
                      />
                    ) : null}
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
                >
                  <ChevronLeft size={32} />
                </button>

                <button
                  onClick={handleNext}
                  className="absolute right-4 md:right-[-4.5rem] top-1/2 -translate-y-1/2 text-white bg-black/50 p-2 rounded-full hover:bg-black/70 transition-colors"
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
