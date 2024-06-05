"use client";

import { useTasks } from "@/contexts";
import { cn } from "@/lib/utils";
import { Button, IconButton } from "@atoms";
import { TaskStatus } from "@enums";
import type { ITask } from "@interfaces";
import { Square, SquareCheck, Trash2 } from "lucide-react";

type Props = {
  task: ITask;
};

export function TaskCard({ task }: Props) {
  const { updateTask, removeTask } = useTasks();

  const isDone = task.status === TaskStatus.Done;

  function onToggleTaskStatus() {
    updateTask(task.uuid, {
      status: isDone ? TaskStatus.NotStarted : TaskStatus.Done,
    });
  }

  function onRemove() {
    removeTask(task.uuid);
  }

  return (
    <div
      className={cn("flex gap-2 center", isDone ? "opacity-50" : "opacity-1")}
    >
      <Button
        title={task.title}
        onClick={onToggleTaskStatus}
        leftIcon={isDone ? <SquareCheck className="text-teal-400" size={24} /> : <Square size={24} />}
        className="flex-1"
      />

      <IconButton variant="ghost" onClick={onRemove}>
        <Trash2 className="text-red-400" size={24} />
      </IconButton>
    </div>
  );
}
