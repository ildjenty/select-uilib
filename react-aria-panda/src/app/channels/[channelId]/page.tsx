import { channels } from "@/mock/channels";
import { users } from "@/mock/users";
import { css } from "@/styled-system/css";
import { hstack } from "@/styled-system/patterns";

import { Content } from "./_components/content";
import { ChannelTitle } from "./_components/channel-title";
import { MembersIndicator } from "./_components/members-indicator";
import { StartMeet } from "./_components/start-meet";
import { ChannelMenu } from "./_components/channel-menu";
import { MessagesContent } from "./_components/messages-content";
import { TasksContent } from "./_components/tasks-content";
import { NotImplementedView } from "@/components/not-implemented-view";

export default async function Page({
  params,
}: {
  params: Promise<{ channelId: string }>;
}) {
  const resolvedParams = await params;
  const { channelId } = resolvedParams;
  const channel = channels.find((channel) => channel.id === channelId);

  if (!channel) {
    return <div>Channel not found</div>;
  }

  return (
    <div
      className={css({
        display: "flex",
        flexDirection: "column",
        height: "full",
        maxWidth: "full",
      })}
    >
      <div
        className={css({
          display: "flex",
          alignItems: "center",
          py: "2",
          px: "3",
          justifyContent: "space-between",
        })}
      >
        <ChannelTitle id={channel.id} isPublic={channel.isPublic} />
        <div className={hstack({ gap: "2" })}>
          <MembersIndicator members={users} />
          <StartMeet />
          <ChannelMenu />
        </div>
      </div>
      <Content
        channelId={channelId}
        messagesContent={<MessagesContent />}
        tasksContent={<TasksContent />}
        filesContent={<NotImplementedView />}
      />
    </div>
  );
}
