import { useScrollLock } from "~/hooks/useScrollLock";
import { useModalStore } from "~/store/useModalsStore";

const Modal = () => {
  const { isOpen, data, closeModal } = useModalStore();

  useScrollLock(isOpen);

  if (!data || !isOpen) return null;

  return (
     <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-md transition-opacity" 
          onClick={closeModal} 
        />
      <dialog open className="w-[90%] md:w-[65%] max-h-[80vh] overflow-y-auto no-scrollbar absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[--color-gray] glass-card p-10 rounded-xl shadow-2xl border border-white/5">
        
        <h1 className="big-bold flex justify-center text-[var(--color-extra-light-blue)] mb-8 text-center uppercase tracking-wider">
          {data.title}
        </h1>

        <div className="modal-body space-y-8">
          {data.type === 'payment' && Array.isArray(data.payload) ? (
            data.payload.map((section, index) => (
              <div key={index} className="flex flex-col gap-2 text-left">
                <h3 className="text-[var(--color-extra-light-blue)] font-bold text-lg uppercase opacity-90 border-b border-white/10 pb-1">
                  {section.label}
                </h3>
      
                <p className="text-white opacity-80 leading-relaxed whitespace-pre-line text-base">
                  {section.text}
                </p>
              </div>
            ))
          ) : (
            <p className="text subtitle text-white text-center">{data.description}</p>
          )}
        </div>

        <div className="flex justify-center gap-[10%]">
          <button 
            onClick={closeModal} 
            className="glass-btn w-[15%] h-[40px]"
          >
            Close
          </button>
          <button 
            onClick={closeModal} 
            className="blue-btn h-[40px] w-[15%]"
          >
            Contact
          </button>
        </div>
      </dialog>
    </div>
  );
};

export default Modal;
