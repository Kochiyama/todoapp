"use client";

import { useTasks } from "@/contexts";
import { TaskCard } from "@organisms";
import { Text } from "@atoms";
import { sortTasksByStatus } from "@/lib/utils";

export function TasksList() {
  const { tasks } = useTasks();

  return (
    <div className="bg-slate-800 rounded-xl p-4 gap-4 flex flex-col flex-1 overflow-y-auto">
      {tasks.toSorted(sortTasksByStatus).map((task) => (
        <TaskCard key={task.uuid} task={task} />
      ))}

      {tasks.length === 0 && (
        <Text variant="ghost">No tasks on this list.</Text>
      )}
    </div>
  );
}
