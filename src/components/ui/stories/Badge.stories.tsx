import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "@ui";

const meta: Meta<typeof Badge> = {
  component: Badge,
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    children: "Default Badge",
  },
};

export const LongText: Story = {
  args: {
    children: "This is a badge with longer text",
  },
};
