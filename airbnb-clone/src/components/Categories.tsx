'use client';

import React, { useState } from 'react';
import { Palmtree, Wind, Waves, Snowflake, Building2 } from 'lucide-react';

const categories = [
  { label: 'Tropical', icon: Palmtree },
  { label: 'Windmills', icon: Wind },
  { label: 'Beachfront', icon: Waves },
  { label: 'Skiing', icon: Snowflake },
  { label: 'City', icon: Building2 },
];

export default function Categories() {
  const [selected, setSelected] = useState('Tropical');

  return (
    <div className="max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4 bg-white sticky top-[73px] z-40 border-b-[1px]">
      <div className="flex flex-row items-center justify-between overflow-x-auto pt-4 pb-2">
        {categories.map((item) => (
          <div 
            key={item.label}
            onClick={() => setSelected(item.label)}
            className={`
              flex flex-col items-center justify-center gap-2 p-3 border-b-2 hover:text-neutral-800 transition cursor-pointer
              ${selected === item.label ? 'border-neutral-800 text-neutral-800' : 'border-transparent text-neutral-500'}
            `}
          >
            <item.icon size={26} />
            <div className="font-medium text-sm">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
