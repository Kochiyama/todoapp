"use client";

import { TaskStatus } from "@enums";
import { useTasks } from "@/contexts/tasks";
import { Button } from "@atoms";
import { Trash2 } from "lucide-react";

export function ClearTasksButton() {
  const { tasks, clearDoneTasks } = useTasks();

  const isClearButtonVisible =
    tasks.findIndex((task) => task.status === TaskStatus.Done) >= 0;

  return (
    <Button
      title="Clear"
      onClick={clearDoneTasks}
      leftIcon={<Trash2 className="text-red-400" size={16} />}
      isVisible={isClearButtonVisible}
    />
  );
}
