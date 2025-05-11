type Props = {
  repliesCount: number;
};

export function ThreadSeparator({ repliesCount }: Props) {
  return (
    <div className="flex items-center gap-1">
      <span className="text-muted">{repliesCount} replies</span>
      <span className="h-[1px] bg-border flex-1" />
    </div>
  );
}
