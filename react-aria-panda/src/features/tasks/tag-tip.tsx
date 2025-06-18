import { css, cx } from "@/styled-system/css";

export function TagTip({
  value,
  className,
}: {
  value: string;
  className?: string;
}) {
  return (
    <span
      className={cx(
        css({
          p: "0.5",
          px: "2",
          text: "xs",
          color: "primary",
          fontWeight: "medium",
          borderRadius: "full",
          bg: "active",
        }),
        className
      )}
    >
      {value}
    </span>
  );
}