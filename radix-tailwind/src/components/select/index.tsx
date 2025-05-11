"use client";

import { forwardRef } from "react";
import * as Primitive from "@radix-ui/react-select";
import { Check, ChevronDown } from "lucide-react";

import { cn } from "@/utils/class-name";

const Select = Primitive.Root;
const SelectValue = Primitive.Value;

const SelectTrigger = forwardRef<
  React.ComponentRef<typeof Primitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof Primitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <Primitive.Trigger
    ref={ref}
    className={cn(
      "flex h-9 w-full items-center justify-between rounded-md px-3 py-1",
      "border bg-transparent border-border text-foreground text-sm transition-colors whitespace-nowrap",
      "placeholder:text-auxiliary disabled:cursor-not-allowed disabled:opacity-50",
      className
    )}
    {...props}
  >
    {children}
    <Primitive.Icon asChild>
      <ChevronDown className="h-4 w-4 opacity-50" />
    </Primitive.Icon>
  </Primitive.Trigger>
));
SelectTrigger.displayName = Primitive.Trigger.displayName;

const SelectContent = forwardRef<
  React.ComponentRef<typeof Primitive.Content>,
  React.ComponentPropsWithoutRef<typeof Primitive.Content>
>(({ className, children, ...props }, ref) => (
  <Primitive.Portal>
    <Primitive.Content
      ref={ref}
      className={cn(
        "relative z-50 max-h-[--radix-select-content-available-height] min-w-[8rem] overflow-y-auto overflow-x-hidden ",
        "rounded-md border border-border bg-popover shadow-md",
        "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        className
      )}
      position="popper"
      {...props}
    >
      <Primitive.Viewport
        className={cn(
          "p-1",
          "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
        )}
      >
        {children}
      </Primitive.Viewport>
    </Primitive.Content>
  </Primitive.Portal>
));
SelectContent.displayName = Primitive.Content.displayName;

const SelectItem = forwardRef<
  React.ComponentRef<typeof Primitive.Item>,
  React.ComponentPropsWithoutRef<typeof Primitive.Item>
>(({ className, children, ...props }, ref) => (
  <Primitive.Item
    ref={ref}
    className={cn(
      "relative flex w-full items-center rounded-sm py-1.5 pl-2 pr-8",
      "cursor-default select-none text-sm outline-none",
      "focus:bg-accent focus:text-accent-foreground",
      "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  >
    <span className="absolute right-2 flex h-3.5 w-3.5 items-center justify-center">
      <Primitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </Primitive.ItemIndicator>
    </span>
    <Primitive.ItemText>{children}</Primitive.ItemText>
  </Primitive.Item>
));
SelectItem.displayName = Primitive.Item.displayName;

export { Select, SelectTrigger, SelectValue, SelectContent, SelectItem };
