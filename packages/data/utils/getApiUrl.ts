const API_DOMAIN = "https://www.hunqz.com";

export const getApi = (key: keyof typeof API) => {
  const isBrowser = typeof document === "object";
  const isDev = process.env.NODE_ENV === "development";
  const domain = isBrowser && isDev ? "" : API_DOMAIN;

  return {
    ...API[key],
    url: domain + API[key].url,
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
