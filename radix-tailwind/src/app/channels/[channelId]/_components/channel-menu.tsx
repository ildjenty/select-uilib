import {
  EllipsisVerticalIcon,
  SquareArrowOutUpRightIcon,
  StarIcon,
  SettingsIcon,
  BellIcon,
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/dropdown-menu";

export function ChannelMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="p-2 hover:bg-accent cursor-pointer rounded-md border border-border">
        <EllipsisVerticalIcon size={18} />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem>
          <SquareArrowOutUpRightIcon size={16} />
          Open as new tab
        </DropdownMenuItem>
        <DropdownMenuItem>
          <StarIcon size={16} />
          Add to favorites
        </DropdownMenuItem>
        <DropdownMenuItem>
          <SettingsIcon size={16} />
          Channel settings
        </DropdownMenuItem>
        <DropdownMenuItem>
          <BellIcon size={16} />
          Notification
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
