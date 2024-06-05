import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type Props = {
  type?: "button" | "submit";
  variant?: "primary" | "ghost";
  onClick?: () => void;
  children: ReactNode;
  isVisible?: boolean;
  className?: string;
};

export function IconButton({
  type = "button",
  variant = "primary",
  onClick,
  children,
  isVisible = true,
  className,
}: Props) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={cn(
        "flex p-2 text-slate-200 rounded-xl bg-slate-800 justify-center items-center gap-2 transform transition-all",
        variant === "primary"
          ? "bg-teal-400 text-slate-800 md:hover:bg-teal-500"
          : "text-slate-200 hover:bg-slate-700",
        isVisible ? "translate-y-0 opacity-1" : "-translate-y-full opacity-0",
        className,
      )}
    >
      {children}
    </button>
  );
}
