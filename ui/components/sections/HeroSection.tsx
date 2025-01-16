'use client'

import React, { useState, useEffect } from 'react'
import axios from 'axios'

export function HeroSection() {
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

    const interval = setInterval(fetchWeather, 600000) // Update every 10 minutes
    return () => clearInterval(interval)
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

  const scrollToBooking = () => {
    const bookingSection = document.getElementById('booking-section')
    if (bookingSection) {
      const offset = 0
      const elementPosition = bookingSection.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }


  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/videos/D&apos;Italia Back n Forth.mp4" type="video/mp4" />
      </video>

      {/* Overlay to ensure text is readable */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Decorative Dots Line */}
      <div className="absolute right-8 top-1/2 transform -translate-y-1/2 z-20 flex flex-col items-center">
        <div className="space-y-3">
          {[...Array(8)].map((_, index) => (
            <div 
              key={index} 
              className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"
              style={{ animationDelay: `${index * 150}ms` }}
            />
          ))}
        </div>
      </div>

      {/* Weather Widget */}
      <div className="absolute bottom-8 left-8 z-20 bg-white/20 backdrop-blur-sm rounded p-3 text-white border border-white">
        <div className="flex items-center gap-2">
          <span className="text-3xl">{weather.icon}</span>
          <span className="text-xl font-semibold">{weather.temp}</span>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-4">
        <h1 className="font-josefin-sans font-bold text-5xl md:text-7xl mb-2 relative">
          <span className="block relative">
            <span className="relative inline-block">
              Hotel 
              <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gold-light transform scale-x-0 transition-transform duration-300 ease-out animate-expandLine"></span>
            </span>{' '}
            <span className="relative inline-block text-gold-light">
              D&apos;Italia
              <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-white transform scale-x-0 transition-transform duration-300 ease-out animate-expandLine delay-150"></span>
            </span>
          </span>
        </h1>
        <p className="font-josefin-slab font-semibold text-xl md:text-2xl max-w-2xl opacity-0 animate-fadeInUp mt-1">
          <span className="bg-gradient-to-r from-transparent via-gold/10 to-transparent px-6 py-2 backdrop-blur-sm rounded-lg inline-block">
            Arroio do Sal - RS - Brasil
          </span>
        </p>
      </div>

      {/* Centered Scroll Arrow with Surface Bounce */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 text-white flex flex-col items-center"
        onClick={scrollToBooking}
      >
        <svg 
          className="w-6 h-6 animate-bounceOnSurface"
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
        {/* Surface indicator */}
        <div className="h-px w-8 bg-white/50 mt-1 animate-surfacePulse"></div>
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