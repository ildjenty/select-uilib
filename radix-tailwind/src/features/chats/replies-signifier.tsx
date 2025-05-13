import { ChevronRightIcon } from "lucide-react";

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
      className="flex items-center gap-2 border-t border-border px-3 py-2 w-full cursor-pointer hover:bg-accent transition-colors text-muted rounded-b-md"
      onClick={() => openThread(threadId)}
    >
      <span className="flex gap-0.5">
        {displayUsers.map((user) => (
          <Avatar
            key={user.id}
            src={user.avatarSrc}
            alt={user.name}
            size={20}
          />
        ))}
      </span>
      <span className="text-sm">{count} replies</span>
      <ChevronRightIcon size={18} className="ml-auto" />
    </button>
  );
}
