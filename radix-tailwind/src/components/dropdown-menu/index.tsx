"use client";

import * as React from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { cn } from "@/utils/class-name";

const Root = DropdownMenu.Root;

const Trigger = DropdownMenu.Trigger;

const Content = React.forwardRef<
  Omit<React.ComponentRef<typeof DropdownMenu.Content>, "sideOffset">,
  React.ComponentPropsWithoutRef<typeof DropdownMenu.Content>
>(({ className, ...props }, ref) => (
  <DropdownMenu.Portal>
    <DropdownMenu.Content
      ref={ref}
      {...props}
      sideOffset={4}
      className={cn(
        "min-w-[8rem]",
        className,
        "z-50 max-h-[var(--radix-dropdown-menu-content-available-height)]",
        "overflow-y-auto overflow-x-hidden",
        "rounded-md border border-border bg-popover p-1 text-foreground shadow-md",
        "data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
        "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
        "data-[side=bottom]:slide-in-from-top-2",
        "data-[side=left]:slide-in-from-right-2",
        "data-[side=right]:slide-in-from-left-2",
        "data-[side=top]:slide-in-from-bottom-2",
        "origin-[--radix-dropdown-menu-content-transform-origin]"
      )}
    />
  </DropdownMenu.Portal>
));
Content.displayName = "DropdownMenu.Content";

const Item = React.forwardRef<
  React.ComponentRef<typeof DropdownMenu.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenu.Item>
>(({ className, ...props }, ref) => (
  <DropdownMenu.Item
    ref={ref}
    className={cn(
      "flex items-center gap-2 px-2 py-1.5 text-sm focus:bg-accent focus:text-accent-foreground",
      className,
      "relative cursor-pointer select-none rounded-sm outline-none transition-all",
      "data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
    )}
    {...props}
  />
));
Item.displayName = "DropdownMenu.Item";

export { Root, Trigger, Content, Item };
