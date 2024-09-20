import { Meta, StoryObj } from "@storybook/react";
import { Popover } from "@ui";

const meta: Meta<typeof Popover> = {
  component: Popover,
  argTypes: {
    placement: {
      options: ["top-start", "bottom-start"],
      control: { type: "radio" },
    },
  },
  args: {
    content: <div>Hello better tech from a popover :D</div>,
  },
  parameters: {
    layout: "centered",
  },
  globals: {
    backgrounds: { value: "light", grid: false },
  },
};

export default meta;

type Story = StoryObj<typeof Popover>;

export const Default: Story = {
  render: (args) => (
    <Popover {...args}>
      <button>Open</button>
    </Popover>
  ),
};
