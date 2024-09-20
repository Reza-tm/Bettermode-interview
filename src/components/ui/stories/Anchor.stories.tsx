import type { Meta, StoryObj } from "@storybook/react";
import { Anchor } from "@ui";

const meta: Meta<typeof Anchor> = {
  component: Anchor,
};

export default meta;
type Story = StoryObj<typeof Anchor>;

export const Default: Story = {
  args: {
    to: "/example",
    text: "Example Link",
  },
};
