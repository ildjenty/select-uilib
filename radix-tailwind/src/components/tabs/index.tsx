"use client";

import { forwardRef } from "react";
import * as Primitive from "@radix-ui/react-tabs";

import { cn } from "@/utils/class-name";

const Tabs = Primitive.Root;

const TabsList = forwardRef<
  React.ComponentRef<typeof Primitive.TabsList>,
  React.ComponentPropsWithoutRef<typeof Primitive.TabsList>
>(({ className, ...props }, ref) => {
  return (
    <Primitive.TabsList
      ref={ref}
      className={cn(
        "items-center justify-center border-b border-border",
        className
      )}
      {...props}
    />
  );
});
TabsList.displayName = Primitive.List.displayName;

const TabsTrigger = forwardRef<
  React.ComponentRef<typeof Primitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof Primitive.Trigger>
>(({ className, ...props }, ref) => (
  <Primitive.Trigger
    ref={ref}
    className={cn(
      className,
      "inline-flex items-center justify-center px-3 py-1.5 gap-1 transition-all translate-y-[1px] border-b border-transparent",
      "text-muted text-sm font-semibold whitespace-nowrap cursor-pointer",
      "hover:bg-accent disabled:pointer-events-none disabled:opacity-50",
      "data-[state=active]:bg-active data-[state=active]:text-primary data-[state=active]:border-primary"
    )}
    {...props}
  />
));
TabsTrigger.displayName = Primitive.Trigger.displayName;

const TabsContent = forwardRef<
  React.ComponentRef<typeof Primitive.Content>,
  React.ComponentPropsWithoutRef<typeof Primitive.Content>
>(({ className, ...props }, ref) => (
  <Primitive.Content
    ref={ref}
    className={cn(
      className,
      "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
    )}
    {...props}
  />
));
TabsContent.displayName = Primitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };
