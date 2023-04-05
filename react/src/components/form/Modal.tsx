import React, { useEffect } from "react";
import "./Modal.css";

interface ModalProps {
  isOpen: boolean | undefined;
  onClose: () => void;
  InnerComponent: React.ReactNode;
}

export default function Modal(props: ModalProps) {
  const { isOpen, onClose, InnerComponent } = props;

  //TODO look for way to add this functionality without direct DOM manipulation
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }
  return (
    <>
      <div className="modal-bg" onClick={onClose}></div>
      <div className="modal">
        {InnerComponent}
        <div className="close-modal" onClick={onClose}>
          <img src="/cross-close-svgrepo-com.svg" alt="close modal" />
        </div>
      </div>
    </>
  );
}
