import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/select";
import { css, cx, cva } from "@/styled-system/css";
import { Priority, priorities } from "@/mock/tasks";

const priorityBadge = cva({
  base: {
    h: "7",
    w: "24",
    py: "1",
    px: "3",
    border: "none",
    borderRadius: "full",
    fontWeight: "semibold",
    text: "xs",
  },
  variants: {
    priority: {
      Low: {
        color: "success",
        bg: "success/10",
        _hover: { bg: "success/20" },
        _focus: { bg: "success/20" },
        "&[data-state=active]": { bg: "success/20" },
      },
      Medium: {
        color: "warning",
        bg: "warning/10",
        _hover: { bg: "warning/20" },
        _focus: { bg: "warning/20" },
        "&[data-state=active]": { bg: "warning/20" },
      },
      High: {
        color: "destructive",
        bg: "destructive/10",
        _hover: { bg: "destructive/20" },
        _focus: { bg: "destructive/20" },
        "&[data-state=active]": { bg: "destructive/20" },
      },
    },
  },
});

export function PrioritySelect({
  value,
  className,
}: {
  value?: Priority;
  className?: string;
}) {
  return (
    <Select defaultSelectedKey={value}>
      <SelectTrigger
        className={cx(
          priorityBadge({ priority: value }),
          className
        )}
      >
        <SelectValue />
      </SelectTrigger>
      <SelectContent className={css({ translateX: "-1" })}>
        {priorities.map((priority) => (
          <SelectItem
            key={priority}
            id={priority}
            className={cx(
              priorityBadge({ priority }),
              css({ "&:not(:first-child)": { mt: "1" } })
            )}
          >
            {priority}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}