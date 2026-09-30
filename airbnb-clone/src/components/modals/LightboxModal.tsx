'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import usePhotoTour from '@/hooks/usePhotoTour';

export default function LightboxModal() {
  const { 
    isLightboxOpen, 
    images, 
    currentIndex, 
    closeLightbox, 
    nextPhoto, 
    prevPhoto 
  } = usePhotoTour();

  const [fade, setFade] = useState(true);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isLightboxOpen) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen, currentIndex]);

  const handleNext = () => {
    setFade(false);
    setTimeout(() => {
      nextPhoto();
      setFade(true);
    }, 150);
  };

  const handlePrev = () => {
    setFade(false);
    setTimeout(() => {
      prevPhoto();
      setFade(true);
    }, 150);
  };

  if (!isLightboxOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] bg-black/95 flex flex-col justify-between overflow-hidden">
      {/* Header */}
      <div className="flex justify-between items-center p-4 text-white z-10">
        <button 
          onClick={closeLightbox}
          className="p-2 rounded-full hover:bg-neutral-800 transition flex items-center justify-center text-neutral-300 hover:text-white"
        >
          <X size={24} />
          <span className="ml-2 font-medium hidden sm:block">Close</span>
        </button>
        <div className="text-[16px] font-medium text-neutral-300">
          {currentIndex + 1} / {images.length}
        </div>
        <div className="w-16"></div> {/* Spacer for centering text */}
      </div>

      {/* Main Image Area */}
      <div className="relative flex-1 flex items-center justify-center w-full px-4 sm:px-16 md:px-24">
        
        {/* Prev Button */}
        {currentIndex > 0 && (
          <button 
            onClick={handlePrev}
            className="absolute left-4 sm:left-10 z-10 p-3 rounded-full border border-neutral-700 bg-black/50 text-white hover:bg-neutral-800 hover:scale-105 transition-all"
          >
            <ChevronLeft size={32} strokeWidth={1.5} />
          </button>
        )}

        {/* Image Container with crossfade */}
        <div 
          className={`relative w-full h-full max-h-[85vh] transition-opacity duration-300 ease-in-out ${fade ? 'opacity-100' : 'opacity-0'}`}
        >
          <Image
            src={images[currentIndex]}
            alt={`Photo ${currentIndex + 1}`}
            fill
            unoptimized
            className="object-contain"
          />
        </div>

        {/* Next Button */}
        {currentIndex < images.length - 1 && (
          <button 
            onClick={handleNext}
            className="absolute right-4 sm:right-10 z-10 p-3 rounded-full border border-neutral-700 bg-black/50 text-white hover:bg-neutral-800 hover:scale-105 transition-all"
          >
            <ChevronRight size={32} strokeWidth={1.5} />
          </button>
        )}
      </div>

      {/* Footer / Spacer */}
      <div className="h-16 w-full"></div>
    </div>
  );
}
