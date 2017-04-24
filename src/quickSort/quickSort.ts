/**
 * Sorts an array using quick sort
 */
export function quickSort(array: number[]): number[] {
  array = array.slice();
  /** TODO: */
  array.sort();
  return array;
}

/**
 * Partions the [low - to - high] indexes of the array.
 */
function partition(array: number[], low: number, high: number) {
  const length = high - low;
  const pivot = Math.floor((Math.random() * length));

  /** TODO */
  /** Partition around the pivot so that [less]pivot[more] in the original array */

  /**
   * partition([less], less low, less high)
   * partition([more], more low, more high)
   */
  return array;
}
