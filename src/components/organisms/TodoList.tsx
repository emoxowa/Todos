import { TodoItem } from "components/molecules";
import { StyledEmpty, StyledList } from "./StyledTodoList";
import { getEmptyDescription } from 'utils';
import { FilterType, Todo } from 'hooks';

type Props = {
  todos: Todo[];
  onToggleTodo: (id: string) => void;
  onDeleteTodo: (id: string) => void;
  activeFilter: FilterType;
};

export const TodoList = ({
  todos,
  onToggleTodo,
  onDeleteTodo,
  activeFilter,
}: Props): JSX.Element => {

  return (
    <>
      {todos.length > 0 ? (
        <StyledList
          dataSource={todos}
          renderItem={(item) => (
            <TodoItem
              key={item.id}
              todo={item as Todo}
              onToggle={() => onToggleTodo(item.id)}
              onDelete={() => onDeleteTodo(item.id)}
            />
          )}
        ></StyledList>
      ) : (
        <StyledEmpty
          description={getEmptyDescription(activeFilter)}
          image="https://media.tenor.com/L4ncxhqryfQAAAAi/cat.gif"
        />
      )}
    </>
  );
};
