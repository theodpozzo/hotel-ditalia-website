"use client"

import type React from "react"
import { motion } from "framer-motion"

interface MapComponentProps {
  activeMap: string
}

const MapComponent: React.FC<MapComponentProps> = ({ activeMap }) => {
  return (
    <svg viewBox="0 0 800 600" className="w-full h-full">
      <image href="/map-svg/brazil.svg" width="800" height="600" />
      {activeMap === "litoral" && (
        <>
          {[
            { name: "Torres", x: 462.5, y: 479 },
            { name: "Capão da Canoa", x: 457.2, y: 487 },
            { name: "Tramandaí", x: 457.2, y: 489 },
            { name: "Arroio do Sal", x: 460.6, y: 482 },
          ].map((city, idx) => (
            <motion.g
              key={idx}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 + idx * 0.1 }}
            >
              {/* City marker */}
              <circle
                cx={city.x}
                cy={city.y}
                r={city.name === "Arroio do Sal" ? 3 : 2}
                fill={city.name === "Arroio do Sal" ? "#F3B72B" : "#004175"}
                filter="url(#glow)"
              />

              {/* Connecting line from dot to label */}
              <line
                x1={city.x}
                y1={city.y + 3}
                x2={city.x}
                y2={city.y + 6}
                stroke={city.name === "Arroio do Sal" ? "#F3B72B" : "#004175"}
                strokeWidth="0.5"
                opacity="0.7"
              />

              {/* Label container */}
              <g transform={`translate(${city.x}, ${city.y + 10})`}>
                {/* Label background with subtle shadow */}
                <rect
                  x={-city.name.length * 2.5}
                  y={-1.5}
                  width={city.name.length * 5}
                  height={3}
                  rx={1.5}
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
                  fontSize="2.2"
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
          ))}

          {/* Add filter for subtle glow effect */}
          <defs>
            <filter id="glow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="0.8" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>
        </>
      )}
    </svg>
  )
}

export default MapComponent

