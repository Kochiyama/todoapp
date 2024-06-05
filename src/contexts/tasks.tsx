"use client";

import {
	type CreateTaskData,
	type UpdateTaskData,
	createTask,
	listTasks,
	removeTask,
	updateTask,
} from "@/resources";
import { TaskCategory, TaskStatus } from "@enums";
import { ResourceError } from "@exceptions";
import type { ITask } from "@interfaces";
import { useSearchParams } from "next/navigation";
import {
	type ReactNode,
	createContext,
	useContext,
	useEffect,
	useState,
} from "react";
import { toast } from "sonner";

type ContextData = {
	tasks: ITask[];
	createTask: (data: CreateTaskData) => void;
	updateTask: (uuid: string, data: UpdateTaskData) => void;
	removeTask: (uuid: string) => void;
	clearDoneTasks: () => void;
};

const context = createContext({} as ContextData);

export function TasksProvider({ children }: { children: ReactNode }) {
	const [tasks, setTasks] = useState<ITask[]>([]);

	const searchParams = useSearchParams();
	const category =
		(searchParams.get("category") as TaskCategory) ?? TaskCategory.General;

	function loadTasks() {
		if (!category) return;

		setTasks(listTasks({ category }));
	}

	function create(data: CreateTaskData) {
		if (!category) return;

		const response = createTask({
			title: data.title,
      category
		});

		if (response instanceof ResourceError) {
			toast.error(response.message);
			return;
		}

		loadTasks();
	}

	function update(uuid: string, data: UpdateTaskData) {
		const response = updateTask(uuid, data);

		if (response instanceof ResourceError) {
			toast.error(response.message);
			return;
		}

		loadTasks();
	}

	function remove(uuid: string) {
		const response = removeTask(uuid);

		if (response instanceof ResourceError) {
			toast.error(response.message);
			return;
		}

		loadTasks();
	}

	function clearDoneTasks() {
		tasks.map((task) => {
			if (task.status === TaskStatus.Done) remove(task.uuid);
		});
	}

	useEffect(() => {
		loadTasks();
	}, [category]);

	return (
		<context.Provider
			value={{
				tasks,
				createTask: create,
				updateTask: update,
				removeTask: remove,
				clearDoneTasks,
			}}
		>
			{children}
		</context.Provider>
	);
}

export const useTasks = () => useContext(context);
