import axios from "axios";
import { FetchImagesResponse } from "./APITypes";

axios.defaults.baseURL = "https://api.unsplash.com";

const fetchImages = async (
  query: string,
  page: number = 1
): Promise<FetchImagesResponse> => {
  const params = {
    query,
    page,
    per_page: 9,
    orientation: "landscape",
    client_id: import.meta.env.VITE_ACCESS_KEY as string,
  };

  const res = await axios.get<FetchImagesResponse>("/search/photos", {
    params,
  });
  return res.data;
};

export { fetchImages };
