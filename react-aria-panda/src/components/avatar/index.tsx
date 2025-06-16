"use client";

import { forwardRef } from "react";
import Image from "next/image";
import { cva, cx, css } from "@/styled-system/css";


const onlineIndicatorRecipe = cva({
  base: {
    position: "absolute",
    right: "-0.5",
    bottom: "-0.5",
    width: "2",
    height: "2",
    borderRadius: "full",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "border",
    boxShadow: "sm",
  },
  variants: {
    online: {
      true: {
        bg: "success",
      },
      false: {
        bg: "muted",
      },
    },
  },
});

type AvatarProps = {
  src: string;
  alt: string;
  online?: boolean;
  size?: number;
  className?: string;
};

const Avatar = forwardRef<HTMLSpanElement, AvatarProps>(
  ({ src, alt, size = 24, online, className }, ref) => {
    return (
      <span 
        ref={ref} 
        className={cx(
          css({
            position: "relative",
            borderRadius: "md",
          }), 
          className
        )}
      >
        <Image
          src={src}
          alt={alt}
          className={css({ borderRadius: "md" })}
          width={size}
          height={size}
        />
        {online !== undefined && (
          <span className={onlineIndicatorRecipe({ online })} />
        )}
      </span>
    );
  }
);

Avatar.displayName = "Avatar";

export { Avatar };
