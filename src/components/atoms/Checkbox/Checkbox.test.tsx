import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { Checkbox } from "./Checkbox";

describe("Checkbox component", () => {
  test("renders correctly", () => {
    render(<Checkbox checked={false} onChange={() => {}} />);
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toBeInTheDocument();
  });

  test("displays the correct checked state", () => {
    const { rerender } = render(
      <Checkbox checked={false} onChange={() => {}} />
    );

    let checkbox = screen.getByRole("checkbox");
    expect(checkbox).not.toBeChecked();

    rerender(<Checkbox checked={true} onChange={() => {}} />);
    checkbox = screen.getByRole("checkbox");
    expect(checkbox).toBeChecked();
  });

  test("calls onChange handler when clicked", () => {
    const handleChange = jest.fn();
    render(<Checkbox checked={false} onChange={handleChange} />);

    const checkbox = screen.getByRole("checkbox");

    fireEvent.click(checkbox);

    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
