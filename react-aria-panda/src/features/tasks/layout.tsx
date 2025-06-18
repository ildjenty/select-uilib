import { css } from "@/styled-system/css";
import { vstack, hstack } from "@/styled-system/patterns";

type Props = {
  actions: React.ReactNode;
  list: React.ReactNode;
};

export function TasksLayout({ actions, list }: Props) {
  return (
    <div className={vstack({ h: "full", w: "full", p: "3", gap: "0" })}>
      <div className={hstack({ gap: "2" })}>{actions}</div>
      <div
        className={css({
          minH: "0",
          flexGrow: "1",
          w: "full",
          mt: "3",
          borderTop: "1px solid",
          borderColor: "border",
        })}
      >
        {list}
      </div>
    </div>
  );
}