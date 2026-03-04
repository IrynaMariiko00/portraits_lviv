export interface Section {
  label?: string;
  text?: string;
  type?: "stepper";
  steps?: string[];
}

export interface BaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  confirmButton?: {
    label: string;
    to: string;
  };
  cancelButtonLabel?: string;
  footer?: React.ReactNode;
}

interface ModalButton {
  label: string;
  to: string;
}

interface ModalData {
  title: string;
  sections: Section[];
  confirmButton?: ModalButton;
  cancelButtonLabel?: string;
}

export interface ModalState {
  isOpen: boolean;
  data: ModalData | null;
  openModal: (data: ModalData) => void;
  closeModal: () => void;
}
