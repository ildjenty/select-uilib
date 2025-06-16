import { css } from "@/styled-system/css";
import { hstack, vstack } from "@/styled-system/patterns";

type Props = React.PropsWithChildren<{
  title: string;
  icon: React.ReactNode;
}>;

export function NavGroupContainer({ title, icon, children }: Props) {
  return (
    <div className={vstack({ gap: "2", alignItems: "start" })}>
      <div className={hstack({ gap: "2" })}>
        <span
          className={css({
            color: "primary",
            text: "md",
            fontWeight: "semibold",
          })}
        >
          {icon}
        </span>
        <span
          className={css({
            color: "primary",
            text: "md",
            fontWeight: "semibold",
          })}
        >
          {title}
        </span>
      </div>
      <div className={css({ pl: "1" })}>{children}</div>
    </div>
  );
}
