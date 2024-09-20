import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Popover } from "@ui";
import userEvent from "@testing-library/user-event";

describe("Popover Component", () => {
  it("show content on click", async () => {
    const user = userEvent.setup();

    render(
      <Popover content={<div>Content</div>}>
        <button>Click</button>
      </Popover>,
    );

    const button = screen.getByText("Click");
    await user.click(button);

    expect(screen.getByText("Content")).toBeInTheDocument();
  });

  it("hide content by default", async () => {
    render(
      <Popover content={<div>Content</div>}>
        <button>Click</button>
      </Popover>,
    );
    expect(screen.queryByText("Content")).not.toBeInTheDocument();
  });
});
