'use client';

import React from 'react';
import Modal from './Modal';
import useLoginModal from '@/hooks/useLoginModal';

export default function LoginModal() {
  const loginModal = useLoginModal();

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <div className="text-start">
        <div className="text-2xl font-bold">Welcome to Airbnb</div>
        <div className="font-light text-neutral-500 mt-2">Log in or sign up to continue</div>
      </div>
      <div className="w-full relative">
        <input 
          placeholder="Email address"
          className="peer w-full p-4 pt-6 font-light bg-white border-2 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed border-neutral-300 focus:border-black"
        />
      </div>
      <div className="w-full relative">
        <input 
          type="password"
          placeholder="Password"
          className="peer w-full p-4 pt-6 font-light bg-white border-2 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed border-neutral-300 focus:border-black"
        />
      </div>
    </div>
  );

  const footerContent = (
    <div className="flex flex-col gap-4 mt-3">
      <hr />
      <div className="text-neutral-500 text-center mt-4 font-light">
        <div className="flex flex-row items-center justify-center gap-2">
          <div>First time using Airbnb?</div>
          <div className="text-neutral-800 cursor-pointer hover:underline">
            Create an account
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <Modal
      disabled={false}
      isOpen={loginModal.isOpen}
      title="Login"
      actionLabel="Continue"
      onClose={loginModal.onClose}
      onSubmit={() => {
        // Mock login
        console.log("Logged in");
        loginModal.onClose();
      }}
      body={bodyContent}
      footer={footerContent}
    />
  );
}
