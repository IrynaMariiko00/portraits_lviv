import { useModalStore } from "~/store/useModalsStore";

const Modal = () => {
  const { isOpen, data, closeModal } = useModalStore();

  if (!data || !isOpen) {
    return null;
  }
  return (
    <dialog
      open
      className="w-[85%] h-[auto] max-h-[70%] absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 glass-carg"
    >
      <h1 className="subtitle">{data.title}</h1>
      <p className="text">{data.description}</p>
    </dialog>
  );
};

export default Modal;
