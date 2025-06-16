"use client";

import { forwardRef, createContext, useContext } from "react";
import {
  Select as AriaSelect,
  SelectValue as AriaSelectValue,
  Button,
  ListBox,
  ListBoxItem,
  Popover,
  type SelectProps as AriaSelectProps,
} from "react-aria-components";
import { ChevronDown, Check } from "lucide-react";
import { cva, cx, css } from "@/styled-system/css";

const selectTriggerRecipe = cva({
  base: {
    display: "flex",
    width: "full",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: "md",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "border",
    bg: "transparent",
    color: "foreground",
    text: "sm",
    transitionProperty: "colors",
    transitionDuration: "fast",
    whiteSpace: "nowrap",
    cursor: "pointer",
    _hover: {
      borderColor: "muted",
    },
    _focusVisible: {
      outline: "none",
      ringWidth: "1px",
      ringColor: "primary",
      borderColor: "primary",
    },
    _disabled: {
      cursor: "not-allowed",
      opacity: "0.5",
    },
    _placeholderShown: {
      color: "auxiliary",
    },
  },
  variants: {
    size: {
      sm: {
        height: "8",
        px: "3",
        py: "1",
      },
      md: {
        height: "9",
        px: "3",
        py: "1",
      },
      lg: {
        height: "10",
        px: "4",
        py: "2",
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
});

const selectContentRecipe = cva({
  base: {
    maxHeight: "var(--popover-content-available-height)",
    minWidth: "var(--trigger-width)",
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
    "&[data-entering]": {
      animation: "fadeIn 150ms ease-out",
    },
    "&[data-exiting]": {
      animation: "fadeOut 150ms ease-in",
    },
  },
});

const selectItemRecipe = cva({
  base: {
    position: "relative",
    display: "flex",
    width: "full",
    alignItems: "center",
    borderRadius: "sm",
    py: "1.5",
    pl: "2",
    pr: "8",
    text: "sm",
    outline: "none",
    cursor: "pointer",
    userSelect: "none",
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
    _selected: {
      bg: "accent",
    },
  },
});

type SelectContextType = {
  size?: "sm" | "md" | "lg";
};

const SelectContext = createContext<SelectContextType>({});

type SelectProps = AriaSelectProps & {
  className?: string;
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
};

const Select = ({ size = "md", className, children, ...props }: SelectProps) => {
  return (
    <SelectContext.Provider value={{ size }}>
      <AriaSelect {...props} className={cx(css({ width: "full" }), className)}>
        {children}
      </AriaSelect>
    </SelectContext.Provider>
  );
};

type SelectTriggerProps = React.ComponentProps<typeof Button> & {
  className?: string;
  children?: React.ReactNode;
};

const SelectTrigger = forwardRef<HTMLButtonElement, SelectTriggerProps>(
  ({ className, children, ...props }, ref) => {
    const { size } = useContext(SelectContext);
    return (
      <Button
        ref={ref}
        className={cx(selectTriggerRecipe({ size }), className)}
        {...props}
      >
        {children}
        <ChevronDown
          className={css({
            height: "4",
            width: "4",
            opacity: "0.5",
            flexShrink: 0,
          })}
        />
      </Button>
    );
  }
);
SelectTrigger.displayName = "SelectTrigger";

const SelectValue = AriaSelectValue;

type SelectContentProps = React.ComponentProps<typeof Popover> & {
  className?: string;
  children: React.ReactNode;
};

const SelectContent = forwardRef<HTMLDivElement, SelectContentProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <Popover
        ref={ref}
        className={cx(selectContentRecipe(), className)}
        {...props}
      >
        <ListBox className={css({ outline: "none" })}>{children}</ListBox>
      </Popover>
    );
  }
);
SelectContent.displayName = "SelectContent";

type SelectItemProps = React.ComponentProps<typeof ListBoxItem> & {
  className?: string;
  children: React.ReactNode;
};

const SelectItem = forwardRef<HTMLDivElement, SelectItemProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <ListBoxItem
        ref={ref}
        className={cx(selectItemRecipe(), className)}
        {...props}
      >
        {({ isSelected }) => (
          <>
            <span
              className={css({
                position: "absolute",
                right: "2",
                display: "flex",
                height: "3.5",
                width: "3.5",
                alignItems: "center",
                justifyContent: "center",
              })}
            >
              {isSelected && (
                <Check className={css({ height: "4", width: "4" })} />
              )}
            </span>
            {children}
          </>
        )}
      </ListBoxItem>
    );
  }
);
SelectItem.displayName = "SelectItem";

export { Select, SelectTrigger, SelectValue, SelectContent, SelectItem };