'use client';

import React from 'react';
import { Search, Globe, Menu, User } from 'lucide-react';
import useLoginModal from '@/hooks/useLoginModal';
import useSearchModal from '@/hooks/useSearchModal';
import Link from 'next/link';

export default function Navbar() {
  const loginModal = useLoginModal();
  const searchModal = useSearchModal();

  return (
    <div className="w-full border-b-[1px] bg-white sticky top-0 z-50">
      <div className="max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
        <div className="flex flex-row items-center justify-between gap-3 md:gap-0 py-4">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1 cursor-pointer transition hover:opacity-80">
            <svg 
              width="35" 
              height="35" 
              viewBox="0 0 24 24" 
              fill="var(--color-brand)" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 1.5C9.72 1.5 8 3.32 8 5.75c0 1.25.44 2.53 1.28 3.82.84 1.3 2 2.65 3.36 4.14-1.2 1.33-2.5 2.82-3.6 4.2-2.73 3.4-3.5 4.6-3.5 6.09 0 2.21 1.79 4 4 4 1.52 0 2.92-.85 3.73-2.22.46-.77.73-1.68.73-2.61 0-.93-.27-1.84-.73-2.61a4.34 4.34 0 0 0-3.73-2.22c-1.34 0-2.54.67-3.23 1.74-1.12-1.42-2.32-2.92-3.46-4.32a13.3 13.3 0 0 1-2.9-4.22c-.67-1.4-.95-2.75-.95-3.96 0-3.7 2.7-6.75 6.4-6.75s6.4 3.05 6.4 6.75c0 1.21-.28 2.56-.95 3.96a13.3 13.3 0 0 1-2.9 4.22c-1.14 1.4-2.34 2.9-3.46 4.32-.69-1.07-1.89-1.74-3.23-1.74-1.52 0-2.92.85-3.73 2.22-.46.77-.73 1.68-.73 2.61 0 .93.27 1.84.73 2.61.81 1.37 2.21 2.22 3.73 2.22 2.21 0 4-1.79 4-4 0-1.49-.77-2.69-3.5-6.09 1.1-1.38 2.4-2.87 3.6-4.2 1.36-1.49 2.52-2.84 3.36-4.14C15.56 8.28 16 7 16 5.75c0-2.43-1.72-4.25-4-4.25z"/>
            </svg>
            <span className="text-brand font-bold text-xl hidden md:block tracking-tight">airbnb</span>
          </Link>

          {/* Search Bar */}
          <div 
            onClick={searchModal.onOpen}
            className="border-[1px] w-full md:w-auto py-2 rounded-full shadow-sm hover:shadow-md transition cursor-pointer"
          >
            <div className="flex flex-row items-center justify-between">
              <div className="text-sm font-semibold px-6">
                Anywhere
              </div>
              <div className="hidden sm:block text-sm font-semibold px-6 border-x-[1px] flex-1 text-center">
                Any week
              </div>
              <div className="text-sm pl-6 pr-2 text-gray-600 flex flex-row items-center gap-3">
                <div className="hidden sm:block">Add guests</div>
                <div className="p-2 bg-brand rounded-full text-white">
                  <Search size={14} strokeWidth={3} />
                </div>
              </div>
            </div>
          </div>

          {/* User Menu */}
          <div className="flex flex-row items-center gap-3">
            <div className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer">
              Airbnb your home
            </div>
            <div className="hidden md:flex py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer items-center gap-2">
              <Globe size={18} />
            </div>
            <div 
              onClick={loginModal.onOpen}
              className="p-4 md:py-2 md:px-3 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
            >
              <Menu size={18} />
              <div className="hidden md:block bg-neutral-500 rounded-full text-white p-1">
                <User size={18} />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
