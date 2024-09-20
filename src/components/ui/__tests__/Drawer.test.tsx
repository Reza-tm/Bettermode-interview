import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { Drawer } from "@ui";
import userEvent from "@testing-library/user-event";

describe("Drawer Component", () => {
  const onClose = vi.fn();

  it("Hide drawer content on show=false", () => {
    render(
      <Drawer show={false} onClose={onClose}>
        <div>Better tech</div>
      </Drawer>,
    );

    expect(screen.queryByText("Better tech")).not.toBeInTheDocument();
  });

  it("Show drawer content on show=true", () => {
    render(
      <Drawer show={true} onClose={onClose}>
        <div>Better tech</div>
      </Drawer>,
    );

    expect(screen.getByText("Better tech")).toBeInTheDocument();
  });

  it("handle onClose , while clicking on backdrop", async () => {
    const user = userEvent.setup();
    render(
      <Drawer show={true} onClose={onClose}>
        <div>Better tech</div>
      </Drawer>,
    );

    const backdrop = screen.getByTestId("backdrop");
    await user.click(backdrop);

    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
