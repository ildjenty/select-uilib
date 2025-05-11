import Image from "next/image";

import { cn } from "@/utils/class-name";

function OnlineIndicator({ online }: { online: boolean }) {
  const bgCn = online ? "bg-success" : "bg-muted";
  return (
    <span
      className={`absolute -right-0.5 -bottom-0.5 w-2 h-2 rounded-full border border-border shadow-sm ${bgCn}`}
    />
  );
}

type Props = {
  src: string;
  alt: string;
  online?: boolean;
  size?: number;
  className?: string;
};

export function Avatar({ src, alt, size = 24, online, className }: Props) {
  return (
    <div className={cn(className, "relative")}>
      <Image
        src={src}
        alt={alt}
        className="rounded-md"
        width={size}
        height={size}
      />
      {online !== undefined && <OnlineIndicator online={online} />}
    </div>
  );
}
