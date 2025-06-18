import { css } from "@/styled-system/css";

export function MenuItem({
  focus,
  children,
  ...props
}: React.ComponentProps<"button"> & { focus: boolean }) {
  return (
    <button
      className={css({
        p: "2",
        borderRadius: "md",
        cursor: "pointer",
        transition: "colors",
        pointerEvents: focus ? "auto" : "none",
        _hover: {
          bg: "accent",
        },
      })}
      {...props}
    >
      {children}
    </button>
  );
}