import { useQuery } from "@tanstack/react-query";
import { useCallback } from "react";
import { TApiProfileResponse, TPicture } from "../types/TApiPicture";
import { getApi } from "../utils/getApiUrl";

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
        console.error("Error during fetchProfileData:", getErrorMessage(e));
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

// TODO: Move it to Util package
const getErrorMessage = (e: unknown): string => {
  if (e instanceof Error) {
    return e.message;
  }
  return JSON.stringify({ e });
};
