"use client";

import { CategoryIcon, Text } from "@atoms";
import type { TaskCategory } from "@enums";
import { cn } from "@/lib/utils";
import { useTasks } from "@/contexts";

type Props = {
	category: TaskCategory;
};

export function CategorySelectorButton({ category }: Props) {
	const { category: currentCategory, setCategory } = useTasks();
	const isActive = currentCategory === category;

	function handleClick() {
		setCategory(category);
	}

	return (
		<button
			type="button"
			onClick={handleClick}
			className="flex items-center gap-2 text-start px-8 py-4 rounded-lg transition-all hover:bg-slate-700"
		>
			<CategoryIcon category={category} />

			<Text size="sm" className="flex-1">
				{category}
			</Text>

			<div
				className={cn(
					"w-2 h-full rounded-lg bg-teal-400 transition-all transform",
					isActive ? "translate-x-0 opacity-1" : "translate-x-full opacity-0",
				)}
			/>
		</button>
	);
}
