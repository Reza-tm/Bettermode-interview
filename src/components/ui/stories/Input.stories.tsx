import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "@ui";

const meta: Meta<typeof Input> = {
  component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: "Say hello to better tech :D ",
  },
};

export const WithLabel: Story = {
  args: {
    label: "Username",
    placeholder: "Enter ...",
  },
};

export const WithError: Story = {
  args: {
    label: "Email",
    placeholder: "Enter ...",
    error: "Invalid email address",
  },
};
