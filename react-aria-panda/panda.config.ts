import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  preflight: true,

  include: ["./src/**/*.{ts,tsx,js,jsx}"],

  exclude: [],

  theme: {
    extend: {
      tokens: {
        colors: {
          primary: { value: "var(--primary)" },
          primaryForeground: { value: "var(--primary-foreground)" },
          background: { value: "var(--background)" },
          foreground: { value: "var(--foreground)" },
          surface: { value: "var(--surface)" },
          muted: { value: "var(--muted)" },
          auxiliary: { value: "var(--auxiliary)" },
          active: { value: "var(--active)" },
          accent: { value: "var(--accent)" },
          popover: { value: "var(--popover)" },
          border: { value: "var(--border)" },
          success: { value: "var(--success)" },
          successForeground: { value: "var(--success-foreground)" },
          warning: { value: "var(--warning)" },
          warningForeground: { value: "var(--warning-foreground)" },
          destructive: { value: "var(--destructive)" },
          destructiveForeground: { value: "var(--destructive-foreground)" },
        },
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0, transform: "scale(0.95)" },
          to: { opacity: 1, transform: "scale(1)" },
        },
        fadeOut: {
          from: { opacity: 1, transform: "scale(1)" },
          to: { opacity: 0, transform: "scale(0.95)" },
        },
      },
      textStyles: {
        xs: {
          value: {
            fontSize: "0.75rem",
            lineHeight: "1rem",
          },
        },
        sm: {
          value: {
            fontSize: "0.875rem",
            lineHeight: "1.25rem",
          },
        },
        base: {
          value: {
            fontSize: "1rem",
            lineHeight: "1.5rem",
          },
        },
        lg: {
          value: {
            fontSize: "1.125rem",
            lineHeight: "1.75rem",
          },
        },
        xl: {
          value: {
            fontSize: "1.25rem",
            lineHeight: "1.75rem",
          },
        },
        "2xl": {
          value: {
            fontSize: "1.5rem",
            lineHeight: "2rem",
          },
        },
        "3xl": {
          value: {
            fontSize: "1.875rem",
            lineHeight: "2.25rem",
          },
        },
      },
    },
  },

  utilities: {
    extend: {
      text: {
        values: ["xs", "sm", "base", "lg", "xl", "2xl", "3xl"],
        transform(value: string) {
          const textStyles: Record<
            string,
            { fontSize: string; lineHeight: string }
          > = {
            xs: { fontSize: "0.75rem", lineHeight: "1rem" },
            sm: { fontSize: "0.875rem", lineHeight: "1.25rem" },
            base: { fontSize: "1rem", lineHeight: "1.5rem" },
            lg: { fontSize: "1.125rem", lineHeight: "1.75rem" },
            xl: { fontSize: "1.25rem", lineHeight: "1.75rem" },
            "2xl": { fontSize: "1.5rem", lineHeight: "2rem" },
            "3xl": { fontSize: "1.875rem", lineHeight: "2.25rem" },
          };
          return textStyles[value] || textStyles.base;
        },
      },
    },
  },


  outdir: "src/styled-system",
});
