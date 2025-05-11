import { forwardRef } from "react";
import { Root as Primitive } from "@radix-ui/react-label";

import { cn } from "@/utils/class-name";

const Label = forwardRef<
  React.ComponentRef<typeof Primitive>,
  React.ComponentPropsWithoutRef<typeof Primitive>
>(({ className, ...props }, ref) => (
  <Primitive
    ref={ref}
    className={cn(
      className,
      "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    )}
    {...props}
  />
));
Label.displayName = Primitive.displayName;

export { Label };
