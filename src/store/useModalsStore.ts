import { create } from "zustand";

interface ModalData {
  title: string;
  description?: string;
  type?: 'payment' | 'timeline' | 'collaboration' | 'final';
  payload?: any; 
}

interface ModalState {
  isOpen: boolean;
  data: ModalData | null;
  openModal: (data: ModalData) => void;
  closeModal: () => void;
}

export const useModalStore = create<ModalState>((set) => ({
  isOpen: false,
  data: null,
  openModal: (data) => set({ isOpen: true, data }),
  closeModal: () => set({ isOpen: false, data: null }),
}));
