import type { Meta, StoryObj } from "@storybook/react";
import { Carousel } from "@ui";

const meta: Meta<typeof Carousel> = {
  component: Carousel,
};

export default meta;

type Story = StoryObj<typeof Carousel>;

const mockItems = Array.from({ length: 5 }).map((_, idx) => (
  <div
    key={idx}
    style={{ width: 180, height: 40, display: "grid", placeContent: "center" }}
  >
    Item {idx + 1}
  </div>
));

export const Default: Story = {
  args: {
    items: mockItems,
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 180 * 2 }}>
        <Story />
      </div>
    ),
  ],
};
