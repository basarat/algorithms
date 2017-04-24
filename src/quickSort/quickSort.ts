/**
 * Sorts an array using quick sort
 */
export function quickSort(array: number[]): number[] {
  array = array.slice();
  partition(array, 0, array.length);
  return array;
}

/**
 * Partions the [low - to - high] indexes of the array.
 */
function partition(array: number[], lowIndex: number, highIndex: number): void {
  const length = highIndex - lowIndex;
  if (length <= 1) return;

  /** Randomly select a pivot and move it to the head of the array */
  const pivotIndex = lowIndex + Math.floor((Math.random() * length));
  [array[lowIndex], array[pivotIndex]] = [array[pivotIndex], array[lowIndex]];

  /** The first element is our pivot */
  let pivotRank = lowIndex;
  const pivot = array[lowIndex];

  /** Loop through all the elements, partitioning around the pivot */
  for (let index = lowIndex + 1; index < highIndex; index++) {
    if (array[index] < pivot) {
      pivotRank++;
      [array[index], array[pivotRank]] = [array[pivotRank], array[index]];
    }
  }

  /** Finally put the pivot at its rightfull place */
  [array[pivotRank], array[lowIndex]] = [array[lowIndex], array[pivotRank]];

  /** Partition all the elements less than the pivot */
  partition(array, lowIndex, pivotRank);

  /** Partition all the elements more than the pivot */
  partition(array, pivotRank + 1, highIndex);
}
