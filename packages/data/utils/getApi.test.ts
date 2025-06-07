jest.mock("react-native", () => ({
  Platform: { OS: "ios" },
}));

describe("getApi", () => {
  const originalEnv = process.env;
  let platformOS: string;

  beforeEach(() => {
    process.env = { ...originalEnv };
    jest.resetModules();

    // Redefine the Platform.OS mock for each test
    jest.doMock("react-native", () => ({
      Platform: { OS: platformOS },
    }));
  });

  afterEach(() => {
    process.env = originalEnv;
    jest.resetModules();
  });

  it("returns full API URL (native)", () => {
    platformOS = "ios";
    process.env.EXPO_PUBLIC_API_DOMAIN = "https://www.hunqz.com";

    const { getApi } = require("./getApiUrl"); // Reload after mocks
    const api = getApi("PROFILES");

    expect(api.url).toBe(
      "https://www.hunqz.com/api/opengrid/profiles/msescortplus"
    );
    expect(api.method).toBe("GET");
    expect(api.queryKey).toEqual(["QUERY_PROFILES"]);
  });

  it("returns full URL (web)", () => {
    platformOS = "web";
    process.env.VITE_API_DOMAIN = "https://www.hunqz.com";

    const { getApi } = require("./getApiUrl"); // Reload after mocks
    const api = getApi("PROFILES");

    expect(api.url).toBe(
      "https://www.hunqz.com/api/opengrid/profiles/msescortplus"
    );
  });

  it("returns relative URL in dev when no domain is set", () => {
    platformOS = "web";
    delete process.env.VITE_API_DOMAIN;

    const { getApi } = require("./getApiUrl"); // Reload after mocks
    const api = getApi("PROFILES");

    expect(api.url).toBe("/api/opengrid/profiles/msescortplus");
  });
});
