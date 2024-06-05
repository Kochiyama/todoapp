import { TaskCategory } from "@/common/enums";
import { BriefcaseBusiness, CircleUserRound, Inbox } from "lucide-react";

type Props = {
	category: TaskCategory;
};

export function CategoryIcon({ category }: Props) {
	switch (category) {
		case TaskCategory.General:
			return <Inbox className="text-slate-200" size={16} />;

		case TaskCategory.Work:
			return <BriefcaseBusiness className="text-amber-400" size={16} />;

		case TaskCategory.Personal:
			return <CircleUserRound className="text-sky-400" size={16} />;
	}
}
