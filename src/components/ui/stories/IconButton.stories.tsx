import type { Meta, StoryObj } from "@storybook/react";
import { IconButton } from "@ui";
import { Sun } from "@icons";

const meta: Meta<typeof IconButton> = {
  component: IconButton,
};

export default meta;
type Story = StoryObj<typeof IconButton>;

export const Primary: Story = {
  args: {
    icon: <Sun />,
    variant: "primary",
  },
};

export const Transparent: Story = {
  args: {
    icon: <Sun />,
    variant: "transparent",
  },
};

export const Disabled: Story = {
  args: {
    icon: <Sun />,
    disabled: true,
  },
};
