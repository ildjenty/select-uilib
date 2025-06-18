import { SearchIcon } from "lucide-react";
import { css } from "@/styled-system/css";

export function SearchTask() {
  return (
    <div className={css({ position: "relative" })}>
      <input
        type="text"
        placeholder="Search"
        className={css({
          borderWidth: "1px",
          borderStyle: "solid",
          borderColor: "border",
          borderRadius: "md",
          pl: "2",
          pr: "7",
          py: "2",
          h: "9",
          w: "64",
        })}
      />
      <SearchIcon
        size={16}
        className={css({
          position: "absolute",
          top: "50%",
          right: "2",
          transform: "translateY(-50%)",
        })}
      />
    </div>
  );
}