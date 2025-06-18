import { TasksLayout } from "@/features/tasks";
import { SearchTask, CreateTask, FilterTask } from "@/features/tasks/actions";
import { TaskTableLayout, TaskRow } from "@/features/tasks/table";
import { users } from "@/mock/users";
import { tasks } from "@/mock/tasks";

const data = tasks.map(({ assignees, ...task }) => ({
  ...task,
  assignees: assignees.map(
    (userId) => users.find((user) => user.id === userId)!
  ),
}));

export function TasksContent() {
  return (
    <TasksLayout
      actions={
        <>
          <SearchTask />
          <FilterTask className="ml-auto" />
          <CreateTask />
        </>
      }
      list={
        <TaskTableLayout>
          {data.map((task) => (
            <TaskRow key={task.id} task={task} />
          ))}
        </TaskTableLayout>
      }
    />
  );
}