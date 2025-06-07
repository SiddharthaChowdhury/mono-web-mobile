const getApiDomain = () => {
  let API_DOMAIN = "";

  if (import.meta && import.meta.env && import.meta.env.VITE_API_DOMAIN) {
    API_DOMAIN = import.meta.env.VITE_API_DOMAIN;
  } else if (typeof process !== "undefined" && process.env.EXPO_API_DOMAIN) {
    API_DOMAIN = process.env.EXPO_API_DOMAIN;
  }

  return API_DOMAIN ?? "";
};

export const getApi = (key: keyof typeof API) => {
  // const isBrowser = typeof document === "object";
  // const isDev = process.env.NODE_ENV === "development";
  // const domain = isBrowser && isDev ? "" : API_DOMAIN;

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
