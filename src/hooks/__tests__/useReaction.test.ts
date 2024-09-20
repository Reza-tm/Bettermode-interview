import { act, renderHook } from "@testing-library/react";
import { MutationResult, useMutation } from "@apollo/client";

import { beforeEach, describe, expect, it, vi } from "vitest";
import { useReaction } from "@/hooks/useReaction.ts";

vi.mock("@apollo/client", () => ({
  useMutation: vi.fn(),
}));

describe("useReaction hook", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    vi.mocked(useMutation).mockReturnValue([
      vi.fn().mockResolvedValue({
        data: {
          addReaction: { status: "succeeded" },
          removeReaction: { status: "succeeded" },
        },
      }),
      { loading: false } as MutationResult,
    ]);
  });

  const mockReactionsData = [
    { reacted: true, reaction: "tada", count: 2 },
    { reacted: false, reaction: "heart", count: 1 },
  ];

  const postId = "123";

  it("default data should be correct", () => {
    const { result } = renderHook(() =>
      useReaction({ postId, reactionsData: mockReactionsData }),
    );

    expect(result.current.selectedReactions).toEqual(["tada"]);
    expect(result.current.optimisticReactionsData).toEqual(mockReactionsData);
  });

  it("handle adding reaction", async () => {
    const { result } = renderHook(() =>
      useReaction({ postId, reactionsData: mockReactionsData }),
    );

    await act(async () => {
      await result.current.handleSelectReaction("heart");
    });

    expect(result.current.selectedReactions).toEqual(["tada", "heart"]);

    expect(result.current.optimisticReactionsData).toEqual([
      { reacted: true, reaction: "tada", count: 2 },
      { reacted: true, reaction: "heart", count: 2 },
    ]);
  });

  it("handle removing reaction", async () => {
    const { result } = renderHook(() =>
      useReaction({ postId, reactionsData: mockReactionsData }),
    );

    await act(async () => {
      await result.current.handleSelectReaction("tada");
    });

    expect(result.current.selectedReactions).toEqual([]);
    expect(result.current.optimisticReactionsData).toEqual([
      { reacted: false, reaction: "tada", count: 1 },
      { reacted: false, reaction: "heart", count: 1 },
    ]);
  });

  it("rollback on mutation error", async () => {
    vi.mocked(useMutation).mockReturnValue([
      vi.fn().mockResolvedValue({
        data: {
          addReaction: { status: "failed" },
          removeReaction: { status: "failed" },
        },
      }),
      { loading: false } as MutationResult,
    ]);

    const { result } = renderHook(() =>
      useReaction({ postId, reactionsData: mockReactionsData }),
    );

    await act(async () => {
      await result.current.handleSelectReaction("heart");
    });

    expect(result.current.selectedReactions).toEqual(["tada"]);
    expect(result.current.optimisticReactionsData).toEqual(mockReactionsData);
  });
});
