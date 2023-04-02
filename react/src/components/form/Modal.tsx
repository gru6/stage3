import React from "react";

interface ModalProps {
  isOpen: boolean | undefined;
  onClose: () => void;
}

export default function Modal(props: ModalProps) {
  const { isOpen, onClose } = props;
  if (!isOpen) {
    return null;
  }
  return (
    <>
      <div className="modal-bg" onClick={onClose}></div>
      <div className="modal">
        <div>Форма отправлена!</div>
        <div className="close-modal" onClick={onClose}>
          <img src="/cross-close-svgrepo-com.svg" alt="close modal" />
        </div>
      </div>
    </>
  );
}
