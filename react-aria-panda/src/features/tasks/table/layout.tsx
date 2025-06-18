import { css } from "@/styled-system/css";
import { TaskListHeader } from "./header";

export function TaskTableLayout({ children }: React.PropsWithChildren) {
  return (
    <div
      className={css({
        h: "full",
        w: "full",
        overflow: "auto",
        position: "relative",
      })}
    >
      <TaskListHeader className={css({ position: "sticky", top: "0", zIndex: "10" })} />
      <div className={css({ h: "full", minW: "full", flexGrow: "1" })}>
        {children}
      </div>
    </div>
  );
}