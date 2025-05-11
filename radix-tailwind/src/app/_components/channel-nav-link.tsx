import { RssIcon, LockIcon } from "lucide-react";

import { Channel } from "@/mock/channels";
import { NavLink } from "@/components/nav-link";

export function ChannelNavLink({ channel }: { channel: Channel }) {
  const Icon = channel.isPublic ? RssIcon : LockIcon;
  return (
    <NavLink href={`/channels/${channel.id}`} className="text-nowrap">
      <Icon size={16} />
      {channel.id}
    </NavLink>
  );
}
