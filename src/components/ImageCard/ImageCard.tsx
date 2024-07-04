import { FC } from "react";
import { ImageCardProps } from "../ImageCard/ImageCardTypes";

const ImageCard: FC<ImageCardProps> = ({
  data: { urls, alt_description, likes, description },
  handleImgClick,
}) => {
  function handleClick() {
    const content = {
      urls: urls.regular,
      alt_description,
      likes,
      description,
    };

    handleImgClick(content);
  }

  return (
    <div>
      <img
        src={urls.small}
        alt={alt_description}
        width={400}
        height={270}
        onClick={handleClick}
      />
    </div>
  );
};

export default ImageCard;
