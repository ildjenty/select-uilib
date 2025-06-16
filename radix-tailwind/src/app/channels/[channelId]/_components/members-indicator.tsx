import { User } from "@/mock/users";

import { Avatar } from "@/components/avatar";

type Props = {
  members: User[];
};

export function MembersIndicator({ members }: Props) {
  const count = members.length;
  const firstThreeMembers = members.slice(0, 5);
  const posClasses = [
    "left-[4px] z-[5]",
    "left-[24px] z-[4]",
    "left-[44px] z-[3]",
    "left-[64px] z-[2]",
    "left-[84px] z-[1]",
  ];

  return (
    <div className="flex items-center h-9 py-2 px-3 rounded-md gap-4 relative pl-32 border border-border">
      {firstThreeMembers.map(({ id, avatarSrc, name }, i) => (
        <div
          className={`border-3 border-background rounded-md absolute ${posClasses[i]}`}
          key={id}
        >
          <Avatar src={avatarSrc} alt={name} size={24} />
        </div>
      ))}
      <span className="text-sm leading-4">{count} members</span>
    </div>
  );
}
