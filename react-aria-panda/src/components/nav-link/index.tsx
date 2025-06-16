"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cva, cx } from "@/styled-system/css";

const navLinkRecipe = cva({
  base: {
    display: "flex",
    alignItems: "center",
    gap: "2",
    borderRadius: "md",
    py: "1.5",
    px: "2",
    transitionProperty: "all",
    transitionDuration: "fast",
    fontWeight: "semibold",
    text: "sm",
  },
  variants: {
    active: {
      true: {
        color: "primary",
        bg: "active",
      },
      false: {
        color: "foreground",
        _hover: {
          bg: "accent",
        },
      },
    },
  },
});

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
      className={cx(navLinkRecipe({ active: isActive }), className)}
      {...props}
    >
      {children}
    </Link>
  );
}
