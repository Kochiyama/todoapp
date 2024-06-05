import { DrawerProvider, TasksProvider } from "@/contexts";
import { NewTaskForm, TasksList, TaskPageHeader } from "@organisms";
import { Suspense } from "react";

export default function Home() {
	return (
		<DrawerProvider>
			<TasksProvider>
				<div className="p-8 flex flex-col gap-4">
					<Suspense>
						<TaskPageHeader />
					</Suspense>

					<TasksList />

					<NewTaskForm pageTitle="Inbox" />
				</div>
			</TasksProvider>
		</DrawerProvider>
	);
}
