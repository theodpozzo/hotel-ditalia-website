"use client";

import { useState, useRef, useEffect } from "react";
import { MapPin, Navigation, Car, Compass, ChevronRight, ExternalLink } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguageContext } from "@/context/LanguageContext";
import Image from "next/image";
import gsap from "gsap";

export default function LocationPage() {
  const { t, tArray } = useLanguageContext();

  const locations = tArray("location.locations_nearby") as unknown as { name: string; icon: string }[];

  const HOTEL_COORDS = {
    lat: t("hotel.location.lat").toString(), // -29.550450
    lng: t("hotel.location.lng").toString(), // -49.885753
  };

  const [activeMap, setActiveMap] = useState<"brazil" | "rs" | "litoral">("brazil");

  const svgRef = useRef<SVGSVGElement>(null);
  const cachedViewBox = useRef({ x: 0, y: 0, width: 800, height: 600 });

  const zoomLevels = {
    brazil: { x: 0, y: 0, width: 800, height: 600 },
    rs: { x: 340, y: 420, width: 200, height: 140 },
    litoral: { x: 450, y: 465, width: 30, height: 30 },
  };

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const viewBox = svg.viewBox.baseVal;
    cachedViewBox.current = { x: viewBox.x, y: viewBox.y, width: viewBox.width, height: viewBox.height };
  }, []);

  const handleMapChange = (newMap: typeof activeMap) => {
    setActiveMap(newMap);
    zoomToViewBox(newMap);
  };

  const zoomToViewBox = (mapKey: "brazil" | "rs" | "litoral") => {
    const svg = svgRef.current;
    if (!svg) return;

    const viewBox = svg.viewBox.baseVal;
    const newViewBox = zoomLevels[mapKey];

    gsap.to(viewBox, {
      x: newViewBox.x,
      y: newViewBox.y,
      width: newViewBox.width,
      height: newViewBox.height,
      duration: 1,
      ease: "power2.inOut",
    });
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white pt-28 pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 text-[#004175]">{t("location.title").toString()}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t("location.description").toString()}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="h-48 relative">
                <Image src="/placeholder.svg?height=400&width=600" alt="Hotel D'Italia" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h2 className="text-2xl font-bold">{t("hotel.name").toString()}</h2>
                    <p className="text-white/80">
                      {t("hotel.town").toString()} - {t("hotel.country").toString()}
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="text-[#004175] mt-1 h-5 w-5 flex-shrink-0" />
                  <div className="text-gray-700">{t("location.hotel.address").toString()}</div>
                </div>

                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${HOTEL_COORDS.lat},${HOTEL_COORDS.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-[#004175] hover:bg-[#00335d] text-white py-3 px-4 rounded-lg text-center font-medium transition-colors duration-200"
                >
                  <Car className="inline h-5 w-5 mr-2" />
                  {t("location.get_directions").toString()}
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden p-6">
              <div className="flex gap-2 mb-4">
                {(["brazil", "rs", "litoral"] as const).map((mapKey) => (
                  <button
                    key={mapKey}
                    onClick={() => handleMapChange(mapKey)}
                    className={`px-4 py-2 rounded-full ${activeMap === mapKey ? "bg-[#004175] text-white" : "bg-gray-100 text-gray-700"
                      }`}
                  >
                    {t(`location.map_section.timeline.${mapKey}`).toString()}
                  </button>
                ))}
              </div>
              <div className="w-full aspect-video rounded-xl overflow-hidden bg-blue-50 relative">
                <svg ref={svgRef} viewBox="0 0 800 600" className="w-full h-full">
                  <defs>
                    <filter id="glow" x="-30%" y="-30%" width="160%" height="160%">
                      <feGaussianBlur stdDeviation="0.8" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                  </defs>
                  <image href="/map-svg/brazil.svg" width="800" height="600" />
                  {activeMap === "litoral" && (
                    <>
                      {[
                        { name: "Torres", x: 462.5, y: 479 },
                        { name: "Capão da Canoa", x: 457.2, y: 487 },
                        { name: "Tramandaí", x: 457.2, y: 489 },
                        { name: "Arroio do Sal", x: 460.6, y: 482 },
                      ].map((city, idx) => {
                        return (
                          <motion.g
                            key={idx}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 + idx * 0.1 }}
                          >
                            {/* City marker with subtle glow */}
                            <circle
                              cx={city.x}
                              cy={city.y}
                              r={city.name === "Arroio do Sal" ? 1 : 0.6}
                              fill={city.name === "Arroio do Sal" ? "#F3B72B" : "#004175"}
                              stroke={city.name === "Arroio do Sal" ? "#E3B71B" : "#004175"}
                              strokeWidth="0.2"
                              filter="url(#glow)"
                            />

                            {/* Connecting line from dot to label */}
                            <line
                              y1={city.y}
                              x1={city.x}
                              y2={city.y}
                              x2={city.name === "Arroio do Sal" ? city.x + 2 : city.x + 1}
                              stroke={city.name === "Arroio do Sal" ? "#F3B72B" : "#004175"}
                              strokeWidth="0.2"
                              opacity="0.7"
                            />

                            {/* Label container */}
                            <g transform={`translate(${city.name === "Arroio do Sal" ? city.x + ((city.name.length + 4) / 2) : city.x + ((city.name.length + 2) / 2)} , ${city.y - 0.2})`}>
                              {/* Elegant label background */}
                              <rect
                                x={-city.name.length + (city.name.length / 2)}
                                y={city.name === "Arroio do Sal" ? -0.7 : -0.4}
                                width={city.name.length}
                                height={city.name === "Arroio do Sal" ? 1.8 : 1.4}
                                rx={0.4}
                                fill="white"
                                fillOpacity="0.9"
                                stroke={city.name === "Arroio do Sal" ? "#F3B72B" : "#004175"}
                                strokeWidth="0.2"
                                strokeOpacity="0.6"
                              />

                              {/* City name text */}
                              <text
                                x="0"
                                y="0.7"
                                fontSize="1.2"
                                fontFamily="'Helvetica Neue', Arial, sans-serif"
                                fill={city.name === "Arroio do Sal" ? "#F3B72B" : "#004175"}
                                fontWeight={city.name === "Arroio do Sal" ? "600" : "500"}
                                textAnchor="middle"
                                letterSpacing="0.1"
                              >
                                {city.name}
                              </text>
                            </g>
                          </motion.g>
                        );
                      })}
                    </>
                  )}
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-8"></div>

        <div className="relative bg-[#004175] border-8 border-[#004175] pt-12 rounded-2xl pb-32">
          {/* Wave Design at the Top */}
          <div className="text-[#ffffff] absolute rotate-180 left-0 top-0 w-full overflow-hidden leading-[0]">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-120 fill-current">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
            </svg>
          </div>
            {/* Pinterest-style Board for Details */}
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              {t("location.explore_area").toString() || "Explore the Area"}
            </h2>
          <div className="bg-[#ffffff] mt-120 mb-120 transform translate-y-200">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-hidden -mb-12">
              {/* Attractions Card */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-duration-300">
                <div className="h-48 relative">
                  <Image src="/images/farol.jpg" alt="Beach attractions" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-6 text-white">
                      <h3 className="text-2xl font-bold">
                        🏖️ {t("location.attractions.title").toString() || "Attractions"}
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {[
                      {
                        name: "Arroio do Sal Beach",
                        distance: "0.5 km",
                        description: "Beautiful sandy beach with clear waters, perfect for swimming and sunbathing.",
                      },
                      {
                        name: "Lagoa dos Patos",
                        distance: "15 km",
                        description: "The largest lagoon in Brazil, offering stunning views and water activities.",
                      },
                      {
                        name: "Torres Beaches",
                        distance: "30 km",
                        description: "Famous beaches with dramatic rock formations and excellent surfing conditions.",
                      },
                    ].map((attraction, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-3 rounded-lg">
                        <ChevronRight className="h-5 w-5 text-[#F3B72B] flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-bold text-[#004175]">{attraction.name}</h4>
                          <p className="text-sm text-blue-800/70">{attraction.distance}</p>
                          <p className="text-sm text-gray-600">{attraction.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Directions from Porto Alegre */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="h-48 relative">
                  <Image src="/images/poa.jpg" alt="Directions from Porto Alegre" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-6 text-white">
                      <h3 className="text-2xl font-bold">
                        🚗 {t("location.directions.porto_alegre").toString() || "From Porto Alegre"}
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <ol className="space-y-3">
                    {[
                      "Take BR-290 East toward Osório",
                      "Continue onto BR-101 North",
                      "Take exit toward RS-389 (Estrada do Mar)",
                      "Follow RS-389 for approximately 30 km",
                      "Turn right toward Arroio do Sal",
                      "Follow signs to Hotel D'Italia",
                    ].map((step, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="bg-[#004175] text-white w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          {index + 1}
                        </div>
                        <p className="text-gray-700">{step}</p>
                      </li>
                    ))}
                  </ol>
                  <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <div className="flex items-start gap-2">
                      <Car className="h-5 w-5 text-yellow-700 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-gray-600">Travel time: approximately 2 hours (120 km)</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Directions from Torres */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="h-48 relative">
                  <Image src="/images/torres.jpg" alt="Directions from Torres" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-6 text-white">
                      <h3 className="text-2xl font-bold">
                        🚗 {t("location.directions.torres").toString() || "From Torres"}
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <ol className="space-y-3">
                    {[
                      "Take RS-389 (Estrada do Mar) South",
                      "Follow RS-389 for approximately 25 km",
                      "Turn x toward Arroio do Sal",
                      "Follow signs to Hotel D'Italia",
                    ].map((step, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="bg-[#004175] text-white w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          {index + 1}
                        </div>
                        <p className="text-gray-700">{step}</p>
                      </li>
                    ))}
                  </ol>
                  <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <div className="flex items-start gap-2">
                      <Car className="h-5 w-5 text-yellow-700 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-gray-600">Travel time: approximately 30 minutes (25 km)</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Transportation Options Card */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="h-48 relative">
                  <Image src="/placeholder.svg?height=400&width=600" alt="Transportation Options" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-6 text-white">
                      <h3 className="text-2xl font-bold">
                        🚌 {t("location.transportation.title").toString() || "Transportation Options"}
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {[
                      {
                        title: "By Car",
                        description:
                          "The most convenient way to reach Hotel D'Italia. Free parking is available for all guests.",
                        icon: "🚗",
                      },
                      {
                        title: "By Bus",
                        description: "Regular bus services connect Arroio do Sal with major cities in the region.",
                        icon: "🚌",
                      },
                      {
                        title: "Airport Transfer",
                        description: "We can arrange airport transfers from Porto Alegre International Airport.",
                        icon: "✈️",
                      },
                    ].map((option, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-3 rounded-lg">
                        <div className="p-2 bg-blue-50 rounded-lg text-xl flex-shrink-0">{option.icon}</div>
                        <div>
                          <h4 className="font-bold text-[#004175]">{option.title}</h4>
                          <p className="text-sm text-gray-600">{option.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Nearby Locations Card */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden ">
                <div className="h-48 relative">
                  <Image src="/placeholder.svg?height=400&width=600" alt="Nearby Locations" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-6 text-white">
                      <h3 className="text-2xl font-bold">
                        ⭐ {t("location.hotel.reference").toString() || "Nearby Locations"}
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {locations.map((item, index) => (
                      <li key={index} className="flex items-center gap-3 p-3 rounded-lg">
                        <span className="text-xl flex-shrink-0">{item.icon}</span>
                        <span className="text-gray-700">{item.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Travel Tips Card */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="h-48 relative">
                  <Image src="/placeholder.svg?height=400&width=600" alt="Travel Tips" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-6 text-white">
                      <h3 className="text-2xl font-bold">
                        💡 {t("location.travel_tips.title").toString() || "Travel Tips"}
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {[
                      {
                        title: "Best Time to Visit",
                        description:
                          "Summer (December-February) offers the best beach weather, but spring (September-November) has fewer crowds and pleasant temperatures.",
                        icon: "🌞",
                      },
                      {
                        title: "Traffic Information",
                        description:
                          "During summer months, traffic can be heavy on coastal roads. We recommend traveling early in the morning or late in the evening.",
                        icon: "🚦",
                      },
                      {
                        title: "Local Events",
                        description:
                          "Check our events calendar for local festivals and activities happening during your stay.",
                        icon: "🎭",
                      },
                    ].map((tip, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-3 rounded-lg">
                        <div className="p-2 bg-yellow-50 rounded-lg text-xl flex-shrink-0">{tip.icon}</div>
                        <div>
                          <h4 className="font-bold text-[#004175]">{tip.title}</h4>
                          <p className="text-sm text-gray-600">{tip.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Wave Design at the Bottom */}
          <div className="text-[#ffffff] bg-[#004175] rounded-2xl absolute top-[-120] left-0 mb-4 w-full overflow-hidden leading-[0]">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-120 fill-current">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
            </svg>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-16 bg-blue-50 rounded-2xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-[#004175]">
              {t("location.need_help").toString() || "Need Help Getting Here?"}
            </h2>
            <p className="text-gray-600 mt-2">
              {t("location.contact_us").toString() ||
                "Our team is ready to assist with directions and travel arrangements."}
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <a
              href={`tel:${t("hotel.phone").toString() || "+55 51 1234-5678"}`}
              className="flex items-center gap-2 bg-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <span className="text-2xl">📞</span>
              <span className="font-medium text-[#004175]">{t("hotel.phone").toString() || "+55 51 1234-5678"}</span>
            </a>

            <a
              href={`mailto:${t("hotel.email").toString() || "info@hotelditalia.com"}`}
              className="flex items-center gap-2 bg-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <span className="text-2xl">✉️</span>
              <span className="font-medium text-[#004175]">{t("hotel.email").toString() || "info@hotelditalia.com"}</span>
            </a>

            <a
              href="#"
              className="flex items-center gap-2 bg-[#004175] text-white px-6 py-3 rounded-lg shadow-md hover:bg-[#00335d] transition-colors"
            >
              <span className="text-xl">💬</span>
              <span className="font-medium">{t("location.live_chat").toString() || "Live Chat"}</span>
            </a>
          </div>
        </div>
      </div>
    </main >
  );
}
