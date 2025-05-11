"use client";

import * as React from "react";
import * as Primitive from "@radix-ui/react-dropdown-menu";
import { cn } from "@/utils/class-name";

const DropdownMenu = Primitive.Root;

const DropdownMenuTrigger = Primitive.Trigger;

const DropdownMenuContent = React.forwardRef<
  Omit<React.ComponentRef<typeof Primitive.Content>, "sideOffset">,
  React.ComponentPropsWithoutRef<typeof Primitive.Content>
>(({ className, ...props }, ref) => (
  <Primitive.Portal>
    <Primitive.Content
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
  </Primitive.Portal>
));
DropdownMenuContent.displayName = "Primitive.Content";

const DropdownMenuItem = React.forwardRef<
  React.ComponentRef<typeof Primitive.Item>,
  React.ComponentPropsWithoutRef<typeof Primitive.Item>
>(({ className, ...props }, ref) => (
  <Primitive.Item
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
DropdownMenuItem.displayName = "Primitive.Item";

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
};
