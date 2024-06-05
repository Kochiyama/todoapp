"use client";

import { TaskCategory } from "@/common/enums";
import { useDrawer } from "@/contexts";
import { CategoryIcon, IconButton, Text } from "@atoms";
import { ClearTasksButton, NewTaskForm, TasksList } from "@organisms";
import { Menu } from "lucide-react";
import { useSearchParams } from "next/navigation";

export default function Home() {
	const searchParams = useSearchParams();

	const { onOpen } = useDrawer();

	const category =
		(searchParams.get("category") as TaskCategory) ?? TaskCategory.General;

	return (
		<div className="p-8 flex flex-col gap-4">
			<div className="flex items-center gap-2">
				<IconButton variant="ghost" onClick={onOpen} className="flex md:hidden">
					<Menu />
				</IconButton>

				<CategoryIcon category={category} />

				<Text size="lg" className="flex-1 py-1">
					{category}
				</Text>

				<ClearTasksButton />
			</div>

			<TasksList />

			<NewTaskForm pageTitle="Inbox" />
		</div>
	);
}
