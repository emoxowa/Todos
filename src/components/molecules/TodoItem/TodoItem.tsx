import { Button, Checkbox } from 'components/atoms';
import { ItemText } from './StyledTodoItem';

type Props = {
  todo: { text: string; completed: boolean };
  onToggle: () => void;
  onDelete: () => void;
};

export const TodoItem = ({ todo, onToggle, onDelete }: Props): JSX.Element => (
  <li>
    <Checkbox checked={todo.completed} onChange={onToggle} />
    <ItemText completed={todo.completed}>{todo.text}</ItemText>
    <Button onClick={onDelete}>X</Button>
  </li>
);
