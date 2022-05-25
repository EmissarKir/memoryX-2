export function timeConverter(timestamp: number, count?: number) {
  const a = new Date(timestamp);
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const year = a.getFullYear();
  const month = months[a.getMonth()];
  const date = a.getDate();
  const hour = a.getHours();
  const min = a.getMinutes();
  const sec = a.getSeconds();

  const fullTime =
    date + " " + month + " " + year + " " + hour + ":" + min + ":" + sec;
  const timeWithoutHours = date + " " + month + " " + year;
  const timeOnlyHours = hour + ":" + min + ":" + sec;

  return count === 1
    ? timeWithoutHours
    : count === 2
    ? timeOnlyHours
    : fullTime;
}
