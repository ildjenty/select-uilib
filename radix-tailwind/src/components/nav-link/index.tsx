"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/utils/class-name";

const activeCn = "text-primary bg-active";
const inactiveCn = "text-foreground hover:bg-accent";

export function NavLink({
  href,
  className,
  children,
  ...props
}: React.ComponentProps<typeof Link>) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        className,
        "flex items-center gap-2 rounded-md p-1.5 px-2 transition-all font-semibold text-sm",
        isActive ? activeCn : inactiveCn
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
