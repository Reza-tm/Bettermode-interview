import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import { Anchor } from "@ui";
import { describe, expect, it } from "vitest";

describe("Anchor", () => {
  it("renders correctly", () => {
    const result = render(
      <BrowserRouter>
        <Anchor to="/test" text="Test Link" />
      </BrowserRouter>,
    );

    const anchor = screen.getByText("Test Link");
    expect(anchor).toBeInTheDocument();
    expect(anchor).toHaveAttribute("href", "/test");
    expect(result).matchSnapshot();
  });
});
