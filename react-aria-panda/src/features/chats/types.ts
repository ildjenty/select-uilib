import { User } from "@/mock/users";
import { Thread, Message } from "@/mock/chat";

export type MessageItemData = {
  thread: Omit<Thread, "userId" | "replies"> & {
    user: User;
    replies: (Omit<Message, "userId"> & { user: User })[];
  };
};