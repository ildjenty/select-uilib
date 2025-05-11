"use client";

import { useState } from "react";
import { SendHorizonalIcon } from "lucide-react";

import { cn } from "@/utils/class-name";
import { Button } from "@/components/button";
import { TextMenu } from "./text-menu";
import { AttachMenu } from "./attache-menu";

export function MessageForm() {
  const [focus, setFocus] = useState(false);

  return (
    <div
      className={cn(
        "p-2.5 rounded-md border border-border",
        "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
      )}
      tabIndex={0}
    >
      <TextMenu focus={focus} />
      <textarea
        className="w-full p-2 resize-none focus-visible:outline-none focus-visible:ring-0"
        rows={1}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      />
      <div className="flex items-center justify-between">
        <AttachMenu />
        <Button mode="primary" size="sm">
          <SendHorizonalIcon size={14} />
          Send
        </Button>
      </div>
    </div>
  );
}
