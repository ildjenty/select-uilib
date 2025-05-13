"use client";

import { forwardRef } from "react";
import * as Primitive from "@radix-ui/react-popover";

import { cn } from "@/utils/class-name";

const Popover = Primitive.Root;

const PopoverTrigger = Primitive.Trigger;

const PopoverContent = forwardRef<
  React.ComponentRef<typeof Primitive.Content>,
  React.ComponentPropsWithoutRef<typeof Primitive.Content>
>(({ className, ...props }, ref) => (
  <Primitive.Portal>
    <Primitive.Content
      ref={ref}
      sideOffset={4}
      className={cn(
        "z-50",
        className,
        "rounded-md border border-border bg-popover p-4 shadow-md outline-none",
        "origin-[--radix-popover-content-transform-origin]"
      )}
      {...props}
    />
  </Primitive.Portal>
));
PopoverContent.displayName = Primitive.Content.displayName;

export { Popover, PopoverTrigger, PopoverContent };
