import { User } from "@/mock/users";
import { css, cva } from "@/styled-system/css";

import { Avatar } from "@/components/avatar";

const avatarPositionRecipe = cva({
  base: {
    borderWidth: "3px",
    borderStyle: "solid",
    borderColor: "background",
    borderRadius: "md",
    position: "absolute",
  },
  variants: {
    position: {
      0: { left: "4px", zIndex: 5 },
      1: { left: "24px", zIndex: 4 },
      2: { left: "44px", zIndex: 3 },
      3: { left: "64px", zIndex: 2 },
      4: { left: "84px", zIndex: 1 },
    },
  },
});

type Props = {
  members: User[];
};

export function MembersIndicator({ members }: Props) {
  const count = members.length;
  const firstFiveMembers = members.slice(0, 5);

  return (
    <div
      className={css({
        display: "flex",
        alignItems: "center",
        height: "9",
        py: "2",
        px: "3",
        borderRadius: "md",
        gap: "4",
        position: "relative",
        pl: "32",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "border",
      })}
    >
      {firstFiveMembers.map(({ id, avatarSrc, name }, i) => (
        <div
          className={avatarPositionRecipe({
            position: i as 0 | 1 | 2 | 3 | 4,
          })}
          key={id}
        >
          <Avatar src={avatarSrc} alt={name} size={24} />
        </div>
      ))}
      <span
        className={css({
          text: "sm",
        })}
      >
        {count} members
      </span>
    </div>
  );
}
