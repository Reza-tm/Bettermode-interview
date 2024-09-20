import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Badge } from "@ui";

describe("Badge", () => {
  it("renders correctly", () => {
    const result = render(<Badge>Test Badge</Badge>);
    expect(screen.getByText("Test Badge")).toBeInTheDocument();
    expect(result).matchSnapshot();
  });
});
