/**
 * Converts a string to a integer
 * e.g. "123" => 123
 */
export function atoi(str: string): number {
  const zeroCode = '0'.charCodeAt(0);

  let sign = 1;
  if (str[0] === '-') {
    str = str.substring(1);
    sign = -1;
  }

  let acc = 0;
  for (const char of str) {
    acc = acc * 10 + (char.charCodeAt(0) - zeroCode);
  }

  return sign * acc;
}
