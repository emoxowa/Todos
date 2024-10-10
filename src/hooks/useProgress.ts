import { Todo } from "./useTodos";
import { getProgressPercent } from "utils/getProgressPercent";

export const useProgress = (todos: Todo[]) => {
  const completedTasks = todos.filter((todo) => todo.completed).length;
  const totalTasks = todos.length;
  const progressPercent = getProgressPercent(totalTasks, completedTasks);

  return {
    progressPercent,
    completedTasks,
    totalTasks,
  };
};
