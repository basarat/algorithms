/**
 * Searches for specific element in a given sorted array
 * @returns the index of the element (-1 if its not found)
 */
export function binarySearch(array: number[], element: number): number {
  return array.findIndex(x => x === element);
}
