import { useQuery } from "@tanstack/react-query";
import { useCallback } from "react";
import { TApiProfileResponse, TPicture } from "../types/TApiPicture";
import { getApi } from "../utils/getApiUrl";
import { refineErrorMessage } from "../utils/refineErrorMessage";

export const useGetProfilePictures = () => {
  const { queryKey, url, method } = getApi("PROFILES");

  const fetchProfileData =
    useCallback(async (): Promise<TApiProfileResponse> => {
      try {
        const response = await fetch(url, {
          method,
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          console.error(
            `HTTP error! status: ${response.status}`,
            await response.text()
          );
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        return response.json();
      } catch (e) {
        console.error("Error during fetchProfileData:", refineErrorMessage(e));
        throw e;
      }
    }, [url, method]);

  return useQuery<TPicture[], Error>({
    queryKey,
    queryFn: async () => {
      const data = await fetchProfileData();

      const transformedPictures: TPicture[] = data.pictures.map((pic) => ({
        id: pic.id,
        imageUrl: `https://www.hunqz.com/img/usr/original/0x0/${pic.url_token}.jpg`,
        height: pic.height,
        width: pic.width,
      }));

      return transformedPictures;
    },
  });
};
