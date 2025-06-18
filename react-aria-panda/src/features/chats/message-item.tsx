import { css } from "@/styled-system/css";
import { hstack, vstack } from "@/styled-system/patterns";
import { Avatar } from "@/components/avatar";

import { MessageItemData } from "./types";
import { RepliesSignifier } from "./replies-signifier";

type Props = MessageItemData & {
  mode: "thread" | "reply";
  openThread: (threadId: string) => void;
};

export function MessageItem({ thread, mode, openThread }: Props) {
  return (
    <div className={hstack({ alignItems: "start", gap: "2", w: "full" })}>
      <Avatar
        src={thread.user.avatarSrc}
        alt={thread.user.name}
        size={32}
        className={css({ shadow: "lg", flexShrink: "0" })}
      />
      <div className={vstack({ alignItems: "stretch", gap: "0" })}>
        <div className={hstack({ alignItems: "end", gap: "2" })}>
          <span className={css({ fontWeight: "semibold", lineHeight: "1" })}>
            {thread.user.name}
          </span>
          <span
            className={css({ text: "xs", color: "muted", lineHeight: "1" })}
          >
            {thread.timestamp}
          </span>
        </div>
        <div
          className={css({
            mt: "2",
            bg: "accent/30",
            shadow: "md",
            borderRadius: "md",
          })}
        >
          <p
            className={css({
              px: "3",
              py: "2",
              whiteSpace: "pre-wrap",
              wordBreak: "break-word",
            })}
          >
            {thread.content}
          </p>
          {mode === "thread" && thread.replies.length > 0 && (
            <RepliesSignifier
              threadId={thread.id}
              replies={thread.replies}
              openThread={openThread}
            />
          )}
        </div>
      </div>
    </div>
  );
}
