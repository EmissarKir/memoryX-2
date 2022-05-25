export function limitStr(str: string, n: number) {
  const symb = "...";

  if (!n || str.length < 50) return str;
  return str.substr(0, n - symb.length) + symb;
}
