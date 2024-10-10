import { useState } from "react";
import { TaskInputForm, TodoFooter } from "components/molecules";
import { MainTemplate } from "components/templates";
import { TodoList } from "components/organisms";
import { CatImage, Container } from "./StyledTodoPage";
import { Progress } from 'antd';

export const TodoPage = (): JSX.Element => {
  const [todos, setTodos] = useState([
    { text: "Тестовое задание", completed: false },
    { text: "Прекрасный код", completed: true },
    { text: "Покрытие тестами", completed: false },
  ]);
  const [newTodo, setNewTodo] = useState("");
  const [filter, setFilter] = useState<"All" | "Active" | "Completed">("All");
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

  const filteredTodos = todos.filter((todo) => {
    if (filter === "All") return true;
    if (filter === "Active") return !todo.completed;
    if (filter === "Completed") return todo.completed;
    return true;
  });

  const remainingCount = todos.filter((todo) => !todo.completed).length;

  const completedTasks = todos.filter((todo) => todo.completed).length;
  const totalTasks = todos.length;
  const progressPercent =
    totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;

  return (
    <MainTemplate>
      <Container>
        <h1>Todos</h1>

        <TaskInputForm
          value={newTodo}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setNewTodo(e.target.value)
          }
          onAddTask={addTodo}
        />

        <Progress
          percent={Math.round(progressPercent)}
          style={{ width: "500px", margin: "10px 0" }}
        />

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
          remainingCount={remainingCount}
        />

        {showCat && (
          <CatImage
            src="https://media.tenor.com/URQcWYKN3ZoAAAAi/cat.gif"
            alt="Celebration Cat"
          />
        )}
      </Container>
    </MainTemplate>
  );
};
