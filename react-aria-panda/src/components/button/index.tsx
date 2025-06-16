"use client";

import { forwardRef } from "react";
import {
  Button as AriaButton,
  type ButtonProps as AriaButtonProps,
} from "react-aria-components";
import { cva, cx, type RecipeVariantProps } from "@/styled-system/css";

const buttonRecipe = cva({
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "1",
    borderWidth: "1px",
    borderStyle: "solid",
    text: "sm",
    transitionProperty: "all",
    transitionDuration: "fast",
    cursor: "pointer",
    _disabled: {
      pointerEvents: "none",
      opacity: "0.5",
    },
    _focusVisible: {
      outline: "none",
      ringWidth: "1px",
      ringColor: "primary",
    },
  },
  variants: {
    mode: {
      default: {
        bg: "background",
        color: "foreground",
        borderColor: "border",
        _hover: {
          bg: "accent",
        },
      },
      primary: {
        bg: "primary",
        borderColor: "primary",
        color: "primaryForeground",
        _hover: {
          opacity: "0.9",
        },
      },
      ghost: {
        borderColor: "transparent",
        color: "foreground",
        _hover: {
          bg: "accent",
        },
      },
      link: {
        bg: "background",
        color: "foreground",
        borderColor: "border",
        _hover: {
          bg: "accent",
          color: "primary",
          textDecoration: "underline",
        },
      },
      destructive: {
        bg: "background",
        borderColor: "destructive",
        color: "destructive",
        _hover: {
          bg: "destructive",
          color: "destructiveForeground",
        },
      },
    },
    size: {
      sm: {
        height: "8",
        text: "xs",
        px: "3",
      },
      md: {
        height: "9",
        text: "sm",
        px: "4",
        py: "2",
      },
      lg: {
        height: "10",
        text: "base",
        px: "6",
      },
      icon: {
        height: "9",
        width: "9",
        p: "2",
      },
    },
    corner: {
      default: {
        borderRadius: "md",
      },
      circle: {
        borderRadius: "full",
      },
    },
  },
  defaultVariants: {
    mode: "default",
    size: "md",
    corner: "default",
  },
});

type ButtonVariants = RecipeVariantProps<typeof buttonRecipe>;

type ButtonProps = AriaButtonProps &
  ButtonVariants & {
    className?: string;
  };

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, mode, size, corner, ...props }, ref) => {
    return (
      <AriaButton
        ref={ref}
        className={cx(buttonRecipe({ mode, size, corner }), className)}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };
