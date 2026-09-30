'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft } from 'lucide-react';
import usePhotoTour from '@/hooks/usePhotoTour';

export default function PhotoTourModal() {
  const { isPhotoTourOpen, images, closePhotoTour, openLightbox } = usePhotoTour();

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isPhotoTourOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isPhotoTourOpen]);

  if (!isPhotoTourOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-white overflow-y-auto w-full h-full">
      {/* Header */}
      <div className="sticky top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-10 px-4 py-4 md:px-10 flex items-center h-20">
        <button 
          onClick={closePhotoTour}
          className="p-2 rounded-full hover:bg-neutral-100 transition flex items-center justify-center"
        >
          <ChevronLeft size={24} />
        </button>
      </div>

      {/* Masonry-like Grid Layout */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-10 pb-20">
        <div className="flex flex-col gap-2">
          {images.map((img, index) => {
            // Logic for staggering widths on desktop
            const isFullWidth = index % 3 === 0;
            const className = isFullWidth 
              ? "w-full aspect-[3/2] relative group cursor-pointer" 
              : "w-full md:w-[calc(50%-4px)] aspect-[4/3] relative group cursor-pointer inline-block mx-[2px]";
            
            return (
              <div 
                key={index} 
                className={className}
                onClick={() => openLightbox(index)}
              >
                <Image
                  src={img}
                  alt={`Photo ${index + 1}`}
                  fill
                  unoptimized
                  className="object-cover group-hover:brightness-90 transition-all duration-300"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
