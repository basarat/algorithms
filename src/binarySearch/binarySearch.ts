/**
 * Searches for specific element in a given sorted array
 * @returns the index of the element (-1 if its not found)
 */
export function binarySearch(
  array: number[],
  element: number,
  start = 0,
  end = array.length - 1,
): number {
  if (end < start) return -1;
  const middle = Math.floor((start + end) / 2);
  return element === array[middle]
    ? middle
    : element < array[middle]
      ? binarySearch(array, element, start, middle - 1)
      : binarySearch(array, element, middle + 1, end);
}
