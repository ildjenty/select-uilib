import { XIcon, SquareArrowOutUpRightIcon } from "lucide-react";
import { css } from "@/styled-system/css";
import { vstack, hstack } from "@/styled-system/patterns";

import { Button } from "@/components/button";

export function ThreadLayout({
  closeThread,
  children,
}: {
  closeThread: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className={vstack({ h: "full", gap: "0" })}>
      <div
        className={hstack({
          w: "full",
          justifyContent: "space-between",
          p: "3",
          borderBottom: "1px solid",
          borderColor: "border",
        })}
      >
        <h2 className={css({ text: "lg", fontWeight: "semibold" })}>Thread</h2>
        <div className={hstack({ gap: "2" })}>
          <Button size="icon">
            <SquareArrowOutUpRightIcon size={14} />
          </Button>
          <Button size="icon" onClick={closeThread}>
            <XIcon size={14} />
          </Button>
        </div>
      </div>
      <div
        className={css({
          minH: "0",
          flexGrow: "1",
          p: "6",
          overflow: "scroll",
          display: "flex",
          flexDirection: "column",
          gap: "6",
        })}
      >
        {children}
      </div>
    </div>
  );
}
