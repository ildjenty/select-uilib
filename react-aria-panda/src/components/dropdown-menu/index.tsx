"use client";

import { forwardRef } from "react";
import {
  MenuTrigger,
  Popover,
  Menu,
  MenuItem,
  type MenuTriggerProps,
  type PopoverProps,
  type MenuProps,
  type MenuItemProps,
} from "react-aria-components";
import { cva, cx, css } from "@/styled-system/css";

const dropdownContentRecipe = cva({
  base: {
    minWidth: "8rem",
    maxHeight: "var(--popover-content-available-height)",
    overflowY: "auto",
    overflowX: "hidden",
    borderRadius: "md",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "border",
    bg: "popover",
    color: "foreground",
    boxShadow: "md",
    p: "1",
    outline: "none",
    transformOrigin: "var(--origin)",
  },
});

const dropdownItemRecipe = cva({
  base: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    gap: "2",
    px: "2",
    py: "1.5",
    text: "sm",
    borderRadius: "sm",
    outline: "none",
    cursor: "pointer",
    userSelect: "none",
    transitionProperty: "all",
    transitionDuration: "fast",
    _hover: {
      bg: "accent",
    },
    _focus: {
      bg: "accent",
    },
    _disabled: {
      pointerEvents: "none",
      opacity: "0.5",
    },
  },
});

type DropdownMenuProps = MenuTriggerProps & {
  children: React.ReactNode;
};

const DropdownMenu = ({ children, ...props }: DropdownMenuProps) => {
  return <MenuTrigger {...props}>{children}</MenuTrigger>;
};

type DropdownMenuContentProps = Omit<PopoverProps, "children"> &
  Omit<MenuProps<object>, "children"> & {
    children: React.ReactNode;
    className?: string;
  };

const DropdownMenuContent = forwardRef<
  HTMLDivElement,
  DropdownMenuContentProps
>(({ className, children, ...props }, ref) => {
  return (
    <Popover
      ref={ref}
      className={cx(dropdownContentRecipe(), className)}
      offset={4}
      {...props}
    >
      <Menu className={css({ outline: "none" })}>{children}</Menu>
    </Popover>
  );
});

DropdownMenuContent.displayName = "DropdownMenuContent";

type DropdownMenuItemProps = MenuItemProps & {
  className?: string;
};

const DropdownMenuItem = forwardRef<HTMLDivElement, DropdownMenuItemProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <MenuItem
        ref={ref}
        className={cx(dropdownItemRecipe(), className)}
        {...props}
      >
        {children}
      </MenuItem>
    );
  }
);

DropdownMenuItem.displayName = "DropdownMenuItem";

export { DropdownMenu, DropdownMenuContent, DropdownMenuItem };
