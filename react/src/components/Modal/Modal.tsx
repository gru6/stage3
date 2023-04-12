import React from "react";
import "./Modal.css";

interface ModalProps {
  isOpen: boolean | undefined;
  onClose: () => void;
  InnerComponent: React.ReactNode;
}

export default function Modal(props: ModalProps) {
  const { isOpen, onClose, InnerComponent } = props;

  if (!isOpen) {
    return null;
  }
  return (
    <>
      {isOpen && (
        <>
          <div className="modal-bg" onClick={onClose}></div>
          <div className="modal">
            {InnerComponent}
            <div className="close-modal" onClick={onClose}>
              <img src="/cross-close-svgrepo-com.svg" alt="close modal" />
            </div>
          </div>
        </>
      )}
    </>
  );
}
