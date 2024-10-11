import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { Input } from "./Input";

describe("Input component", () => {
  test("renders input with the correct placeholder", () => {
    render(<Input value="" onChange={() => {}} onEnter={() => {}} />);

    const inputElement = screen.getByPlaceholderText("What needs to be done?");

    expect(inputElement).toBeInTheDocument();
  });

  test("displays the correct value in the input", () => {
    render(<Input value="Test task" onChange={() => {}} onEnter={() => {}} />);

    const inputElement = screen.getByDisplayValue("Test task");

    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveValue("Test task");
  });

  test("calls onChange when the input value changes", () => {
    const handleChange = jest.fn();
    render(<Input value="" onChange={handleChange} onEnter={() => {}} />);

    const inputElement = screen.getByPlaceholderText("What needs to be done?");

    fireEvent.change(inputElement, { target: { value: "New task" } });

    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  test("calls onEnter when Enter key is pressed", () => {
    const handleEnter = jest.fn();
    render(<Input value="" onChange={() => {}} onEnter={handleEnter} />);

    const inputElement = screen.getByPlaceholderText("What needs to be done?");

    fireEvent.keyDown(inputElement, { key: "Enter", code: "Enter" });

    expect(handleEnter).toHaveBeenCalledTimes(1);
  });
});
