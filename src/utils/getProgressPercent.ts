export const getProgressPercent = (
  totalTasks: number,
  completedTasks: number
) => {
  return totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;
};
