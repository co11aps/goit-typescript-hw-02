export interface Image {
  id: string;
  description: string;
  alt_description: string;
  urls: {
    regular: string;
    small: string;
  };
  width: number;
  height: number;
  likes: number;
}

export interface FetchImagesResponse {
  total: number;
  total_pages: number;
  results: Image[];
}
