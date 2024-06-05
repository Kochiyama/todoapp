"use client"

import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type Props = {
  type?: "button" | "submit";
  title: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  leftIcon?: ReactNode;
  isVisible?: boolean;
  className?: string;
};

export function Button({
  type = "button",
  title,
  onClick,
  disabled,
  leftIcon,
  isVisible = true,
  className,
}: Props) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={cn(
        "flex px-4 py-2 text-slate-200 rounded-xl bg-slate-800 items-center gap-2 transform transition-all md:hover:bg-slate-700",
        isVisible ? "translate-y-0 opacity-1" : "-translate-y-full opacity-0",
        disabled && "cursor-not-allowed md:hover:bg-slate-800",
        className,
      )}
    >
      {leftIcon} {title}
    </button>
  );
}
