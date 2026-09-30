import React from 'react';
import { ChevronDown, Star } from 'lucide-react';

interface ReservationSidebarProps {
  price: {
    amount: number;
    currency: string;
    period: string;
    cleaning_fee: number;
    service_fee: number;
  };
  rating: number;
  reviews: number;
}

export default function ReservationSidebar({ price, rating, reviews }: ReservationSidebarProps) {
  const total = price.amount * 5 + price.cleaning_fee + price.service_fee; // Assume 5 nights

  return (
    <div className="col-span-1 order-1 md:order-2">
      <div className="sticky top-28 bg-white border border-neutral-300 rounded-xl p-6 shadow-xl shadow-neutral-200/50 w-full mb-10">
        
        <div className="flex flex-row items-baseline justify-between mb-6">
          <div className="flex items-baseline gap-1">
            <span className="text-[22px] font-semibold text-neutral-900">{price.currency}{price.amount}</span>
            <span className="text-neutral-500 font-medium text-[16px]">night</span>
          </div>
        </div>

        {/* Date / Guests Picker Stub */}
        <div className="border border-neutral-400 rounded-xl mb-4 overflow-hidden focus-within:border-black focus-within:border-[2px] focus-within:-m-[1px] transition-all">
          <div className="flex flex-row border-b border-neutral-400">
            <div className="w-1/2 p-3 border-r border-neutral-400 hover:bg-neutral-100 cursor-pointer transition">
              <div className="text-[10px] font-bold uppercase tracking-wider text-neutral-900">Check-in</div>
              <div className="text-[14px] text-neutral-500">Add date</div>
            </div>
            <div className="w-1/2 p-3 hover:bg-neutral-100 cursor-pointer transition">
              <div className="text-[10px] font-bold uppercase tracking-wider text-neutral-900">Checkout</div>
              <div className="text-[14px] text-neutral-500">Add date</div>
            </div>
          </div>
          <div className="p-3 w-full flex justify-between items-center hover:bg-neutral-100 cursor-pointer transition">
            <div className="flex flex-col">
              <div className="text-[10px] font-bold uppercase tracking-wider text-neutral-900">Guests</div>
              <div className="text-[14px] text-neutral-900">1 guest</div>
            </div>
            <ChevronDown size={20} className="text-neutral-900" />
          </div>
        </div>

        <button className="w-full bg-[#E51D53] text-white font-semibold text-[16px] py-3.5 rounded-lg hover:bg-[#D70466] transition-colors duration-200">
          Reserve
        </button>

        <div className="text-center text-[14px] text-neutral-500 mt-4 mb-6">
          You won't be charged yet
        </div>

        {/* Price Breakdown */}
        <div className="flex flex-col gap-4 text-[16px] text-neutral-700">
          <div className="flex flex-row justify-between">
            <span className="underline cursor-pointer">{price.currency}{price.amount} x 5 nights</span>
            <span>{price.currency}{price.amount * 5}</span>
          </div>
          <div className="flex flex-row justify-between">
            <span className="underline cursor-pointer">Cleaning fee</span>
            <span>{price.currency}{price.cleaning_fee}</span>
          </div>
          <div className="flex flex-row justify-between">
            <span className="underline cursor-pointer">Airbnb service fee</span>
            <span>{price.currency}{price.service_fee}</span>
          </div>
        </div>

        <hr className="my-6 border-neutral-200" />

        <div className="flex flex-row justify-between font-semibold text-[16px] text-neutral-900">
          <span>Total before taxes</span>
          <span>{price.currency}{total}</span>
        </div>

      </div>
    </div>
  );
}
