import { useState } from "react";

export type Todo = { text: string; completed: boolean };

export const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([
    { text: "Покормить кота", completed: false },
    { text: "Помыть лоток", completed: false },
    { text: "Сделать тестовое задание", completed: true },
  ]);

  const [newTodo, setNewTodo] = useState("");
  const [showCat, setShowCat] = useState(false);

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, { text: newTodo, completed: false }]);
      setNewTodo("");
    }
  };

  const toggleTodo = (index: number) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);

    if (!todos[index].completed) {
      setShowCat(true);
      setTimeout(() => {
        setShowCat(false);
      }, 1000);
    }
  };

  const deleteTodo = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
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
