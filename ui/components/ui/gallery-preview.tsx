"use client"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguageContext } from "@/context/LanguageContext"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import Image from "next/image"

export default function GalleryPreview() {
  const { t } = useLanguageContext()
  const router = useRouter()

  // Featured images from each category
  const featuredImages = [
    { id: "rooms", src: "/images/42_sunset.jpg", title: t("gallery.categories.rooms").toString() },
    { id: "breakfast", src: "/images/breakfast_fruit.jpg", title: t("gallery.categories.breakfast").toString() },
    { id: "views", src: "/images/42_beachview.jpg", title: t("gallery.categories.views").toString() }
  ]

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">
            {t("home.galleryPreview.title").toString()}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t("home.galleryPreview.description").toString()}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {featuredImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden h-full hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                <CardContent className="p-0">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={image.src}
                      alt={image.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                      <div className="p-4 text-white">
                        <h3 className="font-semibold text-lg">{image.title}</h3>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button
            onClick={() => router.push("/gallery")}
            className="bg-blue-800 hover:bg-blue-900 text-white px-6 py-2"
          >
            {t("home.galleryPreview.viewAll").toString()}
          </Button>
        </div>
      </div>
    </section>
  )
}

