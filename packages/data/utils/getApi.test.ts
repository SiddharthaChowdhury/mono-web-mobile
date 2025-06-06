import { getApi } from "./getApiUrl";

describe("getApi", () => {
  const originalEnv = process.env;

  beforeEach(() => {
    process.env = { ...originalEnv };
  });

  afterEach(() => {
    process.env = originalEnv;
    // Cleanup global document
    // @ts-ignore
    delete global.document;
  });

  it("returns full API URL in production (non-browser)", () => {
    process.env.NODE_ENV = "production";

    const api = getApi("PROFILES");
    expect(api.url).toBe(
      "https://www.hunqz.com/api/opengrid/profiles/msescortplus"
    );
    expect(api.method).toBe("GET");
    expect(api.queryKey).toEqual(["QUERY_PROFILES"]);
  });

  it("returns relative URL in development in browser", () => {
    process.env.NODE_ENV = "development";
    // @ts-ignore
    global.document = {};

    const api = getApi("PROFILES");
    expect(api.url).toBe("/api/opengrid/profiles/msescortplus");
  });

  it("returns full URL in development outside browser (SSR)", () => {
    process.env.NODE_ENV = "development";
    // No `document` present

    const api = getApi("PROFILES");
    expect(api.url).toBe(
      "https://www.hunqz.com/api/opengrid/profiles/msescortplus"
    );
  });
});
