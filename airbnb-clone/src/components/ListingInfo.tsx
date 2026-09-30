import React from 'react';
import Image from 'next/image';
import { Star, Medal, Wifi, Droplets, UtensilsCrossed, Wind, Car, Share, Heart } from 'lucide-react';

interface ListingInfoProps {
  listing: any; 
}

const getIcon = (iconName: string) => {
  switch(iconName) {
    case 'wifi': return <Wifi size={24} strokeWidth={1.5} className="text-neutral-700" />;
    case 'water': return <Droplets size={24} strokeWidth={1.5} className="text-neutral-700" />;
    case 'cutlery': return <UtensilsCrossed size={24} strokeWidth={1.5} className="text-neutral-700" />;
    case 'ac': return <Wind size={24} strokeWidth={1.5} className="text-neutral-700" />;
    case 'parking': return <Car size={24} strokeWidth={1.5} className="text-neutral-700" />;
    default: return null;
  }
}

export default function ListingInfo({ listing }: ListingInfoProps) {
  return (
    <div className="col-span-1 flex flex-col order-2 md:order-1 md:pr-16 md:col-span-2">
      
      {/* Title and stats (Desktop Header above images usually, but we keep it here if mobile or adjust) */}
      <div className="flex flex-col mb-8">
        <h1 className="text-[26px] font-semibold text-neutral-900 tracking-tight mb-2">
          {listing.title}
        </h1>
        
        <div className="flex flex-col sm:flex-row justify-between sm:items-center text-sm font-medium">
          <div className="flex flex-wrap items-center gap-2 text-neutral-900 mb-4 sm:mb-0">
            <span className="flex items-center gap-1">
              <Star size={14} className="fill-current" />
              <span className="font-semibold">{listing.rating}</span>
            </span>
            <span>·</span>
            <span className="underline font-semibold cursor-pointer">{listing.reviews} reviews</span>
            <span>·</span>
            {listing.host.superhost && (
              <>
                <span className="flex items-center gap-1 text-neutral-500">
                  <Medal size={14} /> Superhost
                </span>
                <span>·</span>
              </>
            )}
            <span className="underline font-semibold cursor-pointer">{listing.location}</span>
          </div>

          <div className="flex items-center gap-4 font-semibold text-neutral-900">
            <button className="flex items-center gap-2 hover:bg-neutral-100 p-2 rounded-md transition underline">
              <Share size={16} /> Share
            </button>
            <button className="flex items-center gap-2 hover:bg-neutral-100 p-2 rounded-md transition underline">
              <Heart size={16} /> Save
            </button>
          </div>
        </div>
      </div>

      <hr className="border-neutral-200 mb-8" />

      {/* Host and basic info */}
      <div className="flex flex-row items-center justify-between mb-8">
        <div className="flex flex-col">
          <h2 className="text-[22px] font-semibold text-neutral-900 tracking-tight">
            Entire home hosted by {listing.host.name}
          </h2>
          <div className="flex flex-row items-center gap-1 text-neutral-800 text-[16px] mt-1">
            <span>{listing.stats.guests} guests</span>
            <span>·</span>
            <span>{listing.stats.bedrooms} bedrooms</span>
            <span>·</span>
            <span>{listing.stats.beds} beds</span>
            <span>·</span>
            <span>{listing.stats.baths} baths</span>
          </div>
        </div>
        <Image
          src={listing.host.image}
          alt={listing.host.name}
          width={56}
          height={56}
          unoptimized
          className="rounded-full hidden sm:block object-cover"
        />
      </div>

      <hr className="border-neutral-200 mb-8" />

      {/* Description */}
      <div className="mb-8">
        <div className="text-[16px] leading-relaxed text-neutral-800 line-clamp-6">
          {listing.description}
        </div>
        <button className="font-semibold underline mt-4 text-[16px]">
          Show more &gt;
        </button>
      </div>

      <hr className="border-neutral-200 mb-8" />

      {/* Amenities */}
      <div className="mb-12">
        <h2 className="text-[22px] font-semibold tracking-tight mb-6 text-neutral-900">
          What this place offers
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-8">
          {listing.amenities.map((item: any, index: number) => (
            <div key={index} className="flex flex-row items-center gap-4 text-[16px] text-neutral-800">
              {getIcon(item.icon)}
              <span>{item.name}</span>
            </div>
          ))}
        </div>
        <button className="px-6 py-3 border border-black rounded-lg font-semibold hover:bg-neutral-100 transition text-[16px] text-neutral-900">
          Show all amenities
        </button>
      </div>

    </div>
  );
}
