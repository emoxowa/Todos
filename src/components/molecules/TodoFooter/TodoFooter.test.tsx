import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { TodoFooter } from "./TodoFooter";
import { useModal } from "../../../hooks";

jest.mock("../../../hooks", () => ({
  useModal: jest.fn(),
}));

describe("TodoFooter component", () => {
  const setActiveFilter = jest.fn();
  const clearCompleted = jest.fn();

  beforeEach(() => {
    (useModal as jest.Mock).mockReturnValue({
      isModalOpen: false,
      showModal: jest.fn(),
      handleOk: jest.fn(),
      handleCancel: jest.fn(),
    });
  });

  test("renders the correct remaining tasks count", () => {
    render(
      <TodoFooter
        activeFilter="All"
        setActiveFilter={setActiveFilter}
        clearCompleted={clearCompleted}
        remainingCount={3}
      />
    );

    const taskCount = screen.getByText("3 items left");
    expect(taskCount).toBeInTheDocument();
  });

  test("calls setActiveFilter when filter is changed", () => {
    render(
      <TodoFooter
        activeFilter="All"
        setActiveFilter={setActiveFilter}
        clearCompleted={clearCompleted}
        remainingCount={3}
      />
    );

    const segmentedControl = screen.getByRole("radio", { name: /Active/i });
    fireEvent.click(segmentedControl);

    expect(setActiveFilter).toHaveBeenCalledWith("Active");
  });

  test('opens modal when "Clear completed" button is clicked', () => {
    const showModal = jest.fn();
    (useModal as jest.Mock).mockReturnValue({
      isModalOpen: false,
      showModal,
      handleOk: jest.fn(),
      handleCancel: jest.fn(),
    });

    render(
      <TodoFooter
        activeFilter="All"
        setActiveFilter={setActiveFilter}
        clearCompleted={clearCompleted}
        remainingCount={3}
      />
    );

    const clearButton = screen.getByText("Clear completed");
    fireEvent.click(clearButton);

    expect(showModal).toHaveBeenCalled();
  });

  test("calls handleOk and handleCancel when modal actions are triggered", () => {
    const handleOk = jest.fn();
    const handleCancel = jest.fn();

    (useModal as jest.Mock).mockReturnValue({
      isModalOpen: true,
      showModal: jest.fn(),
      handleOk,
      handleCancel,
    });

    render(
      <TodoFooter
        activeFilter="All"
        setActiveFilter={setActiveFilter}
        clearCompleted={clearCompleted}
        remainingCount={3}
      />
    );

    const modalOkButton = screen.getByText("Yes, clear");
    fireEvent.click(modalOkButton);
    expect(handleOk).toHaveBeenCalled();

    const modalCancelButton = screen.getByText("No, cancel");
    fireEvent.click(modalCancelButton);
    expect(handleCancel).toHaveBeenCalled();
  });
});
