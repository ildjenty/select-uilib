"use client";

import { forwardRef } from "react";
import { Label as AriaLabel, type LabelProps as AriaLabelProps } from "react-aria-components";
import { cva, cx } from "@/styled-system/css";

const labelRecipe = cva({
  base: {
    text: "sm",
    fontWeight: "medium",
    _peerDisabled: {
      cursor: "not-allowed",
      opacity: "0.7",
    },
  },
});

type LabelProps = AriaLabelProps & {
  className?: string;
};

const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, ...props }, ref) => {
    return (
      <AriaLabel
        ref={ref}
        className={cx(labelRecipe(), className)}
        {...props}
      />
    );
  }
);

Label.displayName = "Label";

export { Label };