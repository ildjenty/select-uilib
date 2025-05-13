import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/select";
import { cn } from "@/utils/class-name";
import { Priority, priorities } from "@/mock/tasks";

const colors = {
  Low: {
    base: "text-success bg-success/10",
    mod: "focus:bg-success/20 data-[state=active]:bg-success/20",
  },
  Medium: {
    base: "text-warning bg-warning/10",
    mod: "focus:bg-warning/20 data-[state=active]:bg-warning/20",
  },
  High: {
    base: "text-destructive bg-destructive/10",
    mod: "focus:bg-destructive/20 data-[state=active]:bg-destructive/20",
  },
};

export function PrioritySelect({
  value,
  className,
}: {
  value?: Priority;
  className?: string;
}) {
  return (
    <Select value={value}>
      <SelectTrigger
        className={cn(
          className,
          "h-7 w-24 py-1 px-3 border-none rounded-full font-semibold text-xs",
          value && colors[value].base
        )}
      >
        <SelectValue placeholder="Select priority" />
      </SelectTrigger>
      <SelectContent className="-translate-x-1">
        {priorities.map((priority) => (
          <SelectItem
            key={priority}
            value={priority}
            className={cn(
              ...Object.values(colors[priority]),
              "h-7 w-24 py-1 px-3 rounded-full font-semibold text-xs [&:not(:first-child)]:mt-1"
            )}
          >
            {priority}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
