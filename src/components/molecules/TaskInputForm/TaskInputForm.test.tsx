import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { TaskInputForm } from "./TaskInputForm";

jest.mock("components/atoms", () => ({
  Input: jest.fn(({ value, onChange, onEnter }) => (
    <input
      value={value}
      onChange={onChange}
      onKeyDown={(e) => e.key === "Enter" && onEnter()}
      placeholder="What needs to be done?"
    />
  )),
}));

jest.mock("antd", () => ({
  Button: jest.fn(({ onClick, children }) => (
    <button onClick={onClick}>{children}</button>
  )),
}));

describe("TaskInputForm component", () => {
  test("renders input and button correctly", () => {
    render(<TaskInputForm value="" onChange={() => {}} onAddTask={() => {}} />);

    const inputElement = screen.getByPlaceholderText("What needs to be done?");
    const buttonElement = screen.getByText("Add");

    expect(inputElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });

  test("calls onChange when input value changes", () => {
    const handleChange = jest.fn();
    render(
      <TaskInputForm value="" onChange={handleChange} onAddTask={() => {}} />
    );

    const inputElement = screen.getByPlaceholderText("What needs to be done?");
    fireEvent.change(inputElement, { target: { value: "New task" } });

    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  test("calls onAddTask when the button is clicked", () => {
    const handleAddTask = jest.fn();
    render(
      <TaskInputForm value="" onChange={() => {}} onAddTask={handleAddTask} />
    );

    const buttonElement = screen.getByText("Add");
    fireEvent.click(buttonElement);

    expect(handleAddTask).toHaveBeenCalledTimes(1);
  });

  test("calls onAddTask when Enter key is pressed in the input", () => {
    const handleAddTask = jest.fn();
    render(
      <TaskInputForm value="" onChange={() => {}} onAddTask={handleAddTask} />
    );

    const inputElement = screen.getByPlaceholderText("What needs to be done?");
    fireEvent.keyDown(inputElement, { key: "Enter", code: "Enter" });

    expect(handleAddTask).toHaveBeenCalledTimes(1);
  });
});
