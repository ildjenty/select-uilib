import { css, cx } from "@/styled-system/css";

export function BaseTaskRow({
  children,
  className,
}: React.PropsWithChildren<{ className?: string }>) {
  return (
    <div
      className={cx(
        css({
          minW: "full",
          display: "grid",
          gridTemplateColumns: "30rem 12rem 8rem 8rem 8rem 8rem 20rem",
        }),
        className
      )}
    >
      {children}
    </div>
  );
}