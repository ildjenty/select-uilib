import { css, cx } from "@/styled-system/css";
import { BaseTaskRow } from "./base-row";

function Cell({ children }: React.PropsWithChildren) {
  return (
    <div
      className={css({
        p: "2",
        bg: "background",
        text: "xs",
        fontWeight: "bold",
        color: "muted",
        borderBottom: "1px solid",
        borderColor: "border",
      })}
    >
      {children}
    </div>
  );
}

export function TaskListHeader({ className }: { className?: string }) {
  return (
    <BaseTaskRow className={cx(css({ minW: "full" }), className)}>
      <Cell>Title</Cell>
      <Cell>Assignees</Cell>
      <Cell>Start Date</Cell>
      <Cell>Due Date</Cell>
      <Cell>Priority</Cell>
      <Cell>Status</Cell>
      <Cell>Tags</Cell>
    </BaseTaskRow>
  );
}