"use client";

import { useState } from "react";

import {
  ChatLayout,
  MessageItem,
  ThreadLayout,
  ThreadSeparator,
} from "@/features/chat";
import { users } from "@/mock/users";
import { threads } from "@/mock/chat";

const data = threads.map(({ userId, replies, ...thread }) => ({
  user: users.find((user) => user.id === userId)!,
  ...thread,
  replies: replies.map(({ userId, ...reply }) => ({
    user: users.find((user) => user.id === userId)!,
    ...reply,
  })),
}));

export function MessagesContent() {
  const [openThreadId, setOpenThreadId] = useState<string>();
  const thread = data.find((thread) => thread.id === openThreadId);

  return (
    <ChatLayout
      mainMessages={data.map((thread) => (
        <MessageItem
          mode="thread"
          key={thread.id}
          thread={thread}
          openThread={(id) => setOpenThreadId(id)}
        />
      ))}
      openedThread={
        thread ? (
          <ThreadLayout closeThread={() => setOpenThreadId(undefined)}>
            <MessageItem
              thread={thread}
              mode="reply"
              openThread={(id) => setOpenThreadId(id)}
            />
            <ThreadSeparator repliesCount={thread.replies.length} />
            {thread.replies.map((reply) => (
              <MessageItem
                key={reply.id}
                thread={thread}
                mode="reply"
                openThread={(id) => setOpenThreadId(id)}
              />
            ))}
          </ThreadLayout>
        ) : undefined
      }
    />
  );
}
