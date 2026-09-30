'use client';

import React, { useEffect, useState } from 'react';
import LoginModal from '../components/modals/LoginModal';
import SearchModal from '../components/modals/SearchModal';
import PhotoTourModal from '../components/modals/PhotoTourModal';
import LightboxModal from '../components/modals/LightboxModal';

export default function ModalProvider() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <LoginModal />
      <SearchModal />
      <PhotoTourModal />
      <LightboxModal />
    </>
  );
}
