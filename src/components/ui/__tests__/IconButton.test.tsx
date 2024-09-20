import { fireEvent, render, screen } from "@testing-library/react";

import { describe, expect, it, vi } from "vitest";
import { IconButton } from "@ui";

describe("IconButton", () => {
  it("renders correctly", () => {
    const result = render(<IconButton icon={<span data-testid="test" />} />);
    expect(screen.getByTestId("test")).toBeInTheDocument();
    expect(result).toMatchSnapshot();
  });

  it("handles click", () => {
    const handleClick = vi.fn();
    render(<IconButton icon={<span />} onClick={handleClick} />);
    fireEvent.click(screen.getByRole("button"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
