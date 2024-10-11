import { TaskInputForm, TodoFooter } from "components/molecules";
import { MainTemplate } from "components/templates/MainTemplate";
import { TodoList } from "components/organisms";
import { CatImage, Container, StyledProgress, StyledTitle } from "./StyledTodoPage";
import { Flex } from "antd";
import { AudioPlayer } from "components/molecules/AudioPlayer/AudioPlayer";
import { useFilter, useTodos } from "hooks";
import { useProgress } from "hooks/useProgress";

export const TodoPage = (): JSX.Element => {
  const {
    todos,
    newTodo,
    setNewTodo,
    addTodo,
    toggleTodo,
    deleteTodo,
    clearCompleted,
    showCat,
  } = useTodos();

  const { filteredTodos, filter, setFilter } = useFilter(todos);

  const { progressPercent } = useProgress(todos);

  return (
    <MainTemplate>
      <Container>
        <Flex gap={20} align="center" style={{ marginBottom: "20px" }}>
          <StyledTitle>Todos</StyledTitle>
          <AudioPlayer />
        </Flex>

        <TaskInputForm
          value={newTodo}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setNewTodo(e.target.value)
          }
          onAddTask={addTodo}
        />

        <StyledProgress percent={Math.round(progressPercent)} />

        <TodoList
          todos={filteredTodos}
          onToggleTodo={toggleTodo}
          onDeleteTodo={deleteTodo}
          activeFilter={filter}
        />

        <TodoFooter
          activeFilter={filter}
          setActiveFilter={setFilter}
          clearCompleted={clearCompleted}
          remainingCount={todos.filter((todo) => !todo.completed).length}
        />

        {showCat && (
          <CatImage
            src="https://media.tenor.com/URQcWYKN3ZoAAAAi/cat.gif"
            alt="Cat"
          />
        )}
      </Container>
    </MainTemplate>
  );
};
