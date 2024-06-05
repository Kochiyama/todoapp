"use client";

import { NavigationLink } from "@molecules";
import { TaskCategory } from "@enums";
import { Logo } from "@atoms";
import { cn } from "@/lib/utils";

export function Sidebar({ className }: { className?: string }) {
	return (
		<div
			className={cn(
				"bg-slate-800 p-8 flex-col items-center gap-16 flex h-screen",
				className,
			)}
		>
			<Logo />

			<div className="flex flex-col gap-4 flex-1 w-full">
				{Object.values(TaskCategory).map((category) => (
					<NavigationLink key={category} category={category} />
				))}
			</div>
		</div>
	);
}
