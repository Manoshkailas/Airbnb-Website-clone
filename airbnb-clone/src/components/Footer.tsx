import React from 'react';
import { Globe } from 'lucide-react';

export default function Footer() {
  return (
    <div className="w-full bg-neutral-100 border-t border-neutral-200 mt-12 py-10">
      <div className="max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-neutral-200 pb-8">
          <div className="flex flex-col gap-3">
            <h3 className="font-bold">Support</h3>
            <span className="text-sm cursor-pointer hover:underline">Help Center</span>
            <span className="text-sm cursor-pointer hover:underline">AirCover</span>
            <span className="text-sm cursor-pointer hover:underline">Anti-discrimination</span>
            <span className="text-sm cursor-pointer hover:underline">Disability support</span>
            <span className="text-sm cursor-pointer hover:underline">Cancellation options</span>
            <span className="text-sm cursor-pointer hover:underline">Report neighborhood concern</span>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="font-bold">Hosting</h3>
            <span className="text-sm cursor-pointer hover:underline">Airbnb your home</span>
            <span className="text-sm cursor-pointer hover:underline">AirCover for Hosts</span>
            <span className="text-sm cursor-pointer hover:underline">Hosting resources</span>
            <span className="text-sm cursor-pointer hover:underline">Community forum</span>
            <span className="text-sm cursor-pointer hover:underline">Hosting responsibly</span>
            <span className="text-sm cursor-pointer hover:underline">Airbnb-friendly apartments</span>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="font-bold">Airbnb</h3>
            <span className="text-sm cursor-pointer hover:underline">Newsroom</span>
            <span className="text-sm cursor-pointer hover:underline">New features</span>
            <span className="text-sm cursor-pointer hover:underline">Careers</span>
            <span className="text-sm cursor-pointer hover:underline">Investors</span>
            <span className="text-sm cursor-pointer hover:underline">Gift cards</span>
            <span className="text-sm cursor-pointer hover:underline">Airbnb.org emergency stays</span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-6 gap-4">
          <div className="flex flex-col md:flex-row items-center gap-2 text-sm text-neutral-600">
            <span>© 2026 Airbnb, Inc.</span>
            <span className="hidden md:block">·</span>
            <div className="flex flex-row gap-3">
              <span className="cursor-pointer hover:underline">Terms</span>
              <span className="cursor-pointer hover:underline">Sitemap</span>
              <span className="cursor-pointer hover:underline">Privacy</span>
              <span className="cursor-pointer hover:underline">Your Privacy Choices</span>
            </div>
          </div>

          <div className="flex flex-row items-center gap-6">
            <div className="flex flex-row items-center gap-2 font-semibold cursor-pointer">
              <Globe size={18} />
              <span className="text-sm hover:underline">English (US)</span>
            </div>
            <div className="flex flex-row items-center font-semibold cursor-pointer text-sm hover:underline">
              $ USD
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
