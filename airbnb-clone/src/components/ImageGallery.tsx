'use client';

import React from 'react';
import Image from 'next/image';
import { GripHorizontal } from 'lucide-react';
import usePhotoTour from '@/hooks/usePhotoTour';

interface ImageGalleryProps {
  images: string[];
}

export default function ImageGallery({ images }: ImageGalleryProps) {
  const { openPhotoTour } = usePhotoTour();

  if (!images || images.length === 0) return null;

  return (
    <div className="w-full relative">
      {/* Mobile view - single image or carousel */}
      <div className="md:hidden w-full h-[300px] sm:h-[400px] relative cursor-pointer" onClick={() => openPhotoTour(images)}>
        <Image
          src={images[0]}
          alt="Listing primary image"
          fill
          priority
          unoptimized
          className="object-cover"
        />
        <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-md text-sm font-semibold">
          1 / {images.length}
        </div>
      </div>

      {/* Desktop view - 5 image grid */}
      <div className="hidden md:grid grid-cols-4 grid-rows-2 gap-2 h-[50vh] min-h-[300px] max-h-[600px] rounded-xl overflow-hidden relative group/gallery">
        <div className="col-span-2 row-span-2 relative group/item cursor-pointer" onClick={() => openPhotoTour(images)}>
          <Image
            src={images[0]}
            alt="Listing main image"
            fill
            unoptimized
            className="object-cover group-hover/gallery:brightness-75 group-hover/item:brightness-100 transition-all duration-300"
          />
        </div>
        
        {images.slice(1, 5).map((img, index) => (
          <div key={index} className="col-span-1 row-span-1 relative group/item cursor-pointer" onClick={() => openPhotoTour(images)}>
            <Image
              src={img}
              alt={`Listing image ${index + 2}`}
              fill
              unoptimized
              className="object-cover group-hover/gallery:brightness-75 group-hover/item:brightness-100 transition-all duration-300"
            />
          </div>
        ))}

        <button 
          onClick={() => openPhotoTour(images)}
          className="absolute bottom-6 right-6 bg-white border border-black px-4 py-1.5 rounded-lg flex items-center gap-2 hover:bg-neutral-100 transition font-semibold text-sm shadow-md z-10"
        >
          <GripHorizontal size={16} />
          Show all photos
        </button>
      </div>
    </div>
  );
}
