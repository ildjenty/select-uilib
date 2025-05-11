import { RssIcon, LockIcon } from "lucide-react";

type Props = {
  id: string;
  isPublic: boolean;
};

export function ChannelTitle({ id, isPublic }: Props) {
  const Icon = isPublic ? RssIcon : LockIcon;

  return (
    <h2 className="flex items-center gap-1.5 font-bold text-xl">
      <Icon size={18} strokeWidth={3} />
      {id}
    </h2>
  );
}
