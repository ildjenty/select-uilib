import { cn } from "@/utils/class-name";

export function TagTip({
  value,
  className,
}: {
  value: string;
  className?: string;
}) {
  return (
    <span
      className={cn(
        className,
        "p-0.5 px-2 text-xs text-primary font-medium rounded-full bg-active"
      )}
    >
      {value}
    </span>
  );
}
