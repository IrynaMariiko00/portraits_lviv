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
}
