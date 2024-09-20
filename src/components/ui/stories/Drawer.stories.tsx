import { Meta, StoryObj } from "@storybook/react";
import { Drawer } from "@ui";

const meta: Meta<typeof Drawer> = {
  component: Drawer,
  argTypes: {
    show: { control: "boolean" },
  },
  render: (args) => <Drawer {...args}>Better tech ❤️</Drawer>,
};

export default meta;
type Story = StoryObj<typeof Drawer>;

export const Default: Story = {
  args: {
    show: true,
  },
};
