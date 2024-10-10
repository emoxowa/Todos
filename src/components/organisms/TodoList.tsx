import { TodoItem } from "components/molecules";
import { StyledEmpty, StyledList } from "./StyledTodoList";

type Props = {
  todos: { text: string; completed: boolean }[];
  onToggleTodo: (index: number) => void;
  onDeleteTodo: (index: number) => void;
  activeFilter: "All" | "Active" | "Completed";
};

export const TodoList = ({
  todos,
  onToggleTodo,
  onDeleteTodo,
  activeFilter,
}: Props): JSX.Element => {
  const getEmptyDescription = () => {
    if (activeFilter === "Active") {
      return "Looks like you're all caught up! No active tasks at the moment.";
    } else if (activeFilter === "Completed") {
      return "No completed tasks yet! Time to check some items off your list.";
    }
    return "Your to-do list is empty... for now. Time to add some tasks and become a productivity ninja!";
  };

  return (
    <>
      {todos.length > 0 ? (
        <StyledList
          dataSource={todos}
          renderItem={(item, index) => (
            <TodoItem
              key={index}
              todo={item}
              onToggle={() => onToggleTodo(index)}
              onDelete={() => onDeleteTodo(index)}
            />
          )}
        ></StyledList>
      ) : (
        <StyledEmpty
          description={getEmptyDescription()}
          image="https://media.tenor.com/L4ncxhqryfQAAAAi/cat.gif"
        />
      )}
    </>
  );
};
