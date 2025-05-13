export function MenuItem({
  focus,
  children,
  ...props
}: React.ComponentProps<"button"> & { focus: boolean }) {
  return (
    <button
      className={`p-2 rounded-md cursor-pointer transition-colors hover:bg-accent ${
        focus ? "pointer-events-auto" : "pointer-events-none"
      }`}
      {...props}
    >
      {children}
    </button>
  );
}
