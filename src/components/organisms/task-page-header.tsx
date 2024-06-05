"use client";

import { CategoryIcon, IconButton, Text } from "@atoms";
import { Menu } from "lucide-react";
import { ClearTasksButton } from "@organisms";
import { useDrawer, useTasks } from "@/contexts";

export function TaskPageHeader() {
	const { category } = useTasks();
	const { onOpen } = useDrawer();

	return (
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
	);
}
