export interface ImageData {
  urls: {
    regular: string;
    small: string;
  };
  alt_description: string;
  likes: number;
  description: string;
}

export interface ImageCardProps {
  data: ImageData;
  handleImgClick: (content: {
    urls: string;
    alt_description: string;
    likes: number;
    description: string;
  }) => void;
}
