import {
  EllipsisVerticalIcon,
  SquareArrowOutUpRightIcon,
  StarIcon,
  SettingsIcon,
  BellIcon,
} from "lucide-react";

import { Button } from "@/components/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/dropdown-menu";

export function ChannelMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="icon" mode="default">
          <EllipsisVerticalIcon size={18} />
        </Button>
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
