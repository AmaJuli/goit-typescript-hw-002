import axios from "axios";

export interface Image {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  slug: string;
}

export interface FetchImagesResponse {
  results: Image[];
}

const API_KEY = "yoAShT3jPrldBzvNATzuhRjCG3ZdXSHrL63mLdHlM1M";
const BASE_URL = "https://api.unsplash.com/";

export const fetchImagesWithTopic = async (
  topic: string,
  page: number
): Promise<Image[]> => {
  try {
    const response = await axios.get<FetchImagesResponse>(`${BASE_URL}/search/photos`, {
      params: {
        query: topic,
        client_id: API_KEY,
        page,
        per_page: 12,
      },
    });

 
    return response.data.results || [];
  } catch (error) {
    console.error("Не вдалося отримати дані з сервера");
    return [];
  }
};

export default fetchImagesWithTopic;
