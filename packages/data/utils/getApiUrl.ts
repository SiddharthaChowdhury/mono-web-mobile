import { Platform } from "react-native";

const getApiDomain = (): string => {
  if (Platform.OS === "web") {
    return process.env.VITE_API_DOMAIN ?? "";
  }

  return process.env.EXPO_PUBLIC_API_DOMAIN ?? "";
};

export const getApi = (key: keyof typeof API) => {
  const API_DOMAIN = getApiDomain();

  return {
    ...API[key],
    url: API_DOMAIN + API[key].url,
  };
};

// Record all API calls in the app
export const API = {
  PROFILES: {
    url: "/api/opengrid/profiles/msescortplus",
    method: "GET",
    queryKey: ["QUERY_PROFILES"],
  },
} as const;
