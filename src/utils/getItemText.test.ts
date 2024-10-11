import { getItemText } from "./getItemText";

describe("getItemText", () => {
  test('should return "No items left" when count is 0', () => {
    const result = getItemText(0);
    expect(result).toBe("No items left");
  });

  test('should return "1 item left" when count is 1', () => {
    const result = getItemText(1);
    expect(result).toBe("1 item left");
  });

  test("should return correct text when count is greater than 1", () => {
    const result = getItemText(2);
    expect(result).toBe("2 items left");
  });

  test("should return correct text when count is a large number", () => {
    const result = getItemText(100);
    expect(result).toBe("100 items left");
  });
});
