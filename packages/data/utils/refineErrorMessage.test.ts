import { refineErrorMessage } from "./refineErrorMessage";

describe("refineErrorMessage", () => {
  it("should return the message for an Error instance", () => {
    const error = new Error("Network request failed");
    expect(refineErrorMessage(error)).toBe("Network request failed");
  });

  it("should return the message for a custom Error subclass", () => {
    class CustomError extends Error {
      constructor(message: string) {
        super(message);
        this.name = "CustomError";
      }
    }
    const customError = new CustomError("Something specific went wrong");
    expect(refineErrorMessage(customError)).toBe(
      "Something specific went wrong"
    );
  });

  it("should stringify a plain string", () => {
    const str = "Just a string error";
    expect(refineErrorMessage(str)).toBe(JSON.stringify({ e: str }));
  });

  it("should stringify a number", () => {
    const num = 500;
    expect(refineErrorMessage(num)).toBe(JSON.stringify({ e: num }));
  });

  it("should stringify a boolean", () => {
    const bool = true;
    expect(refineErrorMessage(bool)).toBe(JSON.stringify({ e: bool }));
  });

  it("should stringify an object", () => {
    const obj = { code: 404, message: "Not Found" };
    expect(refineErrorMessage(obj)).toBe(JSON.stringify({ e: obj }));
  });

  it("should stringify an array", () => {
    const arr = ["error1", "error2"];
    expect(refineErrorMessage(arr)).toBe(JSON.stringify({ e: arr }));
  });

  it("should handle null", () => {
    expect(refineErrorMessage(null)).toBe(JSON.stringify({ e: null }));
  });

  it("should handle undefined", () => {
    expect(refineErrorMessage(undefined)).toBe(
      JSON.stringify({ e: undefined })
    );
  });

  it("should stringify a complex object with nested properties", () => {
    const complexObj = {
      status: "failed",
      details: {
        reason: "invalid_input",
        fields: ["email", "password"],
      },
    };
    expect(refineErrorMessage(complexObj)).toBe(
      JSON.stringify({ e: complexObj })
    );
  });
});
