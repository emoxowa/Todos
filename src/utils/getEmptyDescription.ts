import { FilterType } from 'hooks';

export const getEmptyDescription = (activeFilter: FilterType): string => {
  if (activeFilter === "Active") {
    return "Looks like you're all caught up! No active tasks at the moment.";
  } else if (activeFilter === "Completed") {
    return "No completed tasks yet! Time to check some items off your list.";
  }
  return "Your to-do list is empty... for now. Time to add some tasks and become a productivity ninja!";
};
