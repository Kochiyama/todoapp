import { TaskStatus } from "@/common/enums";
import type { ITask } from "@/common/interfaces";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function sortTasksByStatus(taskA: ITask, taskB: ITask) {
  if (taskA.status === taskB.status) return 0;
  if (taskA.status === TaskStatus.Done) return 1;
  return -1;
}
