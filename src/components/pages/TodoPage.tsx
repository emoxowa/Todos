import React, { useState } from "react";
import { TaskInputForm } from 'components/molecules';
import { MainTemplate } from 'components/templates';
import { TodoList } from 'components/organisms';

export const TodoPage = (): JSX.Element => {
  const [todos, setTodos] = useState([
    { text: "Тестовое задание", completed: false },
  ]);
  const [newTodo, setNewTodo] = useState("");

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
  };

  const deleteTodo = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <MainTemplate>
      <h1>Todos</h1>
      <TaskInputForm
        value={newTodo}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setNewTodo(e.target.value)
        }
        onAddTask={addTodo}
      />
      <TodoList
        todos={todos}
        onToggleTodo={toggleTodo}
        onDeleteTodo={deleteTodo}
      />
    </MainTemplate>
  );
};
