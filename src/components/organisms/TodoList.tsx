import { TodoItem } from "components/molecules";
import { StyledEmpty, StyledList } from "./StyledTodoList";
import { getEmptyDescription } from 'utils';
import { FilterType, Todo } from 'hooks';

type Props = {
  todos:  Todo[];
  onToggleTodo: (index: number) => void;
  onDeleteTodo: (index: number) => void;
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
          renderItem={(item, index) => (
            <TodoItem
              key={index}
              todo={item as Todo}
              onToggle={() => onToggleTodo(index)}
              onDelete={() => onDeleteTodo(index)}
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
