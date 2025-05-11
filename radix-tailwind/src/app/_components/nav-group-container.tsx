type Props = React.PropsWithChildren<{
  title: string;
  icon: React.ReactNode;
}>;

export function NavGroupContainer({ title, icon, children }: Props) {
  return (
    <div>
      <div className="flex items-center gap-2 font-semibold text-primary font-sm">
        {icon}
        {title}
      </div>
      <div className="pl-1 mt-2">{children}</div>
    </div>
  );
}
