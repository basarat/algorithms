/**
 * Searches for specific element in a given sorted array
 * @returns the index of the element
 */
export function binarySearch(array: number[], element: number): number {
  for (let index = 0; index < array.length; index++) {
    if (array[index] === element) return index;
  }
  return -1;
}
