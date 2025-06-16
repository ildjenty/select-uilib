"use client";

import { forwardRef } from "react";
import { TextField, Input as AriaInput, type TextFieldProps } from "react-aria-components";
import { cva, type RecipeVariantProps } from "@/styled-system/css";

const inputRecipe = cva({
  base: {
    display: "flex",
    width: "full",
    borderRadius: "md",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "border",
    bg: "transparent",
    color: "foreground",
    transitionProperty: "colors",
    transitionDuration: "fast",
    _placeholder: {
      color: "auxiliary",
    },
    _disabled: {
      cursor: "not-allowed",
      opacity: "0.5",
    },
    _hover: {
      borderColor: "muted",
    },
    _focusWithin: {
      outline: "none",
      ringWidth: "1px",
      ringColor: "primary",
      borderColor: "primary",
    },
    _invalid: {
      borderColor: "destructive",
    },
  },
  variants: {
    size: {
      sm: {
        height: "8",
        px: "3",
        py: "1",
        text: "sm",
      },
      md: {
        height: "9",
        px: "3",
        py: "1",
        text: "base",
      },
      lg: {
        height: "10",
        px: "4",
        py: "2",
        text: "lg",
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
});

type InputVariants = RecipeVariantProps<typeof inputRecipe>;

type InputProps = Omit<TextFieldProps, "children"> & 
  InputVariants & {
    placeholder?: string;
    type?: string;
  };

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ size, placeholder, type = "text", ...props }, ref) => {
    return (
      <TextField {...props}>
        <AriaInput
          ref={ref}
          type={type}
          placeholder={placeholder}
          className={inputRecipe({ size })}
        />
      </TextField>
    );
  }
);

Input.displayName = "Input";

export { Input };