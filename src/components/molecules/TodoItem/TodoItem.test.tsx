import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { TodoItem } from "./TodoItem";
import { Todo } from "hooks";

describe("TodoItem component", () => {
  const todo: Todo = {
    id: "1",
    text: "Test todo item",
    completed: false,
  };

  test("renders todo text correctly", () => {
    render(<TodoItem todo={todo} onToggle={() => {}} onDelete={() => {}} />);

    const todoText = screen.getByText("Test todo item");
    expect(todoText).toBeInTheDocument();
  });

  test("calls onToggle when checkbox is clicked", () => {
    const handleToggle = jest.fn();
    render(
      <TodoItem todo={todo} onToggle={handleToggle} onDelete={() => {}} />
    );

    const checkbox = screen.getByRole("checkbox");
    fireEvent.click(checkbox);

    expect(handleToggle).toHaveBeenCalledTimes(1);
  });

  test("calls onDelete when delete button is clicked", () => {
    const handleDelete = jest.fn();
    render(
      <TodoItem todo={todo} onToggle={() => {}} onDelete={handleDelete} />
    );

    const deleteButton = screen.getByRole("button");
    fireEvent.click(deleteButton);

    expect(handleDelete).toHaveBeenCalledTimes(1);
  });

  test("renders the correct checkbox state", () => {
    const incompleteTodo: Todo = { ...todo, completed: false };
    const { rerender } = render(
      <TodoItem todo={incompleteTodo} onToggle={() => {}} onDelete={() => {}} />
    );

    let checkbox = screen.getByRole("checkbox");
    expect(checkbox).not.toBeChecked();

    const completedTodo: Todo = { ...todo, completed: true };
    rerender(
      <TodoItem todo={completedTodo} onToggle={() => {}} onDelete={() => {}} />
    );

    checkbox = screen.getByRole("checkbox");
    expect(checkbox).toBeChecked();
  });
});
