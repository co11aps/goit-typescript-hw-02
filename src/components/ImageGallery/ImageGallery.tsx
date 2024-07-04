import { FC } from "react";
import { Image } from "../API/APITypes";
import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";
import { ModalCotentType } from "../App/App.types";

interface ImageGalleryProps {
  images: Image[];
  handleImgClick: (content: ModalCotentType) => void;
}

const ImageGallery: FC<ImageGalleryProps> = ({ images, handleImgClick }) => {
  return (
    <ul className={css.imgList}>
      {images.map((image) => (
        <li key={image.id}>
          <ImageCard data={image} handleImgClick={handleImgClick} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
