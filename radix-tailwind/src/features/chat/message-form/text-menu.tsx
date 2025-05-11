import {
  BoldIcon,
  ItalicIcon,
  StrikethroughIcon,
  ListIcon,
  ListOrderedIcon,
} from "lucide-react";

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
    <div className={`flex gap-1 ${focus ? "" : "brightness-75"}`}>
      {items.map((item) => (
        <MenuItem focus={focus} key={item.action}>
          {item.icon}
        </MenuItem>
      ))}
    </div>
  );
}
