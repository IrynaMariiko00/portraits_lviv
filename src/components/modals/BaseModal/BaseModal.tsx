import CloseIcon from "~/assets/icons/CloseIcon";
import type { BaseModalProps } from "~/types/modals";

const BaseModal = ({ isOpen, onClose, title, children }: BaseModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-md"
        onClick={onClose}
      />

      <div className="relative w-[90%] md:w-[60%] max-w-5xl">
        <CloseIcon
          onClick={onClose}
          className="absolute right-0 md:-right-16 w-10 h-10 text-white/40 hover:text-white transition-opacity cursor-pointer z-30"
        />

        <dialog
          open
          className="max-h-[75vh] overflow-y-auto no-scrollbar z-20 bg-[--color-gray] glass-card p-8 md:p-12 rounded-xl shadow-2xl border border-white/5"
        >
          {title && (
            <h1 className="big-bold text-[var(--color-extra-light-blue)] mb-10 text-center uppercase tracking-widest">
              {title}
            </h1>
          )}

          {children}

          <div className="flex justify-center mt-12">
            <button
              onClick={onClose}
              className="glass-btn px-12 h-[45px] uppercase text-sm tracking-widest"
            >
              Close
            </button>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default BaseModal;
