import { getProgressPercent } from "./getProgressPercent";

describe("getProgressPercent", () => {
  test("should return correct percentage when some tasks are completed", () => {
    const totalTasks = 10;
    const completedTasks = 4;
    const result = getProgressPercent(totalTasks, completedTasks);
    expect(result).toBe(40);
  });

  test("should return 100% when all tasks are completed", () => {
    const totalTasks = 5;
    const completedTasks = 5;
    const result = getProgressPercent(totalTasks, completedTasks);
    expect(result).toBe(100);
  });

  test("should return 0% when no tasks are completed", () => {
    const totalTasks = 10;
    const completedTasks = 0;
    const result = getProgressPercent(totalTasks, completedTasks);
    expect(result).toBe(0);
  });

  test("should return 0% when totalTasks is 0", () => {
    const totalTasks = 0;
    const completedTasks = 0;
    const result = getProgressPercent(totalTasks, completedTasks);
    expect(result).toBe(0);
  });

  test("should return correct percentage with decimal result", () => {
    const totalTasks = 3;
    const completedTasks = 1;
    const result = getProgressPercent(totalTasks, completedTasks);
    expect(result).toBeCloseTo(33.33, 1);
  });
});
