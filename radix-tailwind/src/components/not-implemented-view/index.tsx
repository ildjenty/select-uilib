import { ConstructionIcon } from "lucide-react";

export function NotImplementedView() {
  return (
    <div className="flex flex-col h-full w-full items-center justify-center pb-20">
      <ConstructionIcon size={64} />
      <p className="text-3xl font-bold">
        Sorry, This content is not implemented.
      </p>
    </div>
  );
}
