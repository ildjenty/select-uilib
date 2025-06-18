import { css } from "@/styled-system/css";
import { hstack } from "@/styled-system/patterns";

type Props = {
  repliesCount: number;
};

export function ThreadSeparator({ repliesCount }: Props) {
  return (
    <div className={hstack({ gap: "1" })}>
      <span className={css({ color: "muted" })}>{repliesCount} replies</span>
      <span
        className={css({
          h: "1px",
          bg: "border",
          flex: "1",
        })}
      />
    </div>
  );
}