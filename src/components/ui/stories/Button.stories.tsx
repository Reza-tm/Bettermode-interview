import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@ui";

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Primary Button",
    variant: "primary",
  },
};

export const Text: Story = {
  args: {
    children: "Text Button",
    variant: "text",
  },
};

export const Transparent: Story = {
  args: {
    children: "Transparent Button",
    variant: "transparent",
  },
};

export const Loading: Story = {
  args: {
    children: "Loading Button",
    isLoading: true,
    size: "full-width",
  },
};
