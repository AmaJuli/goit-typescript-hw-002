import React from "react";
import Modal from "react-modal";
import css from './ImageModal.module.css';

Modal.setAppElement("#root");

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    border: "none",
    background: "none",
    overflow: "visible",
  },
};


type ImageModalProps = {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
};

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onClose, imageUrl }) => {
  return (
    <div>
      <Modal
        style={customStyles}
        onRequestClose={onClose}
        isOpen={isOpen}
        contentLabel="Image Modal"
      >
        <div className={css.div}>
          <img className={css.imageLarge} src={imageUrl} alt="Large" />
        </div>
      </Modal>
    </div>
  );
};

export default ImageModal;