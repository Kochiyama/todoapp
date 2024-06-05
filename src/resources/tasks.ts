import { TaskCategory, TaskStatus } from "@enums";
import { ResourceError } from "@exceptions";
import type { ITask } from "@interfaces";
import { v4 } from "uuid";
import { get, set } from "./local-storage";

const TASKS_ITEM_ID = "@tasksapp-tasks";

export type CreateTaskData = {
  title: string;
  category?: TaskCategory;
};

export function createTask({
  title,
  category,
}: CreateTaskData): ITask | ResourceError {
  const newTask: ITask = {
    uuid: v4(),
    title,
    category: category ?? TaskCategory.General,
    status: TaskStatus.NotStarted,
    createdAt: new Date(),
  };

  const tasks = get<ITask[]>(TASKS_ITEM_ID);

  if (!tasks) {
    set(TASKS_ITEM_ID, [newTask]);
  } else {
    set(TASKS_ITEM_ID, [...tasks, newTask]);
  }

  return newTask;
}

export type ListTasksFilters = {
  category: TaskCategory;
  status?: TaskStatus;
};

export function listTasks(filters: ListTasksFilters): ITask[] {
  const items = get<ITask[]>(TASKS_ITEM_ID);

  if (!items) return [];

  return items.filter((item) => {
    if (item.category !== filters.category) return false;
    if (filters.status && item.status !== filters.status) return false;
    return true;
  });
}

export type UpdateTaskData = {
  title?: string;
  status?: TaskStatus;
  category?: TaskCategory;
};

export function updateTask(
  uuid: string,
  data: UpdateTaskData,
): ITask | ResourceError {
  const items = get<ITask[]>(TASKS_ITEM_ID);

  if (!items) {
    return new ResourceError("There is no tasks registered.");
  }

  const taskIndex = items.findIndex((item) => item.uuid === uuid);

  if (taskIndex < 0) {
    return new ResourceError("Task not found.");
  }

  items[taskIndex] = {
    ...items[taskIndex],
    ...data,
  };

  set(TASKS_ITEM_ID, items);

  return items[taskIndex];
}

export function removeTask(uuid: string): ITask | ResourceError {
  const items = get<ITask[]>(TASKS_ITEM_ID);

  if (!items) {
    return new ResourceError("There is no tasks registered.");
  }

  const taskIndex = items.findIndex((item) => item.uuid === uuid);

  if (taskIndex < 0) {
    return new ResourceError("Task not found.");
  }

  const task = {
    ...items[taskIndex],
  };

  items.splice(taskIndex, 1);

  set(TASKS_ITEM_ID, items);

  return task;
}
