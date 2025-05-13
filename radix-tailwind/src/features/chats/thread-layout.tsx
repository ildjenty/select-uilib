import { XIcon, SquareArrowOutUpRightIcon } from "lucide-react";

import { Button } from "@/components/button";

export function ThreadLayout({
  closeThread,
  children,
}: {
  closeThread: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between p-3 border-b border-border">
        <h2 className="text-lg font-semibold">Thread</h2>
        <div className="flex items-center gap-2">
          <Button size="icon">
            <SquareArrowOutUpRightIcon size={14} />
          </Button>
          <Button size="icon" onClick={closeThread}>
            <XIcon size={14} />
          </Button>
        </div>
      </div>
      <div className="min-h-0 grow-1 p-6 overflow-scroll space-y-6">
        {children}
      </div>
    </div>
  );
}
