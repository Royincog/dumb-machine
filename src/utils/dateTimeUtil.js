import { format } from "date-fns";

export function formatDate(firebaseTimestamp) {
  const date = new Date(firebaseTimestamp.seconds * 1000);
  const formatDay = (date) => {
    const day = format(date, "d");
    const ordinal =
      day % 10 === 1 && day !== "11"
        ? "st"
        : day % 10 === 2 && day !== "12"
        ? "nd"
        : day % 10 === 3 && day !== "13"
        ? "rd"
        : "th";
    return `${day}${ordinal}`;
  };

  const formattedDate = `${formatDay(date)} ${format(date, "MMMM yyyy")}`;
  return formattedDate;
}
