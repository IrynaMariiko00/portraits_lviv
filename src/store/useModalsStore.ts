import { create } from "zustand";
import type { ModalState } from "~/types/modals";

export const useModalStore = create<ModalState>((set) => ({
  isOpen: false,
  data: null,
  openModal: (data) => set({ isOpen: true, data }),
  closeModal: () => set({ isOpen: false, data: null }),
}));
