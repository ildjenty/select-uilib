import type { Meta, StoryObj } from "@storybook/react";

import * as DropdownMenu from "./component";
import { Button } from "../button";

type DropdownMenuStoryProps = {
  rootProps?: React.ComponentProps<typeof DropdownMenu.Root>;
  triggerProps?: React.ComponentProps<typeof DropdownMenu.Trigger>;
  contentProps?: React.ComponentProps<typeof DropdownMenu.Content>;
  itemProps?: React.ComponentProps<typeof DropdownMenu.Item>;
};

function DropdownMenuStory({
  rootProps,
  triggerProps,
  contentProps,
  itemProps,
}: DropdownMenuStoryProps) {
  return (
    <DropdownMenu.Root {...rootProps}>
      <DropdownMenu.Trigger asChild {...triggerProps}>
        <Button>Open Menu</Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content {...contentProps}>
        <DropdownMenu.Item {...itemProps}>Item 1</DropdownMenu.Item>
        <DropdownMenu.Item {...itemProps}>Item 2</DropdownMenu.Item>
        <DropdownMenu.Item {...itemProps}>Item 3</DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}

const meta = {
  title: "Components/DropdownMenu",
  component: DropdownMenuStory,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof DropdownMenuStory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    rootProps: {},
    triggerProps: {},
    contentProps: {},
    itemProps: {},
  },
};
