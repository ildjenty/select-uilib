import { ListFilterIcon, ConstructionIcon } from "lucide-react";

import { Button } from "@/components/button";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/popover";

export function FilterTask({ className }: { className?: string }) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className={className}>
          <ListFilterIcon size={16} />
          Filter
        </Button>
      </PopoverTrigger>
      <PopoverContent className="flex items-center justify-center gap-2">
        <ConstructionIcon size={16} />
        <p className="semibold">Sorry, This content is not implemented.</p>
      </PopoverContent>
    </Popover>
  );
}
