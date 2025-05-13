import { SearchIcon } from "lucide-react";

export function SearchTask() {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search"
        className="border border-border rounded-md pl-2 pr-7 py-2 h-9 w-64"
      />
      <SearchIcon
        size={16}
        className="absolute top-1/2 right-2 -translate-y-1/2"
      />
    </div>
  );
}
