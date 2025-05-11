import { channels } from "@/mock/channels";
import { users } from "@/mock/users";

import { Content } from "./_components/content";
import { ChannelTitle } from "./_components/channel-title";
import { MembersIndicator } from "./_components/members-indicator";
import { StartMeet } from "./_components/start-meet";
import { ChannelMenu } from "./_components/channel-menu";
import { MessagesContent } from "./_components/messages-content";
import { NotImplementedView } from "@/components/not-implemented-view";

export default function Page({ params }: { params: { channelId: string } }) {
  const channel = channels.find((channel) => channel.id === params.channelId);

  if (!channel) {
    return <div>Channel not found</div>;
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center py-2 px-3 justify-between">
        <ChannelTitle id={channel.id} isPublic={channel.isPublic} />
        <div className="flex items-center gap-2">
          <MembersIndicator members={users} />
          <StartMeet />
          <ChannelMenu />
        </div>
      </div>
      <Content
        channelId={params.channelId}
        messagesContent={<MessagesContent />}
        tasksContent={<div>Members</div>}
        filesContent={<NotImplementedView />}
      />
    </div>
  );
}
