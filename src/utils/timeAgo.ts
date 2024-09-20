import { formatDistanceToNow } from "date-fns";

export const timeAgo = (inputDate: string | Date) => {
  const date = new Date(inputDate);

  return formatDistanceToNow(date, { addSuffix: true });
};
