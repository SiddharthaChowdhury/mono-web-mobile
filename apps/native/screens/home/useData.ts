import { useGetProfilePictures } from "@mono/data";
import { useEffect } from "react";

export const useData = () => {
  const { data, error, isLoading } = useGetProfilePictures();

  useEffect(() => {
    console.log(
      ">> DATA: ",
      JSON.stringify({ data: !!data, error, isLoading })
    );
  }, [data, isLoading, error]);
};
