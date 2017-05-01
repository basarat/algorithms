/**
 * Sorts an array using quick sort
 */
export function quickSort(array: number[]): number[] {
  array = array.slice();
  partition(array, 0, array.length);
  return array;
}

/**
 * Partitions the [start, before) index of the array
 */
function partition(array: number[], start: number, before: number): void {
  const length = before - start;

  /** Terminate the recursion */
  if (length <= 1) return;

  /** Randomly select a pivot and move it to the head of the array */
  const pivotIndex = start + Math.floor(Math.random() * length);
  [array[start], array[pivotIndex]] = [array[pivotIndex], array[start]];

  /** The first element is our pivot */
  const pivot = array[start];
  let pivotRank = start;

  /** Loop through all the elements, partitioning around the pivot */
  for (let index = start + 1; index < before; index++) {
    if (array[index] < pivot) {
      pivotRank++;
      [array[index], array[pivotRank]] = [array[pivotRank], array[index]];
    }
  }

  /** Finally put the pivot at its rightfull place */
  if (pivotRank !== start) {
    [array[pivotRank], array[start]] = [array[start], array[pivotRank]];
  }

  /** Partition all the elements less than the pivot */
  partition(array, start, pivotRank);

  /** Partition all the elements more than the pivot */
  partition(array, pivotRank + 1, before);
}
