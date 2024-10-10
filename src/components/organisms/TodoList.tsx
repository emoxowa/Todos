
import { TodoItem } from 'components/molecules';
import React from "react";

export const TodoList: React.FC<{
  todos: { text: string; completed: boolean }[];
  onToggleTodo: (index: number) => void;
  onDeleteTodo: (index: number) => void;
}> = ({ todos, onToggleTodo, onDeleteTodo }) => (
  <ul>
    {todos.map((todo, index) => (
      <TodoItem
        key={index}
        todo={todo}
        onToggle={() => onToggleTodo(index)}
        onDelete={() => onDeleteTodo(index)}
      />
    ))}
  </ul>
);
