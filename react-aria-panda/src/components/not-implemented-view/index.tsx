import { ConstructionIcon } from "lucide-react";
import { css } from "@/styled-system/css";

export function NotImplementedView() {
  return (
    <div
      className={css({
        display: "flex",
        flexDirection: "column",
        height: "full",
        width: "full",
        alignItems: "center",
        justifyContent: "center",
        pb: "20",
      })}
    >
      <ConstructionIcon size={64} />
      <p
        className={css({
          text: "3xl",
          fontWeight: "bold",
        })}
      >
        Sorry, This content is not implemented.
      </p>
    </div>
  );
}