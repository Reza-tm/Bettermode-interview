import type { Meta, StoryObj } from "@storybook/react";
import { Skeleton } from "@/components/ui/Skeleton.tsx";

const meta: Meta<typeof Skeleton> = {
  component: Skeleton,
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
  args: {},
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <Skeleton />
      <Skeleton />
      <Skeleton />
    </div>
  ),
};

export const Circle: Story = {
  args: {
    type: "circle",
  },
};
