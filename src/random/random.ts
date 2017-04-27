/**
 * Returns a random int between
 * @param start inclusive
 * @param before exclusive
 */
export function randomInt(start: number, before: number) {
  return start + Math.floor(Math.random() * (before - start));
}
