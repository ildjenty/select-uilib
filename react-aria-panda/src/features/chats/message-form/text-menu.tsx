import {
  BoldIcon,
  ItalicIcon,
  StrikethroughIcon,
  ListIcon,
  ListOrderedIcon,
} from "lucide-react";

import { css } from "@/styled-system/css";
import { MenuItem } from "./menu-item";

const items = [
  {
    action: "bold",
    icon: <BoldIcon size={16} />,
  },
  {
    action: "italic",
    icon: <ItalicIcon size={16} />,
  },
  {
    action: "strikethrough",
    icon: <StrikethroughIcon size={16} />,
  },
  {
    action: "list",
    icon: <ListIcon size={16} />,
  },
  {
    action: "list-ordered",
    icon: <ListOrderedIcon size={16} />,
  },
];

type Props = {
  focus: boolean;
};

export function TextMenu({ focus }: Props) {
  return (
    <div
      className={css({
        display: "flex",
        gap: "1",
        filter: focus ? "brightness(1)" : "brightness(0.5)",
      })}
    >
      {items.map((item) => (
        <MenuItem focus={focus} key={item.action}>
          {item.icon}
        </MenuItem>
      ))}
    </div>
  );
}
