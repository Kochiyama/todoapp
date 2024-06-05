import React, { type ReactNode } from "react";
import { cn } from "@lib/utils";

type Props = {
	size?: "sm" | "md" | "lg";
	variant?: "ghost" | "standard";
	children?: ReactNode;
	className?: string;
};

export function Text({
	size = "md",
	variant = "standard",
	children,
	className,
}: Props) {
	return (
		<h1
			className={cn(
				`text-${size}`,
				variant === "ghost" ? "text-slate-400" : "text-slate-200",
				className,
			)}
		>
			{children}
		</h1>
	);
}
