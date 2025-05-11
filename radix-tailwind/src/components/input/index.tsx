import { forwardRef } from "react";

import { cn } from "@/utils/class-name";

const Input = forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-9 w-full rounded-md px-3 py-1",
          "border bg-transparent border-border px-3 py-1 text-foreground",
          "transition-colors",
          "placeholder:text-auxiliary disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
