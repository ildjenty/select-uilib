import { RssIcon, LockIcon } from "lucide-react";
import { css } from "@/styled-system/css";
import { hstack } from "@/styled-system/patterns";

type Props = {
  id: string;
  isPublic: boolean;
};

export function ChannelTitle({ id, isPublic }: Props) {
  const Icon = isPublic ? RssIcon : LockIcon;

  return (
    <h2
      className={css({
        display: "flex",
        alignItems: "center",
        gap: "1.5",
        fontWeight: "bold",
        text: "xl",
      })}
    >
      <Icon size={18} strokeWidth={3} />
      {id}
    </h2>
  );
}