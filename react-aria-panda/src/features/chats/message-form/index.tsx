"use client";

import { useState, useRef } from "react";
import { SendHorizonalIcon } from "lucide-react";

import { css } from "@/styled-system/css";
import { hstack } from "@/styled-system/patterns";
import { Button } from "@/components/button";
import { TextMenu } from "./text-menu";
import { AttachMenu } from "./attache-menu";

export function MessageForm() {
  const [focus, setFocus] = useState(false);
  const ref = useRef<HTMLTextAreaElement>(null);
  const focusHandler = () => {
    ref.current?.focus();
    setFocus(true);
  };

  return (
    <div
      className={css({
        p: "2.5",
        borderRadius: "md",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "border",
        boxShadow: "md",
        _focusVisible: {
          outline: "none",
          ringWidth: "1px",
          ringColor: "primary",
        },
      })}
      tabIndex={0}
      onClick={focusHandler}
      onFocus={focusHandler}
    >
      <TextMenu focus={focus} />
      <textarea
        className={css({
          w: "full",
          p: "2",
          resize: "none",
          _focusVisible: {
            outline: "none",
            ringWidth: "0",
          },
        })}
        rows={1}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        ref={ref}
      />
      <div className={hstack({ justifyContent: "space-between" })}>
        <AttachMenu />
        <Button mode="primary" size="sm">
          <SendHorizonalIcon size={14} />
          Send
        </Button>
      </div>
    </div>
  );
}