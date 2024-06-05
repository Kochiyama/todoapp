"use client";

import Link from "next/link";
import { CategoryIcon, Text } from "@atoms";
import type { TaskCategory } from "@enums";
import { cn } from "@/lib/utils";
import { useTasks } from "@/contexts";

type Props = {
	category: TaskCategory;
};

export function NavigationLink({ category }: Props) {
	const { category: currentCategory } = useTasks();
	const isActive = currentCategory === category;

	return (
		<Link
			href={`/?category=${category}`}
			className="flex px-4 py-2 gap-2 rounded-xl items-center hover:bg-slate-700 transition-all"
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
		</Link>
	);
}
