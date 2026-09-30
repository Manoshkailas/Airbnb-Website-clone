import React from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';
import Link from 'next/link';

interface ListingCardProps {
  listing: any;
}

export default function ListingCard({ listing }: ListingCardProps) {
  return (
    <Link href={`/listings/${listing.id}`} className="col-span-1 cursor-pointer group">
      <div className="flex flex-col gap-2 w-full">
        <div className="aspect-square w-full relative overflow-hidden rounded-xl">
          <Image
            fill
            src={listing.images[0]}
            alt={listing.title}
            priority
            unoptimized
            className="object-cover h-full w-full group-hover:scale-105 transition"
          />
        </div>
        <div className="flex flex-row items-start justify-between mt-1">
          <div className="font-semibold text-[15px] truncate">
            {listing.location}
          </div>
          <div className="flex flex-row items-center gap-1 font-light">
            <Star size={14} className="fill-current" />
            <span className="text-[14px]">{listing.rating}</span>
          </div>
        </div>
        <div className="font-light text-neutral-500 text-[15px] truncate -mt-1">
          {listing.category} views
        </div>
        <div className="font-light text-neutral-500 text-[15px] truncate -mt-1">
          Dec 10 - 15
        </div>
        <div className="flex flex-row items-center gap-1 mt-1">
          <span className="font-semibold text-[15px]">{listing.price.currency}{listing.price.amount}</span>
          <span className="font-light text-neutral-600">night</span>
        </div>
      </div>
    </Link>
  );
}
