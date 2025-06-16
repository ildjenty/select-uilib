import { HeadsetIcon } from "lucide-react";
import { css } from "@/styled-system/css";
import { Button } from "@/components/button";

export function StartMeet() {
  return (
    <Button>
      <HeadsetIcon size={16} className={css({ mr: "2" })} />
      Start meet
    </Button>
  );
}