type Props = {
  actions: React.ReactNode;
  list: React.ReactNode;
};

export function TasksLayout({ actions, list }: Props) {
  return (
    <div className="h-full w-full p-3 flex flex-col">
      <div className="flex items-center gap-2">{actions}</div>
      <div className="min-h-0 grow-1 w-full mt-3 border-t border-border">
        {list}
      </div>
    </div>
  );
}
