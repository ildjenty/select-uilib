import { Avatar } from "@/components/avatar";

import { MessageItemData } from "./types";
import { RepliesSignifier } from "./replies-signifier";

type Props = MessageItemData & {
  mode: "thread" | "reply";
  openThread: (threadId: string) => void;
};

export function MessageItem({ thread, mode, openThread }: Props) {
  return (
    <div className="w-full flex items-start gap-2">
      <Avatar
        src={thread.user.avatarSrc}
        alt={thread.user.name}
        size={32}
        className="shadow-lg shrink-0"
      />
      <div className="flex flex-col">
        <div className="flex items-end gap-2">
          <span className="font-semibold leading-4">{thread.user.name}</span>
          <span className="text-xs text-muted leading-3">
            {thread.timestamp}
          </span>
        </div>
        <div className="mt-2 bg-accent/30 shadow-md rounded-md">
          <p className="px-3 py-2 whitespace-pre-wrap break-words">
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
