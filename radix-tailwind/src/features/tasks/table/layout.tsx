import { TaskListHeader } from "./header";

export function TaskTableLayout({ children }: React.PropsWithChildren) {
  return (
    <div className="h-full w-full overflow-auto relative">
      <TaskListHeader className="sticky top-0 z-10" />
      <div className="h-full min-w-full grow-1">{children}</div>
    </div>
  );
}
