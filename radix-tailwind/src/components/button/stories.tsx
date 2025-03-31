import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./component";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    mode: "primary",
    children: "Primary",
  },
};
