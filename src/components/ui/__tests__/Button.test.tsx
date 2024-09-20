import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Button } from "@ui";
import userEvent from "@testing-library/user-event";

describe("Button", () => {
  it("renders correctly", () => {
    const result = render(<Button>Click</Button>);
    expect(screen.getByText("Click")).toBeInTheDocument();
    expect(result).toMatchSnapshot();
  });

  it("handles click", async () => {
    const user = userEvent.setup();

    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click</Button>);
    await user.click(screen.getByText("Click"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("handle loadings", () => {
    render(<Button isLoading>click</Button>);
    expect(screen.getByTestId("loading-icon")).toBeInTheDocument();
    expect(screen.queryByText("Click")).not.toBeInTheDocument();
  });
});
