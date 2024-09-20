import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Input } from "@ui";
import userEvent from "@testing-library/user-event";

describe("Input", () => {
  it("renders correctly", () => {
    const result = render(<Input label="Username" />);
    expect(screen.getByText("Username")).toBeInTheDocument();
    expect(result).matchSnapshot();
  });

  it("renders error message", () => {
    render(<Input error="This field is required" />);
    expect(screen.getByText("This field is required")).toBeInTheDocument();
  });

  it("error styles on error", () => {
    render(<Input error="Error" />);
    const input = screen.getByRole("textbox");
    expect(input).toHaveClass("ring-red-500");
  });

  it("handles input changes", async () => {
    const user = userEvent.setup();
    render(<Input />);
    const input = screen.getByRole("textbox");
    await user.type(input, "test");
    expect(input).toHaveValue("test");
  });
});
