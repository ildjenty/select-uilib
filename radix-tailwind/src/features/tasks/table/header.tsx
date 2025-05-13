import { cn } from "@/utils/class-name";

import { BaseTaskRow } from "./base-row";

function Cell({ children }: React.PropsWithChildren) {
  return (
    <div className="p-2 bg-background text-xs font-bold text-muted border-b border-border">
      {children}
    </div>
  );
}

export function TaskListHeader({ className }: { className?: string }) {
  return (
    <BaseTaskRow className={cn(className, "min-w-full")}>
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
