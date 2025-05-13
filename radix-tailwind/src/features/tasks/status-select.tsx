import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/select";
import { cn } from "@/utils/class-name";
import { Status, statuses } from "@/mock/tasks";

const colors = {
  todo: {
    base: "text-destructive bg-destructive/10",
    mod: "focus:bg-destructive/20 data-[state=active]:bg-destructive/20",
  },
  progress: {
    base: "text-warning bg-warning/10",
    mod: "focus:bg-warning/20 data-[state=active]:bg-warning/20",
  },
  review: {
    base: "text-primary bg-primary/10",
    mod: "focus:bg-primary/20 data-[state=active]:bg-primary/20",
  },
  done: {
    base: "text-success bg-success/10",
    mod: "focus:bg-success/20 data-[state=active]:bg-success/20",
  },
  closed: {
    base: "text-muted bg-muted/10",
    mod: "focus:bg-muted/20 data-[state=active]:bg-muted/20",
  },
  rejected: {
    base: "text-muted bg-muted/10",
    mod: "focus:bg-muted/20 data-[state=active]:bg-muted/20",
  },
};

export function StatusSelect({
  value,
  className,
}: {
  value?: Status;
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
        <SelectValue placeholder="Select status" />
      </SelectTrigger>
      <SelectContent className="-translate-x-1">
        {statuses.map((status) => (
          <SelectItem
            key={status}
            value={status}
            className={cn(
              ...Object.values(colors[status]),
              "h-7 w-24 py-1 px-3 rounded-full font-semibold text-xs [&:not(:first-child)]:mt-1"
            )}
          >
            {status}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
