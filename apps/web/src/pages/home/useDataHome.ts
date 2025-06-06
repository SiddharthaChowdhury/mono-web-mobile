import { useGetProfilePictures } from "@mono/data";

export const useDataHome = () => {
  const { data } = useGetProfilePictures();

  return { data };
};
