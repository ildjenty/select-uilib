import { ListFilterIcon, ConstructionIcon } from "lucide-react";
import { css } from "@/styled-system/css";
import { hstack } from "@/styled-system/patterns";

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
      <PopoverContent className={hstack({ justifyContent: "center", gap: "2" })}>
        <ConstructionIcon size={16} />
        <p className={css({ fontWeight: "semibold" })}>
          Sorry, This content is not implemented.
        </p>
      </PopoverContent>
    </Popover>
  );
}