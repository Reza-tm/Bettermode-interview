import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Avatar } from "@ui";
import { faker } from "@faker-js/faker";

describe("Avatar", () => {
  it("renders with src", () => {
    const result = render(
      <Avatar src={faker.image.avatarGitHub()} alt="Test Avatar" />,
    );
    const img = screen.getByAltText("Test Avatar");
    expect(img).toBeInTheDocument();
    expect(result).matchSnapshot();
  });

  it("renders without src", () => {
    render(<Avatar />);
    const defaultIcon = screen.getByTestId("default-user-icon");
    expect(defaultIcon).toBeInTheDocument();
  });
});
