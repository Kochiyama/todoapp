import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type Props = {
  id?: string;
  type?: "button" | "submit";
  variant?: "primary" | "ghost";
  onClick?: () => void;
  children: ReactNode;
  isVisible?: boolean;
  className?: string;
  isDisabled?: boolean;
};

export function IconButton({
  id,
  type = "button",
  variant = "primary",
  onClick,
  children,
  isVisible = true,
  className,
  isDisabled,
}: Props) {
  return (
    <button
      id={id}
      type={type}
      onClick={onClick}
      className={cn(
        "flex p-2 text-slate-200 rounded-xl bg-slate-800 justify-center items-center gap-2 transform transition-all",
        variant === "primary"
          ? "bg-teal-400 text-slate-800 md:hover:bg-teal-500"
          : "text-slate-200 hover:bg-slate-700",
        isVisible ? "translate-y-0 opacity-1" : "-translate-y-full opacity-0",
        isDisabled ? "brightness-50 md:hover:bg-teal-400 cursor-not-allowed" : "brightness-100",
        className,
      )}
    >
      {children}
    </button>
  );
}
