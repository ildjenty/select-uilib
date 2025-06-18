import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/select";
import { css, cx, cva } from "@/styled-system/css";
import { Status, statuses } from "@/mock/tasks";

const statusBadge = cva({
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
    status: {
      todo: {
        color: "destructive",
        bg: "destructive/10",
        _hover: { bg: "destructive/20" },
        _focus: { bg: "destructive/20" },
        "&[data-state=active]": { bg: "destructive/20" },
      },
      progress: {
        color: "warning",
        bg: "warning/10",
        _hover: { bg: "warning/20" },
        _focus: { bg: "warning/20" },
        "&[data-state=active]": { bg: "warning/20" },
      },
      review: {
        color: "primary",
        bg: "primary/10",
        _hover: { bg: "primary/20" },
        _focus: { bg: "primary/20" },
        "&[data-state=active]": { bg: "primary/20" },
      },
      done: {
        color: "success",
        bg: "success/10",
        _hover: { bg: "success/20" },
        _focus: { bg: "success/20" },
        "&[data-state=active]": { bg: "success/20" },
      },
      closed: {
        color: "muted",
        bg: "muted/10",
        _hover: { bg: "muted/20" },
        _focus: { bg: "muted/20" },
        "&[data-state=active]": { bg: "muted/20" },
      },
      rejected: {
        color: "muted",
        bg: "muted/10",
        _hover: { bg: "muted/20" },
        _focus: { bg: "muted/20" },
        "&[data-state=active]": { bg: "muted/20" },
      },
    },
  },
});

export function StatusSelect({
  value,
  className,
}: {
  value?: Status;
  className?: string;
}) {
  return (
    <Select defaultSelectedKey={value}>
      <SelectTrigger
        className={cx(
          statusBadge({ status: value }),
          className
        )}
      >
        <SelectValue />
      </SelectTrigger>
      <SelectContent className={css({ translateX: "-1" })}>
        {statuses.map((status) => (
          <SelectItem
            key={status}
            id={status}
            className={cx(
              statusBadge({ status }),
              css({ "&:not(:first-child)": { mt: "1" } })
            )}
          >
            {status}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}