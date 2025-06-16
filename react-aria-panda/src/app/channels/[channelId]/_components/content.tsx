"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { MessageCircleIcon, ListChecksIcon, FolderIcon } from "lucide-react";
import { css } from "@/styled-system/css";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/tabs";

type Props = {
  channelId: string;
  messagesContent: React.ReactNode;
  tasksContent: React.ReactNode;
  filesContent: React.ReactNode;
};

export function Content({
  channelId,
  messagesContent,
  tasksContent,
  filesContent,
}: Props) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const tab = searchParams.get("tab") || "messages";

  return (
    <Tabs
      selectedKey={tab}
      onSelectionChange={(key) => {
        router.push(`/channels/${channelId}?tab=${key}`);
      }}
      className={css({
        maxWidth: "full",
        height: "full",
        display: "flex",
        flexDirection: "column",
        minHeight: "0",
        flexGrow: "1",
      })}
    >
      <TabsList>
        <TabsTrigger id="messages">
          <MessageCircleIcon size={16} />
          Messages
        </TabsTrigger>
        <TabsTrigger id="tasks">
          <ListChecksIcon size={16} />
          Tasks
        </TabsTrigger>
        <TabsTrigger id="files">
          <FolderIcon size={16} />
          Files
        </TabsTrigger>
      </TabsList>
      <TabsContent
        id="messages"
        className={css({ minHeight: "0", flexGrow: "1" })}
      >
        {messagesContent}
      </TabsContent>
      <TabsContent
        id="tasks"
        className={css({ minHeight: "0", flexGrow: "1" })}
      >
        {tasksContent}
      </TabsContent>
      <TabsContent
        id="files"
        className={css({ minHeight: "0", flexGrow: "1" })}
      >
        {filesContent}
      </TabsContent>
    </Tabs>
  );
}
