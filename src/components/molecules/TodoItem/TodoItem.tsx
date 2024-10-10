import { Button, Checkbox } from 'components/atoms';
import React from "react";
import styled from "styled-components";

const ItemText = styled.span<{ completed: boolean }>`
  text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
`;

export const TodoItem: React.FC<{
  todo: { text: string; completed: boolean };
  onToggle: () => void;
  onDelete: () => void;
}> = ({ todo, onToggle, onDelete }) => (
  <li>
    <Checkbox checked={todo.completed} onChange={onToggle} />
    <ItemText completed={todo.completed}>{todo.text}</ItemText>
    <Button onClick={onDelete}>X</Button>
  </li>
);
