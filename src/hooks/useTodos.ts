import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export type Todo = { id: string; text: string; completed: boolean };

export const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([
    { id: uuidv4(), text: "Покормить кота", completed: false },
    { id: uuidv4(), text: "Помыть лоток", completed: false },
    { id: uuidv4(), text: "Сделать тестовое задание", completed: true },
  ]);

  const [newTodo, setNewTodo] = useState("");
  const [showCat, setShowCat] = useState(false);

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, { id: uuidv4(), text: newTodo, completed: false }]);
      setNewTodo("");
    }
  };

  const toggleTodo = (id: string) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);

    const toggledTodo = updatedTodos.find((todo) => todo.id === id);
    if (toggledTodo && !toggledTodo.completed) {
      setShowCat(true);
      setTimeout(() => {
        setShowCat(false);
      }, 1000);
    }
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  return {
    todos,
    newTodo,
    setNewTodo,
    addTodo,
    toggleTodo,
    deleteTodo,
    clearCompleted,
    showCat,
  };
};
