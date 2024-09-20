import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Skeleton } from "@/components/ui/Skeleton.tsx";

describe("Skeleton", () => {
  it("renders correctly", () => {
    const result = render(<Skeleton />);
    expect(result).toMatchSnapshot();
  });

  it("renders circle type correctly", () => {
    render(<Skeleton type="circle" />);
    const skeleton = screen.getByTestId("skeleton");
    expect(skeleton).toHaveClass("rounded-full");
  });
});
