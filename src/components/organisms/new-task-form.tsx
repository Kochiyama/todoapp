"use client";

import { useTasks } from "@/contexts";
import { Input, IconButton } from "@atoms";
import { CircleFadingPlus } from "lucide-react";
import { type FormEvent, useState } from "react";

type Props = {
  pageTitle: string;
};

export function NewTaskForm({ pageTitle }: Props) {
  const [title, setTitle] = useState("");

  const { createTask } = useTasks();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    createTask({
      title,
    });
    setTitle("");
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 items-center">
      <Input
        value={title}
        onChange={setTitle}
        className="flex-1"
        placeholder={`New task on ${pageTitle}`}
      />

      <IconButton type="submit" className="w-12 h-12">
        <CircleFadingPlus size={24} />
      </IconButton>
    </form>
  );
}
