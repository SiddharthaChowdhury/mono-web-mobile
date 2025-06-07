import { Platform } from "react-native";

const getApiDomain = () => {
  let API_DOMAIN = "";

  if (Platform.OS !== "web") {
    API_DOMAIN = process.env.EXPO_PUBLIC_API_DOMAIN ?? "";
  }

  if (Platform.OS === "web") {
    API_DOMAIN = import.meta.env?.VITE_API_DOMAIN ?? "";
  }
  return API_DOMAIN;
};

export const getApi = (key: keyof typeof API) => {
  const API_DOMAIN = getApiDomain();

  return {
    ...API[key],
    url: API_DOMAIN + API[key].url,
  };
};

// Record all api calls in the app
export const API = {
  PROFILES: {
    url: "/api/opengrid/profiles/msescortplus",
    method: "GET",
    queryKey: ["QUERY_PROFILES"],
  },
} as const;
