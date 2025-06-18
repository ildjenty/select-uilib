import { ChevronRightIcon } from "lucide-react";
import { css } from "@/styled-system/css";
import { flex } from "@/styled-system/patterns";

import { Avatar } from "@/components/avatar";
import { MessageItemData } from "./types";

export function RepliesSignifier({
  threadId,
  replies,
  openThread,
}: {
  threadId: string;
  replies: MessageItemData["thread"]["replies"];
  openThread: (threadId: string) => void;
}) {
  const userIds = replies.map((reply) => reply.user.id);
  const uniqueUserIds = [...new Set(userIds)];
  const displayUsers = uniqueUserIds.map(
    (id) => replies.find((reply) => reply.user.id === id)!.user
  );
  const count = replies.length;

  return (
    <button
      className={css({
        display: "flex",
        alignItems: "center",
        gap: "2",
        borderTop: "1px solid",
        borderColor: "border",
        px: "3",
        py: "2",
        width: "full",
        cursor: "pointer",
        transition: "colors",
        color: "muted",
        borderBottomRadius: "md",
        _hover: {
          bg: "accent",
        },
      })}
      onClick={() => openThread(threadId)}
    >
      <span className={flex({ gap: "0.5" })}>
        {displayUsers.map((user) => (
          <Avatar
            key={user.id}
            src={user.avatarSrc}
            alt={user.name}
            size={20}
          />
        ))}
      </span>
      <span className={css({ text: "sm" })}>{count} replies</span>
      <ChevronRightIcon size={18} className={css({ ml: "auto" })} />
    </button>
  );
}