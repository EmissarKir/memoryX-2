export const getNoun = (
  number: number,
  one: string,
  two: string,
  five: string
) => {
  let n = Math.abs(number);
  n %= 100;
  if (n >= 5 && n <= 20) {
    return five;
  }
  n %= 10;
  if (n === 1) {
    return one;
  }
  if (n >= 2 && n <= 4) {
    return two;
  }
  return five;
};
export const getTimesOfDay = (timestamp: number) => {
  const hour = new Date(timestamp).getHours();
  switch (true) {
    case hour >= 5 && hour < 11:
      return "Доброе утро";
    case hour >= 11 && hour < 16:
      return "Добрый день";
    case hour >= 16 && hour < 23:
      return "Добрый вечер";
    default:
      return "Доброй ночи";
  }
};
