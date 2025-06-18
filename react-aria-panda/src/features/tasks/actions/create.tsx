import { PlusIcon } from "lucide-react";

import { Button } from "@/components/button";

export function CreateTask({ className }: { className?: string }) {
  return (
    <Button className={className}>
      <PlusIcon size={16} />
      New Task
    </Button>
  );
}