'use client'

import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion'


// Location coordinates for the hotel
const HOTEL_COORDS = {
    lat: -29.550914788484867,
    lng: -49.8857531028526
};

const imgElement = document.querySelector()

export function MapSection() {
    const [activeMap, setActiveMap] = useState<'brazil' | 'rs' | 'litoral' | 'city'>('brazil')
    const [showStreetMap, setShowStreetMap] = useState(false)
    const handleMapChange = (newMap: typeof activeMap) => {
        if (newMap !== 'city') {
            setShowStreetMap(false);
        }
        setActiveMap(newMap);
        if (newMap === 'city') {
            setShowStreetMap(true);
        }
    }
    const [zoomLevel, setZoomLevel] = useState(1);
    const mapRef = useRef<HTMLObjectElement | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const windowHeight = window.innerHeight;

            // Determine zoom level based on scroll position
            if (scrollTop < windowHeight * 0.5) {
                setZoomLevel(1); // Country level
            } else if (scrollTop < windowHeight * 1.5) {
                setZoomLevel(2); // State level
            } else {
                setZoomLevel(3); // Litoral level
            }
        };

        function anim() {
            let scroll = window.scrollY
            let temp = scroll / ZOOM_SPEED
            let zoom = temp > 1 ? temp : 1

            // Only update the Elements scale, when we are below the breakpoint
            if (zoom < ZOOM_BREAKPOINT) {
                // Only scale the Image, so the Zoom element does not mess with the document width
                imgElement.style.transform = `scale(${zoom})`
                // Sets the Elements position to fixed, so it can resize without scrolling away
                zoomElement.style.top = '0px'
                zoomElement.style.position = 'fixed'
            } else {
                // Makes sure the Element always reaches Max Size
                imgElement.style.transform = `scale(${ZOOM_BREAKPOINT})`
                // Sets the elements position to absolute, so it will scroll with the rest of the document
                zoomElement.style.position = 'absolute'
                zoomElement.style.top = ABSOLUTE + 'px'
            }

            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
        }, []);

    return (
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                {/* Navigation Panel */}
                <div className="bg-gray-50 p-8 border-r border-gray-100">
                    <div className="space-y-3">
                        {[
                            { id: 'brazil', title: 'Brasil', subtitle: 'Litoral Sul', icon: '🗺️' },
                            { id: 'rs', title: 'Rio Grande do Sul', subtitle: 'Litoral Norte', icon: '📍' },
                            { id: 'litoral', title: 'Litoral', subtitle: 'Arroio do Sal', icon: '🌊' },
                            { id: 'city', title: 'Centro', subtitle: 'Hotel D\'Italia', icon: '🏨' }
                        ].map((item) => (
                            <button
                                key={item.id}
                                onClick={() => handleMapChange(item.id as typeof activeMap)}
                                className={`w-full p-6 rounded-xl text-left transition-all duration-300 ${activeMap === item.id
                                        ? 'bg-white shadow-lg scale-[1.02] border border-blue-100'
                                        : 'hover:bg-white hover:shadow-md'
                                    }`}
                            >
                                <div className={`flex items-start gap-4 ${activeMap === item.id ? 'text-[#004175]' : 'text-gray-600'
                                    }`}>
                                    <div className="mt-1">{item.icon}</div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                                        <p className="text-sm opacity-80">{item.subtitle}</p>
                                    </div>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Map Display */}
                <div className="md:col-span-2 h-[700px] bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center p-12">
                        {/* Map with zoom */}
                        <AnimatePresence mode="wait">
                            {(activeMap === 'brazil' || activeMap === 'rs' || activeMap === 'litoral') && (
                                <motion.div
                                    key="brazil"
                                    initial={
                                        activeMap === 'brazil'
                                            ? { opacity: 1, scale: 0.8, '--stroke-width': '1px' }
                                            : activeMap === 'rs'
                                                ? { scale: 4.2, x: "-20%", y: "-140%", '--stroke-width': '0.8px' }
                                                : { scale: 18, x: "-210%", y: "-560%", '--stroke-width': '0.4px' }
                                    }
                                    animate={
                                        activeMap === 'brazil'
                                            ? { opacity: 1, scale: 1, x: 0, y: 0, '--stroke-width': '1px' }
                                            : activeMap === 'rs'
                                                ? { scale: 4.2, x: "-20%", y: "-140%", '--stroke-width': '0.8px' }
                                                : { scale: 18, x: "-210%", y: "-560%", '--stroke-width': '0.4px' }
                                    }
                                    transition={{
                                        duration: 1.2,
                                        ease: [0.4, 0, 0.2, 1]
                                    }}
                                    className="w-3/5 h-[80%] flex items-center justify-center relative"
                                    style={{
                                        '--stroke-width': '1px',
                                        '--rs-stroke': 'var(--stroke-width)',
                                    } as React.CSSProperties}
                                >
                                    <object
                                        data="/map-svg/brazil.svg"
                                        type="image/svg+xml"
                                        className="w-full h-full object-contain drop-shadow-xl"
                                        style={{ maxHeight: '80vh' }}
                                    />
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Non-zoomed overlay for pins */}
                        <AnimatePresence mode="wait">
                            {activeMap === 'litoral' && (
                                <motion.div
                                    className="absolute inset-0 pointer-events-none"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {/* Arroio do Sal - Primary */}
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0 }}
                                        transition={{
                                            delay: activeMap === 'litoral' ? 0.8 : 0,
                                            duration: 0.1
                                        }}
                                        className="absolute"
                                        style={{ left: '43%', top: '38%' }}
                                    >
                                        <div className="flex items-center gap-1">
                                            <div
                                                className="w-4 h-4 bg-[#F3B72B] rounded-full ring-1 ring-[#F3B72B]/50 animate-pulse"
                                                style={{
                                                    boxShadow: '0 0 4px #F3B72B, 0 0 8px #F3B72B'
                                                }}
                                            />
                                            <span className="translate-x-[-1px] translate-y-[2px] text-sm font-medium italic text-[#004175] whitespace-nowrap px-2 py-0.5 rounded-full bg-gray-50/95 ring-1 ring-[#F3B72B]/60">
                                                Arroio do Sal
                                            </span>
                                        </div>
                                    </motion.div>

                                    {/* Secondary Cities */}
                                    {[
                                        { name: 'Torres', left: '45%', top: '32.9%' },
                                        { name: 'Porto Alegre', left: '14%', top: '53%' },
                                        { name: 'Caxias do Sul', left: '15%', top: '31.5%' },
                                        { name: 'Florianópolis', left: '69.3%', top: '2%' },
                                        { name: 'Criciúma', left: '55%', top: '13%' },
                                        { name: 'Capão da Canoa', left: '39%', top: '44%' },
                                        { name: 'Tramandaí', left: '36%', top: '51%' }
                                    ].map((city) => (
                                        <motion.div
                                            key={city.name}
                                            className="absolute"
                                            style={{ left: city.left, top: city.top }}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 0.7, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.8 }}
                                            transition={{
                                                delay: activeMap === 'litoral' ? 1 : 0,
                                                duration: 0.1
                                            }}
                                        >
                                            <div className="flex items-center gap-1">
                                                <div className="w-2 h-2 bg-[#004175] rounded-full opacity-80" />
                                                <span className={`translate-y-[2px] text-xs font-medium text-[#004175]/80 whitespace-nowrap px-1.5 py-0.5 rounded-full bg-gray-50/95 ring-1 ring-[#004175]/20`}>
                                                    {city.name}
                                                </span>
                                            </div>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <AnimatePresence mode="wait">
                            {activeMap === 'city' && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="w-full h-full absolute inset-0"
                                >
                                    <iframe
                                        src={`https://www.openstreetmap.org/export/embed.html?bbox=-49.88715,-29.55215,-49.88435,-29.54975&layer=mapnik&marker=${HOTEL_COORDS.lat},${HOTEL_COORDS.lng}`}
                                        className="w-full h-full rounded-xl"
                                        style={{ border: '1px solid #ddd' }}
                                    ></iframe>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    );
} 
