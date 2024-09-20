import { beforeEach, describe, expect, it } from "vitest";
import { getCookie, setCookie } from "@/utils";

describe("Cookie", () => {
  beforeEach(() => {
    document.cookie = "";
  });

  describe("getCookie", () => {
    it("return selected cookie", () => {
      document.cookie = "key=value";

      const result = getCookie("key");
      expect(result).toBe("value");
    });

    it("return undefined if doesn't exist", () => {
      const result = getCookie("");
      expect(result).toBeUndefined();
    });
  });

  describe("setCookie", () => {
    it("set cookie correctly", () => {
      setCookie("key", "value");

      const result = document.cookie;
      expect(result).toBe("key=value");
    });
  });
});
