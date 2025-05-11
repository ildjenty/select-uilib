import { HeadsetIcon } from "lucide-react";
import { Button } from "@/components/button";

export function StartMeet() {
  return (
    <Button>
      <HeadsetIcon size={16} className="mr-2" />
      Start meet
    </Button>
  );
}
