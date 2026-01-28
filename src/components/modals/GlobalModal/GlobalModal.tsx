import { useModalStore } from "~/store/useModalsStore";
import BaseModal from "../BaseModal/BaseModal";
import ModalSections from "../ModalSections/ModalSections";

export const GlobalModal = () => {
  const { isOpen, data, closeModal } = useModalStore();

  if (!data) return null;

  return (
    <BaseModal isOpen={isOpen} onClose={closeModal} title={data.title}>
      {data.type === "payment" && Array.isArray(data.payload) && (
        <ModalSections items={data.payload} />
      )}

      {!data.type && data.description && (
        <p className="text-white text-center opacity-80">{data.description}</p>
      )}
    </BaseModal>
  );
};
