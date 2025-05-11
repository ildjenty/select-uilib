import { Button } from "@/components/button";
import { Input } from "@/components/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectItem,
  SelectContent,
} from "@/components/select";

export default function Page() {
  return (
    <div className="flex gap-2">
      <Button>Default</Button>
      <div>
        <Input placeholder="Input" />
      </div>
      <div>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">Item 1</SelectItem>
            <SelectItem value="2">Item 2</SelectItem>
            <SelectItem value="3">Item 3</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
