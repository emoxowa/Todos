import { FilterType } from 'hooks';
import { getEmptyDescription } from "./getEmptyDescription";

describe("getEmptyDescription", () => {
  test("should return message for active tasks filter", () => {
    const activeFilter: FilterType = "Active";
    const result = getEmptyDescription(activeFilter);
    expect(result).toBe(
      "Looks like you're all caught up! No active tasks at the moment."
    );
  });

  test("should return message for completed tasks filter", () => {
    const activeFilter: FilterType = "Completed";
    const result = getEmptyDescription(activeFilter);
    expect(result).toBe(
      "No completed tasks yet! Time to check some items off your list."
    );
  });

  test("should return default message for all other filters", () => {
    const activeFilter: FilterType = "All";
    const result = getEmptyDescription(activeFilter);
    expect(result).toBe(
      "Your to-do list is empty... for now. Time to add some tasks and become a productivity ninja!"
    );
  });
});
