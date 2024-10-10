export const getItemText = (count: number): string => {
  if (count === 0) return "No items left";
  return `${count} ${count === 1 ? "item" : "items"} left`;
};
