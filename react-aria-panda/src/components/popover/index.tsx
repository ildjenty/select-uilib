"use client";

import {
  Popover as AriaPopover,
  DialogTrigger,
  Dialog,
  type PopoverProps as AriaPopoverProps,
} from "react-aria-components";
import { css, cx } from "@/styled-system/css";

interface PopoverProps extends AriaPopoverProps {
  children: React.ReactNode;
}

const Popover = ({ children, ...props }: PopoverProps) => (
  <AriaPopover {...props}>{children}</AriaPopover>
);

const PopoverTrigger = DialogTrigger;

const popoverStyles = css({
  zIndex: "50",
  rounded: "md",
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: "border",
  bg: "popover",
  p: "4",
  shadow: "md",
  outline: "none",
  "&[data-entering]": {
    animation: "fadeIn 200ms ease-out",
  },
  "&[data-exiting]": {
    animation: "fadeOut 200ms ease-in",
  },
});

interface PopoverContentProps {
  children: React.ReactNode;
  className?: string;
}

const PopoverContent = ({ className, children, ...props }: PopoverContentProps) => (
  <Dialog className={cx(popoverStyles, className)} {...props}>
    {children}
  </Dialog>
);

export { Popover, PopoverTrigger, PopoverContent };