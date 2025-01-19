'use client';

import React from 'react';
import { PlaceholderImage } from '@/components/ui/placeholder-image';
import { useLanguageContext } from '@/context/LanguageContext';

export function InformationSection() {
  const { t, tArray } = useLanguageContext();

  // Fetch the information boxes dynamically using the translation function
  const infoBoxes = tArray('information_section.info_boxes') as unknown as { title: string; description: string; imagePath: string }[];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-8">
        {infoBoxes.map((box, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row 
              ${index % 2 === 0 ? 'mb-24' : 'mb-8'} 
              items-center 
              ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
          >
            {/* Image */}
            <div className="w-full md:w-1/2 h-96 relative rounded-lg overflow-hidden mb-8 md:mb-0 md:mr-16">
              <PlaceholderImage 
                index={index}
                className="rounded-lg"
              />
            </div>

            {/* Content */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-blue-800">{box.title}</h2>
              <p className="text-lg text-blue-600 leading-relaxed">{box.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
