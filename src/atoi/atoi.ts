/**
 * Converts a string to a integer
 */
export function atoi(str: string): number {
  let sign = 1;
  if (str[0] === '-') {
    str = str.substring(1);
    sign = -1;
  }

  const zeroCode = '0'.charCodeAt(0);

  let result = 0;
  for (const char of str) {
    result = result * 10 + (char.charCodeAt(0) - zeroCode);
  }
  return sign * result;
}
