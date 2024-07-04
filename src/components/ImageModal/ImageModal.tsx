import Modal from "react-modal";
import css from "./ImageModal.module.css";
import { FaHeart } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { ModalCotentType } from "../App/App.types";
import { FC } from "react";

interface ImageModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  content: ModalCotentType;
}

const ImageModal: FC<ImageModalProps> = ({
  isOpen,
  onRequestClose,
  content: { urls, alt_description, likes, description },
}) => {
  return (
    <div>
      <Modal
        isOpen={isOpen}
        contentLabel="onRequestClose Example"
        onRequestClose={() => onRequestClose()}
        shouldCloseOnOverlayClick={true}
        className={css.Modal}
        overlayClassName={css.Overlay}
      >
        <img src={urls} alt={alt_description} />
        <div className={css.bottom}>
          <div className={css.descr}>{description}</div>
          <p className={css.likes}>
            <FaHeart />
            <br />
            {likes}
          </p>
        </div>

        <button className={css.close} onClick={() => onRequestClose()}>
          <AiOutlineClose />
        </button>
      </Modal>
    </div>
  );
};

export default ImageModal;
