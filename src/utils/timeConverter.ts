export function timeConverter(timestamp: number, count?: number): string {
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
  function addZero(num: number) {
    return num < 10 ? `0${num}` : num;
  }

  const year = a.getFullYear();
  const month = months[a.getMonth()];
  const date = a.getDate();
  const hour = addZero(a.getHours());
  const min = addZero(a.getMinutes());
  const sec = addZero(a.getSeconds());

  const timeWithoutHours = `${date} ${month} ${year}`;
  const timeOnlyHours = `${hour} ${min} ${sec}`;
  const fullTime = `${timeWithoutHours} ${timeOnlyHours} `;

  return count === 1
    ? timeWithoutHours
    : count === 2
    ? timeOnlyHours
    : fullTime;
}
