import { beforeEach, describe, expect, it, vi } from "vitest";
import { act, renderHook } from "@testing-library/react";
import { getCookie, setCookie } from "@/utils";
import { useTheme } from "@/hooks/useTheme.ts";

vi.mock("@/utils", () => ({
  getCookie: vi.fn(),
  setCookie: vi.fn(),
}));

describe("useTheme hook", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    document.body.className = "";
  });

  it("should not be null even if cookie isn't set", () => {
    vi.mocked(getCookie).mockReturnValue(undefined);

    const { result } = renderHook(() => useTheme());

    expect(result.current.currTheme).not.toBeNull();
  });

  it("get current theme from cookie", () => {
    vi.mocked(getCookie).mockReturnValue("light");

    const { result } = renderHook(() => useTheme());

    expect(result.current.currTheme).toBe("light");
  });

  it("toggle theme", () => {
    vi.mocked(getCookie).mockReturnValue("dark");

    const { result } = renderHook(() => useTheme());

    act(() => {
      result.current.toggleTheme();
    });

    expect(result.current.currTheme).toBe("light");

    expect(setCookie).toHaveBeenCalledWith("x-theme", "light");
  });
});
