'use client';

import React from 'react';
import Modal from './Modal';
import useSearchModal from '@/hooks/useSearchModal';

export default function SearchModal() {
  const searchModal = useSearchModal();

  const bodyContent = (
    <div className="flex flex-col gap-8">
      <div className="text-start">
        <div className="text-2xl font-bold">Where do you wanna go?</div>
        <div className="font-light text-neutral-500 mt-2">Find the perfect location!</div>
      </div>
      <div className="w-full relative">
        <input 
          placeholder="Search destinations"
          className="peer w-full p-4 font-light bg-white border-2 rounded-md outline-none transition border-neutral-300 focus:border-black"
        />
      </div>
      
      <div className="text-start">
        <div className="text-xl font-bold">When are you going?</div>
        <div className="font-light text-neutral-500 mt-2">Make sure everyone is free!</div>
      </div>
      
      {/* Mock date picker */}
      <div className="border border-neutral-300 rounded-lg p-4 text-center text-neutral-500">
        [ Calendar Component Stub ]
      </div>

    </div>
  );

  return (
    <Modal
      disabled={false}
      isOpen={searchModal.isOpen}
      title="Filters"
      actionLabel="Search"
      onClose={searchModal.onClose}
      onSubmit={() => {
        // Mock search
        searchModal.onClose();
      }}
      body={bodyContent}
    />
  );
}
