import { useGetProfilePictures } from "@mono/data";
import { useEffect } from "react";

export const useDataHome = () => {
  const { data, error, isLoading } = useGetProfilePictures();

  useEffect(() => {
    console.log(">> DATA: ", JSON.stringify({ data, error, isLoading }));
  }, [data, isLoading, error]);
};
