import { cn } from "@/utils/class-name";

export function BaseTaskRow({
  children,
  className,
}: React.PropsWithChildren<{ className?: string }>) {
  return (
    <div
      className={cn(
        className,
        "min-w-full grid grid-cols-[25rem_12rem_8rem_8rem_8rem_8rem_20rem]"
      )}
    >
      {children}
    </div>
  );
}
