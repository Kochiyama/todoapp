"use client";

import { cn } from "@/lib/utils";
import { Sidebar } from "./sidebar";
import { useDrawer } from "@/contexts";
import { useEffect, useState } from "react";

export function Drawer() {
	const [shouldRender, setShouldRender] = useState(false);

	const { isOpen, onClose } = useDrawer();

	useEffect(() => {
		if (isOpen) {
			setShouldRender(true);
		} else {
			setTimeout(() => {
				setShouldRender(false);
			}, 250);
		}
	}, [isOpen]);

	return (
		<div
			className={cn(
				"absolute z-20 top-0 left-0 transform transition-all",
				isOpen ? "transform-x-0 opacity-1" : "transform-x-full opacity-0",
			)}
		>
			{shouldRender && <Sidebar className="absolute z-20 top-0 left-0" />}

			<div
				onClick={onClose}
				className={cn(
					"bg-slate-900/30 backdrop-blur-sm absolute z-10 w-screen h-screen top-0 left-0",
					isOpen ? "flex" : "hidden",
				)}
			/>
		</div>
	);
}
