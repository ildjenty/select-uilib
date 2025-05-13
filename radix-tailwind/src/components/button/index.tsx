import { forwardRef } from "react";
import { Slot } from "@radix-ui/react-slot";

import { cn } from "@/utils/class-name";

const modes = {
  default: "bg-background text-foreground border-border hover:bg-accent",
  primary:
    "bg-primary border-primary text-primary-foreground hover:bg-primary/90 hover:border-primary/90",
  ghost: "border-transparent text-foreground hover:bg-accent",
  link: "bg-background text-foreground border-border hover:bg-accent hover:text-primary hover:underline",
  destructive:
    "bg-background border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground",
};

const corners = {
  default: "rounded-md",
  circle: "rounded-full",
};

const sizes = {
  sm: "h-8 text-xs px-3",
  md: "h-9 px-4 py-2",
  lg: "h-10 px-6",
  icon: "h-9 w-9",
};

type Props = React.ComponentProps<"button"> & {
  mode?: keyof typeof modes;
  size?: keyof typeof sizes;
  corner?: keyof typeof corners;
  asChild?: boolean;
};

const Button = forwardRef<HTMLButtonElement, Props>(
  (
    {
      className,
      mode = "default",
      size = "md",
      corner = "default",
      asChild = false,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(
          corners[corner],
          className,
          "inline-flex items-center justify-center gap-1",
          "border text-sm",
          "transition-all cursor-pointer",
          "disabled:pointer-events-none disabled:opacity-50",
          modes[mode],
          sizes[size]
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
