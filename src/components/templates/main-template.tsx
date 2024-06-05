import type { ReactNode } from "react";
import { Drawer, Sidebar } from "@organisms";

type Props = {
	children: ReactNode;
};

export function MainTemplate({ children }: Props) {
	return (
		<main className="h-screen bg-slate-900 grid gri-cols-1 md:grid-cols-desktop-layout grid-rows-1">
      <Sidebar className="hidden md:flex" />
      <Drawer />

			{children}
		</main>
	);
}
