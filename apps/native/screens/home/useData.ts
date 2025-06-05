import { useGetProfilePictures } from "@mono/data";
import { useEffect } from "react";

export const useData = () => {
  const { data, error, isLoading } = useGetProfilePictures();

  useEffect(() => {
    if (!error) return;
    // TODO: Handle error with some snack or something
    console.error("Error: Unhandled error, while fetching Profile pictures");
  }, [error]);

  return {
    data,
    isLoading,
  };
};
