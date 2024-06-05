import type { TaskStatus } from "@enums";
import type { TaskCategory } from "../enums/task-category";

export interface ITask {
  uuid: string;
  status: TaskStatus;
  title: string;
  category: TaskCategory;
  createdAt: Date;
}
