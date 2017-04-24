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

  const pivotIndex = lowIndex + Math.floor((Math.random() * length));
  [array[lowIndex], array[pivotIndex]] = [array[pivotIndex], array[lowIndex]];

  let pivotRank = lowIndex;
  const pivot = array[lowIndex];
  for (let index = lowIndex + 1; index < highIndex; index++) {
    if (array[index] < pivot) {
      [array[index], array[pivotRank]] = [array[pivotRank], array[index]];
      pivotRank++;
    }
  }
  [array[pivotRank], array[lowIndex]] = [array[lowIndex], array[pivotRank]];


  partition(array, lowIndex, pivotRank);
  partition(array, pivotRank + 1, highIndex);
}

console.log(quickSort([4, 3, 2, 1]));
