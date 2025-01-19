'use client'

import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion'
import { useLanguageContext } from '@/context/LanguageContext';
import { config } from 'process';

const Timeline = ({ scrollYProgress }: { scrollYProgress: any }) => {
    const { t } = useLanguageContext();
    const currentStep = useTransform(scrollYProgress, [0, 0.5, 0.82, 1], [0, 1.1, 1.9, 3]);


    const items = [
        t('map.timeline.brazil'),
        t('map.timeline.rs'),
        t('map.timeline.litoral'),
    ];

    const circleSizes = items.map((item, index) =>
        useTransform(currentStep, (value) => (value >= index ? '32px' : '24px'))
    );

    const circleColors = items.map((_, index) =>
        useTransform(currentStep, (value) => (value >= index ? '#1E40AF' : '#3B82F6'))
    );

    const fontSizes = items.map((_, index) =>
        useTransform(currentStep, (value) => (value >= index ? '24px' : '18px'))
    );

    return (
        <div className="bg-gray-50 p-8 border-r border-gray-100 relative h-screen flex flex-col justify-between">
            <div className="absolute left-[45%] top-[10%] bottom-[10%] w-[2px] bg-gray-200 transform -translate-x-1/2" />
            <motion.div
                className="absolute left-[45%] top-[10%] w-[2px] bg-blue-500 origin-top"
                style={{
                    scaleY: scrollYProgress,
                    height: '80%',
                }}
            />
            <div className="space-y-[calc(80vh/3)] relative py-[10vh]">
                {items.map((item, index) => (
                    <div key={item} className={`flex items-center ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}>
                        <motion.div
                            className="absolute left-[40%] rounded-full border-2 border-blue-500 transition-all duration-300"
                            style={{
                                width: circleSizes[index],
                                height: circleSizes[index],
                                backgroundColor: circleColors[index],
                            }}
                        />
                        <div className="ml-16">
                            <motion.h3
                                className="font-bold mb-1 transition-all duration-300 text-blue-600"
                                style={{
                                    fontSize: fontSizes[index],
                                }}
                            >
                                {item}
                            </motion.h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export function MapSection() {
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    })

    // Determine active map based on scroll progress
    const [activeMap, setActiveMap] = useState<'brazil' | 'rs' | 'litoral' | 'city'>('brazil')


    useEffect(() => {
        const unsubscribe = scrollYProgress.on('change', (latest) => {
            if (latest < 0.45) {
                setActiveMap('brazil');
            } else if (latest < 0.82) {
                setActiveMap('rs');
            } else {
                setActiveMap('litoral');
            }
        });

        return () => unsubscribe();
    }, [scrollYProgress]);

    return (
        <div ref={containerRef} className="relative h-[300vh]">
            <div className="sticky top-0 h-screen bg-white">
                <div className="flex items-center justify-between p-4 border-b border-gray-100" />
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-full">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-0 h-full">
                        <Timeline scrollYProgress={scrollYProgress} />

                        <div className="md:col-span-2 h-full bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
                            <div className="absolute inset-0 flex items-center justify-center p-12">
                                <AnimatePresence mode="wait">
                                    {(activeMap === 'brazil' || activeMap === 'rs' || activeMap === 'litoral') && (
                                        <motion.div
                                            key="brazil"
                                            initial={
                                                activeMap === 'brazil'
                                                    ? { opacity: 1, scale: 0.8, '--stroke-width': '1px' }
                                                    : activeMap === 'rs'
                                                        ? { scale: 4.2, x: "-20%", y: "-140%", '--stroke-width': '0.8px' }
                                                        : { scale: 17, x: "-201%", y: "-482%", '--stroke-width': '0.4px' }
                                            }
                                            animate={
                                                activeMap === 'brazil'
                                                    ? { opacity: 1, scale: 1, x: 0, y: 0, '--stroke-width': '1px' }
                                                    : activeMap === 'rs'
                                                        ? { scale: 4.2, x: "-20%", y: "-140%", '--stroke-width': '0.8px' }
                                                        : { scale: 17, x: "-201%", y: "-482%", '--stroke-width': '0.4px' }
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

                                <AnimatePresence mode="wait">
                                    {activeMap === 'litoral' && (
                                        <motion.div
                                            className="absolute inset-0 pointer-events-none"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <motion.div
                                                initial={{ opacity: 0, scale: 0 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                exit={{ opacity: 0, scale: 0 }}
                                                transition={{
                                                    delay: 0.8,
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
                                                        delay: 1,
                                                        duration: 0.1
                                                    }}
                                                >
                                                    <div className="flex items-center gap-1">
                                                        <div className="w-2 h-2 bg-[#004175] rounded-full opacity-80" />
                                                        <span className="translate-y-[2px] text-xs font-medium text-[#004175]/80 whitespace-nowrap px-1.5 py-0.5 rounded-full bg-gray-50/95 ring-1 ring-[#004175]/20">
                                                            {city.name}
                                                        </span>
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}