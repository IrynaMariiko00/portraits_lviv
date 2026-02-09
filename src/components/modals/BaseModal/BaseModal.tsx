import CloseIcon from "~/assets/icons/CloseIcon";
import { useScrollLock } from "~/hooks/useScrollLock";
import type { BaseModalProps } from "~/types/modals";

const BaseModal = ({ isOpen, onClose, title, children }: BaseModalProps) => {
  useScrollLock(isOpen);

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
          className="absolute right-0 md:-right-16 w-10 h-10 text text-gray hover:text-[var(--color-primary)] transition-opacity cursor-pointer z-30"
        />

        <dialog
          open
          className="max-h-[75vh] z-20 bg-[--color-gray] glass-card p-4 md:p-10 rounded-xl shadow-2xl border border-[var(--color-border-dark)]"
        >
          {title && (
            <h1 className="big-bold text-[var(--color-extra-light-blue)] mb-4 text-center uppercase tracking-widest">
              {title}
            </h1>
          )}
          <div className="overflow-y-auto no-scrollbar">{children}</div>
          <div className="flex justify-center mt-4 gap-[10%]">
            <button
              onClick={onClose}
              className="glass-btn px-12 h-[45px] rounded-lg uppercase text-sm tracking-widest"
            >
              Close
            </button>
            <button className="blue-btn px-8 h-[45px] rounded-lg uppercase text-sm tracking-widest">
              Let's go!
            </button>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default BaseModal;
