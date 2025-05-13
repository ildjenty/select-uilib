import { AtSignIcon, PaperclipIcon, VideoIcon, MicIcon } from "lucide-react";

import { MenuItem } from "./menu-item";

const items = [
  {
    action: "mention",
    icon: <AtSignIcon size={16} />,
  },
  {
    action: "attach",
    icon: <PaperclipIcon size={16} />,
  },
  {
    action: "video",
    icon: <VideoIcon size={16} />,
  },
  {
    action: "audio",
    icon: <MicIcon size={16} />,
  },
];

export function AttachMenu() {
  return (
    <div className="flex gap-1">
      {items.map((item) => (
        <MenuItem focus key={item.action}>
          {item.icon}
        </MenuItem>
      ))}
    </div>
  );
}
