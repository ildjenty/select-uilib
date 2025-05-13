import { Avatar } from "@/components/avatar";
import { cn } from "@/utils/class-name";
import { Task } from "@/mock/tasks";
import { User } from "@/mock/users";
import { PrioritySelect } from "../priority-select";
import { StatusSelect } from "../status-select";
import { TagTip } from "../tag-tip";

import { BaseTaskRow } from "./base-row";

type Data = Omit<Task, "assignees"> & {
  assignees: User[];
};

function Cell({
  className,
  children,
}: React.PropsWithChildren<{ className?: string }>) {
  return (
    <div
      className={cn(
        className,
        "flex items-center gap-1 p-2 text-sm whitespace-nowrap text-ellipsis border-b border-border"
      )}
    >
      {children}
    </div>
  );
}

function AssigneesCell({ assignees }: { assignees: User[] }) {
  if (assignees.length === 1) {
    const user = assignees[0];
    return (
      <Cell>
        <Avatar src={user.avatarSrc} alt={user.name} className="shadow-md" />
        {user.name}
      </Cell>
    );
  }

  return (
    <Cell>
      {assignees.map((user) => (
        <Avatar
          key={user.id}
          src={user.avatarSrc}
          alt={user.name}
          className="shadow-md"
        />
      ))}
    </Cell>
  );
}

type Props = {
  task: Data;
};

export function TaskRow({ task }: Props) {
  return (
    <BaseTaskRow>
      <Cell className="font-medium">{task.title}</Cell>
      <AssigneesCell assignees={task.assignees} />
      <Cell>{task.startDate || "-"}</Cell>
      <Cell>{task.dueDate || "-"}</Cell>
      <Cell>
        <PrioritySelect value={task.priority} />
      </Cell>
      <Cell>
        <StatusSelect value={task.status} />
      </Cell>
      <Cell>
        {(task.tags || []).map((tag) => (
          <TagTip key={tag} value={tag} />
        ))}
      </Cell>
    </BaseTaskRow>
  );
}
