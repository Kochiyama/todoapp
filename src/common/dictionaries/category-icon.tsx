import type { ReactNode } from "react";
import type { TaskCategory } from "@enums";
import { BriefcaseBusiness, CircleUserRound, Inbox } from "lucide-react";

export const CategoryIcon: Record<TaskCategory, ReactNode> = {
  General: <Inbox className="text-slate-200" />,
  Work: <BriefcaseBusiness className="text-amber-400" />,
  Personal: <CircleUserRound className="text-sky-400" />
}
