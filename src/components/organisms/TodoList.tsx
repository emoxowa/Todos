
import { TodoItem } from 'components/molecules';

type Props = {
  todos: { text: string; completed: boolean }[];
  onToggleTodo: (index: number) => void;
  onDeleteTodo: (index: number) => void;
};


export const TodoList= ({ todos, onToggleTodo, onDeleteTodo }: Props): JSX.Element => (
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
