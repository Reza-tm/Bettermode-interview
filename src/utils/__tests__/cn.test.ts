import { describe, expect, it } from "vitest";
import { cn } from "@/utils";

describe("cn", () => {
  it("should merge correctly", () => {
    const result = cn("a", "b");

    expect(result).toBe("a b");
  });
});
