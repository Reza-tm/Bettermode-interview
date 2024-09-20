import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "@ui";
import { faker } from "@faker-js/faker";

const meta: Meta<typeof Avatar> = {
  component: Avatar,
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const WithImage: Story = {
  args: {
    src: faker.image.url(),
  },
};

export const WithoutImage: Story = {
  args: {},
};
