import { useState } from "react";
import { Todo } from "./useTodos";

export type FilterType = "All" | "Active" | "Completed";
export const useFilter = (todos: Todo[]) => {
  const [filter, setFilter] = useState<FilterType>("All");

  const filteredTodos = todos.filter((todo) => {
    if (filter === "All") return true;
    if (filter === "Active") return !todo.completed;
    if (filter === "Completed") return todo.completed;
    return true;
  });

  return {
    filteredTodos,
    filter,
    setFilter,
  };
};
