import { create } from 'zustand';

interface PhotoTourStore {
  isPhotoTourOpen: boolean;
  isLightboxOpen: boolean;
  images: string[];
  currentIndex: number;
  openPhotoTour: (images: string[]) => void;
  closePhotoTour: () => void;
  openLightbox: (index: number) => void;
  closeLightbox: () => void;
  nextPhoto: () => void;
  prevPhoto: () => void;
}

const usePhotoTour = create<PhotoTourStore>((set) => ({
  isPhotoTourOpen: false,
  isLightboxOpen: false,
  images: [],
  currentIndex: 0,
  openPhotoTour: (images) => set({ isPhotoTourOpen: true, images }),
  closePhotoTour: () => set({ isPhotoTourOpen: false, isLightboxOpen: false }),
  openLightbox: (index) => set({ isLightboxOpen: true, currentIndex: index }),
  closeLightbox: () => set({ isLightboxOpen: false }),
  nextPhoto: () => set((state) => ({ 
    currentIndex: state.currentIndex < state.images.length - 1 ? state.currentIndex + 1 : state.currentIndex 
  })),
  prevPhoto: () => set((state) => ({ 
    currentIndex: state.currentIndex > 0 ? state.currentIndex - 1 : 0 
  })),
}));

export default usePhotoTour;
