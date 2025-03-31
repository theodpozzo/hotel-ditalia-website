'use client'

import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useLanguageContext } from '@/context/LanguageContext'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export function HeroSection() {
  const { t } = useLanguageContext();
  const [weather, setWeather] = useState({ temp: '', icon: '☀️' })

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const apiKey = 'bdee0f1c597bd9bbedbcc0b65fa4c73f'
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent('Arroio do Sal,BR')}&units=metric&appid=${apiKey}`)
        const temp = `${Math.round(response.data.main.temp)}°C`
        const weatherId = response.data.weather[0].id
        const icon = getWeatherEmoji(weatherId)
        setWeather({ temp, icon })
      } catch (error) {
        console.error('Error fetching weather data:', error)
      }
    }

    fetchWeather()
  }, [])

  const getWeatherEmoji = (weatherId: number) => {
    if (weatherId >= 200 && weatherId < 300) return '⛈️' // Thunderstorm
    if (weatherId >= 300 && weatherId < 500) return '🌦️' // Drizzle
    if (weatherId >= 500 && weatherId < 600) return '🌧️' // Rain
    if (weatherId >= 600 && weatherId < 700) return '❄️' // Snow
    if (weatherId >= 700 && weatherId < 800) return '🌫️' // Atmosphere
    if (weatherId === 800) return '☀️' // Clear
    if (weatherId > 800) return '☁️' // Clouds
    return '❓' // Unknown
  }

  return (
    <section className="relative top-[-10vh] h-[100vh] w-full overflow-hidden">
      {/* Video Background */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/videos/D'Italia Back n Forth.mp4" type="video/mp4" />
      </video>

      {/* Overlay to ensure text is readable */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Decorative Dots Line */}
      <div className="absolute left-8 top-1/2 transform -translate-y-1/2 z-20 flex flex-col items-center">
        <div className="space-y-3">
          {[...Array(48)].map((_, index) => (
            <div 
              key={index} 
              className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"
              style={{ animationDelay: `${index * 150}ms` }}
            />
          ))}
        </div>
      </div>

      {/* Weather Widget */}
      <div className="absolute bottom-8 right-8 z-20">
        <a
          href="https://www.google.com/search?q=arroio+do+sal+tempo+agora&oq=Arroio+do+Sal+tempo&sourceid=chrome&ie=UTF-8"
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-white/20 backdrop-blur-sm rounded p-3 text-white border border-white"
        >
          <div className="flex items-center gap-2">
            <span className="text-3xl">{weather.icon}</span>
            <span className="text-xl font-semibold">{weather.temp}</span>
          </div>
        </a>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-4">
        <h1 className="font-josefin-sans font-bold text-5xl md:text-7xl mb-2 relative">
          <span className="block relative">
            <span className="relative inline-block">
              {t('hotel.name').toString()}
              <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-white transform scale-x-0 transition-transform duration-300 ease-out animate-expandLine delay-150"></span>
            </span>
          </span>
        </h1>
        <p className="font-josefin-slab font-semibold text-xl md:text-2xl max-w-2xl opacity-0 animate-fadeInUp mt-1">
          <span className="bg-gradient-to-r from-transparent via-gold/10 to-transparent px-6 py-2 backdrop-blur-sm rounded-lg inline-block">
            {t('hotel.town').toString()} - {t('hotel.country').toString()}
          </span>
        </p>
        <a
          href={`${t('hotel.whatsapp')}`}
          className="mt-6 inline-block px-8 py-4 bg-white text-[#004175] font-semibold text-lg rounded transition-all duration-300 hover:bg-blue-100 hover:shadow-lg"
        >
          {t('hero_section.book_now').toString()}
        </a>
      </div>

      {/* RIP: Centered Scroll Arrow with Surface Bounce */}
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center"
      >
        <span className="text-white/70 text-xs uppercase tracking-widest mb-2">{t('hero_section.scroll_down').toString()}</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6 text-white" />
        </motion.div>
      </motion.div>

      {/* Wave Design at the Bottom */}
      <div className="absolute rotate-180 bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 text-white fill-current">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>

      <style jsx>{`
        @keyframes expandLine {
          0% { transform: scaleX(0); }
          100% { transform: scaleX(1); }
        }
        
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounceOnSurface {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
          75% { transform: translateY(2px); }
          85% { transform: translateY(-4px); }
          95% { transform: translateY(1px); }
        }

        @keyframes surfacePulse {
          0%, 100% { opacity: 0.5; transform: scaleX(1); }
          75% { opacity: 0.8; transform: scaleX(1.1); }
        }

        .animate-expandLine {
          animation: expandLine 0.8s ease-out forwards;
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
          animation-delay: 0.5s;
        }

        .animate-bounceOnSurface {
          animation: bounceOnSurface 2s cubic-bezier(0.36, 0, 0.66, -0.56) infinite;
        }

        .animate-surfacePulse {
          animation: surfacePulse 2s ease-out infinite;
        }
      `}</style>
    </section>
  )
} 