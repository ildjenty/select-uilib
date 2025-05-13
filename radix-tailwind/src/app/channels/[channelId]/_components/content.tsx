"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { MessageCircleIcon, ListChecksIcon, FolderIcon } from "lucide-react";

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
  const tab = searchParams.get("tab") || "messages";

  return (
    <Tabs
      defaultValue={tab}
      className="max-w-full h-full flex flex-col min-h-0 grow-1"
    >
      <TabsList>
        <Link href={`/channels/${channelId}?tab=messages`}>
          <TabsTrigger value="messages">
            <MessageCircleIcon size={16} />
            Messages
          </TabsTrigger>
        </Link>
        <Link href={`/channels/${channelId}?tab=tasks`}>
          <TabsTrigger value="tasks">
            <ListChecksIcon size={16} />
            Tasks
          </TabsTrigger>
        </Link>
        <Link href={`/channels/${channelId}?tab=files`}>
          <TabsTrigger value="files">
            <FolderIcon size={16} />
            Files
          </TabsTrigger>
        </Link>
      </TabsList>
      <TabsContent value="messages" className="min-h-0 grow-1">
        {messagesContent}
      </TabsContent>
      <TabsContent value="tasks" className="min-h-0 grow-1">
        {tasksContent}
      </TabsContent>
      <TabsContent value="files" className="min-h-0 grow-1">
        {filesContent}
      </TabsContent>
    </Tabs>
  );
}
